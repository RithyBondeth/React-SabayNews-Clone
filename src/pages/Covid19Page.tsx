import React from 'react';
import { covid19CategoryData, mainCovid19CategoryData } from '../data/category-data/covid19CategoryData';
import { DetailCategory } from '../components/DetailCategory';

export const Covid19Page: React.FC = () => {
  return (
    <div>
      <DetailCategory
        mainCategory={mainCovid19CategoryData}
        subCategory={covid19CategoryData}
      />
    </div>
  );
};
