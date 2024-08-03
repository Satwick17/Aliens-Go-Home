import React, { Component } from "react";
import PropTypes from "prop-types";
import Canvas from "./components/Canvas";
import { getCanvasPosition } from "./utils/formulas";
import * as Auth0 from "auth0-web";

Auth0.configure({
  domain: "dev-pe6yz1u0qw1mhxhp.us.auth0.com",
  clientID: "Xkx5yZgRp63AQrUTuDIkos7KjcWS7mni",
  redirectUri: "http://localhost:3000/",
  responseType: "token id_token",
  scope: "openid profile manage:points",
});

class App extends Component {
  componentDidMount() {
    const self = this;

    Auth0.handleAuthCallback();

    Auth0.subscribe((auth) => {
      console.log(auth);
    });

    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);
    window.onresize = () => {
      const cnv = document.getElementById("aliens-go-home-canvas");
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }
  render() {
    return (
      // <div className="App">
      //   <h1>{this.props.message}</h1>
      // </div>
      <Canvas
        angle={this.props.angle}
        trackMouse={(event) => this.trackMouse(event)}
        gameState={this.props.gameState}
        startGame={this.props.startGame}
      />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,

    flyingObjects: PropTypes.arrayOf(
      PropTypes.shape({
        position: PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired,
        }).isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default App;
