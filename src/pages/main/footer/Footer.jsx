import clsx from 'clsx'
import LogoDisclaimer from './LogoDisclaimer'
import CreatedBy from './CreatedBy'
import ContactUs from './ContactUs'
import FollowUs from './FollowUs'

const Footer = () => (
  <div
    className={clsx(
      'flex',
      'w-full',
      'justify-center sm:justify-between items-center',
      'p-4 sm:p-8',
      'snap-end',
      'bg-secondary',
      'shadow-lg',
      'font-condensed',
      'text-white'
    )}
  >
    <LogoDisclaimer />
    <div
      className={clsx(
        'hidden',
        'sm:flex grow flex-wrap items-center justify-center',
        'w-full h-full',
        'pl-10'
      )}
    >
      <div className={clsx('flex flex-row', 'gap-8')}>
        <CreatedBy />
        <div className={clsx('flex flex-col xl:flex-row gap-10')}>
          <ContactUs />
          <FollowUs />
        </div>
      </div>
    </div>
  </div>
)

export default Footer
