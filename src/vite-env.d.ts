/// <reference types="vite/client" />

declare module "lodash" {
  export function shuffle<T>(collection: T[]): T[];
}
