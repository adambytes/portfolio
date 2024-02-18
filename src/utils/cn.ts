import { ClassNameValue, twMerge } from 'tailwind-merge'

export default function cn(...classes: (string | undefined)[]) {
  if (classes.length === 0) return ''

  return twMerge(...classes)
}
