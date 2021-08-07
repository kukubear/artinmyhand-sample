import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { IoIosArrowBack } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { VscListSelection } from 'react-icons/vsc';
const NavWrapper = styled.div`
  width: calc(100% - 16px);
  height: 56px;
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBlock = styled.div`
  font-size: 21px;
  font-weight: 900;
  text-align: center;
  color: ${palette.orange[0]};
  margin-left: ${(props) => (props.left ? 0 : '16px')};
`;

const LeftBlock = styled.div`
  width: 59px;
`;
const BackButton = styled.div``;
const RightBlock = styled.div`
  width: 59px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin-right: 13px;
`;
const Navbar = ({ back = true }) => {
  const backStyles = { marginLeft: '8px' };
  return (
    <NavWrapper>
      {back && (
        <LeftBlock>
          <IoIosArrowBack size={18} style={backStyles} />
        </LeftBlock>
      )}
      <LogoBlock left={back}>AMH</LogoBlock>
      <RightBlock>
        <VscListSelection size={24} />
        {!back && <BiSearch size={24} />}
      </RightBlock>
    </NavWrapper>
  );
};

export default Navbar;
