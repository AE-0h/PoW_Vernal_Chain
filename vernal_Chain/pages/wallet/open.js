import Footer from "../../components/vernal_footer";
import Wallet_Card  from "../../components/wallet/balanceCard";
import WalletHeader from "../../components/wallet/walletHeader";

export default function Wallet() {
    return (
      <>
      <div
        >
          <WalletHeader/>
          <Wallet_Card />
        <Footer />
        </div>
      </>
    );
  }