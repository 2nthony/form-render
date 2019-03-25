import { Component as VueComponent } from 'vue'

export declare type Props = {
  [prop: string]: any
}

export declare type Options = {
  value: any
  label?: string
}

export declare type EnableWhen = {
  [k: string]: any
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
   * Render custom component, HTML element or map built-in component
   */
  component?: VueComponent | HTMLElementTagNameMap | string
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

  /**
   * Form item status
   *
   * @default `edit`
   */
  status?: 'preview' | 'edit' | 'disabled'

  /**
   * This function will trigger when current form item value changed
   *
   * @param `model`
   * Current form item model
   *
   * @param `value`
   * Current form item value
   *
   * ```js
   * {
   *   atChange: (model, value) => {
   *     // do something right
   *   }
   * }
   * ```
   */
  atChange?: (model: string, value: any) => void

  /**
   * Show current form item when condition established
   */
  enableWhen?: EnableWhen | string
}

export interface Config {
  /**
   * Form props options
   */
  props?: Props
  /**
   * To render form items
   */
  items?: Item[]
}
