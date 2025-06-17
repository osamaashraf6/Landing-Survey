import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FcGoogle } from '../../assets/icons/Icons';
import IconButton from '../UI/icon_button';

const AuthSocialButtons = () => {

    const handleGoogleSignIn = () => {
    console.log('Google sign in');
  };

  const handleGithubSignIn = () => {
    console.log('Github sign in');
  };

  return (
    <div className="flex justify-center space-x-6 mb-6">
      <IconButton
        icon={<FcGoogle />}
        ariaLabel="Sign in with Google"
        onClick={handleGoogleSignIn}
      />
      <IconButton
        icon={<FaGithub />}
        ariaLabel="Sign in with GitHub"
        onClick={handleGithubSignIn}
      />
    </div>
  );
};

AuthSocialButtons.propTypes = {
  onGoogleSignIn: PropTypes.func.isRequired,
  onGithubSignIn: PropTypes.func.isRequired
};

export default AuthSocialButtons;