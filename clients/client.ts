import { ClientDataStore } from "../models/client-data-store"
import { Server } from "./server"

export class Client {
  store: ClientDataStore = {
    timestamp: 0,
    items: Object.create(null),
    changed: Object.create(null)
   }

  constructor (public server: Server) {}

  synchronize(): void {
    let clientChanges: Record<string, ClientChange> = Object.create(null)

    for (let id of Object.keys(this.store.changed)) {
      clientChanges[id] = {
      lastModifiedTime: this.store.changed[id],
      value: this.store.items[id].value
      }
    }

    let response = this.server.synchronize({
      timestamp: this.store.timestamp,
      clientTime: Date.now(),
      changes: clientChanges
    })

    this.store.changed = Object.create(null)
  }

  update(id: string, value: string): void {
    this.store.items[id] = {
      id,
      value
    }

    this.store.changed[id] = Date.now()
   }
}