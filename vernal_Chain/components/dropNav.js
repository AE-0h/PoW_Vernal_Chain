import Link from "next/link";
import Image from "next/image";

const dropNav = () => {
  return (
    <>
      <nav>
        <div class="navicon"> &#9776;</div>
        <div class="logo">
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
              class="bgRect"
            >
              {" "}
            </rect>{" "}
            <rect width="100%" height="100%" filter="url(#filter-wps374rdt)">
              {" "}
            </rect>{" "}
          </svg>{" "}
        </div>{" "}
      </nav>{" "}
    </>
  );
};
