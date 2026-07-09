import { Dumbbell, Flame, ParkingCircle, Tv, Waves, Wifi } from 'lucide-react';
import { amenities } from '../../data/listingData';
import './Amenities.css';

type Props = {
  onOpen: () => void;
};

const icons = [Flame, Waves, Wifi, ParkingCircle, Tv, Dumbbell];

export default function Amenities({ onOpen }: Props) {
  return (
    <section className="amenities-section" id="amenities">
      <h2>What this place offers</h2>

      <div className="amenities-grid">
        {amenities.slice(0, 6).map((item, index) => {
          const Icon = icons[index] ?? Wifi;
          return (
            <div key={item} className="amenity-row">
              <Icon size={24} strokeWidth={1.8} />
              <span>{item}</span>
            </div>
          );
        })}
      </div>

      <button className="amenities-button" type="button" onClick={onOpen}>
        Show all {amenities.length} amenities
      </button>
    </section>
  );
}
