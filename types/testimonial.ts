export interface Testimonial {
  id: number;
  name: string;
  age: number;

  image: string;
  avatar: string;

  rating: number;

  quote: string;

  facebook?: string;
  instagram?: string;

  video?: string;
}