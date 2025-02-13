import React from "react";

export const Stake = ({ handleStake }: { handleStake: () => void }) => {
  return (
    <div>
      State
      <button className="py-3 px-5 bg-blue-700" onClick={handleStake}>
        Stake
      </button>
    </div>
  );
};
