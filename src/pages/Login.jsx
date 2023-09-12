/* eslint-disable no-unused-vars */
//import React from 'react'

import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    // eve.holt@reqres.in
    // cityslicka
    try {
        let res = await axios.post("https://reqres.in/api/login",userData);
        //console.log("token",res.data.token);
        login(res?.data.token);
        navigate("/dashboard");
    } catch (error) {
        console.log(error);
    }

  };

  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-bg_gray w-1/4 shadow-md flex flex-col justify-center items-center p-8">
        <h1 className="font-nunitoSans text-[#54AC99] font-bold text-4xl mb-8">
          Login
        </h1>
        <form className="w-full flex flex-col gap-5" onSubmit={(e)=>handleSubmit(e)}>
          <input
            className="p-1 rounded-sm"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-1 rounded-sm"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
