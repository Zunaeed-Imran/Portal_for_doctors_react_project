import React from 'react'

function Signin() {
  return (
    <div className='pt-20'>
      <div className="pl-10">
        <h1 className="text-3xl font-bold">Sing Up with new Account</h1>
        <form action="" className="flex flex-col">
          <label htmlFor="">Email</label>
          <input type="text" name="email" placeholder="Email" />
          <label htmlFor="">Password</label>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="">Re-Type-Password</label>
          <input type="password" name="password" placeholder="Password" />
          <button className="btn">Sign-in</button>
        </form>
      </div>
    </div>
  );
}

export default Signin
