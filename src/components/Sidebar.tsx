import {FaReact} from "react-icons/fa"
import { Link } from "react-router-dom";
import { links } from "../data/dummy";

function Sidebar() {
  // const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {/* {activeMenu && ( */}
        <>
        <div className="flex justify-between items-center">
          <Link to="/" onClick = {() => {}}
          className="flex items-center font-extrabold tracking-tight text-sky-400 gap-3 ml-3 mt-4">
            <FaReact className="text-3xl"/>
            <span className="text-xl">ReShop</span>
          </Link>
        </div>
        <div className="mt-10">
          {links.map(item => (
            <div className="text-gray-400 m-3 mt-4 uppercase">
              {item.title}
            </div>
          ))}
        </div>
        </>
      {/* )} */}
    </div>
  )
}

export default Sidebar
