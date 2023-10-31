import { BiTable } from "react-icons/bi";
import periodic from "../../assets/images/periodic.jpg";
import { Link } from "react-router-dom";

const PeriodicTable = () => {
  return (
    <section className=" my-10 flex items-start flex-col">
      <div className="flex items-center mb-4 text-black text-2xl gap-1">
        <BiTable />
        <h1 className=" uppercase">Periodic Table</h1>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <img src={periodic} alt="Periodic Table" />
      </div>

      <p className="text-gray-600 text-justify p-2">
        <span className="text-lg font-semibold text-neutral">
          History of the periodic table of chemical elements:
        </span> In 1869 Russian chemist Dimitri Mendeleev started the development of the
        periodic table, arranging chemical elements by atomic mass. He predicted
        the discovery of other elements, and left spaces open in his periodic
        table for them.
        <Link className="btn-active ml-2 font-bold btn-link" to="periodic-table-history">
          Read More..
        </Link>
      </p>
    </section>
  );
};

export default PeriodicTable;
