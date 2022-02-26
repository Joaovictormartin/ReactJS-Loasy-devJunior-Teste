import styled from "styled-components";

export const Container = styled.button`
  width: 288px;
  height: 160px;
  margin: 12px 10px;

  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 16px;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 16px 80px 0 rgba(84, 16, 95, 0.3);
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`;

export const Photo = styled.div`
  > img {
    width: 81px;
    height: 122px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  height: 128px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: rgba(51, 51, 51, 1);
`;

export const Author = styled.p`
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  line-height: 20px;
  color: rgba(171, 38, 128, 1);

  text-align: start;
`;

export const Description = styled.p`
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  text-align: left;
  line-height: 20px;
  color: rgba(153, 153, 153, 1);
`;
