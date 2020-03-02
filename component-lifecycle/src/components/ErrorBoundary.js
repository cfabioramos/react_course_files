import React from "react";

/*
    Error boundaries são componentes React que interceptam erros de JavaScript 
        em qualquer lugar de sua árvore de componentes, 
        disponibilizando os e oferecendo uma fallback UI, ou seja, 
        uma UI auxiliar para ser exibida quando há um erro em sua árvore de componentes.
        Além disso, você pode logar os erros.
*/
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  /*
    A class component becomes an error boundary if it defines either (or both) 
        of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). 
        Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. 
        Use componentDidCatch() to log error information.
  */

  /*
    Na versão 16.0.0 React nos introduz uma maneira de tratar Erros 
        na árvore de componentes com o novo método componentDidCatch
  */
  componentDidCatch(error, errorInfo) {
    // Aqui você pode logar o erro
    // logErrorToMyService(error, errorInfo);
    console.log('vai passar aqui...')
    console.log(error)
    console.log(errorInfo)
    this.setState({hasError: true, error, errorInfo })
  }

  render() {
    const { hasError, error, errorInfo } = this.state;

    return hasError ? (
      <div>
        <h2>Aconteceu algo errado.</h2>
        <details style={{ whiteSpace: "pre-wrap" }}>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </details>
      </div> ) : this.props.children
  }
}
