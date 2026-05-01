import React from 'react';
import styled from 'styled-components';
import { Badge } from './Badge';
import { CategoryItem, MainCategoryItem } from '../types';

const Container = styled.div`
  padding-top: 10px;
  margin-bottom: 16px;
`;

const HeaderBox = styled.div<{ color: string }>`
  height: 50px;
  border-bottom: 4px solid ${(prop) => prop.color};
  position: relative;
`;

const BodyBox = styled.div`
  display: flex;
  min-height: 320px;
  box-shadow: 1px 2px 2px 1px rgb(0 0 0 / 15%);
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const MainPoster = styled.div`
  width: 35%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
  }
  @media (max-width: 576px) {
    height: 180px;
  }
`;

const ImageBox = styled.div<{ bg: string }>`
  flex: 1;
  background-image: url(${(prop) => prop.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.25s ease;
  &:hover {
    transform: scale(0.97);
  }
  @media (max-width: 768px) {
    height: 65%;
  }
`;

const TitleBox = styled.div<{ color: string; fontColor: string; fontSize: string }>`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(prop) => prop.fontColor};
  background-color: ${(prop) => prop.color};
  font-size: ${(prop) => prop.fontSize};
  line-height: 1.5;
  font-family: Battambang, Arial, Helvetica, sans-serif;
  min-height: 60px;
  overflow: hidden;
  @media (max-width: 768px) {
    min-height: 50px;
    font-size: ${(prop) => prop.fontSize === '20px' ? '16px' : prop.fontSize} !important;
  }
  @media (max-width: 576px) {
    font-size: ${(prop) => prop.fontSize === '20px' ? '14px' : '10px'} !important;
    min-height: 44px;
    padding: 6px 8px;
  }
`;

const SubPoster = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SubPosterBox = styled.div`
  height: 160px;
  width: 25%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 25%;
    height: 150px;
  }
  @media (max-width: 576px) {
    width: 50%;
    height: 140px;
  }
`;

interface CategoryProps {
  index: number;
  subCategory: CategoryItem[];
  mainCategory: MainCategoryItem[];
}

export const Category: React.FC<CategoryProps> = ({ index, subCategory, mainCategory }) => {
  return (
    <Container className="container">
      <HeaderBox color={mainCategory[index].badgeColor}>
        <Badge
          color={mainCategory[index].badgeColor}
          content={mainCategory[index].badge}
        />
      </HeaderBox>
      <BodyBox>
        <MainPoster>
          <ImageBox bg={mainCategory[index].image} />
          <TitleBox
            color={mainCategory[index].badgeColor}
            fontSize="20px"
            fontColor="white"
          >
            {mainCategory[index].title}
          </TitleBox>
        </MainPoster>
        <SubPoster>
          {subCategory.map((e) => (
            <SubPosterBox key={e.title}>
              <ImageBox bg={e.image} />
              <TitleBox color="white" fontSize="10px" fontColor="black">
                {e.title}
              </TitleBox>
            </SubPosterBox>
          ))}
        </SubPoster>
      </BodyBox>
    </Container>
  );
};
