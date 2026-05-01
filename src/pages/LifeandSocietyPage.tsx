import React from 'react';
import { lifeCategoryData, mainLifeCategoryData } from '../data/category-data/lifeCategoryData';
import { DetailCategory } from '../components/DetailCategory';

export const LifeandSocietyPage: React.FC = () => {
  return (
    <div>
      <DetailCategory
        mainCategory={mainLifeCategoryData}
        subCategory={lifeCategoryData}
      />
    </div>
  );
};
