import Drawer from "@material-ui/core/Drawer";
import { default as React } from "react";
import { useScroll } from "../../../hooks/useScroll";
import LeftDrawer from "./Drawer/index";
import "./Hamburger.styles.css";



const Hamburger = () => {
 const {scrollY}= useScroll()
  const [state, setState] = React.useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(isOpen);
  };


  return (
    <>
      <div id={!state ? "hamburger-container": ''}>
        <div
          className={state ? "open" : ''}
          id="nav-icon1"
          onClick={toggleDrawer(true)}
        >
          <span style={{backgroundColor:scrollY>45?'black':'white'}}></span>
          <span  style={{backgroundColor:scrollY>45?'black':'white'}}></span>
          <span  style={{backgroundColor:scrollY>45?'black':'white'}}></span>
        </div>
      </div>

      <Drawer open={state} onClose={toggleDrawer(false)}>
        <LeftDrawer toggleDrawer={toggleDrawer}/>
      </Drawer>
    </>
  );
};

export default Hamburger;
