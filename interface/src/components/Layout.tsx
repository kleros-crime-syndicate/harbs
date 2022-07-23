import { Outlet } from "react-router-dom";
import Header from "components/Header";

const Layout: React.FC = () => (
  <>
    <Header />
    <div className={`
      w-full
      pt-12
      px-12
    `}>
      <Outlet />
    </div>
  </>
);

export default Layout;
