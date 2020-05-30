import React from "react"
import { ParallaxLayer } from "react-spring/renderprops-addons"

const Beans = () => {
  return (
    <>
      <ParallaxLayer
        offset={0.15}
        speed={0.3}
        factor={4}
        style={{ pointerEvents: "none", opacity: 0.07 }}
      >
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "70%" }}
          className="w-bean-small"
        />
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "5%" }}
          className="w-bean-medium"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.75}
        speed={0.5}
        factor={2}
        style={{ pointerEvents: "none", opacity: 0.07 }}
      >
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "75%" }}
          className="w-bean-medium"
        />
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "25%" }}
          className="w-bean-medium"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        factor={2}
        style={{ opacity: 0.07 }}
      >
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "75%" }}
          className="w-bean-small"
        />
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "15%" }}
          className="w-bean-medium"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.6}
        factor={4}
        speed={1}
        style={{ opacity: 0.07 }}
      >
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "80%" }}
          className="w-bean-medium"
        />
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "20%" }}
          className="w-bean-medium"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        factor={1}
        speed={1}
        style={{ opacity: 0.07 }}
      >
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "60%" }}
          className="w-bean-small"
        />
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "10%" }}
          className="w-bean-medium"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={3.1}
        factor={3}
        speed={1.4}
        style={{ opacity: 0.05 }}
      >
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "5%" }}
          className="w-bean-small"
        />
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "75%" }}
          className="w-bean-medium"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={3.75}
        speed={0.8}
        factor={3}
        style={{ opacity: 0.07 }}
      >
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "60%" }}
          className="w-bean-medium"
        />
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "80%" }}
          className="w-bean-medium"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={4}
        speed={0.2}
        factor={2}
        style={{ opacity: 0.07 }}
      >
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "10%" }}
          className="w-bean-medium"
        />
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "60%" }}
          className="w-bean-medium"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={4.5}
        factor={1}
        speed={0.4}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          opacity: 0.07,
        }}
      >
        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "20%" }}
          className="w-bean-small"
        />

        <img
          alt=""
          title=""
          src={"../../coffee-bean.svg"}
          style={{ marginLeft: "60%" }}
          className="w-bean-big"
        />
      </ParallaxLayer>
    </>
  )
}
export default Beans
