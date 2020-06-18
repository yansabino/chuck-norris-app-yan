import React from "react";
import { StyledButton } from "../style/app";

function CategoryList(props) {
  return (
    <StyledButton onClick={props.onClickCategory}>
      {props.categoriesRendered}
    </StyledButton>
  );
}

export default CategoryList;