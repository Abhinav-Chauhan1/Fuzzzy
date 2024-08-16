import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import bgImg from "../../assets/images/bg.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="min-w-full h-screen flex justify-center items-center">
      <div className="absolute w-[80%] h-[80%] flex">
        {/* Section1 */}
        <div
          data-theme="light"
          className="relative md:w-[35%] m-auto  h-full max-md:p-10 bg-white max-md:rounded-3xl rounded-3xl
          flex justify-center max-md:overflow-auto"
        >
          {/* Form */}
          <form
            className="flex flex-col pt-3 my-auto md:pt-8"
            onSubmit={handleSubmit}
          >
            <p className="text-left text-3xl font-bold">Welcome,</p>
            <p className="mt-2 text-left text-gray-500">
              Please enter your details.
            </p>
            <div className="flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col pt-4 mb-6">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="password"
                  name="password"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="underline-offset-4 font-light cursor-pointer text-gray-700 underline mb-6">
                Forgot password?
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">
                or
              </div>
            </div>
            <div className="py-8 text-center">
              <p className="whitespace-nowrap text-gray-600">
                Don't have an account?
              </p>
              <div className="my-2">
                <Link
                  to="/signup"
                  className="underline-offset-4 font-semibold text-gray-900 underline"
                >
                  Sign up.
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
