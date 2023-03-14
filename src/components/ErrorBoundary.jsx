import React from 'react';
import { toast } from 'react-toastify';
class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false,
  };

  componentDidCatch(error) {
    toast.error(error.message);
  }

  static getDerivedStateFromError() {
    return { hasErrored: true };
  }

  render() {
    if (this.state.hasErrored) {
      return <div>Something went wrong</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
