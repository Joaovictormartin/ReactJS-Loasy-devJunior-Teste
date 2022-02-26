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
  width: 65%;
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

export const inputStyle = {
  fontFamily: "Heebo",
  fontWeight: 400,
  fontSize: 14,
  backgroundColor: "transparent",
  color: "rgba(255, 255, 255, 1)",
};
