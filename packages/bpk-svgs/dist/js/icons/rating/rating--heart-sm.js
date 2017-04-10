import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M18.09 6.84a3.49 3.49 0 0 0-4.8-.7 3.34 3.34 0 0 0-1.2 1.5c0 .1-.1.1-.1 0a3.74 3.74 0 0 0-1.3-1.5 3.49 3.49 0 0 0-4.8.7 4.24 4.24 0 0 0 .2 5.5l5.2 5.8a.94.94 0 0 0 1.5 0l5.2-5.8a4.37 4.37 0 0 0 .1-5.5z" /></svg>;
  }

}