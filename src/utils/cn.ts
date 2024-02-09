import { twMerge } from 'tailwind-merge'

export default function cn(...classes: (string | undefined)[]) {
  if (classes.length === 0) return ''
  if (classes.length === 1) return classes[0] || ''
  return twMerge(...classes)
}
