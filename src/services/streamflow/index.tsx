import {
  IInteractSolanaExt,
  SolanaStakingClient,
  StakeArgs,
} from "@streamflow/staking";
import { ICluster, ITransactionResult } from "@streamflow/stream";

/**
 * create a new instance of the SolanaStakingClient
 */
const solanaClient = new SolanaStakingClient({
  clusterUrl: `https://devnet.helius-rpc.com/?api-key=d6b842be-5729-49db-a0b0-4a19822b3533`,
  cluster: ICluster.Devnet,
});

/**
 * Stake
 *
 * @async
 * @param {ICreateStreamData} streamParams
 * @param {ICreateSolanaExt} solanaParams
 * @param {(stream: ICreateResult) => void} onSuccess
 * @param {(error: unknown) => void} onError
 * @returns {Promise<ICreateResult | undefined>}
 */
export const stake = async (
  stakeParams: StakeArgs,
  solanaParams: IInteractSolanaExt,
  onSuccess: (stream: ITransactionResult) => void,
  onError: (error: unknown) => void
): Promise<ITransactionResult | undefined> => {
  try {
    const stake = await solanaClient.stake(stakeParams, solanaParams);
    if (stake) {
      console.log("stream");
      onSuccess(stake);
    }
    return stake;
  } catch (error) {
    onError(error);
  }
};
