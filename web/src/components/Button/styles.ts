import styled from 'styled-components';

export const Container = styled.button`
  width: 260px;
  height: 56px;
  background: #34cb79;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  align-self: flex-end;
  margin-top: 40px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: #2fb86e;
    box-shadow: 4px 4px 8px #ababab;
    transform: translate(-2px, -2px);
  }
`;
