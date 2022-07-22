import React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "utils/connectors";
import { shortenAddress } from "utils/address";
import "./style.pcss";
import { getSdk } from "generated/graphql";
import { GraphQLClient } from "graphql-request";
import { Web3Provider } from "@ethersproject/providers";

const api = getSdk(new GraphQLClient("https://thegraph"));

const App: React.FC = () => {
  const { account, activate } = useWeb3React<Web3Provider>();

  return (
    <>
      <div className="flex flex-col items-end mr-16">
        <span className="text-xl text-teal-900">HARBS</span>
        <span>
          <button
            className="text-teal-900 text-lg underline underline-offset-8 ml-4"
            onClick={() => activate(injected)}
          >
            {!!account ? shortenAddress(account) : "Connect"}
          </button>
        </span>
      </div>
    </>
  );
};

export default App;
