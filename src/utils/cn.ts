import { twMerge } from 'tailwind-merge'

export default function cn(...classes: string[]) {
  if (classes.length === 0) return ''
  return twMerge(...classes)
}
