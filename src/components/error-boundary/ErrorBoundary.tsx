import React, { ErrorInfo, ReactNode } from "react";
import { Alert } from "@nlmk/ds-2.0";

interface ErrorBoundaryProps {
  children: ReactNode;
  key: number;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean; error: Error | null }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert severity="error" title="Ошибка рендеринга">
          <p>{this.state.error?.message}</p>
        </Alert>
      );
    }

    return this.props.children;
  }
}
