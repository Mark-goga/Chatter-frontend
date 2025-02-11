import {Link} from 'react-router-dom';
import Auth from './Auth';
import {useCreateUser} from '../../hooks/useCreateUser';
import React, {useState} from "react";
import {extractErrorMessage} from "../../utils/errors";
import useLogin from "../../hooks/useLogin";
import AuthInput from "./AuthInput";
import AuthSvg from "./AuthSvg";
import {MdOutlineDriveFileRenameOutline} from "react-icons/md";

interface SignupRequest {
  email: string;
  password: string;
}

const Signup = () => {
  const [createUser] = useCreateUser();
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string>('');
  const {login} = useLogin();

  const handleSubmit = async ({ email, password }: SignupRequest) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            username,
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
    <Auth
      onSubmit={handleSubmit}
      submitLabel={'Sign up'}
      error={error}
      extraFields={[
        <>
          <AuthSvg><MdOutlineDriveFileRenameOutline/></AuthSvg>
          <AuthInput
            value={username}
            placeholder={'enter your username'}
            type={'text'}
            handleChange={(e) => setUsername(e.target.value)}
          />
        </>
      ]}
    >
      <Link to={'/login'} className='text-text text-center underline'>
        <p>login</p>
      </Link>
    </Auth>
  );
};
export default Signup;