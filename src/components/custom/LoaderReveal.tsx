import type { ReactNode } from 'react'

export interface LoaderRevealProps {
  children?: ReactNode
  [key: string]: unknown
}

export function LoaderReveal({ children }: LoaderRevealProps) {
  return <>{children || null}</>
}

export default LoaderReveal