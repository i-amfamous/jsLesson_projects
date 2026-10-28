import { useEffect, useState } from 'react'
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

const EYE = 'M1 8s2.6-4.5 7-4.5S15 8 15 8s-2.6 4.5-7 4.5S1 8 1 8Z'

const PasswordToggle = ({ targetId }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const input = document.getElementById(targetId)
    if (input) input.type = visible ? 'text' : 'password'
  }, [visible, targetId])

  return (
    <button
      type="button"
      className="fieldToggle"
      onClick={() => setVisible((v) => !v)}
      aria-label={visible ? 'Hide password' : 'Show password'}
    >
      {visible ? (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M1 8s2.6-4.5 7-4.5c1.1 0 2.1.3 3 .7M15 8s-2.6 4.5-7 4.5c-1 0-1.9-.2-2.7-.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <circle cx="8" cy="8" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.3" />
          <path
            d="M2.5 2.5l11 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d={EYE} fill="none" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="8" cy="8" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      )}
    </button>
  )
}

const RULES = [(v) => v.length >= 8, (v) => /[A-Z]/.test(v), (v) => /[0-9]/.test(v)]

const METER_LABELS = [
  'Use 8+ characters with a number and a capital letter',
  'Too weak',
  'Weak password',
  'Good password',
  'Strong password',
]

const PasswordMeter = ({ targetId }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const input = document.getElementById(targetId)
    if (!input) return
    const onInput = (e) => setValue(e.target.value)
    input.addEventListener('input', onInput)
    return () => input.removeEventListener('input', onInput)
  }, [targetId])

  const passed = RULES.filter((test) => test(value)).length
  const level = value.length === 0 ? -1 : Math.floor((passed / RULES.length) * 3)

  return (
    <div className="meter" data-level={level}>
      <div className="meterBars">
        {[0, 1, 2].map((i) => (
          <span key={i} className="meterBar" />
        ))}
      </div>
      <p className="meterHint">{METER_LABELS[level + 1]}</p>
    </div>
  )
}

export { SocialButtons, PasswordToggle, PasswordMeter }

const Login = ({ onCreateAccount }) => {
  return (
    <div className="authFormInner">
      <h1 className="formTitle">Login</h1>

      <SocialButtons />
      <p className="formDivider">or use your email for registration</p>

      <form className="formStack" onSubmit={(e) => e.preventDefault()}>
        <div className="fieldGroup">
          <label className="fieldLabel" htmlFor="login-email">
            Email address
          </label>
          <input
            className="field"
            type="email"
            name="email"
            id="login-email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className="fieldGroup">
          <div className="labelRow">
            <label className="fieldLabel" htmlFor="login-password">
              Password
            </label>
            <a className="labelLink" href="#forgot">
              Forgot password?
            </a>
          </div>
          <div className="fieldWrap">
            <input
              className="field hasToggle"
              type="password"
              name="password"
              id="login-password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            <PasswordToggle targetId="login-password" />
          </div>
        </div>

        <label className="checkRow" htmlFor="login-remember">
          <input type="checkbox" id="login-remember" name="remember" className="checkBox" />
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
          <span className="checkText">Keep me signed in</span>
        </label>

        <button type="submit" className="submitBtn block">
          Sign In
        </button>

        <div className="dividerOr">
          <span className="dividerLine" />
          <span className="dividerLabel">or</span>
          <span className="dividerLine" />
        </div>

        <button type="button" className="ghostBtn" >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M8 1.5 2.5 3.6v3.6c0 3.1 2.3 6 5.5 6.8 3.2-.8 5.5-3.7 5.5-6.8V3.6L8 1.5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
          Sign in securely with Passkey
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
