import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M2 9.89a.38.38 0 0 1 .31-.53h1.42a.44.44 0 0 1 .43.27l1.48 1.74h4L6.91 5.21c0-.22.08-.5.27-.43h.63a1.71 1.71 0 0 1 1.55.7l3.92 5.76 5.7-.09a1.29 1.29 0 0 1 1.19 1.09 1.16 1.16 0 0 1-1.06 1.1H7.87a7.94 7.94 0 0 1-4.53-1.67zM11 18h10v2H11zm.14-2.94A1.06 1.06 0 1 1 10.06 14a1.06 1.06 0 0 1 1.07 1.06zm2.94 0A1.06 1.06 0 1 1 13 14a1.06 1.06 0 0 1 1.06 1.06z" /></svg>;
  }

}