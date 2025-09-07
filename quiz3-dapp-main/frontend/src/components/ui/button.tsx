import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-white hover:shadow-lg hover:shadow-trivia-purple/30 transform hover:scale-105",
        destructive:
          "bg-gradient-error text-white hover:shadow-lg hover:shadow-red-500/30 transform hover:scale-105",
        outline:
          "border-2 border-trivia-purple bg-transparent text-trivia-purple hover:bg-trivia-purple hover:text-white",
        secondary:
          "bg-gradient-secondary text-white hover:shadow-lg hover:shadow-trivia-orange/30 transform hover:scale-105",
        ghost: "hover:bg-trivia-purple/10 hover:text-trivia-purple",
        link: "text-trivia-blue underline-offset-4 hover:underline",
        success: "bg-gradient-success text-white hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105",
        quiz: "quiz-option hover:border-trivia-blue hover:bg-slate-700/50 text-left",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-xl px-3 text-xs",
        lg: "h-14 rounded-2xl px-8 text-base mobile-button",
        xl: "h-16 rounded-2xl px-10 text-lg",
        icon: "h-10 w-10",
        quiz: "w-full p-4 text-lg font-medium min-h-16 quiz-option-mobile-responsive",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
