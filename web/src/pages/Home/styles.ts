import styled from 'styled-components';

import background from '../../assets/home-background.svg';

export const Container = styled.div`
  height: 100vh;

  background: url(${background}) no-repeat 800px bottom;

  @media (max-width: 900px) {
    background: url(${background}) no-repeat;
    background-size: 400px;
    background-position-y: 150px;
    background-position-x: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }

  header {
    margin: 48px 0 0;

    @media (max-width: 900px) {
      margin: 48px auto 0;
    }
  }

  main {
    flex: 1;
    max-width: 560px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 900px) {
      align-items: center;
      margin-top: 200px;
    }

    h1 {
      font-size: 54px;
      color: #322153;

      @media (max-width: 900px) {
        font-size: 42px;
      }
    }

    p {
      font-size: 24px;
      margin-top: 24px;
      line-height: 38px;

      @media (max-width: 900px) {
        font-size: 24px;
      }
    }

    a {
      width: 100%;
      max-width: 360px;
      height: 72px;
      background: #34cb79;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.2s;

      display: flex;
      align-items: center;
      overflow: hidden;

      margin-top: 40px;

      &:hover {
        background: #2fb86e;
        box-shadow: 4px 4px 8px #ababab;
        transform: translate(-2px, -2px);
      }

      span {
        display: block;
        background: rgba(0, 0, 0, 0.08);
        width: 72px;
        height: 72px;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
        svg {
          color: #fff;
          width: 20px;
          height: 20px;
        }
      }

      strong {
        flex: 1;
        text-align: center;
        color: #fff;
      }
    }
  }
`;
