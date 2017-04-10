import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M18.61 7.14l-3.1 3.1 1.6 6.8a.81.81 0 0 1-.3.9l-.5.5c-.2.2-.7.2-.8-.1l-2.4-5.6-2.9 2.9.6 1.7a.44.44 0 0 1-.1.5L9.51 19l-1.3-3.2L5 14.54l1.2-1.1a.44.44 0 0 1 .5-.1l1.7.6 2.9-2.9-5.6-2.6c-.4-.1-.4-.5-.2-.8l.5-.5a1.4 1.4 0 0 1 .9-.3l6.8 1.6 3.1-3.1a1.27 1.27 0 1 1 1.8 1.8z" /></svg>;
  }

}