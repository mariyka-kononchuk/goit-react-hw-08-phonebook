import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';
import { Name } from './UserMenu.styled.jsx'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { AccountCircle, Logout} from '@mui/icons-material';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);

    return (
        <div>
            <IconButton  disabled color="primary">
                <AccountCircle />
            </IconButton>
            <Name startIcon={<AccountCircle />}>Welcome, {name}</Name>
            <Button
                variant="outlined"
                size="small"
                type="button"
                onClick={() => dispatch(logOut())}
                endIcon={<Logout />}>
                Log out
            </Button>
        </div>
    )
}
    

