import { Star } from 'lucide-react';
import { listing } from '../../data/listingData';
import './BookingCard.css';

export default function BookingCard() {
  return (
    <div className="booking-card">
      <div className="booking-price">
        <strong>₹{listing.price.toLocaleString('en-IN')}</strong>
        <span> for {listing.nights} nights</span>
      </div>

      <div className="date-box">
        <button type="button">
          <small>CHECK-IN</small>
          <span>Add date</span>
        </button>
        <button type="button">
          <small>CHECKOUT</small>
          <span>Add date</span>
        </button>
        <button className="guest-button" type="button">
          <small>GUESTS</small>
          <span>1 guest</span>
        </button>
      </div>

      <button className="reserve-button" type="button">Reserve</button>
      <p className="charge-note">You won’t be charged yet</p>

      <div className="booking-total">
        <span>Total before taxes</span>
        <strong>₹{listing.price.toLocaleString('en-IN')}</strong>
      </div>

      <div className="booking-rating">
        <Star size={13} fill="currentColor" />
        {listing.rating} · <u>{listing.reviews} reviews</u>
      </div>
    </div>
  );
}
