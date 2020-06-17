import React from "react";
import styled from "styled-components";
import { Loading, Triangle } from "../style/loader";

const StyledLoader = styled.div`
  margin-top: 75px;
`;

function Loader() {
  return (
    <StyledLoader>
      <>
        <svg width="150" height="150" viewBox="0 0 40 60">
          <Triangle
            fill="none"
            stroke="#0961B2"
            stroke-width="1"
            points="16,1 32,32 1,32"
          />
          <Loading x="0" y="45" fill="#0961B2">
            Loading...
          </Loading>
        </svg>
      </>
    </StyledLoader>
  );
}

export default Loader;
