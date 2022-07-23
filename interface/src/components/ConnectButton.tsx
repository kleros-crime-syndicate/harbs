import { injected } from "utils/connectors";
import { shortenAddress } from "utils/address";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const ConnectButton: React.FC = () => {
  const { account, activate } = useWeb3React<Web3Provider>();
  return (
    <div className={`
      flex
      justify-end
      h-full
      w-[150px]
    `}>
      <button
        className="text-teal-900 text-xl underline underline-offset-8"
        onClick={() => activate(injected)}
      >
        {!!account ? shortenAddress(account) : "Connect"}
      </button>
    </div>
  );
};

export default ConnectButton;
