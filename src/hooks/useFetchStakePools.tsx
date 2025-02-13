import { useEffect, useState } from "react";
import { getAllStakePools } from "@/services/streamflow";
import { StakePool } from "@streamflow/staking";
/**
 * Returns all streams of the user's wallet on the Solana blockchain and filter by mint address
 *
 * @export
 * @returns {{ streams: [string, Stream][] | undefined; fetchStreams; loading: boolean; error: Error | undefined; }}
 */

export function useFetchStakePools(): {
  stakepools: StakePool | undefined;
  fetchStakePools: () => void;
  loading: boolean;
  error: Error | undefined;
} {
  const [stakepools, setStakePools] = useState<StakePool | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  const fetchStakePools = async () => {
    try {
      setLoading(true);
      const stakePoolData = await getAllStakePools();
      console.log(stakePoolData, "stake pool");
      setStakePools(stakePoolData);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStakePools();
    return () => {
        setStakePools(undefined);
      setLoading(true);
      setError(undefined);
    };
  }, []);

  return { stakepools, fetchStakePools, loading, error };
}
