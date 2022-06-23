import React from 'react';
import styled from 'styled-components/macro';

import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    const handleMobileMenuButtonClick = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <header>
            <SuperHeader/>
            <MainHeader>
                <Side>
                    <Logo/>
                </Side>
                <DesktopNav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </DesktopNav>
                <MobileActions>
                    <MobileMenuButton >
                        <Icon id="shopping-bag" strokeWidth={1}/>
                    </MobileMenuButton>
                    <MobileMenuButton >
                        <Icon id="search" strokeWidth={1}/>
                    </MobileMenuButton>
                    <MobileMenuButton onClick={handleMobileMenuButtonClick}>
                        <Icon id="menu" strokeWidth={1}/>
                    </MobileMenuButton>
                </MobileActions>

                <Side/>

            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};
const Side = styled.div`
  flex: 1;
  @media ${props => props.theme.QUERIES.tabletAndDown} {
   &:last-of-type {
     display: none;
   }
  }
`;
const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  
  border-bottom: 1px solid ${props => props.theme.COLORS.gray[300]};
  @media ${props => props.theme.QUERIES.tabletAndDown} {
    border-top: 4px solid ${props => props.theme.COLORS.gray[900]};
  }
  
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
 
  @media ${props => props.theme.QUERIES.tabletAndDown} {
   display: none;
  }
  
`;



const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.theme.COLORS.gray[900]};
  font-weight: ${props => props.theme.WEIGHTS.medium};

  &:first-of-type {
    color: ${props => props.theme.COLORS.secondary};
  }
`;

const MobileActions = styled.nav`
  display: none;
  @media ${props => props.theme.QUERIES.tabletAndDown} {
    flex: 1;
    display: flex;
    gap: 48px;
    margin: 0px 48px;
    justify-content: flex-end;
  }
  
  
`;

const MobileMenuButton = styled(UnstyledButton)`
    
`

export default Header;
