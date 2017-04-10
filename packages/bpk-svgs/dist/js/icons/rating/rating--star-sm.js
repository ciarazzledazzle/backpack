import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M12.6 5.39l1.7 3.5a1 1 0 0 0 .5.4l3.5.6a.64.64 0 0 1 .5 1.1l-3 2.7a.73.73 0 0 0-.2.6l1.2 3.9a.66.66 0 0 1-1 .7l-3.5-2.3a.64.64 0 0 0-.6 0l-3.5 2.3a.68.68 0 0 1-1-.7l1.2-3.9c0-.2 0-.5-.2-.6L5.2 11a.71.71 0 0 1 .4-1.2l3.5-.6a.66.66 0 0 0 .5-.4l1.7-3.5a.8.8 0 0 1 1.3.09z" /></svg>;
  }

}