import { useMemo, useState } from 'react';
import {
  Bath,
  BriefcaseBusiness,
  Car,
  ChevronLeft,
  ChevronRight,
  CircleParking,
  Flag,
  Home,
  KeyRound,
  Map,
  MessageSquare,
  Minus,
  PawPrint,
  Plus,
  Search,
  Shield,
  Sparkles,
  Tag,
  Utensils,
  Waves,
  Wifi,
} from 'lucide-react';

import HeroGallery from '../components/HeroGallery/HeroGallery';
import ListingDetails from '../components/ListingDetails/ListingDetails';
import BookingCard from '../components/BookingCard/BookingCard';
import './ListingPage.css';

type Props = {
  onOpenTour: () => void;
  onOpenPhoto: (index: number) => void;
  onOpenAmenities: () => void;
};

const amenityItems = [
  [Utensils, 'Kitchen'],
  [Wifi, 'Wifi'],
  [BriefcaseBusiness, 'Dedicated workspace'],
  [Car, 'Free parking on premises'],
  [Waves, 'Pool'],
  [Bath, 'Hot tub'],
  [PawPrint, 'Pets allowed'],
  [Shield, 'Exterior security cameras on property'],
] as const;

const reviews = [
  [
    'Amit',
    '2 months on Airbnb',
    'Very helpful and responsive team. Safe and peaceful stay, loved everything about the property.',
  ],
  [
    'Aheesh',
    '3 years on Airbnb',
    'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos.',
  ],
  [
    'Samiksha',
    '8 months on Airbnb',
    'the host nitish was really great help',
  ],
  [
    'Vedant',
    '4 years on Airbnb',
    'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained.',
  ],
  [
    'Vaibhav S',
    '3 years on Airbnb',
    'Great great experience living out there, can’t expect more, will always look for it in the future.',
  ],
  [
    'Mohd',
    '5 years on Airbnb',
    'Great place. Exactly as described in the listing.',
  ],
];

const nearbyStays = [
  {
    image: '/images/s1.jpeg',
    title: 'Beautiful Studio with a view to die for',
    price: '₹23,600',
    rating: '4.91',
  },
  {
    image: '/images/s7.jpeg',
    title: 'NAQAB - 1bhk with private pool',
    price: '₹42,218',
    rating: '4.95',
  },
  {
    image: '/images/s3.jpeg',
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    price: '₹44,506',
    rating: '4.94',
  },
  {
    image: '/images/s4.jpeg',
    title: 'The Tropical Studio | 5 mins to Beach',
    price: '₹22,824',
    rating: '4.96',
  },
  {
    image: '/images/s5.jpeg',
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    price: '₹39,942',
    rating: '4.95',
  },
  {
    image: '/images/s5.jpeg',
    title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool',
    price: '₹45,648',
    rating: '5.0',
  },
  {
    image: '/images/s2.jpeg',
    title: 'Luxury Apt | Private Pool | 6 Mins from Beach',
    price: '₹48,786',
    rating: '4.93',
  },
  {
    image: '/images/s4.jpeg',
    title: 'Serendipity Cottage - Calm Stay in Calangute-Baga',
    price: '₹22,824',
    rating: '4.92',
  },
  {
    image: '/images/s7.jpeg',
    title: 'Modern Studio near Candolim Beach',
    price: '₹31,500',
    rating: '4.94',
  },
  {
    image: '/images/s6.jpeg',
    title: 'Luxury Tropical Apartment with Pool',
    price: '₹41,850',
    rating: '4.97',
  },
];

function BlankImage({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={`blank-image ${className}`}
      aria-label="Image placeholder"
    />
  );
}

function Month({
  name,
  days,
  start,
  selected,
}: {
  name: string;
  days: number;
  start: number;
  selected?: boolean;
}) {
  const cells = useMemo(
    () => [
      ...Array(start).fill(null),
      ...Array.from({ length: days }, (_, i) => i + 1),
    ],
    [days, start]
  );

  return (
    <div className="month">
      <h3>{name}</h3>

      <div className="weekdays">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(
          (day, index) => (
            <span key={index}>{day}</span>
          )
        )}
      </div>

          <div className="days">
      {cells.map((day, index) =>
        day ? (
          <button
            key={index}
            type="button"
            className={`
              ${selected && day >= 18 && day <= 23 ? 'range' : ''}
              ${selected && day === 18 ? 'range-start' : ''}
              ${selected && day === 23 ? 'range-end' : ''}
            `}
          >
            <span>{day}</span>
          </button>
        ) : (
          <span key={index} />
        )
      )}
    </div>
    </div>
  );
}

