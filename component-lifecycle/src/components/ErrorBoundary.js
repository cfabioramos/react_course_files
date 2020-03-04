import React from "react";

/*
    Error boundaries são componentes React que interceptam erros de JavaScript 
        em qualquer lugar de sua árvore de componentes, 
        disponibilizando e os oferecendo uma fallback UI, ou seja, 
        uma UI auxiliar para ser exibida quando há um erro de JS em sua árvore de componentes.
*/
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  /*
    A class component becomes an error boundary if it defines either (or both) 
        of the lifecycle methods static getDerivedStateFromError(error) or componentDidCatch(error, errorInfo)
        Use static getDerivedStateFromError() to inform if it is to render a fallback UI after an error has been thrown 
        Use componentDidCatch() to log error information
  */

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização exiba a UI de fallback
    // return { hasError: true };
    return null
  }

  componentDidCatch(error, errorInfo) {
    // Aqui você pode logar o erro
    // logErrorToMyService(error, errorInfo)
    this.setState({ hasError: true, error, errorInfo })
  }

  render() {
    const { hasError, error, errorInfo } = this.state

    return hasError ? (
      <div>
        <h3>Aconteceu algo errado. Veja o que foi:</h3>
        <details style={{ whiteSpace: "pre-wrap" }}>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </details>
      </div>
    ) : (
      this.props.children
    )
  }
}
