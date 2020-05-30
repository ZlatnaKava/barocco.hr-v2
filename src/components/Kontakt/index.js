import React, { useState } from "react"
import { useSpring, animated as a } from "react-spring"

export default () => {
  const [flipped, set] = useState(false)
  const { transform } = useSpring({
    opacity: flipped ? 1 : 1,
    transform: `perspective(600px) rotateY(${flipped ? 360 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <>
      <div className="relative self-center mb-10 -max-w-md md:max-w-xl md:mb-14">
        <a.div
          className=""
          style={{ transform }}
        >
          <div className="inline-block ml-0 md:ml-5">
            <h2 className="text-base md:text-xl">Kontakt</h2>
          </div>
          <div className="max-w-md p-3 mx-3 min-w-1/2 md:max-w-xl md:mx-5 md:p-4 card">
            {flipped && (
              <div>
                <h3>Hvala!</h3>
                <p>Vaša poruka je uspiješno poslana!</p>
                <p>Zhvaljujemo na Vašem upitu! Odgovoriti ćemo vam uskoro!</p>
                <div className="flex pt-5 md:items-center">
                  <button
                    className="px-4 py-2 ml-auto font-bold text-white border-none rounded-lg shadow bg-barocco-yellow hover:bg-barocco-gold focus:shadow-outline focus:outline-none"
                    type="button"
                    onClick={() => set(state => !state)}
                  >
                    Pošalji novu poruku!
                  </button>
                </div>
              </div>
            )}
            {!flipped && (
              <form className="w-full max-w-lg">
                <div className="p-2 bgText md:p-5">
                  <div className="relative">
                    <div className="flex flex-wrap mb-4 -mx-3">
                      <div className="w-full px-1 mb-4 md:w-1/2 md:mb-0">
                        <label
                          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                          htmlFor="grid-first-name"
                        >
                          Ime
                        </label>
                        <input
                          aria-label="Ime"
                          className="block w-full px-4 py-2 mb-2 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Pero"
                        />
                      </div>
                      <div className="w-full px-1 md:w-1/2">
                        <label
                          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                          htmlFor="grid-password"
                        >
                          E-mail
                        </label>
                        <input
                          aria-label="E-mail"
                          className="block w-full px-4 py-2 mb-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                          id="email"
                          type="email"
                          placeholder="pero.peric@email.com"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-4 -mx-3">
                      <div className="w-full px-1">
                        <label
                          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                          htmlFor="grid-password"
                        >
                          Poruka
                        </label>
                        <textarea
                          aria-label="Poruka"
                          className="block w-full h-48 px-4 py-3 scrolling-auto leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
                          id="message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 md:items-center">
                  <button
                    className="px-4 py-2 ml-auto font-bold text-white border-none rounded-lg shadow bg-barocco-yellow hover:bg-barocco-gold focus:shadow-outline focus:outline-none"
                    type="button"
                    onClick={() => set(state => !state)}
                  >
                    Pošalji
                  </button>
                </div>
              </form>
            )}
          </div>
        </a.div>
      </div>
    </>
  )
}
