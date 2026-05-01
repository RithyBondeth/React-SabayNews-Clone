import { usePageTitle } from '../hooks/usePageTitle';
import React from 'react';
import { DetailCategory } from '../components/DetailCategory';
import { mainQuizCategoryData, quizCategoryData } from '../data/category-data/quizCategoryData';
import QuizPoster from '../assets/category-images/posters/quiz-poster.png';

export const QuizPage: React.FC = () => {
  usePageTitle('QUIZ');
  return (
    <div>
      <DetailCategory
        mainCategory={mainQuizCategoryData}
        subCategory={quizCategoryData}
        poster={true}
        posterBg={QuizPoster}
      />
    </div>
  );
};
