import Footer from "../../components/vernal_footer";
import Create_Card  from "../../components/wallet/createCard";
import WalletHeader from "../../components/wallet/walletHeader";


export default function Wallet() {
    return (
      <>
      <div
        >
          <WalletHeader/>
          <Create_Card />
        <Footer />
        </div>
      </>
    );
  }