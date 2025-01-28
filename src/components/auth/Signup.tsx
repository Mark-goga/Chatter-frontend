import {Link} from 'react-router-dom';
import Auth from './Auth';
import {useCreateUser} from '../../hooks/useCreateUser';
import {useState} from "react";
import {extractErrorMessage} from "../../utils/errors";
import useLogin from "../../hooks/useLogin";

interface SignupRequest {
  email: string;
  password: string;
}

const Signup = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState<string>('');
  const {login} = useLogin();

  const handleSubmit = async ({ email, password }: SignupRequest) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
          },
        },
      });
      await login({email, password})
      setError('');
    } catch (e) {
      const errorMessage = extractErrorMessage(e);
      if (errorMessage) {
        setError(errorMessage);
        return;
      }
      setError('Unknown error occurred.');
    }
  };

  return (
    <Auth onSubmit={handleSubmit}
          submitLabel={'Sign up'}
          error={error}
    >
      <Link to={'/login'} className='text-text text-center underline'>
        <p>login</p>
      </Link>
    </Auth>
  );
};
export default Signup;