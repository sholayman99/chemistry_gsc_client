import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Signup = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //email,mobile and password pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const userNamePattern = /^[a-z0-9_]{3,20}$/;

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to a server
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-accent to-info i 
        justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Department of Chemistry
            </h1>
            <p className="text-white mt-1">Govt. Saadat College,Tangail</p>
            <button
              type="submit"
              className="block w-28 bg-white text-neutral mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Create Your Account
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome here
            </p>
            {/* name */}
            <div
              className="lg:mb-4 mb-2 flex items-center border-2 px-1.5 py-1 lg:py-2 lg:px-3 
          rounded-2xl "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                rules={{
                  required: "Full Name is required",
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    className={`pl-2  w-full border-none ${
                      errors.fullname ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                )}
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-sm my-1">
                {errors.fullName.message}
              </p>
            )}
            {/* email */}

            <div
              className="lg:mb-4 mb-2 flex items-center border-2 px-1.5 py-1 lg:py-2 lg:px-3 
          rounded-2xl "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
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
                    placeholder="Your Email"
                    className={`pl-2  w-full  border-none ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                )}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm my-1">
                {errors.email.message}
              </p>
            )}
            {/* password */}

            <div
              className="lg:mb-4 mb-3 flex items-center rounded-2xl border-2 lg:py-2 
          lg:px-3 py-1 px-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
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
                    placeholder="Password"
                    id="password"
                    className={`pl-2  w-full  border-none ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                )}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm my-1">
                {errors.password.message}
              </p>
            )}
            {/* userName */}

            <div
              className="lg:mb-4 mb-3 flex items-center rounded-2xl border-2 lg:py-2 
          lg:px-3 py-1 px-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                  required: "Username is required",
                  pattern: {
                    value: userNamePattern,
                    message:
                      "username must start with a lowercase letter (a-z) or a number (0-9)",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="username"
                    placeholder="username"
                    id="username"
                    className={`pl-2  w-full border-none ${
                      errors.username ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                )}
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm my-1">
                {errors.username.message}
              </p>
            )}
            <button
              type="submit"
              className="block w-full bg-accent mt-4 py-2 transition duration-300
              hover:bg-info rounded-2xl text-white font-semibold mb-2"
            >
              Sign Up
            </button>
            <span className="text-md ml-2 cursor-pointer">
              Already Have An Account?{" "}
              <Link
                to={"/login"}
                className=" font-bold hover:underline text-secondary"
              >
                Login
              </Link>
            </span>
            <div className="mt-4 text-center">
              <Link
                to="/"
                className="text-base-100 btn btn-xs md:btn-sm lg:btn-md  rounded-2xl bg-neutral 
           hover:underline hover:text-black"
              >
                <FaHome />
                Return Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
