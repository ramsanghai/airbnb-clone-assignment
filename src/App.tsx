import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import StickyNav from './components/StickyNav/StickyNav';
import ListingPage from './pages/ListingPage';
import PhotoTour from './components/PhotoTour/PhotoTour';
import Lightbox from './components/Lightbox/Lightbox';
import AmenitiesModal from './components/AmenitiesModal/AmenitiesModal';

function App() {
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);

  const overlayOpen = tourOpen || lightboxIndex !== null || amenitiesOpen;

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [overlayOpen]);

  return (
    <>
      <Header />
      <StickyNav />

      <ListingPage
        onOpenTour={() => setTourOpen(true)}
        onOpenPhoto={setLightboxIndex}
        onOpenAmenities={() => setAmenitiesOpen(true)}
      />

      {tourOpen && (
        <PhotoTour
          onClose={() => setTourOpen(false)}
          onOpenPhoto={setLightboxIndex}
        />
      )}

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onShowAll={() => {
            setLightboxIndex(null);
            setTourOpen(true);
          }}
        />
      )}

      {amenitiesOpen && (
        <AmenitiesModal onClose={() => setAmenitiesOpen(false)} />
      )}
    </>
  );
}

export default App;
