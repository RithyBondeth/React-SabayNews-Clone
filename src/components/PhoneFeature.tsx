import React, { useState } from 'react';
import styled from 'styled-components';
import { Badge } from './Badge';
import { featureData } from '../data/FeatureData';

const Container = styled.div`
  height: 350px;
  position: relative;
  background: black;
  @media (max-width: 575px) {
    height: 280px;
  }
`;

const ImageBox = styled.img`
  height: 100%;
  width: 100%;
  padding: 0px 10%;
`;

const Title = styled.div`
  padding: 10px;
  position: absolute;
  bottom: 10px;
  left: 10%;
  right: 10%;
  color: white;
  text-align: center;
`;

const Arrow = styled.span<{ direction: string }>`
  position: absolute;
  right: ${(prop) => prop.direction === 'right' && '15px'};
  left: ${(prop) => prop.direction === 'left' && '45px'};
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  cursor: pointer;
`;

export const PhoneFeature: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleForwardSlide = (): void => {
    if (index < featureData.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleBackSlide = (): void => {
    if (index === 0) {
      setIndex(featureData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <Container>
      <Arrow direction="left" className="material-icons" onClick={handleBackSlide}>
        arrow_back_ios
      </Arrow>
      <Badge content={featureData[index].badge} color={featureData[index].badgeColor} />
      <ImageBox src={featureData[index].image} alt={featureData[index].title} />
      <Title>{featureData[index].title}</Title>
      <Arrow direction="right" className="material-icons" onClick={handleForwardSlide}>
        arrow_forward_ios
      </Arrow>
    </Container>
  );
};
