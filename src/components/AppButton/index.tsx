import React from 'react'
import './index.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'yellow' | 'violet' | 'red'
}  

export const AppButton: React.FC<Props> = ({children, variant, className, ...props}) => {
  return (
    <button className={`btn btn--${variant} ${className}`} {...props}>{children}</button>
  )
}
