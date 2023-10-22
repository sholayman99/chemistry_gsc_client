import bg from "../../assets/images/home.jpg"

const Banner = () => {
    return (
        <div className="lg:bg-fixed flex items-center justify-center flex-col" 
         style={{backgroundImage:`url(${bg})`,
         backgroundSize:"cover", 
         backgroundRepeat: "no-repeat",
         backgroundPosition:"center center",
         height:"100vh",
         }}>
         
           <h2 className="text-base-100 text-[2.5rem] font-bold ">Welcome to </h2>
           <h1 className="text-base-100 text-[3.5rem] font-extrabold">Department of Chemistry</h1>
           <h3 className="text-warning text-[1.5rem] font-semibold">Govt. Saadat College,Tangail</h3>
           <button className="btn font-bold mt-4 btn-xs sm:btn-sm md:btn-md lg:w-40">Read More..</button>
        </div>
    );
};

export default Banner;