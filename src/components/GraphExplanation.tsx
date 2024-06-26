// GraphExplanation.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const ExplanationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
  z-index: 1000;
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
`;

const Description = styled.p`
  font-size: 16px;
  color: white;
  text-align: center;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const ClickMessage = styled.p`
  font-size: 14px;
  color: #1DB954;
  margin-top: 20px;
  animation: ${pulse} 2s infinite;
  cursor: pointer;
`;

interface GraphExplanationProps {
  onClose: () => void;
}

const GraphExplanation: React.FC<GraphExplanationProps> = ({ onClose }) => {
  return (
    <ExplanationContainer onClick={onClose}>
      <Title>Graph Explanation</Title>
      <Description>
        The links between songs represent their similarity based on audio features.
        <br />
        The color of the links indicates the degree of similarity:
        <br />
        <strong style={{ color: '#1DB954' }}>Green</strong> links represent highly similar songs.
      </Description>
      <ClickMessage>Click anywhere to remove the tutorial</ClickMessage>
    </ExplanationContainer>
  );
};

export default GraphExplanation;