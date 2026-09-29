import './Login.css'
import { SocialButtons } from './Login'

const SignUp = ({ onLogin }) => {
  return (
    <div className="authFormInner">
      <h1 className="formTitle">Create Account</h1>

      <SocialButtons />
      <p className="formDivider">or use your email for registration</p>

      <form className="formStack" onSubmit={(e) => e.preventDefault()}>
        <input className="field" type="text" name="name" id="signup-name" placeholder="Name" />
        <input
          className="field"
          type="email"
          name="email"
          id="signup-email"
          placeholder="Email"
        />
        <input
          className="field"
          type="password"
          name="password"
          id="signup-password"
          placeholder="Password"
        />
        <button type="submit" className="submitBtn">
          Sign Up
        </button>
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
