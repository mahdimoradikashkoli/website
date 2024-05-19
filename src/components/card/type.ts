export type imgMediaCardType = {
  imageAddress: string;
  title1: string;
  description: string;
  offer?: string;
  price?: string;
  key: string;
  altForImage: string;
  percent?: string;
  percent2?: string;
  available?: string;
  suggestion?: string;
  onClick: React.MouseEventHandler<HTMLImageElement>;
  giftContent?: string;
};
