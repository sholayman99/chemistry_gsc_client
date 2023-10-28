import { BiSolidObjectsHorizontalRight } from "react-icons/bi";

const Teachers = () => {
  const members = [
    {
      name: " Dr. S.M. Afzal Hossain",
      image: "https://brur.ac.bd/wp-content/uploads/2019/03/male.jpg",
      designation: "Professor",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
    {
      name: " MD Abdul Barek Sheikh",
      image: "https://brur.ac.bd/wp-content/uploads/2019/03/male.jpg",
      designation: "Professor",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
    {
      name: "Shofiqul Islam",
      image: "https://brur.ac.bd/wp-content/uploads/2019/03/male.jpg",
      designation: "Assistant professor",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
    {
      name: "Momo Akter",
      image:
        "https://png.pngtree.com/png-clipart/20210411/original/pngtree-hijab-for-woman-png-image_6213211.jpg",
      designation: "Lecturer",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
    {
      name: "Shahadat Hossain",
      image: "https://brur.ac.bd/wp-content/uploads/2019/03/male.jpg",
      designation: "Lecturer",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
    {
      name: "Al Imran Talukder",
      image: "https://brur.ac.bd/wp-content/uploads/2019/03/male.jpg",
      designation: "Lecturer",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
  ];
  return (
    <section className="my-10">
      <div className="flex flex-col items-center justify-center gap-1 p-2">
        <h1 className="lg:text-[2.5rem] text-[1.3rem] font-bold font-[sans-serif] text-primary">
          Teachers List
        </h1>
        <div className="lg:w-20 lg:h-1 w-12 h-0.5 bg-neutral"></div>
      </div>
      <div className="grid lg:grid-cols-2 md:m-10 m-3 grid-cols-1 text-neutral gap-10 lg:p-4  items-center">
        {members.map((member, i) => (
          <div
            key={i}
            className="flex bg-base-100 hover:border-2 border-info hover:scale-105  transition duration-500 ease-in-out justify-center p-10 items-start gap-10"
          >
            <div className="avatar">
              <div className="lg:w-36 w-16 md:w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={member.image} alt={member.name} />
              </div>
            </div>
            <div className="">
              <h2 className="font-bold md:text-2xl text-md lg:text-2xl">
                {member.name}{" "}
              </h2>
              <h3 className="font-semibold text-[#86198f] md:text-2xl text-md lg:text-2xl">
                {member.designation}{" "}
              </h3>
              <p className="my-2 text-sm lg:text-md">
                <span className="font-bold mr-1">Email Address:</span>
                {member.email}
              </p>
              <button
                className="btn hover:scale-105  transition duration-500 ease-in-out
               btn-outline btn-xs md:btn-sm lg:btn-md btn-primary"
              >
                Details... <BiSolidObjectsHorizontalRight />{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
