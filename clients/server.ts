import { ServerDataStore } from "../models/server-data-store"

export class Server {
  store: ServerDataStore = {
    items: Object.create(null)
  }

  synchronize(request: SyncingRequest): SyncingResponse {
    let lastTimestamp = request.timestamp
    let now = Date.now()
    let serverChanges: Record<string, string> = Object.create(null)

    for (let id of Object.keys(this.store.items)) {
      let item = this.store.items[id]
      if (item.timestamp > lastTimestamp) {
        serverChanges[id] = item.value
      }
    }
    
    return {
      timestamp: now,
      changes: serverChanges
    }
  }
   
}