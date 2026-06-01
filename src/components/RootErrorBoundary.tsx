import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };

type State = { error: Error | null };

export class RootErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[Privanta]", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: "100vh",
            padding: "2rem",
            fontFamily: "system-ui, sans-serif",
            background: "#070e1c",
            color: "#e5e7eb",
          }}
        >
          <h1 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Something went wrong</h1>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              fontSize: "0.85rem",
              color: "#fca5a5",
              marginBottom: "1.5rem",
            }}
          >
            {this.state.error.message}
          </pre>
          <button
            type="button"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              border: "1px solid #2fbfc8",
              background: "rgba(47,191,204,0.15)",
              color: "#63f0dd",
              cursor: "pointer",
            }}
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
