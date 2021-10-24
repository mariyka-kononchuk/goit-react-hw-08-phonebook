import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import  authSelectors  from '../../redux/auth/auth-selectors';
// import defaultAvatar from 

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    // const avatar = defaultAvatar;

    return (
        <div>
            <img src="" alt="" width="32" />
            <span>Welcome, {name}</span>
            <button type="button" onClick ={() =>dispatch(logOut())}> Log out</button>
        </div>
    )
}
    

