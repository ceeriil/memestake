# **MemeCoin Staking App Demo**

This repository serves as a demo for using **Streamflow** to create a staking app for your meme token.

## **Getting Started**

### **Prerequisites**

- Node.js (LTS recommended)
- Yarn or npm (package manager)
- Reown Project ID (or Solana Wallet Adapter)
- RPC URL (Devnet or Mainnet)

### **Environment Variables**

Create a `.env.local` file in the root directory and add:

```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_SOLANA_RPC_URL=your_rpc_url
```

## **Configuration**

### **Moving to Mainnet**

Modify the following code in **`src/app/services/streamflow.ts`**:

```ts
const solanaClient = new SolanaStakingClient({
  clusterUrl: `your rpc url`,
  cluster: ICluster.Mainnet,
});
```

## **Running the App**

To install dependencies, run:

```
npm install
# or
yarn install
```

To start the development server:

```
npm run dev
# or
yarn dev
```

## **Styling**

This project uses **Tailwind CSS** for styling.

- The colors and presets can be modified in the **`tailwind.config.js`** file.
- For advanced styling and to match your meme token's UI, you should be familiar with **Tailwind CSS** or regular CSS.

📚 Learn more about Tailwind: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

## **Future Updates**

Future updates will include:

- **Sui/Aptos demo**
- **Option to top up rewards**
- **Stake pool creation**

## **Contributing**

This project is open for contributions! Feel free to submit PRs or open issues.
