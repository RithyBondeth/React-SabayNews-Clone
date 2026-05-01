import { usePageTitle } from '../hooks/usePageTitle';
import React from 'react';
import { mainTechnologyCategoryData, technologyCategoryData } from '../data/category-data/technologyCategoryData';
import { DetailCategory } from '../components/DetailCategory';

export const TechnologyPage: React.FC = () => {
  usePageTitle('បច្ចេកវិទ្យា');
  return (
    <div>
      <DetailCategory
        mainCategory={mainTechnologyCategoryData}
        subCategory={technologyCategoryData}
      />
    </div>
  );
};
