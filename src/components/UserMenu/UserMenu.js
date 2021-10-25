import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';
import { Name, LogOutButton } from './UserMenu.styled.jsx';
import { Button } from 'antd';
// import defaultAvatar from 

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    // const avatar = defaultAvatar;

    return (
        <UserMenu>
            <img src="" alt="" width="32" />
            <Name>Welcome, {name}</Name>
            <Button type="primary" onClick ={() =>dispatch(logOut())}>Log out</Button>
        </UserMenu>
    )
}
    

