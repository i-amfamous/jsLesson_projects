import './Login.css'
import { SocialButtons, PasswordToggle, PasswordMeter } from './Login'

const SignUp = ({ onLogin }) => {
  return (
    <div className="authFormInner">
      <h1 className="formTitle">Create Account</h1>

      <SocialButtons />
      <p className="formDivider">or use your email for registration</p>

      <form className="formStack" onSubmit={(e) => e.preventDefault()}>
        <div className="fieldRow">
          <div className="fieldGroup">
            <label className="fieldLabel" htmlFor="signup-name">
              First name
            </label>
            <input
              className="field"
              type="text"
              name="firstName"
              id="signup-name"
              placeholder="John"
              autoComplete="given-name"
            />
          </div>
          <div className="fieldGroup">
            <label className="fieldLabel" htmlFor="signup-lastname">
              Last name
            </label>
            <input
              className="field"
              type="text"
              name="lastName"
              id="signup-lastname"
              placeholder="Doe"
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="fieldGroup">
          <label className="fieldLabel" htmlFor="signup-email">
            Email address
          </label>
          <input
            className="field"
            type="email"
            name="email"
            id="signup-email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className="fieldGroup">
          <label className="fieldLabel" htmlFor="signup-password">
            Password
          </label>
          <div className="fieldWrap">
            <input
              className="field hasToggle"
              type="password"
              name="password"
              id="signup-password"
              placeholder="At least 8 characters"
              autoComplete="new-password"
            />
            <PasswordToggle targetId="signup-password" />
          </div>
          <PasswordMeter targetId="signup-password" />
        </div>

        <div className="fieldGroup">
          <label className="fieldLabel" htmlFor="signup-confirm">
            Confirm password
          </label>
          <div className="fieldWrap">
            <input
              className="field hasToggle"
              type="password"
              name="confirmPassword"
              id="signup-confirm"
              placeholder="Repeat your password"
              autoComplete="new-password"
            />
            <PasswordToggle targetId="signup-confirm" />
          </div>
        </div>

        <div className="fieldGroup">
          <label className="fieldLabel" htmlFor="signup-country">
            Country
          </label>
          <div className="selectWrap">
            <select className="field select" id="signup-country" name="country" defaultValue="">
              <option value="" disabled>
                Select your country
              </option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>India</option>
              <option>Nigeria</option>
              <option>Brazil</option>
              <option>Other</option>
            </select>
            <svg className="selectChevron" viewBox="0 0 12 8" aria-hidden="true">
              <path
                d="M1 1.5 6 6.5l5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <label className="checkRow" htmlFor="signup-terms">
          <input type="checkbox" id="signup-terms" name="terms" className="checkBox" />
          <span className="checkMark" aria-hidden="true">
            <svg viewBox="0 0 12 10">
              <path
                d="M1 5.2 4.2 8.4 11 1.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="checkText">
            I agree to the <a href="#terms">Terms of Service</a> and{' '}
            <a href="#privacy">Privacy Policy</a>
          </span>
        </label>

        <button type="submit" className="submitBtn block">
          Create Account
        </button>

        <p className="formNote">Free forever. No credit card required.</p>
      </form>

      <p className="switchText">
        Already have an account?{' '}
        <button type="button" className="switchLink" onClick={onLogin}>
          Login
        </button>
      </p>
    </div>
  )
}

export default SignUp
