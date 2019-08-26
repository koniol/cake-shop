export interface ICake {
  id?: number;
  name: string;
  numberOfPortion: number;
  image?: Blob;
  description: string;
  cakePrice: number;
  portionPrice: number;
}
