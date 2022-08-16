import { Badge } from 'primereact/badge'

export default function DatabaseStatus({ isConnected }) {
   return (
      <div style={{ position: 'fixed', top: '2%', left: '45%', zIndex: 100 }}>
         {isConnected ? (
            <Badge severity="success" value="DB Connected" />
         ) : (
            <Badge severity="danger" value="DB Disconnected" />
         )}
      </div>
   )
}
