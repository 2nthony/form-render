export declare type Props = {
  [prop: string]: any
}

export declare type Options = {
  value: any
  label?: string
}

export declare type Item = {
  /**
   * Value model
   */
  model: string
  /**
   * Form item label
   */
  label?: string
  /**
   * Mapping component
   *
   * e.g.
   * `type: 'text'` = `<input>`
   */
  type?: string
  /**
   * Form item default value
   */
  value?: any
  /**
   * Form item props options
   */
  props?: Props
  /**
   * Option type component's options
   *
   * e.g.
   * `select` `radio` `checkbox` ...
   */
  options?: Options[]
}

export interface Config {
  props?: Props
  /**
   * To render form items
   */
  items?: Item[]
}
