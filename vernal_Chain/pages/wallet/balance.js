import Footer from "../../components/vernal_footer";
import Balance_Card  from "../../components/wallet/balanceCard";
import WalletHeader from "../../components/wallet/walletHeader";

export default function Wallet() {
    return (
      <>
      <div
        >
          <WalletHeader/>
          <Balance_Card />
        <Footer />
        </div>
      </>
    );
  }