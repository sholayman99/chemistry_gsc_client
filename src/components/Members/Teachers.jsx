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
      <div className="grid lg:p-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 ">
        {members.map((member, i) => (
          <div key={i} className="card  bg-base-100 text-neutral shadow-md">
            <figure className="px-6 pt-6 pb-2">
              <img
                src={member.image}
                alt="Shoes"
                className=" w-40 h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold">{member.name} </h2>
              <h3 className="text-lg font-semibold"> {member.designation} </h3>
              <h5>
                <span className="font-bold">Email:</span> {member.email}{" "}
              </h5>
              <div className="card-actions">
                <button className="btn mt-2 btn-primary">
                  Details... <BiSolidObjectsHorizontalRight />{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
