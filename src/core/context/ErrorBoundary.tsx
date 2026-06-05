import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = { hasError: false };
    }
    
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('error ', error, errorInfo);
    }
    render() {
        //if(this.state.hasError) {
            return <div>Error Boundary Context</div>
       //}
       // return this.props.children;
    }
}

export default ErrorBoundary;