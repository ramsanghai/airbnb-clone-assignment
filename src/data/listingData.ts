import type { Photo, Room } from '../types';

export const listing = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  location: 'Candolim, India',
  type: 'Entire serviced apartment',
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviews: 19,
  price: 28499,
  nights: 5,
  host: 'Mirashya',
};

export const photos: Photo[] = [
  { id: 0, src: '', alt: 'Living room main view', room: 'Living room 1' },
  { id: 1, src: '', alt: 'Living room second view', room: 'Living room 1' },
  { id: 2, src: '', alt: 'Living room detail', room: 'Living room 1' },
  { id: 3, src: '', alt: 'Jacuzzi living room', room: 'Living room 2' },
  { id: 4, src: '', alt: 'Jacuzzi second view', room: 'Living room 2' },
  { id: 5, src: '', alt: 'Jacuzzi detail', room: 'Living room 2' },
  { id: 6, src: '', alt: 'Living area', room: 'Living room 2' },
  { id: 7, src: '', alt: 'Seating area', room: 'Living room 2' },
  { id: 8, src: '', alt: 'Interior detail', room: 'Living room 2' },
  { id: 9, src: '', alt: 'Room view', room: 'Living room 2' },
  { id: 10, src: '', alt: 'Kitchen', room: 'Full kitchen' },
  { id: 11, src: '', alt: 'Kitchen detail', room: 'Full kitchen' },
  { id: 12, src: '', alt: 'Bedroom', room: 'Bedroom' },
  { id: 13, src: '', alt: 'Bedroom second view', room: 'Bedroom' },
  { id: 14, src: '', alt: 'Bathroom', room: 'Full bathroom' },
  { id: 15, src: '', alt: 'Gym', room: 'Gym' },
  { id: 16, src: '', alt: 'Exterior', room: 'Exterior' },
  { id: 17, src: '', alt: 'Pool', room: 'Pool' },
  { id: 18, src: '', alt: 'Additional photo', room: 'Additional photos' },
];

export const rooms: Room[] = [
  { name: 'Living room 1', details: 'Sofa · Air conditioning · Ceiling fan · TV', photoIds: [0, 1, 2] },
  { name: 'Living room 2', details: 'Ceiling fan · Hot tub', photoIds: [3, 4, 5, 6, 7, 8, 9] },
  { name: 'Full kitchen', details: 'Refrigerator · Cooking basics · Microwave', photoIds: [10, 11] },
  { name: 'Bedroom', details: 'Queen bed · Air conditioning · Wardrobe', photoIds: [12, 13] },
  { name: 'Full bathroom', details: 'Shower · Hot water · Hairdryer', photoIds: [14] },
  { name: 'Gym', details: 'Shared gym in building', photoIds: [15] },
  { name: 'Exterior', details: 'Building exterior', photoIds: [16] },
  { name: 'Pool', details: 'Shared outdoor pool', photoIds: [17] },
  { name: 'Additional photos', details: 'More photos of the property', photoIds: [18] },
];

export const amenities = [
  'Hot tub',
  'Shared outdoor pool',
  'Kitchen',
  'Wifi',
  'Free parking on premises',
  'TV',
  'Air conditioning',
  'Washing machine',
  'Hairdryer',
  'Hot water',
];
