import React from 'react';
import styled from 'styled-components';
import backIcon from '../../assets/backIcon.svg';

interface HeaderProps {
  headerTitle: string;
}

const Header = ({ headerTitle }: HeaderProps) => {
  return (
    <div>
      <CreateRoomTitle>
        <img src={backIcon.src} alt="backIcon" />
        <div>{headerTitle}</div>
      </CreateRoomTitle>
    </div>
  );
};

export default Header;

const CreateRoomTitle = styled.div`
  display: flex;
  align-items: center;
`;
