import FooterLink from './FooterLink'
import FooterTiltle from './FooterTiltle'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

const Icon = ({ component, text }) =>
    <span className='flex items-center gap-2'>
        {component()}
        {text}
    </span>

const ContactUs = () =>
    <div className='flex flex-col flex-initial w-64'>
        <FooterTiltle text='CONTACT US!' />
        <FooterLink
            to='mailto: gs.serna10@uniandes.edu.co'
            text={
                <Icon
                    component={AiOutlineMail}
                    text='gs.serna10@uniandes.edu.co'
                />
            }
        />
        <FooterLink
            to='http://wa.link/zv5zhk'
            text={
                <Icon
                    component={AiOutlineWhatsApp}
                    text='+57 3028196865'
                />
            }
        />
    </div>

export default ContactUs