import styled from "styled-components";

import quotes from "../../assets/png/Quotes.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media(max-width: 1120px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ButtonClose = styled.button`
  position: fixed;
  top: 0;
  right: 0;

  margin: 20px;
  background-color: transparent;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Photo = styled.div`
  width: 21.8rem;
  height: 32.8rem;
  min-width: 300px;
  position: relative;

  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 0 12px 18px 0 rgba(0, 0, 0, 0.3);
  }

  @media(max-width: 1120px) {
    position: absolute;
    top: 0;
    margin-top: 24px;
  }
`;

export const Content = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 48px;

  > div {
    margin-bottom: 16px;
    align-items: flex-start;
  }

  @media(max-width: 1120px) {
    margin-top: 65rem;
  }

  @media(max-width: 560px) {
    margin-top: 63rem;
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 28px;
  line-height: 40px;
  color: rgba(51, 51, 51, 1);
`;

export const Author = styled.p`
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: rgba(171, 38, 128, 1);
`;

export const Info = styled.div`
  margin-top: 32px;
  width: 100%;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const TitleInfo = styled.h3`
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
  line-height: 20px;
  color: rgba(51, 51, 51, 1);

  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const InfoLabel = styled.span`
  width: 40%;

  font-family: "Heebo", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
  line-height: 20px;
  color: rgba(51, 51, 51, 1);
`;

export const InfoValue = styled.span`
  width: 60%;

  font-family: "Heebo", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: right;
  color: rgba(153, 153, 153, 1);
`;

export const Review = styled.div`
  width: 100%;
  margin-top: 25px;
`;

export const TitleReview = styled.h3`
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
  line-height: 20px;
  color: rgba(51, 51, 51, 1);

  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  p {
    font-family: "Heebo", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    text-indent: 2em;
    text-align: justify;
    color: rgba(51, 51, 51, 1);
  }
`;

export const IconQuotes = styled.div`
  width: 17px;
  height: 14px;

  position: absolute;

  background-image: url(${quotes});
  background-size: cover;
  background-position: center;
`;