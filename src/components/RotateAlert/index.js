import React from "react"

const RotateAlert = () => {
  return (
    <div className="flex justify-center flex-wrap mx-auto content-center absolute m-auto w-full h-full">
      <div className="min-w-0 max-w-sm mx-16 p-3 md:p-4 bgText rounded-lg shadow-xl self-center relative text-center">
        <img
          className="mx-auto mt-5"
          src={"../../RotateAlert.png"}
          width="120"
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
