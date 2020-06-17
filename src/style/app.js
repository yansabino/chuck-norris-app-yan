import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import theme from "./theme";
import { device } from "./Responsive/devices";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0;
  z-index: 0;
  background: #fffae5;
  font-family: "Press Start 2P", cursive;
  min-height: 100vh;

  @media ${device.mobileS} {
    max-width: 374px;
  }
  @media ${device.mobileM} {
    max-width: 424px;
  }
  @media ${device.mobileL} {
    max-width: 767px;
  }
  @media ${device.tablet} {
    max-width: 1023px;
  }
  @media ${device.laptop} {
    max-width: 1687px;
  }
  @media ${device.laptopL} {
    max-width: 2559px;
  }
  @media ${device.desktop} {
    max-width: 3500px;
  }
`;

export const StyledTitle = styled.h1`
  color: #f15a24;
  text-align: center;
  margin-top: 50px;
  text-shadow: 0.1em 0.1em 0.2em #744439;

  @media ${device.mobileS} {
    font-size: 13px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.mobileL} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 27px;
  }
  @media ${device.laptop} {
    font-size: 35px;
  }
  @media ${device.laptopL} {
    font-size: 50px;
  }
  @media ${device.desktop} {
    font-size: 60px;
  }
`;

export const StyledButton = withStyles({
  root: {
    background: "#F15A24",
    color: "#FFFAE5",
    margin: "0 20px 10px 5px",
    padding: "10px",
    fontFamily: theme.typography.fontFamily[0],
    "&:hover": {
      border: "1px solid #F15A24",
      background: "#FFFAE5",
      color: "#F15A24",
    },
  },
})(Button);
