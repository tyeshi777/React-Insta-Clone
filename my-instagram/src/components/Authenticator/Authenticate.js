import React from "react";
import SignIn from "../LoginPage/Login";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        signIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ signIn: false });
      } else {
        this.setState({ signIn: true });
      }
    }
    render() {
      if (this.state.signIn) return <App />;
      return <SignIn />;
    }
  };

export default Authenticate;
