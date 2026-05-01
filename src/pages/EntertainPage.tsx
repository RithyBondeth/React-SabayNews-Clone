import React from 'react';
import { entertainCategoryData, mainEntertainCategoryData } from '../data/category-data/entertainCategoryData';
import { DetailCategory } from '../components/DetailCategory';

export const EntertainPage: React.FC = () => {
  return (
    <div>
      <DetailCategory
        mainCategory={mainEntertainCategoryData}
        subCategory={entertainCategoryData}
      />
    </div>
  );
};
