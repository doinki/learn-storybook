export interface Store {
  description: string;
  id: number;
  marketName: string;
  name: string;
  rating: number;
  /** @default 0 */
  reviewCount: number;
  src: string;
  /** @default 'OPEN' */
  status: 'OPEN' | 'CLOSED';
  /** @default [] */
  tags: string[];
}
