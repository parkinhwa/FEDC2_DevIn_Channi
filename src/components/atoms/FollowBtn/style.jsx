import styled from 'styled-components';

export const FollowBtn = styled.button`
  width: 4rem;
  height: 2.5rem;
  margin-left: auto;
  border: none;
  border-radius: 2rem;
  color: ${({ theme }) => theme.color.backMain};
  background-color: ${({ theme }) => theme.color.highlight};
  &:hover {
    color: ${({ theme }) => theme.color.textSecond};
    background-color: ${({ theme }) => theme.color.backSub};
  }
`;

export const unFollowBtn = styled.button`
  width: 4rem;
  height: 2.5rem;
  margin-left: auto;
  border: none;
  border-radius: 2rem;
  color: ${({ theme }) => theme.color.textSecond};
  background-color: ${({ theme }) => theme.color.backSub};
`;