import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { BigNumber, utils } from "ethers";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { useHarbCollection } from "hooks/useHarbCollection";
import { useWrappedMatic } from "hooks/useWrappedMatic";

export const useBuyHarb = (valuation: BigNumber) => {
  const { account } = useWeb3React<Web3Provider>();
  const { tokenID, address } = useParams();
  const connectedHarbCollection = useHarbCollection(address);
  const connectedWrappedMatic = useWrappedMatic();
  const disabled = (
    account == undefined
      || address == undefined
      || connectedHarbCollection == undefined
      || tokenID == undefined
      || connectedWrappedMatic == undefined
  );
  return ({
    buyHarb: async (values: any) => {
      const totalPrice = valuation.add(
        BigNumber.from(utils.parseUnits(values.runaway.toString()))
      );
      if (!disabled) {
        const sendBuy = () => (
          connectedHarbCollection.buy(
            tokenID,
            valuation,
            BigNumber.from(utils.parseUnits(values.newValuation.toString())),
            BigNumber.from(utils.parseUnits(values.runaway.toString())),
            {gasLimit: 4000000}
          )
        );
        const enoughAllowance = await connectedWrappedMatic
          .allowance(account, connectedHarbCollection.address)
            .then((result) => result.gte(totalPrice));
        sendBuy();
        // if (!enoughAllowance) {
        //   toast("You need to increase the allowance of WrappedMatic", {autoClose: false});
        //   toast.onChange(async payload => {
        //     if(payload.status === "removed") {
        //       const result = await connectedWrappedMatic
        //         .increaseAllowance(address, totalPrice)
        //         .then((tx) => tx.wait())
        //         .catch((error) => console.log(error));
        //       console.log("buy")
        //     }
        //   });
        // } else
        //   sendBuy();
      }
    },
    disabled
  })
}
