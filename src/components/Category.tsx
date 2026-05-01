import React from 'react';
import styled from 'styled-components';
import { Badge } from './Badge';
import { CategoryItem, MainCategoryItem } from '../types';

const Container = styled.div`
  height: 400px;
  padding-top: 10px;
  @media (max-width: 990px) {
    height: 800px;
  }
  @media (max-width: 575px) {
    height: 250px;
  }
`;

const HeaderBox = styled.div<{ color: string }>`
  height: 50px;
  border-bottom: 4px solid ${(prop) => prop.color};
  position: relative;
`;

const BodyBox = styled.div`
  height: 85%;
  display: flex;
  box-shadow: 1px 2px 2px 1px rgb(0 0 0 / 20%);
`;

const MainPoster = styled.div`
  height: 100%;
  width: 40%;
  @media (max-width: 990px) {
    height: 50%;
    width: 50%;
    padding: 5px;
  }
  @media (max-width: 575px) {
    display: none;
  }
`;

const ImageBox = styled.div<{ bg: string }>`
  height: 65%;
  width: 100%;
  background-image: url(${(prop) => prop.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(0.95);
    transition: 0.25s;
  }
  &:not(:hover) {
    transition: 0.25s;
  }
  @media (max-width: 990px) {
    padding: 30px 0px;
  }
  @media (max-width: 575px) {
    height: 50%;
    width: 150px;
  }
`;

const TitleBox = styled.div<{ color: string; fontColor: string; fontSize: string }>`
  height: 35%;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(prop) => prop.fontColor};
  background-color: ${(prop) => prop.color};
  font-size: ${(prop) => prop.fontSize};
  overflow: hidden;
  font-family: Battambang, Arial, Helvetica, sans-serif;
  @media (max-width: 575px) {
    height: 50%;
    padding: 0px 5px;
  }
`;

const SubPoster = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 990px) {
    height: 100%;
    width: 50%;
    padding: 5px;
  }
  @media (max-width: 575px) {
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
    overflow-y: auto;
  }
`;

const SubPosterBox = styled.div`
  height: 50%;
  width: 25%;
  padding: 5px;
  @media (max-width: 990px) {
    height: 25%;
    width: 50%;
  }
  @media (max-width: 575px) {
    height: 100%;
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
