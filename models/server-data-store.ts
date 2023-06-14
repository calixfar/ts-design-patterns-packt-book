export interface ServerDataItem {
  id: string
  timestamp: number
  lastModifiedTime: number
  value: string
 }
 
 export interface ServerDataStore {
  items: {
    [id: string]: ServerDataItem
  }
}