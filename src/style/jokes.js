import styled from "styled-components";
import { device } from "./Responsive/devices"

export const JokeContainer = styled.div`
  margin: 0 auto;
  width: 800px;
  height: auto;

  @media ${device.mobileS} {
    width: 270px;
  }
  @media ${device.mobileM} {
    width: 320px;
  }
  @media ${device.mobileL} {
    width: 375px;
  }
  @media ${device.desktopL} {
    width: 800px;
  }
`;

export const StyledJoke = styled.p`
  border: 2px solid black;
  padding: 10px;
  line-height: 25px;

  @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
  }
`
