export default function DatabaseStatus({ isConnected }) {
    return (
        <div style={{ position: 'fixed', top: '2%', left: '45%', zIndex: 100 }}>
            {isConnected ? (
                <div color="green" content="DB Connected" />
            ) : (
                <div color="red" content="DB Disconnected" />
            )}
        </div>
    )
}
