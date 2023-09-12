//import React from 'react'

const Login = () => {

    const handleSubmit = () => {};

  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-bg_gray w-1/4 shadow-md flex flex-col justify-center items-center p-8">
      <h1 className="font-nunitoSans text-[#54AC99] font-bold text-4xl mb-8">
        Login
      </h1>
      <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit} >
        <input className="p-1 rounded-sm" type="email" placeholder="Enter Email" />
        <input className="p-1 rounded-sm" type="password" placeholder="Enter Password" />
        <input
          className="bg-[#97DEC1] py-1 rounded-md hover:bg-[#54AC99] cursor-pointer"
          type="submit"
          value="Login"
        />
      </form>
      </div>
    </div>
  );
};

export default Login;
