import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import theme from "./theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 0;
  background: #FFFAE5;
  font-family: 'Press Start 2P', cursive;
`;

export const StyledButton = withStyles({
  root: {
      background: '#F15A24',
      color: '#FFFAE5',
      margin: '0 20px 10px 5px',
      padding: '10px',
      fontFamily: theme.typography.fontFamily[0],
      '&:hover':{
          border: "1px solid #F15A24",
          background: '#FFFAE5',
          color: "#F15A24"
      }
  }
})(Button)



