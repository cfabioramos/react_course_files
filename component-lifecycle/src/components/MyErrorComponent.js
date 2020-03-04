import React from "react"
import ContadorComBug from "./ContadorComBug"
import MyErrorBoundary from "./ErrorBoundary"
import { ErrorBoundary } from "react-error-boundary"

const MyFallbackComponent = ({ componentStack, error }) => (
  <div>
    <h3>Aconteceu algo errado. Veja o que foi:</h3>
    <details style={{ whiteSpace: "pre-wrap" }}>
      {error && error.toString()}
      <br />
      {componentStack}
    </details>
  </div>
);

export default function MyErrorComponent() {
  return (
    <div>
      <MyErrorBoundary>
        <ContadorComBug />
      </MyErrorBoundary>
      <ErrorBoundary FallbackComponent={MyFallbackComponent}>
        <ContadorComBug />
      </ErrorBoundary>
    </div>
  )
}
