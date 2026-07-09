import { ChevronLeft, ChevronRight, Grid3X3, X } from 'lucide-react';
import { useEffect } from 'react';
import { photos } from '../../data/listingData';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import './Lightbox.css';

type Props = {
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
  onShowAll: () => void;
};

export default function Lightbox({ index, onChange, onClose, onShowAll }: Props) {
  const previous = () => {
    if (index > 0) onChange(index - 1);
  };

  const next = () => {
    if (index < photos.length - 1) onChange(index + 1);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && index > 0) onChange(index - 1);
      if (event.key === 'ArrowRight' && index < photos.length - 1) onChange(index + 1);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index, onChange, onClose]);

  const photo = photos[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
      <header className="lightbox-header">
        <button type="button" onClick={onShowAll} aria-label="Show all photos">
          <Grid3X3 size={19} />
        </button>

        <div className="lightbox-title">{photo.room}</div>

        <div className="lightbox-right">
          <span>{index + 1} / {photos.length}</span>
          <button type="button" onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>
      </header>

      <button
        className="lightbox-arrow left"
        type="button"
        onClick={previous}
        disabled={index === 0}
        aria-label="Previous"
      >
        <ChevronLeft size={30} />
      </button>

      <div className="lightbox-stage">
        <PlaceholderImage src={photo.src} alt={photo.alt} />
      </div>

      <button
        className="lightbox-arrow right"
        type="button"
        onClick={next}
        disabled={index === photos.length - 1}
        aria-label="Next"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
