import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='' autoComplete="off">
                <label className=''>
                        <span className=''>Name</span>
                        <input
                            className=''
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            // required
                        />
                    </label>
                    <label className=''>
                        <span className=''>Email</span>
                        <input
                            className=''
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            // required
                        />
                </label>
                <label className=''>
                        <span className=''>Password</span>
                        <input
                            className=''
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </label>
                    <button className='' type="submit">Register</button>
                </form>
        </div>
    )
}