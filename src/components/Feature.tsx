import React from "react";
import styled from "styled-components";
import { featureData } from "../data/FeatureData";
import { Badge } from "./Badge";
import Ads1 from "../assets/ads-images/home-ads/home-ads1.jpeg";
import Ads2 from "../assets/ads-images/home-ads/home-ads2.jpeg";

const Container = styled.div<{ width: string }>`
  height: 500px;
  margin-top: 15px;
  width: ${(prop) => prop.width};
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftBox = styled.div<{ width: string; bg: string }>`
  height: 50%;
  width: ${(prop) => prop.width};
  position: relative;
  background-image: url(${(prop) => prop.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  color: #f6f6f6;
  cursor: pointer;
  &:hover {
    .title {
      color: red;
    }
    .des {
      transition: 0.3s;
      font-size: 13px;
      padding: 10px 0px;
      opacity: 1;
    }
  }
  &:not(:hover) {
    .des {
      transition: 0.3s;
    }
  }
`;

const Title = styled.div`
  font-weight: bold;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 40%);
  padding: 10px 0px;
`;

const Des = styled.div`
  text-shadow: 1px 1px 1px rgb(0 0 0 / 40%);
  font-size: 0px;
  opacity: 0;
`;

const DateLabel = styled.div`
  font-size: 10px;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 40%);
`;

const RightBox = styled.div<{ bg: string }>`
  height: 50%;
  width: 100%;
  background-image: url(${(prop) => prop.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const Feature: React.FC = () => {
  return (
    <Wrapper className="container">
      <Container width="69.5%">
        {featureData.map((e) => (
          <LeftBox width={e.width} bg={e.image} key={e.title}>
            <Badge content={e.badge} color={e.badgeColor} />
            <Title className="title">{e.title}</Title>
            <Des className="des">{e.des}</Des>
            <DateLabel>{e.date}</DateLabel>
          </LeftBox>
        ))}
      </Container>
      <Container width="29.5%">
        <RightBox bg={Ads1} />
        <RightBox bg={Ads2} />
      </Container>
    </Wrapper>
  );
};
