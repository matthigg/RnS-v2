export interface ImageUrls {
  [key: string ]: { 
    before?: string | null, 
    after?: string | null, 
    single?: string | null 
  }[]
}