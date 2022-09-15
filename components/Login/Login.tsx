import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../library/store/user/actions';
import Logo from '../Logo/Logo';

export interface FormData {
  email: string;
  password: string;
  termsAccepted: boolean;
}

const Login = () => {
  const [formdata, setFormData] = React.useState<FormData>({
    email: '',
    password: '',
    termsAccepted: false,
  });
  const [emailError, setEmailError] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<string>('');
  const [termsError, setTermsError] = React.useState<string>('');

  const [buttonTitle, setButtonTitle] = React.useState<string>('Sign in');

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formdata,
      [name]: name != 'termsAccepted' ? value : checked,
    });
  };

  const handleValidation = () => {
    let formIsValid = true;

    if (
      !formdata.email.match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      formIsValid = false;
      setEmailError('Email Not Valid');
      return false;
    } else {
      setEmailError('');
      formIsValid = true;
    }

    if (!formdata.password.match(/^[a-zA-Z]{4,22}$/)) {
      formIsValid = false;
      setPasswordError(
        'Only Letters and length must best min 8 Chracters and Max 22 Chracters'
      );
      return false;
    } else {
      setPasswordError('');
      formIsValid = true;
    }
    if (!formdata.termsAccepted) {
      setTermsError('Please tick the checkbox if you want to proceed');
      return false;
    } else {
      setTermsError('');
    }
    return formIsValid;
  };

  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (handleValidation()) {
      setButtonTitle('Signing in...');
      dispatch(
        userLogin({ email: formdata.email, password: formdata.password })
      );
    }
  };

  return (
    <div className="row d-flex justify-content-center w-100 loginform">
      <div className="col-md-12">
        <div className="mb-4">
          <Logo />
        </div>
        <h6 className="mb-4">Hello there, Sign in to continue</h6>
        <form id="loginform" onSubmit={handleOnSubmit}>
          <div className="form-group mb-3">
            <label className="mb-2">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              onChange={(event) => handleOnChange(event)}
            />
            <small id="emailHelp" className="text-danger form-text">
              {emailError}
            </small>
          </div>
          <div className="form-group mb-3">
            <label className="mb-2">Password</label>

            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(event) => handleOnChange(event)}
            />
            <div
              className="eye_icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-slash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              )}
            </div>
            <small id="passworderror" className="text-danger form-text">
              {passwordError}
            </small>
          </div>
          <div className="form-group form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="termsAccepted"
              onChange={(event) => handleOnChange(event)}
            />
            <label className="form-check-label">
              By creating or logging into an account, you are aggreeing with our{' '}
              <a href="">
                <b>Terms and Conditions</b>
              </a>{' '}
              and{' '}
              <a href="">
                <b>Privacy Policy</b>
              </a>{' '}
            </label>
            <small id="passworderror" className="text-danger form-text">
              {termsError}
            </small>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={buttonTitle === 'Signing in...'}
          >
            {buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
