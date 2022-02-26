import styled from "styled-components";

import pageBackgroundImg from "../../assets/png/BackgroundLogin.png";
import logoImg from "../../assets/png/Logo.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 115px;

  background-image: url(${pageBackgroundImg});
  background-size: cover;
  background-position: center;

  @media (max-width: 560px) {
    padding: 0 30px; 
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 400px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.div`
  width: 104px;
  height: 36px;

  background-image: url(${logoImg});
  background-size: cover;
  background-position: center;

  margin-right: 16px;
`;

export const Title = styled.h2`
  font-family: "Heebo", sans-serif;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;
  color: white;
`;

export const WrapperForm = styled.div`
  width: 100%;
  height: 136px;

  margin-top: 50px;
`;

export const Error = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.4);

  > span {
    color: rgba(255, 255, 255, 1);
    font-family: "Heebo", sans-serif;
    font-weight: 700;
    font-size: 1rem;
  }
`;
