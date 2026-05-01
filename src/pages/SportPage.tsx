import React from 'react';
import { mainSportCategoryData, sportCategoryData } from '../data/category-data/sportCategoryData';
import { DetailCategory } from '../components/DetailCategory';

export const SportPage: React.FC = () => {
  return (
    <div>
      <DetailCategory
        mainCategory={mainSportCategoryData}
        subCategory={sportCategoryData}
      />
    </div>
  );
};
