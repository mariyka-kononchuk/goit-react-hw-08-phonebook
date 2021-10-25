import styled from '@emotion/styled'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
    color: rgb(39, 164, 236);

    font-weight: 600;
    font-size: 20px;
    line-height: 1.475;

    border-bottom: solid 1px rgb(39, 164, 236);

    &.activeLink {
    color: rgb(4, 109, 165);
  }
  `