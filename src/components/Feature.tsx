import React from 'react';
import styled from 'styled-components';
import { featureData } from '../data/FeatureData';
import { Badge } from './Badge';
import Ads1 from '../assets/ads-images/home-ads/home-ads1.jpeg';
import Ads2 from '../assets/ads-images/home-ads/home-ads2.jpeg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const FeatureGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  margin-top: 15px;
  width: 69.5%;
  @media (max-width: 992px) {
    width: 100%;
    height: auto;
  }
`;

const AdsPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 29.5%;
  margin-top: 15px;
  @media (max-width: 992px) {
    display: none;
  }
`;

const AdsImage = styled.div<{ bg: string }>`
  flex: 1;
  background-image: url(${(prop) => prop.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const FeatureCard = styled.div<{ width: string; bg: string }>`
  height: 50%;
  width: ${(prop) => prop.width};
  position: relative;
  background-image: url(${(prop) => prop.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 16px;
  color: #f6f6f6;
  cursor: pointer;
  &:hover .card-title {
    color: #ff4d4d;
  }
  &:hover .card-des {
    font-size: 13px;
    padding: 8px 0px;
    opacity: 1;
    transition: all 0.3s ease;
  }
  .card-des {
    font-size: 0px;
    opacity: 0;
    transition: all 0.3s ease;
  }
  @media (max-width: 992px) {
    width: 50% !important;
    height: 240px;
  }
  @media (max-width: 576px) {
    width: 100% !important;
    height: 200px;
    padding: 12px;
  }
`;

const CardTitle = styled.div`
  font-weight: bold;
  text-shadow: 1px 1px 3px rgb(0 0 0 / 60%);
  padding: 6px 0px;
  font-size: 14px;
  line-height: 1.5;
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

const CardDes = styled.div`
  text-shadow: 1px 1px 2px rgb(0 0 0 / 50%);
`;

const CardDate = styled.div`
  font-size: 11px;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 50%);
  opacity: 0.85;
`;

export const Feature: React.FC = () => {
  return (
    <Wrapper className="container">
      <FeatureGrid>
        {featureData.map((e) => (
          <FeatureCard width={e.width} bg={e.image} key={e.title}>
            <Badge content={e.badge} color={e.badgeColor} />
            <CardTitle className="card-title">{e.title}</CardTitle>
            <CardDes className="card-des">{e.des}</CardDes>
            <CardDate>{e.date}</CardDate>
          </FeatureCard>
        ))}
      </FeatureGrid>
      <AdsPanel>
        <AdsImage bg={Ads1} />
        <AdsImage bg={Ads2} />
      </AdsPanel>
    </Wrapper>
  );
};
