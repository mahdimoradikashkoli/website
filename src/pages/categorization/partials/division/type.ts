import { ReactNode } from 'react';

export interface divisionType {
    categoryName: string;
    categoryImage?: ReactNode;
    categoryImageAddress?: string;
    classNameForImage?:object,
    classNameFortext?:object,
    classNameFordivision?:object,
    onClick?:React.MouseEventHandler<HTMLDivElement>
  }