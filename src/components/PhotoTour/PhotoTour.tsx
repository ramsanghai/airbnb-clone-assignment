import { ArrowLeft, Heart, Share } from 'lucide-react';
import { photos, rooms } from '../../data/listingData';
import './PhotoTour.css';

type Props = {
  onClose: () => void;
  onOpenPhoto: (index: number) => void;
};

export default function PhotoTour({ onClose, onOpenPhoto }: Props) {
  const tourImages = [
    '/images/img-1.jpeg',
    '/images/img-20.jpeg',
    '/images/img 7.jpeg',
    '/images/img-2.jpeg',
    '/images/img-11.jpeg',
    '/images/img-12.jpeg',
    '/images/img-10.jpeg',
    '/images/img-17.jpeg',
    '/images/img-18.jpeg',
    '/images/img-19.jpeg',
    '/images/img-3.jpeg',
    '/images/img-13.jpeg',
    '/images/img-4.jpeg',
    '/images/img-14.jpeg',
    '/images/img-5.jpeg',
    '/images/img-6.jpeg',
    '/images/img-7.jpeg',
    '/images/img-8.jpeg',
    '/images/img-9.jpeg',
    '/images/img-10.jpeg',  
  ];

  const scrollToRoom = (index: number) => {
    document.getElementById(`room-${index}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div
      className="photo-tour"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      <header className="tour-header">
        <button type="button" onClick={onClose} aria-label="Back">
          <ArrowLeft size={22} />
        </button>

        <h2>Photo tour</h2>

        <div>
          <button type="button" aria-label="Share">
            <Share size={20} />
          </button>

          <button type="button" aria-label="Save">
            <Heart size={20} />
          </button>
        </div>
      </header>

      <div className="tour-scroll">
        <div className="tour-content">

          <nav
            className="tour-categories"
            aria-label="Photo categories"
          >
            {rooms.map((room, index) => (
              <button
                key={room.name}
                type="button"
                onClick={() => scrollToRoom(index)}
              >
                <img
                  src={tourImages[room.photoIds[0]]}
                  alt={room.name}
                  className="tour-category-image"
                />

                <span>{room.name}</span>
              </button>
            ))}
          </nav>

          <div className="tour-rooms">
            {rooms.map((room, roomIndex) => (
              <section
                className="tour-room"
                id={`room-${roomIndex}`}
                key={room.name}
              >
                <div className="room-heading">
                  <h3>{room.name}</h3>
                  <p>{room.details}</p>
                </div>

                <div className="room-grid">
                  {room.photoIds.map((photoId, index) => {
                    const photo = photos.find(
                      (item) => item.id === photoId
                    )!;

                    return (
                      <button
                        key={photoId}
                        className={
                          index % 3 === 0
                            ? 'wide-photo'
                            : ''
                        }
                        type="button"
                        onClick={() => onOpenPhoto(photoId)}
                      >
                        <img
                          src={tourImages[photoId]}
                          alt={photo.alt}
                          className="tour-room-image"
                        />
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}