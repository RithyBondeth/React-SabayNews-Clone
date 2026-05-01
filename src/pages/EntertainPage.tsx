import { usePageTitle } from '../hooks/usePageTitle';
import React from 'react';
import { entertainCategoryData, mainEntertainCategoryData } from '../data/category-data/entertainCategoryData';
import { DetailCategory } from '../components/DetailCategory';

export const EntertainPage: React.FC = () => {
  usePageTitle('កម្សាន្ត');
  return (
    <div>
      <DetailCategory
        mainCategory={mainEntertainCategoryData}
        subCategory={entertainCategoryData}
      />
    </div>
  );
};
