'use client'
import React from 'react';
import { NavbarListItem, NavbarList, IconLink } from './styled';
import  MenuIcon from '../../images/menu_user_icon.svg';
import ProfileIcon from '../../images/profile_user_icon.svg';
import TeamIcon from '../../images/team_user_icon.svg';
import Image from 'next/image';

const StyledList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <NavbarList>{children}</NavbarList>;
  };

const StyledListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <NavbarListItem>{children}</NavbarListItem>;
  };


const NavList = () => {
    return (
        <StyledList>
            <StyledListItem>
              <IconLink>
                <Image src={MenuIcon} alt="Menu Icon" width="18" height="18" />
              </IconLink>
            </StyledListItem>
            <StyledListItem>
              <IconLink>
                <Image src={ProfileIcon} alt="Menu Icon" width="24" height="24" />
              </IconLink>
            </StyledListItem>
            <StyledListItem>
              <IconLink>
                <Image src={TeamIcon} alt="Menu Icon" width="24" height="24" />
              </IconLink>
            </StyledListItem>
        </StyledList>
    );
};

export default NavList;