import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const UpdateProfile = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //mobile pattern
  const mobilePattern = /^01[3-9]\d{8}$/;

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to a server
    console.log(data);
    reset();
  };

  return (
    <main
    className="lg:h-screen m-0 bg-base-100 flex items-center justify-center"
    >
     
        <div className="p-5 w-full" >
          <div className="flex mb-4 gap-2 items-center justify-center flex-col">
            <h2
              className="lg:text-2xl md:text-xl uppercase text-lg font-google text-center text-primary
             font-bold"
            >
             Update Your Information
            </h2>
            <div className="lg:w-20 w-14 h-0.5 bg-secondary"></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-2">
              {/** user Image */}
              <div className="mb-1">
                <label
                  htmlFor="image"
                  className="block text-gray-600 font-medium text-xs md:text-sm lg:text-md"
                >
                  Image
                </label>
                <Controller
                  name="image"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="file"
                      id="image"
                      className="mt-1 lg:p-1 p-0.5 file:btn text-xs lg:file:btn-sm file:btn-xs  file:btn-primary w-full rounded-lg border border-gray-300"
                    />
                  )}
                />
              </div>
            {/** user Mobile no */}
              <div className="mb-1">
                <label
                  htmlFor="mobile"
                  className="block text-gray-600 font-medium text-xs md:text-sm lg:text-md"
                >
                  Mobile
                </label>
                <Controller
                  name="mobile"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Mobile No is required",
                    pattern: {
                      value: mobilePattern,
                      message:
                        "Invalid Mobile No.Put A Valid Bangaldeshi Mobile No.",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      id="mobile"
                      className={`mt-1 lg:p-1 p-0.5 text-sm md:text-md lg:text-lg w-full rounded-md border  ${
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
            {/** Student Registration No */}
              <div className="mb-1">
                <label
                  htmlFor="regiNo"
                  className="block text-gray-600 font-medium text-xs md:text-sm lg:text-md"
                >
                  Regi No
                </label>
                <Controller
                  name="regiNo"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Regi No is required",
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="regiNo"
                      className={`mt-1 lg:p-1 p-0.5 text-sm md:text-md lg:text-lg w-full rounded-md border  ${
                        errors.regiNo ? "border-error" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.regiNo && (
                  <p className="text-error">Regi No is required</p>
                )}
              </div>
            {/** Session */}
              <div className="mb-1">
                <label
                  htmlFor="session"
                  className="block text-gray-600 font-medium text-xs md:text-sm lg:text-md"
                >
                  Session
                </label>
                <Controller
                  name="session"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Session is required",
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="session"
                      className={`mt-1 lg:p-1 p-0.5 text-sm md:text-md lg:text-lg w-full rounded-md border  ${
                        errors.session ? "border-error" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.session && (
                  <p className="text-error">Session is required</p>
                )}
              </div>
              {/** Course */}
              <div className="mb-1  col-span-1">
                <label
                  htmlFor="course"
                  className="block text-gray-600 font-medium text-xs md:text-sm lg:text-md"
                >
                  Course
                </label>
                <Controller
                  name="course"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Course is required",
                  }}
                  render={({ field }) => (
                    <select
                      {...field}
                      id="course"
                      className={`mt-1 lg:p-2 p-1 text-xs md:text-sm lg:text-md w-full 
                      rounded-md border   ${
                        errors.course ? "border-error" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select Course</option>
                      <option value="B.Sc Honours">B.Sc Honours</option>
                      <option value="M.Sc">M.Sc</option>
                      <option value="Graduated">Graduated</option>
                    </select>
                  )}
                />
                {errors.course && (
                  <p className="text-error">Course is required</p>
                )}
              </div>
               {/**  Student Class roll */}
              <div className="mb-1">
                <label
                  htmlFor="classroll"
                  className="block text-gray-600 font-medium text-xs md:text-sm lg:text-md"
                >
                  Class Roll
                </label>
                <Controller
                  name="classroll"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Class Roll is required",
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="classroll"
                      className={`mt-1 lg:p-1 p-0.5 text-sm md:text-md lg:text-lg w-full rounded-md border  ${
                        errors.classroll ? "border-error" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.classroll && (
                  <p className="text-error">Class Roll is required</p>
                )}
              </div>
            {/** Student Gender */}
              <div className="mb-1  col-span-1">
                <label
                  htmlFor="gender"
                  className="block text-gray-600 font-medium text-xs md:text-sm lg:text-md"
                >
                  Gender
                </label>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Gender is required",
                  }}
                  render={({ field }) => (
                    <select
                      {...field}
                      id="gender"
                      className={`mt-1 lg:p-2 p-1 text-xs md:text-sm lg:text-md w-full 
                      rounded-md border   ${
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

              {/* Date of Birth */}
              <div className="mb-3">
                <label
                  htmlFor="dob"
                  className="block text-gray-600 font-medium text-xs md:text-sm lg:text-md"
                >
                  Date of Birth
                </label>
                <div className="relative">
                  <Controller
                    name="dob"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        id="dob"
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        dateFormat="MM/dd/yyyy"
                        isClearable
                        className={`mt-1 lg:p-1 p-0.5 text-sm md:text-md lg:text-lg w-full rounded-md border  ${
                          errors.dob ? "border-error" : "border-gray-300"
                        }`}
                      />
                    )}
                  />
               
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="mb-1 col-span-1">
                <label
                  htmlFor="presentAddress"
                  className="block text-gray-600 font-medium text-xs md:text-sm lg:text-md"
                >
                  Present Address
                </label>
                <Controller
                  name="presentAddress"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <textarea
                      {...field}
                      id="presentAddress"
                      rows="4"
                      className={`mt-1 lg:p-1 p-0.5 text-sm md:text-md lg:text-lg w-full
                      border-gray-300 rounded-md border`}
                    />
                  )}
                />
              </div>

              <div className="mb-1 col-span-1">
                <label
                  htmlFor="permanentAddress"
                  className="block text-gray-600 font-medium text-xs md:text-sm lg:text-md"
                >
                  Permanent Address
                </label>
                <Controller
                  name="permanentAddress"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <textarea
                      {...field}
                      id="permanentAddress"
                      rows="4"
                      className={`mt-1 lg:p-1 p-0.5 text-sm md:text-md lg:text-lg w-full rounded-md border border-gray-300`}
                    />
                  )}
                />
              </div>
            </div>

            <div className="flex mt-2 justify-center">
              <button
                type="submit"
                className="bg-primary lg:w-[35%] w-[70%] hover:bg-[#0f1429]
               text-white py-2 px-4 font-bold rounded-md transition duration-300"
              >
                Update
              </button>
            </div>
          </form>
        </div>
     
    </main>
  );
};

export default UpdateProfile;
