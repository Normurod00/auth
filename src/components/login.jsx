import React, { useState } from 'react';
import { logo } from '../const';
import { Input } from '../ui';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserStart } from '../slice/auth';

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.auth.isLoading);


const loginHandler = e => {
  e.preventDefault()
   dispatch(loginUserStart())
  }

  return (
    <div className='text-center mt-5'>
      <main className="form-signin w-25 m-auto ">
        <form className='    display: flex; gap: 10px;}'>
          <img className='mb-5' src={logo} width={230} alt="" />
          <Input label={'Login'} type={'text'} state={login} setState={setLogin} />
          <Input label={'Password'} type={'password'} state={password} setState={setPassword} />

          <button className="btn btn-primary w-100 py-2" type="submit" disabled = {isLoading} onClick={loginHandler}>{isLoading ? "Вход..." : "Войти"}</button>
        </form>
      </main>
    </div>
  );
}

export default Login;
