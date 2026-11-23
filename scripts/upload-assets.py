"""Upload the built assets with a short-lived Cloudflare upload session.

Session and completion files are gitignored. The connected account creates
the session and publishes the resulting version; no account API key is needed.
"""
import base64
import json
import mimetypes
from pathlib import Path
import urllib.request
import uuid

session = json.loads(Path('.deploy/session.json').read_text())
manifest = json.loads(Path('.deploy/manifest.json').read_text())
by_hash = {entry['hash']: name for name, entry in manifest.items()}
completion = session['jwt'] if not session['buckets'] else None
for index, bucket in enumerate(session['buckets']):
    boundary = 'OmniUpload' + uuid.uuid4().hex
    parts = []
    for digest in bucket:
        filename = by_hash[digest]
        data = (Path('dist') / filename.lstrip('/')).read_bytes()
        content_type = mimetypes.guess_type(filename)[0] or 'application/octet-stream'
        header = f'--{boundary}\r\nContent-Disposition: form-data; name="{digest}"; filename="{Path(filename).name}"\r\nContent-Type: {content_type}\r\n\r\n'
        parts.extend([header.encode(), base64.b64encode(data), b'\r\n'])
    parts.append(f'--{boundary}--\r\n'.encode())
    request = urllib.request.Request(
        'https://api.cloudflare.com/client/v4/accounts/245d47896c915ebccfc868f98fa43fe6/workers/assets/upload?base64=true',
        data=b''.join(parts), method='POST',
        headers={'Authorization': 'Bearer ' + session['jwt'], 'Content-Type': 'multipart/form-data; boundary=' + boundary},
    )
    with urllib.request.urlopen(request, timeout=60) as response:
        result = json.load(response)
    if not result.get('success'):
        raise RuntimeError('Asset upload was not accepted')
    completion = result.get('result', {}).get('jwt') or completion
    print(f'Uploaded asset group {index + 1}/{len(session["buckets"])}', flush=True)
if not completion:
    raise RuntimeError('Cloudflare did not issue an upload completion token')
Path('.deploy/completion.json').write_text(json.dumps({'jwt': completion}))
Path('.deploy/session.json').unlink()
print('Asset upload complete; ready to attach the asset set.', flush=True)
