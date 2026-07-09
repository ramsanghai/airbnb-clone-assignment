import { X } from 'lucide-react';
import { amenities } from '../../data/listingData';
import './AmenitiesModal.css';

type Props = {
  onClose: () => void;
};

export default function AmenitiesModal({ onClose }: Props) {
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="amenities-modal"
        role="dialog"
        aria-modal="true"
        aria-label="What this place offers"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="amenities-modal-body">
          <h2>What this place offers</h2>

          <section>
            <h3>Popular amenities</h3>
            {amenities.map((item) => (
              <div className="modal-amenity" key={item}>
                <span className="modal-amenity-icon">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
