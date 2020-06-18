import styled from "styled-components";
import { device } from "./Responsive/devices";

export const JokeContainer = styled.div`
  margin: 0 auto;
  height: auto;
`;

export const StyledJoke = styled.p`
  border: 2px solid black;
  padding: 10px;
  line-height: 25px;

  @media ${device.mobileS} {
    font-size: 10px;
    width: 270px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
    width: 320px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
    width: 375px;
  }
  @media ${device.tablet} {
    font-size: 18px;
    width: 730px;
  }
  @media ${device.laptop} {
    font-size: 18px;
    width: 900px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
    width: 1400px;
  }
  @media ${device.desktop} {
    font-size: 18px;
    width: 1600px;
  }
`;
