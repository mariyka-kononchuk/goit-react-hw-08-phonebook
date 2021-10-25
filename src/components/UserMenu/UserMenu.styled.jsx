import styled from '@emotion/styled'

export const UserMenu = styled.div`
    display:flex;
  `
export const Name = styled.span`
    margin-right: 20px;
    color: grey;

    font-weight: 600;
    font-size: 16px;
    line-height: 1.375;
  `
 export const LogOutButton = styled.button`
    padding: 4px 8px;
    border-radius: 2px;
    background-color: rgb(4, 109, 165);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    /* margin-left: 0px; */
    /* margin-right: auto; */
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    line-height: 18px;
    font-style: normal;
    font-weight: 500;
    min-width: 100px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      &:hover, focus {
        background-color: #a5a1a4;
      }
`