import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import signup from "../assets/images/signup.jpg";

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
  const mobilePattern = /^01[3-9]\d{8}$/  

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to a server
    console.log(data);
    reset();
  };

  return (
    <main
      className="lg:bg-fixed"
      style={{
        backgroundImage: `url(${signup})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center,center",
        backgroundSize: "cover",
      }}
    >
      <div className="min-h-screen  lg:py-10 flex items-center justify-center">
        <div className="bg-white  p-8 lg:w-[70%] w-[90%] ">
          <div className="flex mb-4 items-center justify-center flex-col">
            <h2 className="lg:text-3xl md:text-2xl text-xl font-google text-center text-primary font-bold mb-3">
              Registration Form
            </h2>
            <div className="lg:w-12 lg:h-[2px] bg-secondary"></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-2">
              <div className="mb-1">
                <label
                  htmlFor="image"
                  className="block text-gray-600 font-medium text-sm md:text-md lg:text-lg"
                >
                  Image
                </label>
                <Controller
                  name="image"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="file"
                      id="image"
                      className="mt-1 lg:p-2 w-full rounded-md border border-gray-300"
                    />
                  )}
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor="fullName"
                  className="block text-gray-600 font-medium text-sm md:text-md lg:text-lg"
                >
                  Full Name
                </label>
                <Controller
                  name="fullName"
                  control={control}
                  rules={{
                    required: "Full Name is required",
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="fullName"
                      className={`mt-1 lg:p-2 p-1 text-sm md:text-md lg:text-lg
                       w-full rounded-md border  ${
                        errors.fullName ? "border-error" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.fullName && (
                  <p className="text-error">Full Name is required</p>
                )}
              </div>

              <div className="mb-1">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium text-sm md:text-md lg:text-lg"
                >
                  Email
                </label>
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
                      className={`mt-1 lg:p-2 p-1 text-sm md:text-md lg:text-lg w-full rounded-md border ${
                        errors.email ? "border-error" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                 {errors.email && (
              <p className="text-error  mt-1">
                {errors.email.message}
              </p>
            )}
              </div>

              <div className="mb-1">
                <label
                  htmlFor="password"
                  className="block text-gray-600 font-medium text-sm md:text-md lg:text-lg"
                >
                  Password
                </label>
                <Controller
                  name="password"
                  control={control}
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
                      className={`mt-1 lg:p-2 p-1 text-sm md:text-md lg:text-lg w-full rounded-md border ${
                        errors.password ? "border-error" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.password && (
              <p className="text-error  mt-1">
                {errors.password.message}
              </p>
            )}
              </div>

              <div className="mb-1">
                <label
                  htmlFor="mobile"
                  className="block text-gray-600 font-medium text-sm md:text-md lg:text-lg"
                >
                  Mobile
                </label>
                <Controller
                  name="mobile"
                  control={control}
                  rules={{
                    required: "Mobile No is required",
                    pattern: {
                      value: mobilePattern,
                      message: "Invalid Mobile No.Put A Valid Bangaldeshi Mobile No.",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      id="mobile"
                      className={`mt-1 lg:p-2 p-1 text-sm md:text-md lg:text-lg w-full rounded-md border  ${
                        errors.mobile ? "border-error" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                 {errors.mobile && (
              <p className="text-error text-sm mt-1">
                {errors.mobile.message}
              </p>
            )}
              </div>

              <div className="mb-1">
                <label
                  htmlFor="regiNo"
                  className="block text-gray-600 font-medium text-sm md:text-md lg:text-lg"
                >
                  Regi No
                </label>
                <Controller
                  name="regiNo"
                  control={control}
                  rules={{
                    required: "Regi No is required",
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="regiNo"
                      className={`mt-1 lg:p-2 p-1 text-sm md:text-md lg:text-lg w-full rounded-md border  ${
                        errors.regiNo ? "border-error" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.regiNo && (
                  <p className="text-error">Regi No is required</p>
                )}
              </div>

              <div className="mb-1">
                <label
                  htmlFor="session"
                  className="block text-gray-600 font-medium text-sm md:text-md lg:text-lg"
                >
                  Session
                </label>
                <Controller
                  name="session"
                  control={control}
                  rules={{
                    required: "Session is required",
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="session"
                      className={`mt-1 lg:p-2 p-1 text-sm md:text-md lg:text-lg w-full rounded-md border  ${
                        errors.session ? "border-error" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.session && (
                  <p className="text-error">Session is required</p>
                )}
              </div>
              <div className="mb-1">
                <label
                  htmlFor="classroll"
                  className="block text-gray-600 font-medium text-sm md:text-md lg:text-lg"
                >
                 Class Roll
                </label>
                <Controller
                  name="classroll"
                  control={control}
                  rules={{
                    required: "Class Roll is required",
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="classroll"
                      className={`mt-1 lg:p-2 p-1 text-sm md:text-md lg:text-lg w-full rounded-md border  ${
                        errors.classroll ? "border-error" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.classroll && (
                  <p className="text-error">Class Roll is required</p>
                )}
              </div>

              <div className="mb-4  col-span-1">
                <label
                  htmlFor="gender"
                  className="block text-gray-600 font-medium text-sm md:text-md lg:text-lg"
                >
                  Gender
                </label>
                <Controller
                  name="gender"
                  control={control}
                  rules={{
                    required: "Gender is required",
                  }}
                  render={({ field }) => (
                    <select
                      {...field}
                      id="gender"
                      className={`mt-1 lg:p-2 p-1 text-sm md:text-md lg:text-lg w-full rounded-md border  ${
                        errors.gender ? "border-error" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  )}
                />
                {errors.gender && (
                  <p className="text-error">Gender is required</p>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="mb-1 col-span-1">
                <label
                  htmlFor="presentAddress"
                  className="block text-gray-600 font-medium text-sm md:text-md lg:text-lg"
                >
                  Present Address
                </label>
                <Controller
                  name="presentAddress"
                  control={control}
                  rules={{
                    required: "Present Address is required",
                  }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      id="presentAddress"
                      rows="5"
                      className={`mt-1 lg:p-2 p-1 text-sm md:text-md lg:text-lg w-full rounded-md border  ${
                        errors.presentAddress ? "border-error" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.presentAddress && (
                  <p className="text-error">
                    Present Address is required
                  </p>
                )}
              </div>

              <div className="mb-1 col-span-1">
                <label
                  htmlFor="permanentAddress"
                  className="block text-gray-600 font-medium text-sm md:text-md lg:text-lg"
                >
                  Permanent Address
                </label>
                <Controller
                  name="permanentAddress"
                  control={control}
                  rules={{
                    required: "Permanent Address is required",
                  }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      id="permanentAddress"
                      rows="5"
                      className={`mt-1 lg:p-2 p-1 text-sm md:text-md lg:text-lg w-full rounded-md border border-gray-300 ${
                        errors.permanentAddress ? "border-error" : ""
                      }`}
                    />
                  )}
                />
                {errors.permanentAddress && (
                  <p className="text-error">
                    Permanent Address is required.
                  </p>
                )}
              </div>
            </div>

            <div className="flex mt-2 justify-center">
              <button
                type="submit"
                className="bg-primary lg:w-[35%] w-[70%] hover:bg-[#0f1429]
               text-white py-2 px-4 font-bold rounded-md transition duration-300"
              >
                Create Account
              </button>
            </div>
          </form>
          <p className="text-center mt-4 font-semibold text-black text-sm">
            Already have an account?
            <Link to="/login" className="text-blue-900 hover:underline">
              Login
            </Link>
          </p>
          <div className="mt-4 text-center">
            <Link
              to="/"
              className="text-base-100 btn bg-black  hover:underline hover:text-black"
            >
              <FaHome />
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
