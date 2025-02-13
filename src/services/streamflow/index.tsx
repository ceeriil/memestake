import { ICreateSolanaExt, SolanaStakingClient } from "@streamflow/staking";
import { Keypair } from "@solana/web3.js";
import { ICluster } from "@streamflow/stream";
/**
 * create a new instance of the SolanaStakingClient
 */
const solanaClient = new SolanaStakingClient({
  clusterUrl: `${process.env.NEXT_PUBLIC_RPC_URL}`,
  cluster: ICluster.Mainnet,
});
