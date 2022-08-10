import { Badge } from 'rsuite'

export default function DatabaseStatus ({ isConnected }) {
  return (
    <div style={{ position: 'fixed', top: '2%', left: '45%', zIndex: 100 }}>
      { isConnected ? <Badge color="green" content="DB Connected"/> : <Badge color="red" content="DB Disconnected"/> }
    </div>
  )
}