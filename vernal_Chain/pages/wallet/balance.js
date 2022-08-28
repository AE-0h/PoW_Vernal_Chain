import Footer from "../../components/vernal_footer";
import BalanceCard  from "../../components/wallet/balanceCard";
import WalletHeader from "../../components/wallet/walletHeader";

export default function Balance() { 
    return (
      <>
      <div
        >
          <WalletHeader/>
          <BalanceCard />
        <Footer />
        </div>
      </>
    );
  }