export default function ListingPage({
  onOpenTour,
  onOpenPhoto,
  onOpenAmenities,
}: Props) {
  const [nearbyPage, setNearbyPage] = useState(0);

  const visibleNearbyStays = nearbyStays.slice(
    nearbyPage * 5,
    nearbyPage * 5 + 5
  );

  const goToPreviousNearbyPage = () => {
    setNearbyPage((currentPage) =>
      Math.max(0, currentPage - 1)
    );
  };

  const goToNextNearbyPage = () => {
    setNearbyPage((currentPage) =>
      Math.min(1, currentPage + 1)
    );
  };

  return (
    <main>
      <div className="page-shell">
        <HeroGallery
          onOpenTour={onOpenTour}
          onOpenPhoto={onOpenPhoto}
        />
      </div>

      <section
        className="two-column page-shell"
        id="photos"
      >
        <div className="left-flow">
          <ListingDetails />

          <section className="sleep-section">
            <h2>Where you'll sleep</h2>

            <div className="sleep-grid">
              <div>
                 <img src="/images/img-4.jpeg" alt="Bedroom" className="sleep-image"/>

                <h3>Bedroom</h3>
                <p>1 double bed</p>
              </div>

              <div>
                <img src="/images/img-1.jpeg" alt="Living room" className="sleep-image"/>
                <h3>Living room</h3>
                <p>1 sofa</p>
              </div>
            </div>
          </section>

          <section
            className="amenities-section"
            id="amenities"
          >
            <h2>What this place offers</h2>

            <div className="amenities-grid">
              {amenityItems.map(([Icon, label]) => (
                <div
                  className="amenity-row"
                  key={label}
                >
                  <Icon size={28} />
                  <span>{label}</span>
                </div>
              ))}

              <div className="amenity-row unavailable">
                <CircleParking size={28} />
                <span>Carbon monoxide alarm</span>
              </div>

              <div className="amenity-row unavailable">
                <CircleParking size={28} />
                <span>Smoke alarm</span>
              </div>
            </div>

            <button
              className="outline-btn"
              type="button"
              onClick={onOpenAmenities}
            >
              Show all 50 amenities
            </button>
          </section>

          <section className="calendar-section">
            <h2>5 nights in Candolim</h2>
            <p>18 Oct 2026 - 23 Oct 2026</p>

            <div className="calendar-head">
              <ChevronLeft size={22} />
              <span />
              <ChevronRight size={22} />
            </div>

            <div className="months">
              <Month
                name="October 2026"
                days={31}
                start={4}
                selected
              />

              <Month
                name="November 2026"
                days={30}
                start={0}
              />
            </div>

            <div className="calendar-foot">
              <span className="keyboard">▭</span>

              <button type="button">
                Clear dates
              </button>
            </div>
          </section>
        </div>

        <aside className="booking-column">
          <div className="coupon">
            <Tag size={30} />

            <span>
              Get 10% off your next stay.
              <br />
              <u>Terms apply</u>
            </span>

            <button type="button">
              Claim
            </button>
          </div>

          <BookingCard />

          <a className="report" href="#">
            <Flag size={18} />
            Report this listing
          </a>
        </aside>
      </section>

      <section
        className="full-section reviews-section"
        id="reviews"
      >
        <div className="wide-shell">
          <div className="rating-hero">
           <div className="_BPBwHJ">
              <img
                src="/images/laurel-left.png"
                alt=""
                aria-hidden="true"
              />

              <div className="_ceuCIZ">4.95</div>

              <img
                src="/images/laurel-right.png"
                alt=""
                aria-hidden="true"
              />
            </div>

            <h2>Guest favourite</h2>

            <p>
              This home is a guest favourite based on ratings,
              reviews and
              <br />
              reliability
            </p>

            <u>How reviews work</u>
          </div>

          <div className="rating-grid">
            <div>
              <b>Overall rating</b>
              <p>5 ━━━━━</p>
              <p>4 ━</p>
              <p>3 ━</p>
              <p>2 ━</p>
              <p>1 ━</p>
            </div>

            {[
              ['Cleanliness', '5.0', Sparkles],
              ['Accuracy', '5.0', Shield],
              ['Check-in', '5.0', KeyRound],
              ['Communication', '5.0', MessageSquare],
              ['Location', '4.8', Map],
              ['Value', '4.8', Tag],
            ].map(([name, value, IconComponent]) => {
              const Icon =
                IconComponent as typeof Sparkles;

              return (
                <div
                  className="rating-item"
                  key={String(name)}
                >
                  <b>{String(name)}</b>
                  <strong>{String(value)}</strong>
                  <Icon size={34} />
                </div>
              );
            })}
          </div>

          <div className="chips">
            {[
              'Comfort 6',
              'Accuracy 5',
              'Hot tub 5',
              'Condition 4',
              'Hospitality 8',
              'Cleanliness 4',
              'Amenities 2',
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="review-grid">
            {reviews.map((review, index) => (
              <article
                className="review"
                key={review[0]}
              >
                <div className="avatar">
                  {review[0][0]}
                </div>

                <div>
                  <h3>{review[0]}</h3>
                  <small>{review[1]}</small>
                </div>

                <p>★★★★★ · May 2026</p>
                <p>{review[2]}</p>

                {index === 1 || index === 3 ? (
                  <u>Show more</u>
                ) : null}
              </article>
            ))}
          </div>

          <button
            className="outline-btn"
            type="button"
          >
            Show all 19 reviews
          </button>
        </div>
      </section>

      <section
        className="full-section location-section"
        id="location"
      >
        <div className="wide-shell">
          <h2>Where you'll be</h2>

          <p className="location-name">
            Candolim, Goa, India
          </p>

          <div className="map-box">
            <button
              className="map-search"
              type="button"
              aria-label="Search map"
            >
              <Search size={22} />
            </button>

            <div className="water" />
            <div className="tree one" />
            <div className="tree two" />

            <div className="home-marker">
              <Home size={34} />
            </div>

            <div className="zoom">
              <button
                type="button"
                aria-label="Zoom in"
              >
                <Plus />
              </button>

              <button
                type="button"
                aria-label="Zoom out"
              >
                <Minus />
              </button>
            </div>
          </div>

          <small>
            Exact location will be provided after booking.
          </small>

          <div className="neighborhood">
            <h3>Neighborhood highlights</h3>

            <p>
              Located in the heart of Candolim, Amor de Goa
              offers a peaceful stay with easy access to
              beaches, cafés, and popular attractions.
            </p>

            <u>Show more ›</u>
          </div>
        </div>
      </section>

      <section className="full-section host-section">
        <div className="wide-shell">
          <h2>Meet your host</h2>

          <div className="host-layout">
            <div className="host-card">
              <div className="host-avatar">M</div>

              <h3>Mirashya Homes</h3>
              <small>Host</small>

              <div className="host-stats">
                <b>
                  1,463
                  <br />
                  <small>Reviews</small>
                </b>

                <b>
                  4.68 ★
                  <br />
                  <small>Rating</small>
                </b>

                <b>
                  2
                  <br />
                  <small>Years hosting</small>
                </b>
              </div>
            </div>

            <div className="host-info">
              <h3>Co-Hosts</h3>

              <div className="cohosts">
                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(231, 245, 255)',
                      color: 'rgb(0, 108, 172)',
                    }}
                  >
                    S
                  </div>
                  <span>Shanthi</span>
                </div>

                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(238, 232, 255)',
                      color: 'rgb(105, 70, 190)',
                    }}
                  >
                    S
                  </div>
                  <span>Simran</span>
                </div>

                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(253, 231, 239)',
                      color: 'rgb(212, 53, 110)',
                    }}
                  >
                    S
                  </div>
                  <span>Shruti</span>
                </div>

                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(255, 240, 219)',
                      color: 'rgb(180, 93, 0)',
                    }}
                  >
                    A
                  </div>
                  <span>Aman</span>
                </div>

                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(230, 246, 237)',
                      color: 'rgb(38, 126, 79)',
                    }}
                  >
                    P
                  </div>
                  <span>Pahwa</span>
                </div>

                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(230, 246, 237)',
                      color: 'rgb(38, 126, 79)',
                    }}
                  >
                    D
                  </div>
                  <span>Dev</span>
                </div>

                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(230, 246, 237)',
                      color: 'rgb(38, 126, 79)',
                    }}
                  >
                    P
                  </div>
                  <span>Pallavi</span>
                </div>

                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(255, 235, 225)',
                      color: 'rgb(190, 70, 35)',
                    }}
                  >
                    A
                  </div>
                  <span>Amisha</span>
                </div>

                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(235, 241, 255)',
                      color: 'rgb(60, 92, 180)',
                    }}
                  >
                    M
                  </div>
                  <span>Maria</span>
                </div>

                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(235, 241, 255)',
                      color: 'rgb(60, 92, 180)',
                    }}
                  >
                    K
                  </div>
                  <span>Karen</span>
                </div>

                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(218, 228, 252)',
                      color: 'rgb(52, 152, 19)',
                    }}
                  >
                    P
                  </div>
                  <span>Priyanka</span>
                </div>

                <div className="_BfmZwR">
                  <div
                    className="_NOxBfk"
                    style={{
                      background: 'rgb(246, 232, 255)',
                      color: 'rgb(135, 65, 180)',
                    }}
                  >
                    S
                  </div>
                  <span>Sanyukta</span>
                </div>
              </div>

              <h3>Host details</h3>

              <p>
                Response rate: 100%
                <br />
                Responds within an hour
              </p>

              <button
                className="dark-btn"
                type="button"
              >
                Message host
              </button>

              <p className="muted">
                To help protect your payment, always use Airbnb
                to send money and communicate with hosts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="full-section know-section">
        <div className="wide-shell">
          <h2>Things to know</h2>

          <div className="know-grid">
            <div>
              <h3>Cancellation policy</h3>

              <p>
                Free cancellation before 17 October. Cancel
                before check-in on 18 October for a partial
                refund.
              </p>

              <u>Learn more</u>
            </div>

            <div>
              <h3>House rules</h3>

              <p>
                Check-in after 2:00 pm
                <br />
                Checkout before 11:00 am
                <br />
                3 guests maximum
              </p>

              <u>Learn more</u>
            </div>

            <div>
              <h3>Safety & property</h3>

              <p>
                Carbon monoxide alarm not reported
                <br />
                Smoke alarm not reported
                <br />
                Exterior security cameras on property
              </p>

              <u>Learn more</u>
            </div>
          </div>
        </div>
      </section>

      <section className="full-section nearby-section">
        <div className="wide-shell">
          <div className="nearby-title">
            <h2>More stays nearby</h2>

            <div className="nearby-controls">
              <span className="nearby-page-count">
                {nearbyPage + 1} / 2
              </span>

              <button
                type="button"
                className="nearby-arrow"
                aria-label="Previous stays"
                onClick={goToPreviousNearbyPage}
                disabled={nearbyPage === 0}
              >
                <span className="nearby-arrow-icon">
                  <svg
                    viewBox="0 0 18 18"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              <button
                type="button"
                className="nearby-arrow"
                aria-label="Next stays"
                onClick={goToNextNearbyPage}
                disabled={nearbyPage === 1}
              >
                <span className="nearby-arrow-icon">
                  <svg
                    viewBox="0 0 18 18"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1-1.42-1.41l7.29-7.29z"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="nearby-slider">
            <div
              key={nearbyPage}
              className={`nearby-grid ${
                nearbyPage === 1
                  ? 'nearby-page-two'
                  : 'nearby-page-one'
              }`}
            >
              {visibleNearbyStays.map((stay) => (
                <article
                  className="nearby-card"
                  key={stay.title}
                >
                  <img
                    src={stay.image}
                    alt={stay.title}
                    className="nearby-image"
                    loading="lazy"
                  />

                  <div className="nearby-card-title">
                    {stay.title}
                  </div>

                  <div className="nearby-card-meta">
                    <span>{stay.price}</span>

                    <span className="nearby-star">
                      <svg
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                        />
                      </svg>
                    </span>

                    <span>{stay.rating}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}