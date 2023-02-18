import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from './utils'
import type { VariantProps } from 'class-variance-authority'

export interface TextareaProps
  extends React.ComponentProps<'textarea'>,
    VariantProps<typeof config> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return <textarea ref={ref} className={cn(config({ variant, className }))} {...props} />
  }
)

const config = cva(
  [
    'ui-w-full ui-min-h-10 ui-h-20 ui-px-3 ui-py-2',
    'ui-rounded-md ui-border ui-border-slate-300',
    'ui-text-sm',
    'ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-slate-400 focus-visible:ui-ring-offset-2',
    'disabled:ui-cursor-not-allowed disabled:ui-opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'ui-bg-transparent placeholder:ui-text-slate-400',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)