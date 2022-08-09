import Footer from "../../components/vernal_footer";
import Send_Card  from "../../components/wallet/sendCard";
import WalletHeader from "../../components/wallet/walletHeader";

export default function Wallet() {
    return (
      <>
      <div
        >
          <WalletHeader/>
          <Send_Card />
        <Footer />
        </div>
      </>
    );
  }