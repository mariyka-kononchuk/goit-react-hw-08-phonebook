import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
    margin-right: 20px;
    color: rgba(39, 164, 236);

    font-weight: 600;
    font-size: 20px;
    line-height: 1.475;

    &.activeLink {
    color: rgb(4, 109, 165);
  }
  `
export const StyledNav = styled.nav`
color: rgba(39, 164, 236,0);
    /* display: flex;
    justify-content:right;
    border-bottom: solid 1px pink; */
  `