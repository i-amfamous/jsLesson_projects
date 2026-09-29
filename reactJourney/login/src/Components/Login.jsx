import './Login.css'

const SOCIALS = [
  {
    label: 'Continue with Google',
    path: 'M21.35 11.1h-9.18v2.98h5.28c-.24 1.4-1.66 4.1-5.28 4.1-3.18 0-5.77-2.63-5.77-5.87s2.59-5.87 5.77-5.87c1.8 0 3.01.77 3.7 1.43l2.54-2.44C17.4 3.86 15.28 2.8 12.17 2.8 6.9 2.8 2.75 6.95 2.75 12.2s4.15 9.4 9.42 9.4c5.43 0 9.03-3.81 9.03-9.17 0-.62-.07-1.09-.15-1.49z',
  },
  {
    label: 'Continue with Facebook',
    path: 'M13.5 21v-7.2h2.4l.36-2.79H13.5V9.14c0-.81.22-1.36 1.38-1.36h1.48V5.24c-.26-.03-1.13-.11-2.15-.11-2.13 0-3.58 1.3-3.58 3.68v2.2H8.24v2.79h2.39V21h2.87z',
  },
  {
    label: 'Continue with X',
    path: 'M17.53 3h2.6l-5.68 6.49L21.2 21h-5.2l-4.08-5.33L7.15 21H4.54l6.07-6.94L4 3h5.33l3.69 4.87L17.53 3zm-.91 16.2h1.44L8.4 4.71H6.86l9.76 14.49z',
  },
]

const SocialButtons = () => (
  <div className="socialRow">
    {SOCIALS.map(({ label, path }) => (
      <button key={label} type="button" className="socialBtn" aria-label={label}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={path} fill="currentColor" />
        </svg>
      </button>
    ))}
  </div>
)

export { SocialButtons }

const Login = ({ onCreateAccount }) => {
  return (
    <div className="authFormInner">
      <h1 className="formTitle">Login</h1>

      <SocialButtons />
      <p className="formDivider">or use your email for registration</p>

      <form className="formStack" onSubmit={(e) => e.preventDefault()}>
        <input className="field" type="email" name="email" id="login-email" placeholder="Email" />
        <input
          className="field"
          type="password"
          name="password"
          id="login-password"
          placeholder="Password"
        />
        <button type="submit" className="submitBtn">
          Sign In
        </button>
      </form>

      <p className="switchText">
        Don&apos;t have an account?{' '}
        <button type="button" className="switchLink" onClick={onCreateAccount}>
          Create Account
        </button>
      </p>
    </div>
  )
}

export default Login
