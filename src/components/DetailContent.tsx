import React from 'react';
import styled from 'styled-components';
import { ContentItem } from '../types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-bottom: 20px;
`;

const Header = styled.div`
  padding: 10px;
  border-bottom: 4px solid #ff0000;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  margin: 5px 0px;
`;

const ImageBox = styled.img`
  height: 100%;
  width: 60px;
  padding: 5px;
`;

const TitleBox = styled.div`
  height: 100%;
  padding: 5px 0px;
  font-size: 12px;
  @media (max-width: 1200px) {
    font-size: 10px;
  }
`;

interface DetailContentProps {
  list: ContentItem[];
  title: string;
}

export const DetailContent: React.FC<DetailContentProps> = ({ list, title }) => {
  return (
    <Container>
      <Header>{title}</Header>
      {list.map((e) => (
        <Box key={e.title}>
          <ImageBox src={e.image} alt={e.title} />
          <TitleBox>{e.title}</TitleBox>
        </Box>
      ))}
    </Container>
  );
};
