import React from 'react';
import { mainStartingUpCategoryData, startingUpCategoryData } from '../data/category-data/startingupCategoryData';
import { DetailCategory } from '../components/DetailCategory';
import StartingUpPoster from '../assets/category-images/posters/startingup-poster.jpeg';

export const StartingUpPage: React.FC = () => {
  return (
    <div>
      <DetailCategory
        mainCategory={mainStartingUpCategoryData}
        subCategory={startingUpCategoryData}
        poster={true}
        posterBg={StartingUpPoster}
      />
    </div>
  );
};
