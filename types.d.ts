export interface Props {
  [prop: string]: any
}

export interface Item {
  model: string
  label?: string
  type?: string
}

export interface Config {
  type: string
  props?: Props
  items?: Item[]
}
