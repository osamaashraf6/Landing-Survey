import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash , RiLockPasswordLine , MdEmail} from '../assets/icons/Icons';
import { AuthSocialButtons , TextField , Button } from '@/components/';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing in with:', { email, password, rememberMe });
  };

  const NavigateToSignUp = () => {
    navigate ('/signup');
  };

  const Header = () => (
    <header className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-bold text-primary text-2xl">Survey</div>
          <div className="font-bold text-black text-2xl">Land</div>
        </div>
        <div>
          <span className="text-sm font-normal">Don't have account? </span>
          <Link to="/signup" className="text-sm text-primary font-medium">
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex bg-gray-50">
        <div className="w-full md:w-4/5 p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-5xl font-bold text-center text-primary mb-8">SIGN IN</h1>
            <AuthSocialButtons />
            <div className="text-center text-sm text-gray-600 mb-6">
              Or register using your email address
            </div>

            <form onSubmit={handleSubmit} className='text-center'>
              {/* Email input */}
             <TextField
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                icon={<MdEmail size={20} />}
                required
              />
              {/* Password input */}
              <TextField
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                icon={<RiLockPasswordLine size={20} />}
                rightIcon={
                  showPassword ? (
                    <FaEyeSlash size={20} onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEye size={20} onClick={togglePasswordVisibility} />
                  )
                }
                required
              />

              {/* Remember me and forgot password */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2 h-4 w-4 text-primary focus:ring-teal-400 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me?
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm text-primary">
                  Forgot password?
                </Link>
              </div>
              <Button size={"lg"} width={"1/2"} onClick={handleSubmit}>
                SIGN IN
              </Button>
            </form>
          </div>
        </div>
        <div className="hidden md:flex md:w-2/5 bg-primary text-white p-12 justify-center items-center">
          <div className="text-center p-1">
            <h2 className="text-5xl font-semibold mb-2">New to</h2>
            <h2 className="text-5xl font-semibold mb-2">SurveyLand?</h2>
            <h3 className="text-5xl font-semibold mb-8">Sign up here!</h3>
            <p className="mb-8 text-[1.20rem]">Become part of our community</p>            
            <Button variant={"secondary"} size={"md"} width={"1/2"} onClick={NavigateToSignUp}>
                Sign Up
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;