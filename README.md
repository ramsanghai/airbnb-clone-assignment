# Airbnb Listing Clone

Desktop-only React + TypeScript implementation of a vacation-rental listing experience.

## Run locally

```bash
npm install
npm run dev
```

## Add your own images

Open:

`src/data/listingData.ts`

Every photo currently has an empty `src` value:

```ts
{ id: 0, src: '', alt: 'Living room main view', room: 'Living room 1' }
```

Put image files in:

`public/images/`

Then update the source:

```ts
{ id: 0, src: '/images/photo-1.jpg', alt: 'Living room main view', room: 'Living room 1' }
```

## Main interactions

- Hero image click opens lightbox
- Show all photos opens Photo Tour
- Photo Tour room navigation scrolls to sections
- Photo click opens Lightbox
- Lightbox supports previous/next buttons
- Keyboard ArrowLeft and ArrowRight navigation
- Escape closes Lightbox
- Amenities modal
- Sticky section navigation after scrolling

## Notes

Keep the repository private if required by the assignment instructions.
