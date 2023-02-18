import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from './utils'
import type { VariantProps } from 'class-variance-authority'

export interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof config> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return <button ref={ref} className={cn(config({ variant, className }))} {...props} />
  }
)

const config = cva(
  [
    'ui-h-10 ui-px-4 ui-py-2',
    'ui-inline-flex ui-items-center ui-justify-center ui-gap-2 ui-rounded-md ui-transition-colors',
    'ui-whitespace-nowrap ui-text-sm ui-font-medium',
    'ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-slate-400 focus-visible:ui-ring-offset-2',
    'disabled:ui-pointer-events-none disabled:ui-opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'ui-bg-slate-900 ui-text-white hover:ui-bg-slate-700',
        secondary: 'ui-bg-transparent ui-border ui-border-slate-200 hover:ui-bg-slate-100',
        tertiary: 'ui-bg-transparent hover:ui-bg-slate-100',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)
