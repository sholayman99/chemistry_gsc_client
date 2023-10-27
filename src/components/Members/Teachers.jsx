import { BiSolidObjectsHorizontalRight } from "react-icons/bi";

const Teachers = () => {
  const members = [
    {
      name: " Dr. S.M. Afzal Hossain",
      designation: "Professor",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
    {
      name: " MD Abdul Barek Sheikh",
      designation: "Professor",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
    {
      name: "Shofiqul Islam",
      designation: "Assistant professor",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
    {
      name: "Momo Akter",
      designation: "Lecturer",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
    {
      name: "Shahadat Hossain",
      designation: "Lecturer",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
    {
      name: "Al Imran Talukder",
      designation: "Lecturer",
      email: "example@demo.com",
      mobile: "01XXXXXXXXX",
    },
  ];
  return (
    <section className="my-10">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 ">
        {members.map((member, i) => (
          <div key={i} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{member.name} </h2>
              <h3> {member.designation} </h3>
              <h5> <span className="font-bold">Email:</span> {member.email} </h5>
              <div className="card-actions">
                <button className="btn btn-primary">
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
