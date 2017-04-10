import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M21 15v-.67a2 2 0 0 0-.91-1.67L13 8V4a1 1 0 0 0-2 0v4l-7.1 4.66a2 2 0 0 0-.9 1.67V15l8-2v4l-2.13 1.46A2 2 0 0 0 8 20.12V21l4-1.6 4 1.6v-.88a2 2 0 0 0-.87-1.65L13 17v-4z" /></svg>;
  }

}