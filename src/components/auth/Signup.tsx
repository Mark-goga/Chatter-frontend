import { Link } from 'react-router-dom';
import { Link as MUiLink } from '@mui/material';
import Auth from './Auth';
import { useCreateUser } from '../../hooks/useCreateUser';

const Signup = () => {
  const [createUser] = useCreateUser();

  const handleSubmit = async ({ email, password }:
                              { email: string, password: string }) => {
    try {
      const response = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
          },
        },
      });
    } catch (e) {
      console.log('goga error', e);
    }
  };

  return (
    <Auth onSubmit={handleSubmit}
          submitLabel={'Sign up'}>
      <Link to={'/login'} style={{ alignSelf: 'center' }}>
        <MUiLink>login</MUiLink>
      </Link>
    </Auth>
  );
};
export default Signup;