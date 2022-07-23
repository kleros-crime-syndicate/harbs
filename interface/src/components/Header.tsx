import ConnectButton from "components/ConnectButton";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

const Link: React.FC<{ text: string, href: string }> = ({ text, href }) => (
  <NavLink
    to={href}
    className={({ isActive }) => (classnames(
      "text-xl",
      "text-black",
      "hover:text-gray-500",
      {"font-semibold": isActive}
    ))}
  >
    { text }
  </NavLink>
);

const Header: React.FC = () => (
  <nav className={`
    sticky
    top-0
    z-50
    w-full
    flex
    items-center
    justify-center
    py-4
    px-8
    bg-gray-100
    text-gray-500
    hover:text-gray-700
    focus:text-gray-700
    shadow-lg
  `}>
    <div className={`
      flex
      items-center
      justify-between
      max-w-[1900px]
      w-full
    `}>
      <a className="text-4xl text-black font-semibold" href="#">
        HARBS
      </a>
      <div className={`
        flex
        gap-12
      `}>
        <Link text="MARKETPLACE" href="marketplace"/>
        <Link text="MY ACCOUNT" href="account" />
        <Link text="NEW COLLECTION" href="new-collection" />
      </div>
      <ConnectButton />
    </div>
  </nav>
);

export default Header;
