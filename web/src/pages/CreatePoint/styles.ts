import styled, { css } from 'styled-components';

interface LiProps {
  selected?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 0 20px;
  }
`;

export const Header = styled.header`
  margin-top: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  a {
    color: #322153;
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
      color: #34cb79;
    }
  }
`;

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
  }

  fieldset {
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;
  }

  legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h2 {
      font-size: 24px;
    }

    span {
      font-size: 14px;
      font-weight: normal;
      color: #6c6c80;
    }
  }
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;

  div + div {
    margin-left: 24px;
  }

  @media (max-width: 900px) {
    flex-direction: column;

    div + div {
      margin-left: 0px;
    }
  }
`;

export const Field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  input {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;

    &::placeholder {
      color: #a0a0b2;
    }

    & + input {
      margin-left: 24px;
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }

  label {
    font-size: 14px;
    margin-bottom: 8px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const FieldCheck = styled.div`
  flex-direction: row;
  align-items: center;

  input[type='checkbox'] {
    background: #f0f0f5;
  }
`;

export const LeaftletContainer = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 8px;
  margin-bottom: 24px;

  > div {
    height: 350px !important;
  }
`;

export const ItemsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;
`;

export const Item = styled.li<LiProps>`
  background: #f5f5f5;
  border: 2px solid #f5f5f5;
  height: 180px;
  border-radius: 8px;
  padding: 32px 24px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      background: #e1faec;
      border: 2px solid #34cb79;
    `}

  span {
    flex: 1;
    margin-top: 12px;

    display: flex;
    align-items: center;
    color: #322153;
  }
`;
