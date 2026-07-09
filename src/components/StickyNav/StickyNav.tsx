import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { listing } from '../../data/listingData';
import './StickyNav.css';

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('photos');

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 620);
      const ids = ['location', 'reviews', 'amenities', 'photos'];
      const found = ids.find(id => { const el = document.getElementById(id); return el && el.getBoundingClientRect().top <= 150; });
      setActive(found || 'photos');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`sticky-nav ${visible ? 'visible' : ''}`} aria-hidden={!visible}>
      <div className="sticky-inner">
        <nav aria-label="Listing sections">
          <a className={active === 'photos' ? 'active' : ''} href="#photos">Photos</a>
          <a className={active === 'amenities' ? 'active' : ''} href="#amenities">Amenities</a>
          <a className={active === 'reviews' ? 'active' : ''} href="#reviews">Reviews</a>
          <a className={active === 'location' ? 'active' : ''} href="#location">Location</a>
        </nav>

        <div className="sticky-booking">
          <div>
            <div><strong>₹{listing.price.toLocaleString('en-IN')}</strong> for {listing.nights} nights</div>
            <small><Star size={11} fill="currentColor" /> {listing.rating} · {listing.reviews} reviews</small>
          </div>
          <button type="button">Reserve</button>
        </div>
      </div>
    </div>
  );
}
