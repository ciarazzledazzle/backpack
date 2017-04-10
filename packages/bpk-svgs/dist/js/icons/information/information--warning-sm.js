import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M19.89 17.7l-7-13.3a1.003 1.003 0 0 0-1.7 0l-7 13.3c-.23.5-.01 1.1.49 1.32.1.05.21.07.32.09h14c.55-.01.99-.47.98-1.02-.01-.14-.03-.27-.09-.39zM12 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-4c0 .55-.45 1-1 1s-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v4z" /></svg>;
  }

}