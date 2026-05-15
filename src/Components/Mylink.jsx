import { NavLink } from "react-router";


const Mylink = ({to,children,className=''}) => {
    return (
        <div>
            <NavLink
  to={to}
  className={({ isActive }) =>
    `${className} btn border-none ${
      isActive
        ? "font-bold bg-purple-700 text-white"
        : " text-base-content/70"
    }`
  }
>
  {children}
</NavLink>
        </div>
    );
};

export default Mylink;