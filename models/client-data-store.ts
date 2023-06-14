export interface ClientDataItem {
  id: string
  value: string
}

export interface ClientDataStore {
  timestamp: number
  items: {
    [id: string]: ClientDataItem
  }
  changed: {
    [id: string]: number
  }
}