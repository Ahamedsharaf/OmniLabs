import type { HTMLAttributes } from 'react';
import assets from '../site/assets.json';
type Props=HTMLAttributes<HTMLDivElement> & {image:keyof typeof assets;fit?:'cover'|'contain';positionId?:string;eager?:boolean};
export function Artwork({image,fit='cover',positionId,eager=false,...props}:Props) {
  const versions=assets[image];
  const source=versions.at(-1)!;
  return <div {...props} data-art-position={positionId}>
    <img className="artwork-image" style={{objectFit:fit}} src={source.src}
      srcSet={versions.map(v=>`${v.src} ${v.width}w`).join(', ')}
      sizes={image==='golden-gate' || image==='studio-conversation' || eager ? '100vw' : '(max-width:700px) 100vw, (max-width:1100px) 65vw, 50vw'}
      width={source.width} height={source.height} alt="" loading={eager?'eager':'lazy'} decoding="async" fetchPriority={eager?'high':undefined}/>
  </div>;
}
