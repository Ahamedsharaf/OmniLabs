import type { HTMLAttributes } from 'react';
import assets from '../site/assets.json';

export type ArtworkName = keyof typeof assets;
type PictureSource = { image: ArtworkName; media: string; sizes: string };
type Props = HTMLAttributes<HTMLDivElement> & {
  image: ArtworkName;
  fit?: 'cover' | 'contain';
  positionId?: string;
  eager?: boolean;
  sizes?: string;
  sources?: PictureSource[];
};

function srcSet(image: ArtworkName) {
  return assets[image].map(version => `${version.src} ${version.width}w`).join(', ');
}

export function Artwork({
  image, positionId, className, fit = 'cover', eager = false,
  sizes = '(max-width: 700px) 100vw, 50vw', sources, ...props
}: Props) {
  const source = assets[image].at(-1)!;
  const picture = (
    <img className="artwork-image" style={{ objectFit: fit }} src={source.src}
      srcSet={srcSet(image)} sizes={sizes} width={source.width} height={source.height}
      alt="" loading={eager ? 'eager' : 'lazy'} decoding="async"
      fetchPriority={eager ? 'high' : undefined} />
  );

  return (
    <div {...props} className={className ? `artwork-frame ${className}` : 'artwork-frame'}
      data-art-position={positionId}>
      {sources?.length ? (
        <picture>
          {sources.map(source => (
            <source key={source.media} media={source.media} srcSet={srcSet(source.image)} sizes={source.sizes} />
          ))}
          {picture}
        </picture>
      ) : picture}
    </div>
  );
}
