import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M2 18h20c0 1.105-1.895 2-3 2H5c-1.105 0-3-.895-3-2zM22 6.952v2.873a4.165 4.165 0 0 1-4 4.157v.104a2.913 2.913 0 0 1-2.913 2.913H8.913A2.913 2.913 0 0 1 6 14.086V4h12v1h2.048C21.126 5 22 5.874 22 6.952zM13.404 10.5l2.451-2.451a.496.496 0 0 0 0-.702l-.702-.702a.496.496 0 0 0-.702 0L12 9.096 9.549 6.645a.496.496 0 0 0-.702 0l-.702.702a.496.496 0 0 0 0 .702l2.451 2.451-2.451 2.451a.496.496 0 0 0 0 .702l.702.702a.496.496 0 0 0 .702 0L12 11.903l2.451 2.451a.496.496 0 0 0 .702 0l.702-.702a.496.496 0 0 0 0-.702l-2.451-2.45zM20 7h-2v4.993a2.177 2.177 0 0 0 2-2.168V7z" /></svg>;
  }

}