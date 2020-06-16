import React from "react"
const noop = () => null

export default ({ goToSection }) => {
  return (
    <>
      <div className="relative self-center max-w-sm min-w-0 p-3 mx-16 rounded-lg shadow-xl md:p-4 card">
        <div className="relative flex flex-col">
          <div
            onClick={e => goToSection(e, 1)}
            onKeyPress={() => noop}
            role="link"
            tabIndex={0}
            aria-label="Dobrodošli"
            className="absolute top-0 bottom-0 z-10 w-full h-full border-transparent cursor-pointer md:border-8 hover:border-white hover:border-opacity-25 focus:outline-none"
            style={{
              width: "352px",
              height: "352px",
            }}
          ></div>
          <img
            src={"../../prva.png"}
            alt="Dobrodošli"
            title="Dobrodošli"
            className="z-0 w-full"
          />
          <img
            className="py-2 m-auto"
            src={"../../BaroccoCaffeeLogo.png"}
            width="120"
            alt="Barocco Caffe"
            title="Barocco Caffe"
          />
        </div>
        <footer
          className="absolute w-full pt-2 -mx-6 text-xs text-right text-barocco-gold md:-mx-8"
          style={{ bottom: "-1.5rem" }}
        >
          <div>
            Copyright <span className="font-bold">Zlatna Kava d.o.o. 2020</span>
          </div>
        </footer>
      </div>
    </>
  )
}
