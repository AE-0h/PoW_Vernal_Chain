import styles from "/styles/vernalMain.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        href="https://github.com/AE-0h"
        rel="noreferrer"
        target="_blank"
      >
         <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%">
            <filter id="filter-wps374rdt">
              <feTurbulence baseFrequency="0.42038" numOctaves="2" seed="10">
                {" "}
              </feTurbulence>{" "}
              <feColorMatrix values="3.1 -6.5 -2.6 -9 -2.3 -5.1 -1 -2.1 1.3 1.8 0 0.8 6.9 -4.1 1.9 0.9 4.4 6.9 3.2 0">
                {" "}
              </feColorMatrix>{" "}
            </filter>{" "}
            <rect
              width="100%"
              height="100%"
              fill="rgb(115,2,183)"
              className="bgRect"
            >
              {" "}
            </rect>{" "}
            <rect width="100%" height="100%" filter="url(#filter-wps374rdt)">
              {" "}
            </rect>{" "}
          </svg>{" "}
      </a>
      <p
        className="fs-5 px-4 mt-3"
        style={{
          color: "#ffffff",
        }}
      >
        <a
          href="https://github.com/AE-0h"
          target="_blank"
          rel="noreferrer"
          className={styles.github}
        ></a>
      </p>
    </div>
  );
};

export default Footer;