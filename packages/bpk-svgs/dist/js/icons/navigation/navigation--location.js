import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M18.1 4.8c-2.9-3.4-8-3.7-11.4-.8-.3.2-.5.5-.8.8C3.1 8 3.5 12.6 6.5 16l4.8 5.7c.4.4 1 .4 1.4 0l4.8-5.7c3-3.4 3.4-8 .6-11.2zM12 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></svg>;
  }

}