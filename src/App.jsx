import bgImage from "./assets/image-000.png";
import qr from "./assets/image-003.png";

function App() {
  return (
    <>
      <div className="bg-[#020f1a] pt-6 text-white pb-6 relative overflow-x-hidden">
        <img
          src={bgImage}
          alt=""
          className="absolute -right-[400px] top-40 h-auto w-[800px]"
          style={{ zIndex: "0" }}
        />
        <div className="container">
          <div className="flex justify-between">
            <div>
              <img
                src="https://afro-group.com/static/media/Picture4.792ba871e85044e3ea87.png"
                alt=""
                className="h-auto w-44 lg:w-48"
              />
            </div>
            <div>
              <img
                src="https://test.afro-group.net/public/uploads/theme/afro1667864198.png"
                alt=""
                className="h-10 lg:h-12 w-auto"
              />
              <p className="font-semibold text-slate-400 text-center">
                &quot;Technology Gateway&quot;
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-center text-4xl lg:text-5xl font-extrabold mt-24 mb-2 text-[#bd8d2d]">
              JOIN AFRO
            </h1>
            <h1 className="text-center text-4xl lg:text-5xl font-extrabold  text-[#bd8d2d]">
              ACADEMY TRAINING
            </h1>
          </div>
          <div className="mt-16 lg:mt-20">
            <p className="text-xl lg:text-2xl max-w-xl">
              Calling all ambitious undergraduates! Are you ready to embark on a
              transformative journey that combines learning, growth, and
              real-world experience? Look no further than AFRO Academy Summer
              Internship Program
            </p>
          </div>
          <div className="my-20 grid grid-cols-12 gap-4">
            <div className="col-span-12 order-2 lg:order-1 lg:col-span-8">
              <h2 className="text-3xl font-semibold text-[#bd8d2d]">
                Mobile Networking Track
              </h2>
              <ul className=" list-inside list-disc mt-4 text-xl">
                <li>Mobile Technology Package (2G,3G,4G)</li>
                <li>Mobile Technology Package (5G,DT)</li>
                <li>Transmission MW</li>
                <li>Transmission WL Software</li>
                <li>Site Preparation Process</li>
                <li>Telecom Equipment Installation</li>
                <li>Telecom Works Quality</li>
                <li>Health and Safety Principles</li>
                <li>Health and Safety PPE’s</li>
                <li>Field Engineering Skills</li>
              </ul>
            </div>
            <div className="col-span-12 order-1 lg:order-1 lg:col-span-4 z-10">
              <div className="h-56 w-56 rounded-full bg-[#13baaa] pt-12 px-8 mx-auto">
                <span className="block text-2xl">UP TO</span>
                <span className="text-7xl font-bold drop-shadow-xl">60%</span>
                <span className="block text-right text-2xl">OFF</span>
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-3xl font-semibold text-[#bd8d2d]">
                  Discount code
                </h4>
                <p className="text-2xl font-bold">FUTURE2023</p>
              </div>
              <div>
                <img
                  src={qr}
                  alt="qr"
                  className="h-36 w-36 mt-4 block mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold tracking-[0.7em] text-[#bd8d2d]">
              LEARN&EARN
            </h3>
            <small className="uppercase text-[10px]">
              The Institute of Technical Training and career development
            </small>
          </div>
        </div>
      </div>
      <footer className="flex flex-col lg:flex-row gap-y-2 justify-between container py-6">
        <div className="flex items-center gap-x-1">
          <span>
            <svg
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path>
            </svg>
          </span>
          <span>+20 100 148 8280</span>
        </div>
        <div>
          <p className="flex items-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
              viewBox="0 0 24 24"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
            </svg>
            afro-academy.com/future
          </p>
        </div>
        <div>
          <p className="flex items-center gap-x-1">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
              viewBox="0 0 24 24"
            >
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
            </svg>
            register@afro-academy.com
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
