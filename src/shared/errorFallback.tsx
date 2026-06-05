export default function ErrorFallback({error, resetErrorBoundary}: any) {
    return (
        <>
            <pre onClick={resetErrorBoundary}>
                <h2>{error.message}</h2>
                Click here for retry
            </pre>
        </>
    );
}