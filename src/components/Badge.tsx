import React from 'react';
import styled from 'styled-components';

const BadgeBox = styled.div`
  position: absolute;
  top: 10px;
  left: 0px;
  display: flex;
  align-items: center;
`;

const BadgeShape = styled.div<{ color: string }>`
  width: 0px;
  height: 0px;
  border-right: 15px solid transparent;
  border-bottom: 40px solid ${(prop) => prop.color};
`;

const BadgeContent = styled.div<{ color: string }>`
  color: white;
  width: fit-content;
  padding: 0px 10px;
  height: 40px;
  background: ${(prop) => prop.color};
  display: flex;
  align-items: center;
`;

interface BadgeProps {
  content: string;
  color: string;
}

export const Badge: React.FC<BadgeProps> = ({ content, color }) => {
  return (
    <BadgeBox>
      <BadgeContent color={color}>{content}</BadgeContent>
      <BadgeShape color={color} />
    </BadgeBox>
  );
};
