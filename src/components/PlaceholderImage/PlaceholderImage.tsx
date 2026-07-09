import type { CSSProperties } from 'react';
import './PlaceholderImage.css';

type Props = {
  src?: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
};

export default function PlaceholderImage({ src, alt, className = '', style }: Props) {
  if (src) {
    return <img className={className} src={src} alt={alt} style={style} />;
  }

  return (
    <div
      className={`image-placeholder ${className}`}
      style={style}
      role="img"
      aria-label={`${alt} placeholder`}
    >
      <span>Add image</span>
    </div>
  );
}
