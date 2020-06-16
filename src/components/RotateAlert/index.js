import React from "react"

const RotateAlert = () => {
  return (
    <div className="absolute flex flex-wrap content-center justify-center w-full h-full m-auto mx-auto">
      <div className="relative self-center max-w-sm min-w-0 p-3 mx-16 text-center rounded-lg shadow-xl md:p-4 bgText">
        <img
          className="mx-auto mt-5"
          src={"../../RotateAlert.png"}
          alt="Rotate Alert"
          title="Rotate Alert"
        />
        <p>Format nije podržan!</p>
        <p>Molimo okrenite uređaj u portret položaj!</p>
      </div>
    </div>
  )
}
export default RotateAlert
