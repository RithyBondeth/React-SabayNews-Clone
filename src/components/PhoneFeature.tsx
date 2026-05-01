import React, { useState } from 'react';
import styled from 'styled-components';
import { Badge } from './Badge';
import { featureData } from '../data/FeatureData';

const Container = styled.div`
  height: 320px;
  position: relative;
  background: black;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 280px;
  }
  @media (max-width: 576px) {
    height: 240px;
  }
`;

const ImageBox = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.82;
  display: block;
`;

const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.72));
  pointer-events: none;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  text-align: center;
  padding: 12px 56px 14px;
  font-size: 14px;
  line-height: 1.5;
  font-family: Battambang, Arial, Helvetica, sans-serif;
  @media (max-width: 576px) {
    font-size: 13px;
    padding: 10px 50px 12px;
  }
`;

const Arrow = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  ${(prop) => (prop.direction === 'left' ? 'left: 0;' : 'right: 0;')}
  top: 0;
  bottom: 0;
  width: 44px;
  background: rgba(0, 0, 0, 0.25);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  z-index: 2;
  &:hover {
    background: rgba(0, 0, 0, 0.45);
  }
  &:active {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const DotsRow = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
  z-index: 2;
`;

const Dot = styled.span<{ active: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${(prop) => (prop.active ? 'white' : 'rgba(255,255,255,0.45)')};
  transition: background 0.2s;
`;

export const PhoneFeature: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleForward = (): void => {
    setIndex((prev) => (prev < featureData.length - 1 ? prev + 1 : 0));
  };

  const handleBack = (): void => {
    setIndex((prev) => (prev === 0 ? featureData.length - 1 : prev - 1));
  };

  return (
    <Container>
      <Arrow direction="left" onClick={handleBack} aria-label="Previous">
        <span className="material-icons" style={{ fontSize: 20 }}>arrow_back_ios</span>
      </Arrow>

      <Badge content={featureData[index].badge} color={featureData[index].badgeColor} />
      <ImageBox src={featureData[index].image} alt={featureData[index].title} />
      <Gradient />

      <DotsRow>
        {featureData.map((_, i) => (
          <Dot key={i} active={i === index} />
        ))}
      </DotsRow>

      <Title>{featureData[index].title}</Title>

      <Arrow direction="right" onClick={handleForward} aria-label="Next">
        <span className="material-icons" style={{ fontSize: 20 }}>arrow_forward_ios</span>
      </Arrow>
    </Container>
  );
};
