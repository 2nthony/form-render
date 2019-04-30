import { Value, Options } from '../../types'

declare class Store {
  value: Value
  options: {
    [key: string]: Options
  }

  updateValue(val: object): void

  getValue(model?: string): object | any

  setOptions(model: string, opts?: Options[]): void
}

export = new Store()
