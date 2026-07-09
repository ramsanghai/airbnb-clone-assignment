import { Grid3X3, Heart, Share } from 'lucide-react';
import { listing, photos } from '../../data/listingData';
import './HeroGallery.css';

type Props = {
  onOpenTour: () => void;
  onOpenPhoto: (index: number) => void;
};

export default function HeroGallery({
  onOpenTour,
  onOpenPhoto,
}: Props) {
  const heroImages = [
    '/images/img 1.jpeg',
    '/images/img 2.jpeg',
    '/images/img 3.jpeg',
    '/images/img 4.jpeg',
    '/images/img 5.jpeg',
  ];

  return (
    <>
      <section className="listing-heading" id="photos">
        <h1>{listing.title}</h1>

        <div className="heading-actions">
          <button type="button">
            <Share size={16} />
            <span>Share</span>
          </button>

          <button type="button">
            <Heart size={16} />
            <span>Save</span>
          </button>
        </div>
      </section>

      <section
        className="hero-gallery"
        aria-label="Photos of this place"
      >
        <div className="hero-grid">
          {photos.slice(0, 5).map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              className="hero-photo"
              onClick={() => onOpenPhoto(index)}
              aria-label={`Open ${photo.alt}`}
            >
              <img
                src={heroImages[index]}
                alt={photo.alt}
                className="hero-image"
              />
            </button>
          ))}
        </div>

        <button
          className="show-all"
          type="button"
          onClick={onOpenTour}
        >
          <Grid3X3 size={15} />
          Show all photos
        </button>
      </section>
    </>
  );
}