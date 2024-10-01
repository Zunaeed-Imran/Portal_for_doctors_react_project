import React from 'react'

function AdminLigin() {
  return (
    <div className="pt-20">
      <div className="pl-10">
        <h1 className="text-3xl font-bold">Admin login Page</h1>
        <form action="" className="flex flex-col">
          <label htmlFor="">Email</label>
          <input type="text" name="email" placeholder="Email" />
          <label htmlFor="">Password</label>
          <input type="password" name="password" placeholder="Password" />
          <button className="btn">Log-in</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLigin
