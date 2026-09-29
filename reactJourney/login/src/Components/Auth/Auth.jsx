import { useState } from 'react'
import Login from '../../Components/Login'
import SignUp from '../../Components/SignUp'
import './Auth.css'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="auth">
      <div className={`authCard ${isLogin ? 'isLogin' : 'isSignUp'}`}>
        <div className="authPanel">
          <div className="authPanelContent">
            <h1 className="authPanelTitle">Welcome Back!</h1>
            <p className="authPanelText">
              Enter your personal details to use all of site features
            </p>
            <button
              type="button"
              className="authPanelBtn"
              onClick={() => setIsLogin((prev) => !prev)}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </div>

        <div className="authStage">
          <div className="authForm authFormLogin">
            <Login onCreateAccount={() => setIsLogin(false)} />
          </div>
          <div className="authForm authFormSignUp">
            <SignUp onLogin={() => setIsLogin(true)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
