export interface IDictItem<T = string> {
  id: number
  dictId: string
  type: string
  name: string
  value: T
  description?: string
}
