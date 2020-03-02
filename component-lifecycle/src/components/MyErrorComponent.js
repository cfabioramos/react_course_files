import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ContadorComBug from "./ContadorComBug";

const MyFallbackComponent = ({ componentStack, error }) => (
  <div>
    <h2>Aconteceu algo errado.</h2>
    <details style={{ whiteSpace: "pre-wrap" }}>
      {error && error.toString()}
      <br />
      {componentStack}
    </details>
  </div>
);

export default function MyErrorComponent() {
  return (
    <ErrorBoundary FallbackComponent={MyFallbackComponent}>
      <ContadorComBug />
    </ErrorBoundary>
  );
}
