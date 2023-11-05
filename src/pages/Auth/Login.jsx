import { Link } from "react-router-dom";
import login from "../../assets/images/login.jpg";
import { useForm, Controller } from "react-hook-form";
import {FaHome} from "react-icons/fa"

const Login = () => {
  const text = "'"
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to a server
    console.log(data);
    reset();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${login})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center,center",
      }}
      className="bg-image lg:min-h-[100vh] font-[sans-serif] md:min-h-[60vh] min-h-[50vh] flex items-center lg:justify-start justify-center"
    >
      <div className="bg-base-100 lg:ml-32 px-4 py-6 
       rounded-3xl shadow-md  lg:w-[32%] w-full my-6 mx-10 lg:mx-0 lg:my-0  transition-transform transform hover:scale-105">
        <div className="flex items-center justify-center flex-col lg:mb-4">
          <p className="text-xs lg:text-md md:text-sm font-[sans-serif]">Welcome Again!</p>
        <h2 className="lg:text-2xl md:text-xl text-lg font-[sans-serif] 
        text-center text-primary font-bold mb-2">
          Login Your Account
        </h2>
        <div className="lg:w-8 lg:h-[2px] bg-secondary"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:mb-2 mb-1 flex items-center border-2 px-1.5 py-1 lg:py-2 lg:px-3 
          rounded-2xl ">
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
                  className={`pl-2 outline-none border-none ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
           
          </div>
          {errors.email && (
              <p className="text-red-500 text-sm mb-2">
                {errors.email.message}
              </p>
            )}
          <div className="lg:mb-2 mb-1 flex items-center rounded-2xl border-2 lg:py-2 
          lg:px-3 py-1 px-1.5">
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
                  className={`pl-2 outline-none border-none ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
          
          </div>
          {errors.password && (
              <p className="text-red-500 text-sm mb-2">
                {errors.password.message}
              </p>
            )}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary hover:bg-secondary w-[70%] font-semibold
               text-white lg:py-2 py-2 px-3 text-sm lg:text-lg lg:px-4 rounded-2xl  transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-4 font-semibold text-black text-sm">
          Don{text}t have an account?{" "}
          <Link to="/signup" className="text-primary font-bold hover:underline">
            Sign up
          </Link>
        </p>
        <div className="mt-4 text-center">
          
          <Link to="/" className="text-base-100 btn btn-xs md:btn-sm lg:btn-md  rounded-2xl bg-black 
           hover:underline hover:text-black">
          <FaHome />
            Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
