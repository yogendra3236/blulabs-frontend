import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const Wrapper = styled.div`
  margin-left: 50%;
  margin-top: 200px;
`;

const Loader = () => {
  return (
    <Wrapper>
      <ClipLoader />
    </Wrapper>
  );
};

export default Loader;
