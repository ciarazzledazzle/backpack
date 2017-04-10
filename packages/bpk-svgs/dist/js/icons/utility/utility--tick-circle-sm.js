import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4.4 5.8l-4.9 5.6c-.4.4-1 .5-1.4.1l-2.3-2c-.2-.2-.2-.5-.1-.7l.6-.8c.2-.2.5-.2.7 0l1.4 1.2c.1.1.2.1.3 0l4.1-4.7c.2-.2.5-.2.7-.1l.8.6c.2.2.3.6.1.8z" /></svg>;
  }

}