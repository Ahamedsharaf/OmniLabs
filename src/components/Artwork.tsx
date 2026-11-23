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
  alternate?: PictureSource;
};

function srcSet(image: ArtworkName) {
  return assets[image].map(version => `${version.src} ${version.width}w`).join(', ');
}

export function Artwork({
  image, positionId, className, fit = 'cover', eager = false,
  sizes = '(max-width: 700px) 100vw, 50vw', alternate, ...props
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
      {alternate ? (
        <picture>
          <source media={alternate.media} srcSet={srcSet(alternate.image)} sizes={alternate.sizes} />
          {picture}
        </picture>
      ) : picture}
    </div>
  );
}
