import React from 'react';
import { mainTechnologyCategoryData, technologyCategoryData } from '../data/category-data/technologyCategoryData';
import { DetailCategory } from '../components/DetailCategory';

export const TechnologyPage: React.FC = () => {
  return (
    <div>
      <DetailCategory
        mainCategory={mainTechnologyCategoryData}
        subCategory={technologyCategoryData}
      />
    </div>
  );
};
