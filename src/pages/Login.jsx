import { Link } from "react-router-dom";
import login from "../assets/images/login.jpg";
import { useForm, Controller } from "react-hook-form";
import {FaHome} from "react-icons/fa"

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to a server
    console.log(data);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${login})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center,center",
      }}
      className="min-h-screen flex  items-center lg:justify-start justify-center"
    >
      <div className="bg-white lg:ml-32 p-8  rounded-lg shadow-md  w-96 md:w-2/3 lg:w-1/2 xl:w-1/3 transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-google text-center text-primary font-bold mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-1"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: emailPattern,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className={`mt-1 p-2 w-full rounded-md border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-1"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Password is required",
                pattern: {
                  value: passwordPattern,
                  message:
                    "Password must contain at least one special character, one number, one letter, and be at least 8 characters long.",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="password"
                  className={`mt-1 p-2 w-full rounded-md border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#0f1429] to-[#074377] w-80
               text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-4 font-semibold text-black text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-900 hover:underline">
            Sign up
          </Link>
        </p>
        <div className="mt-4 text-center">
          
          <Link to="/" className="text-base-100 btn bg-black  hover:underline hover:text-black">
          <FaHome />
            Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
