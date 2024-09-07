import { useState } from "react";

const Register = () => {
  const [userData, setuserDate] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputHandler = (event) => {
    setuserDate((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  console.log(userData);

  return (
    <>
      <div className="h-full">
        <section className="py-40 mx-4">
          <div className="flex flex-col max-w-[400px] mx-auto">
            <h2 className="text-2xl font-semibold mb-3">Sign up</h2>
            <form action="" className="flex flex-col gap-3">
              <p>This is an error message</p>
              <input
                type="text"
                placeholder="Full name"
                name="name"
                value={userData.name}
                onChange={inputHandler}
                className="block flex-1 border-2 rounded-md pl-3 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
              <input
                type="text"
                placeholder="Your email"
                name="email"
                value={userData.email}
                onChange={inputHandler}
                className="block flex-1 border-2 rounded-md pl-3 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={inputHandler}
                className="block flex-1 border-2 rounded-md pl-3 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
              <input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={inputHandler}
                className="block flex-1 border-2 rounded-md pl-3 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
              <button className="w-full px-4 mt-8 py-2 rounded-md bg-green-700 text-white hover:opacity-65">
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
