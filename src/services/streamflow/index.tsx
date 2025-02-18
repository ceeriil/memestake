import {
  IInteractSolanaExt,
  SolanaStakingClient,
  StakeArgs,
  StakePool,
  StakeEntry,
} from "@streamflow/staking";
import { ICluster, ITransactionResult } from "@streamflow/stream";
import { PublicKey } from "@solana/web3.js";

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

/**
 * Get stake pool
 *
 * @async
 * @param {string} address
 * @returns {Promise<[string, Stream][] | undefined>}
 */
export const getStake = async (
  address: string
): Promise<StakePool | undefined> => {
  try {
    const stake = await solanaClient.getStakePool(address);
    return stake;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get stake pool
 *
 * @async
 * @param {string} address
 * @returns {Promise<[string, Stream][] | undefined>}
 */
export const getAllStakePools = async (): Promise<StakePool | undefined> => {
  try {
    const stake = await solanaClient.searchStakePools();
    return stake;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get stake entries
 *
 * @async
 * @param {string} address
 * @returns {Promise<[string, Stream][] | undefined>}
 */
export const getAllStakeEntries = async (
  address: PublicKey,
  stakePool: PublicKey
): Promise<[StakeEntry] | undefined> => {
  try {
    const stake = await solanaClient.searchStakeEntries({
      payer: address,
      stakePool,
    });
    return stake;
  } catch (error) {
    console.error(error);
  }
};
