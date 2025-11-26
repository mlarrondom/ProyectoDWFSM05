import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Estado interno para indicar si hubo error
    this.state = { hasError: false };
  }

  // Se ejecuta solo cuando un hijo lanza un error
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error capturado por ErrorBoundary:", error, info);
  }

  // Lo que se mostrará en caso de error
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem" }}>
          <h1>Algo salió mal.</h1>
          <p>Por favor, recarga la página o vuelve más tarde.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
