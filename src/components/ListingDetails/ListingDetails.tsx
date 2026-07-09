import { Star } from 'lucide-react';
import { listing } from '../../data/listingData';
import './ListingDetails.css';

export default function ListingDetails() {
  return (
    <div className="listing-details">
      <section className="property-summary">
        <h2>{listing.type} in {listing.location}</h2>
        <p>
          {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.bathrooms} bathroom
        </p>
      </section>

      <section className="guest-favourite">
        <div className="favourite-badge">Guest<br />favourite</div>
        <p>One of the most loved homes on Airbnb, according to guests</p>
        <div className="rating-box">
          <strong>{listing.rating}</strong>
          <span className="stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={10} fill="currentColor" />
            ))}
          </span>
        </div>
        <span className="rating-divider" />
        <div className="review-box">
          <strong>{listing.reviews}</strong>
          <span>Reviews</span>
        </div>
      </section>

      <section className="host-row">
        <div className="host-avatar">M</div>
        <div>
          <strong>Hosted by {listing.host}</strong>
          <p>Superhost · Hosting for 3 years</p>
        </div>
      </section>

      <section className="feature-list">
        <div>
          <span className="feature-icon">♨</span>
          <div>
            <strong>Relax in the hot tub</strong>
            <p>This is one of the few places in the area with this amenity.</p>
          </div>
        </div>
        <div>
          <span className="feature-icon">★</span>
          <div>
            <strong>Exceptional check-in experience</strong>
            <p>Recent guests gave the check-in process a 5-star rating.</p>
          </div>
        </div>
      </section>

      <section className="description">
        <p>
          Enjoy a comfortable stay in Candolim with a private, relaxing atmosphere.
          This section is intentionally simple so you can replace the wording with the
          exact reference content later.
        </p>
      </section>
    </div>
  );
}
