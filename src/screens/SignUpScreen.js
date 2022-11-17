import React, { useRef } from 'react'
import './SignUpScreen.css'
import { auth } from '../firebase'



function SignUpScreen (){

  const emailRef = useRef(null);
  const passRef = useRef(null)


const register = (e) => {
  e.preventDefault();

  auth.createUserWithEmailAndPassword(
    emailRef.current.value,
    passRef.current.value
  ).then((authUser) =>{
    console.log(authUser)
  }).catch(error => {
    alert(error.message)
  })
}

const singIn = (e) => {
  e.preventDefault();

  auth.signInWithEmailAndPassword(
    emailRef.current.value,
    passRef.current.value,
  ).then((authUser) =>{
    console.log(authUser)
  }).catch(error => {
    alert(error.message)
  })
}


return (
  <div className='background__singUpScreen'>
    <div className='signUpScreen'>
      <form>
        <h1>Sing ip</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passRef} placeholder='Password' type="password" />
        <button type='submit' onClick={singIn} >Sing in</button>
        <h4>
         <span className='signUpScreen__gray'>New to Netflix? </span>
          <span className='signUpScreen__link' onClick={register}
          >Sign Up now</span></h4>
      </form>
    </div>
    </div>
  )
}


export default SignUpScreen;
