import Wallet_NAV from "./walletNav";
import Vernalico from "../vernal_icon.js";
import styles from "/styles/vernalMain.module.css";


const WalletHeader = () => {
    return (
        <div className= {styles.header}>
        <Vernalico/>
        <Wallet_NAV  /> 
        </div>
    );
}
export default WalletHeader;