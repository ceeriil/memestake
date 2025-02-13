import { ConnectButton } from "@/components/ConnectButton";
import { InfoList } from "@/components/InfoList";
import { ActionButtonList } from "@/components/ActionButtonList";
export default function Home() {
  return (
    <div className={"pages"}>
      <h1 className="text-4xl text-red-200">
        AppKit Solana Next.js App Router Example
      </h1>

      <div>
        <ConnectButton />
      </div>
      <div>
        <ActionButtonList />
      </div>
      <InfoList />
    </div>
  );
}
