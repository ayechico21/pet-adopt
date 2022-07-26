import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate() {
    if (this.state.error) {
      return setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          OHHH NOOOOO!!!!!!!! Error encountered.....
          <Link to="/">Click Here</Link> to go back to homepage now. Page would
          automatically redirect in 5 sec..hehe
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
