import { forwardRef } from 'react'
import clsx from 'clsx'

const ClayButton = forwardRef(({ children, className, ...rest }, ref) => (
  <button
    ref={ref}
    className={clsx('clay-button', className)}
    {...rest}
  >
    {children}
  </button>
))

export default ClayButton
