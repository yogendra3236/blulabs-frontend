import { useEffect, useState } from "react";
import styled from "styled-components";

import getUserInfo from "../../services/dashboard";

const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
  position: sticky;
  top: 0px;
  height: 70px;
  z-index: 5;
  background-color: white;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h4`
  margin-left: 40px;
  margin-top: 10px;
`;

const ProfileName = styled.h5`
  margin-top: 10px;
  margin-right: 30px;
`;

const Navbar = ({ name = "" }) => {
  const [profileName, setProfileName] = useState("");

  useEffect(() => {
    (async () => {
      const { body } = await getUserInfo();
      const { name } = await body;
      setProfileName(name);
    })();
  }, []);

  return (
    <Wrapper>
      <Heading>{name}</Heading>
      <ProfileName>{profileName}</ProfileName>
    </Wrapper>
  );
};

export default Navbar;
