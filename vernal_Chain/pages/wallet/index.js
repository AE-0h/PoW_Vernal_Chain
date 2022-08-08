import Footer from "../../components/vernal_footer";
import Wallet_Card  from "../../components/wallet/walletCard";
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