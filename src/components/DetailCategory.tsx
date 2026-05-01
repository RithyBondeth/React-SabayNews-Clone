import React from 'react';
import styled from 'styled-components';
import { Badge } from './Badge';
import { popularContentData } from '../data/content-data/PopularContentData';
import { newContentData } from '../data/content-data/NewContentData';
import { DetailContent } from './DetailContent';
import { AdsData } from '../data/AdsData';
import { CategoryItem, MainCategoryItem } from '../types';

const Container = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 0;
`;

const LeftBox = styled.div`
  width: 75%;
  box-shadow: 1px 2px 2px 1px rgb(0 0 0 / 15%);
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const RightBox = styled.div`
  width: 25%;
  padding: 5px 20px;
  @media (max-width: 992px) {
    display: none;
  }
`;

const HeaderBox = styled.div<{ color: string }>`
  height: 50px;
  border-bottom: 4px solid ${(prop) => prop.color};
  position: relative;
`;

const BodyBox = styled.div`
  padding: 16px 20px;
  @media (max-width: 576px) {
    padding: 12px;
  }
`;

const MainPoster = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const MainPosterBox = styled.div`
  width: 48%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MainImageBox = styled.div`
  height: 200px;
  overflow: hidden;
  @media (max-width: 576px) {
    height: 170px;
  }
`;

const MainTitleBox = styled.div`
  padding: 10px;
  font-size: 15px;
  line-height: 1.5;
  @media (max-width: 576px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const SubPoster = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0px;
  gap: 4px;
`;

const SubPosterBox = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  margin: 4px 0px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 12px 0px;
    padding-bottom: 12px;
  }
`;

const SubImageBox = styled.div<{ bg: string }>`
  height: 130px;
  width: 28%;
  flex-shrink: 0;
  background-image: url(${(prop) => prop.bg});
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
  @media (max-width: 576px) {
    height: 170px;
  }
`;

const SubTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 130px;
  width: 72%;
  padding: 8px 16px;
  gap: 6px;
  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    padding: 12px;
  }
`;

const Title = styled.div<{ fontSize: string }>`
  font-size: ${(prop) => prop.fontSize};
  line-height: 1.5;
  @media (max-width: 576px) {
    font-size: ${(prop) => (prop.fontSize === '17px' ? '15px' : '12px')};
  }
`;

const DateLabel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #888;
  padding-bottom: 4px;
  border-bottom: 1px solid #eee;
`;

const AdsBox = styled.img<{ size: string }>`
  height: ${(prop) => (prop.size === 'small' ? '60px' : '220px')};
  width: 100%;
  padding: 5px 0px;
`;

const Poster = styled.div<{ bg: string }>`
  height: 280px;
  width: 100%;
  background-image: url(${(prop) => prop.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 576px) {
    height: 160px;
  }
`;

interface DetailCategoryProps {
  mainCategory: MainCategoryItem[];
  subCategory: CategoryItem[];
  poster?: boolean;
  posterBg?: string;
}

export const DetailCategory: React.FC<DetailCategoryProps> = ({
  mainCategory,
  subCategory,
  poster,
  posterBg,
}) => {
  return (
    <Container className="container">
      <LeftBox>
        <HeaderBox color={mainCategory[0].badgeColor}>
          <Badge
            color={mainCategory[0].badgeColor}
            content={mainCategory[0].badge}
          />
        </HeaderBox>
        <BodyBox>
          {poster && posterBg ? (
            <Poster bg={posterBg} />
          ) : (
            <MainPoster>
              {mainCategory.map((e) => (
                <MainPosterBox key={e.title}>
                  <MainImageBox>
                    <img src={e.image} height="100%" width="100%" alt="news poster" style={{ objectFit: 'cover' }} />
                  </MainImageBox>
                  <MainTitleBox>{e.title}</MainTitleBox>
                </MainPosterBox>
              ))}
            </MainPoster>
          )}
          <SubPoster>
            {subCategory.map((e) => (
              <SubPosterBox key={e.title}>
                <SubImageBox bg={e.image} />
                <SubTitleBox>
                  <Title fontSize="17px">{e.title}</Title>
                  <DateLabel>ម្សិលមិញ ម៉ោង 15:53</DateLabel>
                  <Title fontSize="12px">{e.des}</Title>
                </SubTitleBox>
              </SubPosterBox>
            ))}
          </SubPoster>
        </BodyBox>
      </LeftBox>
      <RightBox>
        {AdsData.map((e) => (
          <AdsBox key={e.id} size={e.size} src={e.ads} alt="advertisement" />
        ))}
        <DetailContent list={popularContentData} title="អត្ថបទពេញនិយម" />
        <DetailContent list={newContentData} title="អត្ថបទថ្មី" />
      </RightBox>
    </Container>
  );
};
