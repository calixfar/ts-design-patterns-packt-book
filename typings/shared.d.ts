interface ClientChange {
  lastModifiedTime: number
  value: string
}
 interface SyncingRequest {
  timestamp: number
  clientTime: number
  changes: {
    [id: string]: ClientChange
  }
}
 
interface SyncingResponse {
  timestamp: number
  changes: {
    [id: string]: string
  }
}
