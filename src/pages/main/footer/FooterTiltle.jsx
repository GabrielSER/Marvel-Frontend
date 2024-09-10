import clsx from 'clsx'

const FooterTiltle = ({ className, text }) => (
  <h2 className={clsx('font-semibold pb-2 text-center', className)}>{text}</h2>
)

export default FooterTiltle
