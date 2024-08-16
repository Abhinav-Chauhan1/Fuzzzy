import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import bgImg from "../../assets/images/bg.jpg";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="min-w-full h-screen flex justify-center items-center bg-[url('../src/assets/images/bg_white.jpg')]">
        <div className="absolute w-[80%] h-[80%] flex">
          {/* Section1 */}

          {/* Section2 */}
          <div data-theme="light" className="relative md:w-[35%] m-auto  h-full max-md:p-10 bg-white max-md:rounded-3xl rounded-3xl
          flex justify-center max-md:overflow-auto">
            {/* Form */}
              <form className="flex flex-col my-auto pt-3 md:pt-8" onSubmit={handleSubmit}>
                <p className="text-left text-3xl font-bold">Welcome,</p>
                <p className="mt-2 text-left text-gray-500">
                  Please enter your details.
                </p>
                <div className="flex flex-col pt-4">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <input
                      type="text"
                      name="fullName"
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Name"
                      value={inputs.fullName}
                      onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex flex-col pt-4">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <input
                      type="username"
                      name="username"
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Username"
                      value={inputs.username}
                      onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                  </div>
                </div>
                <div className=" flex flex-col pt-4">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <input
                      type="password"
                      name="password"
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Password"
                      value={inputs.password}
                      onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                  </div>
                </div>
                <div className=" flex flex-col pt-4">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Confirm Password"
                      value={inputs.confirmPassword}
                      onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                  </div>
                </div>

                <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
                >
                  {loading ? <span className="loading loading-spinner"></span> : "Sign up"}
                </button>
              <div className="py-12 text-center">
                <p className="whitespace-nowrap text-gray-600">
                  </p>
                  Already have an account?
                  <Link to="/" className="underline-offset-4 font-semibold text-gray-900 underline cursor-pointer">{" "}Login.</Link>
              </div>
              </form>
            </div>
        </div>
      </div>
	);
};
export default SignUp;

