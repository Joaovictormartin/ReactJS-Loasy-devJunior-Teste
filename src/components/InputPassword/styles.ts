import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: column;

  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 16px;
  background-color: rgba(0, 0, 0, 0.32);

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > div {
      width: 70%;

      display: flex;
      flex-direction: column;
    }
  }
`;

export const Label = styled.span`
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(255, 255, 255, 1);
  opacity: 50%;

  margin-bottom: 4px;
`;

export const Error = styled.div`
  width: 50%;
  margin-top: 24px;
  padding: 16px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.4);
  margin-left: -1rem;

  > span {
    color: rgba(255, 255, 255, 1);
    font-family: "Heebo", sans-serif;
    font-weight: 700;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  width: 85px;
  height: 36px;
  border-radius: 44px;
  margin-top: 2px ;
  background: rgba(255, 255, 255, 1);

  color: rgba(178, 46, 111, 1);
  font-family: "Heebo", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 20px;
`;

export const inputStyle = {
  fontFamily: "Heebo",
  fontWeight: 400,
  fontSize: 14,
  backgroundColor: "transparent",
  color: "rgba(255, 255, 255, 1)",
};
