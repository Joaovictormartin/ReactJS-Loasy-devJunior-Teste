import styled from "styled-components";

import pageBackgroundImg from "../../assets/png/BackgroundHome.png";
import logoImg from "../../assets/png/LogoBlack.png";
import logOutImg from "../../assets/png/LogOut.png";
import NextImg from "../../assets/png/Next.png";
import PrevImg from "../../assets/png/Prev.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${pageBackgroundImg});
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  width: 80%;
  height: 90vh;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 42px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
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
  color: rgba(51, 51, 51, 1);
`;

export const Name = styled.p`
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(51, 51, 51, 1);

  @media (max-width: 600px) {
    display: none;
  }
`;

export const IconLogout = styled.button`
  width: 32px;
  height: 32px;

  margin-left: 16px;

  background-image: url(${logOutImg});
  background-size: cover;
  background-position: center;
  background-color: transparent;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Footer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 24px 9 940px;

  @media( max-width: 560px) {
    justify-content: center;
  } 
`;

export const PageNumber = styled.span`
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(51, 51, 51, 1);
`;

export const IconPrev = styled.button`
  width: 32px;
  height: 32px;

  margin-left: 8px;
  background-color: transparent;
  background-image: url(${PrevImg});
  background-size: cover;
  background-position: center;

  @media (max-width: 560px) {
    margin: 0 8px;
  }
`;

export const IconNext = styled.button`
  width: 32px;
  height: 32px;

  margin-left: 8px;
  background-color: transparent;
  background-image: url(${NextImg});
  background-size: cover;
  background-position: center;
`;
