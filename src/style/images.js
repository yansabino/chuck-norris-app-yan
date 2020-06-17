import styled from "styled-components";
import { device } from "./Responsive/devices";

export const StyledImage = styled.img`
  margin: 50px auto;

  @media ${device.mobileM} {
    width: 350px;
    height: 262px;
  }
  @media ${device.mobileS} {
    width: 300px;
    height: 225px;
  }
  @media ${device.mobileL} {
    width: 400px;
    height: 300px;
  }
  @media ${device.tablet} {
    width: 500px;
    height: 375px;
  }
  @media ${device.laptop} {
    width: 600px;
    height: 450px;
  }
  @media ${device.laptopL} {
    width: 700px;
    height: 525px;
  }
  @media ${device.desktop} {
    width: 800px;
    height: 600px;
  }
`;
