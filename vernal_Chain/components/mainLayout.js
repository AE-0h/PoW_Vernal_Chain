// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-icons/font/bootstrap-icons.json";
import Navbar from "./dropNav";
import Footer from "./vernal_footer";

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          display: "block",
          position: "relative",
          paddingBottom: "100px",
        }}
      >
        <Navbar />

        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;