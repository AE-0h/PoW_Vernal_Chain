import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Wallet.module.css";
import Footer from "../Components/Footer";

export default function Wallet() {
  return (
    <>
      <Head>
        <title>VERNAL_CHAIN</title>
      </Head>

      <div
        className={styles.background}
        style={{ display: "flex", justifyContent: "center" }}
      ></div>
      <div className="container" style={{ marginTop: "9rem", height: "100%" }}>
        <div className="jumbotron">
          <div className="container text-center text-lg-left">
            <div className="row">
              <div className="col-lg-8">
                <p className="lead">
                  VERNAL_CHAIN is a decentralized digital currency that enables
                  payments in a localhost enviroment.
                </p>
                <span className="text-center d-inline-block">
                  <Link href="/wallet">
                    <a
                      className="btn btn-primary btn-lg w-100"
                      href="#"
                      role="button"
                    >
                      Join the Egg Mass
                    </a>
                  </Link>
                </span>
              </div>
              <div className="col-lg-4 align-items-center d-flex">
                <Image
                  src="../public/images/eggMass.png"
                  alt="blocks-in-hand"
                  className="img-fluid"
                  width="1200px"
                  height="800px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}