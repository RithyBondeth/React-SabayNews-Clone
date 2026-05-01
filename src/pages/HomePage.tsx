import React, { useState, useEffect } from 'react';
import { Feature } from '../components/Feature';
import { PhoneFeature } from '../components/PhoneFeature';
import { Category } from '../components/Category';
import { technologyCategoryData } from '../data/category-data/technologyCategoryData';
import { entertainCategoryData } from '../data/category-data/entertainCategoryData';
import { lifeCategoryData } from '../data/category-data/lifeCategoryData';
import { sportCategoryData } from '../data/category-data/sportCategoryData';
import { dealsCategoryData } from '../data/category-data/dealsCategoryData';
import { mainCategoryData } from '../data/category-data/mainCategoryData';

export const HomePage: React.FC = () => {
  const [phone, setPhone] = useState<boolean>(false);

  useEffect(() => {
    function handleNav(): void {
      if (window.innerWidth > 768) {
        setPhone(false);
      } else {
        setPhone(true);
      }
    }
    window.addEventListener('resize', handleNav);
    window.addEventListener('load', handleNav);
    return () => {
      window.removeEventListener('resize', handleNav);
      window.removeEventListener('load', handleNav);
    };
  }, []);

  return (
    <div>
      {phone ? <PhoneFeature /> : <Feature />}
      <Category index={0} mainCategory={mainCategoryData} subCategory={technologyCategoryData} />
      <Category index={1} mainCategory={mainCategoryData} subCategory={entertainCategoryData} />
      <Category index={2} mainCategory={mainCategoryData} subCategory={lifeCategoryData} />
      <Category index={3} mainCategory={mainCategoryData} subCategory={sportCategoryData} />
      <Category index={4} mainCategory={mainCategoryData} subCategory={dealsCategoryData} />
    </div>
  );
};
