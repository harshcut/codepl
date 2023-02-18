import { twJoin, extendTailwindMerge } from 'tailwind-merge'
import type { ClassNameValue } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  prefix: 'ui-',
})

export const cn = (...inputs: ClassNameValue[]) => {
  return twMerge(twJoin(inputs))
}
