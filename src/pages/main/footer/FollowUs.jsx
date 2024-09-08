import FooterTiltle from './FooterTiltle'
import FooterLink from './FooterLink'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'

const size = 25

const Icon = ({ component }) => (
  <div className='hover:scale-110'>{component({ size })}</div>
)

const FollowUs = () => (
  <div className='flex flex-col w-52'>
    <FooterTiltle text='FOLLOW US!' />
    <div className='flex justify-between px-4 space-x-4'>
      <FooterLink
        to='https://www.facebook.com/santiago.sernaramirez/'
        text={<Icon component={FaFacebook} />}
      />
      <FooterLink
        to='https://www.instagram.com/santiago.serna.r/'
        text={<Icon component={FaInstagram} />}
      />
      <FooterLink
        to='https://www.youtube.com/@NaxtisNightGabrielS'
        text={<Icon component={FaYoutube} />}
      />
      <FooterLink
        to='_blank'
        text={<Icon component={FaTiktok} />}
      />
    </div>
  </div>
)

export default FollowUs
