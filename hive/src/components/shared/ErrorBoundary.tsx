import React, { Component, ErrorInfo, ReactNode } from 'react';

// Error Boundary Props
interface ErrorBoundaryProps {
  children: ReactNode;
}

// Error Boundary State
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  // This lifecycle method is used to catch errors
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to indicate an error has occurred
    return {
      hasError: true,
      error: error,
      errorInfo: null,
    };
  }

  // This lifecycle method gives us more info about the error
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      errorInfo: errorInfo,
    });

    // Optionally, you can log the error to an external service
    console.error("Error occurred:", error);
    console.error("Error info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children; // Render children if no error occurred
  }
}

export default ErrorBoundary;
