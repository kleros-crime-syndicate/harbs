import Popup from "reactjs-popup";

interface PopoverInterface {
  trigger: JSX.Element;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverInterface> = ({ trigger, children }) => (
  <Popup trigger={trigger} position="bottom right" arrow={false}>
    <div className="m-1 p-2 bg-white rounded shadow-yellow shadow-xl">
      {children}
    </div>
  </Popup>
);

export default Popover;
