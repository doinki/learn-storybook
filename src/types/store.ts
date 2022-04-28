export interface Store {
  description: string;
  id: number;
  marketName: string;
  name: string;
  numberOfReviews: number;
  rating: number;
  src: string;
  status: 'OPEN' | 'CLOSED';
  tags: string[];
}
