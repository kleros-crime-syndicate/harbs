import classnames from "classnames";
import { NavLink } from "react-router-dom";
import Logo from "../assets/harbs.svg";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { shortenAddress } from "utils/address";
import { injected } from "utils/connectors";

const Link: React.FC<{ text: string; to: string }> = ({ text, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      classnames("px-2 text-3xl text-white hover:text-gray-400", { "font-semibold bg-theme": isActive })
    }
  >
    {text}
  </NavLink>
);

const Header: React.FC = () => {
  const { account, activate } = useWeb3React<Web3Provider>();

  return (
    <nav
      className={`
    sticky
    top-0
    z-30
    w-full
    py-4
    px-8
    bg-background/95
    backdrop-blur-md
    text-white
    hover:text-gray-700
    focus:text-gray-700
    shadow-lg
  `}
    >
      <div
        className={`
      flex
      items-center
      justify-between
      w-full
    `}
      >
        <div className="flex">
          <Logo className="w-96 mr-8" />
          <div className="flex flex-col">
            <Link to="/marketplace" text="MARKETPLACE" />
            <Link to="/account" text="MY ACCOUNT" />
            <Link to="/new-collection" text="NEW COLLECTION" />
          </div>
        </div>

        <button
          className="text-white text-3xl px-2 border-4 hover:bg-theme-darkish hover:border-theme-lightish"
          onClick={() => activate(injected)}
        >
          {!!account ? shortenAddress(account) : "Connect"}
        </button>
      </div>
    </nav>
  );
};

export default Header;
