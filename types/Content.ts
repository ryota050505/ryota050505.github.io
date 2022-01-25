export type Query = {
  q?: string,
  category?: string,
  tag?: string,
}

export type Conditions = {
  category?: string,
  tags?: object,
}

export type Search = (arg0: string) => void

export type TemplateConditions = {
  text: string,
  count: number,
  func: Search,
}