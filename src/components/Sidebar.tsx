import { FaReact } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";

function Sidebar() {
  // const activeMenu = true;
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 focus:bg-sky-400 focus:text-sky-100 ";
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2"
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {/* {activeMenu && ( */}
      <>
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => { }}
            className="flex items-center font-extrabold tracking-tight text-sky-400 gap-3 ml-3 mt-4">
            <FaReact className="text-3xl" />
            <span className="text-xl">ReShop</span>
          </Link>
        </div>
        <div className="mt-10">
          {links.map(item => (
            <div key={item.title}>
              <p className="text-gray-400 m-3 mt-4 uppercase">
              {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                to={`/${link.name}`}
                key={link.name}
                className={({ isActive })=> isActive ? activeLink : normalLink}
                >
                {link.icon}
                <span className="capitalize">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>
      {/* )} */}
    </div>
  )
}

export default Sidebar
