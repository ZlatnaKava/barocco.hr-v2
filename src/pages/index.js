import React from "react"
import Lokacije from "../components/Lokacije"
import Proizvodi from "../components/Proizvodi"
import Onama from "../components/Onama"

export default () => (
  <div className="flex bg-teal-500 dark:bg-yellow-500 justify-center">
    <div className="md:duration-500 max-w-screen-xl md:max-w-xl lg:max-w-4xl m-5 md:m-10 p-5 pb-20 bg-white rounded-lg shadow-xl">
      <div className="bg-gray-100 ">
        <Onama />
        <Proizvodi />
        <Lokacije />
      </div>
    </div>
  </div>
)
