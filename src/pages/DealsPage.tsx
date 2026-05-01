import { usePageTitle } from '../hooks/usePageTitle';
import React from 'react';
import { dealsCategoryData, mainDealCategoryData } from '../data/category-data/dealsCategoryData';
import { DetailCategory } from '../components/DetailCategory';

export const DealsPage: React.FC = () => {
  usePageTitle('DEALS');
  return (
    <div>
      <DetailCategory
        mainCategory={mainDealCategoryData}
        subCategory={dealsCategoryData}
      />
    </div>
  );
};
