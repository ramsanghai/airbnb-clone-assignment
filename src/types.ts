export type Photo = {
  id: number;
  src: string;
  alt: string;
  room: string;
};

export type Room = {
  name: string;
  details: string;
  photoIds: number[];
};
