import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M7.3 8.4V7h3.8c.6 0 1-.4 1-1s-.4-1-1-1H7.3V3.6c0-.4-.5-.7-.9-.5L2.3 5.5c-.4.2-.4.8 0 1l4.2 2.4c.4.2.8 0 .8-.5zm8.4 3.1l-4.2-2.4c-.4-.2-.9.1-.9.5V11H6.9c-.6 0-1 .4-1 1s.4 1 1 1h3.8v1.4c0 .4.5.7.9.5l4.2-2.4c.3-.2.3-.8-.1-1z" /></svg>;
  }

}