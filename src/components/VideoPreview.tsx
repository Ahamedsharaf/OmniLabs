import type { HTMLAttributes, ReactNode } from 'react';
import { useSite, type MediaItem } from '../site/runtime';
export function VideoPreview({item,children,...props}:HTMLAttributes<HTMLButtonElement>&{item:MediaItem;children:ReactNode}) {
  const site=useSite();
  return <button {...props} role={undefined} type="button" aria-label={`Preview ${item.title} — poster only`} onClick={e=>site.open({kind:'media',item},e.currentTarget)}>{children}</button>;
}
