import FooterLink from './FooterLink'
import FooterTiltle from './FooterTiltle'
import { VscCircleFilled } from 'react-icons/vsc'

const CreatorLink = ({ to, name }) =>
    <li className='flex space-x-2'>
        <VscCircleFilled />
        <FooterLink
            to={to}
            text={name}
        />
    </li>

const CreatedBy = () =>
    <div className='flex flex-col w-52 shrink-0'>
        <FooterTiltle text='CREATED BY:' />
        <ul>
            <CreatorLink
                name='Gabriel Santiago Serna'
                to='https://github.com/GabrielSER'
            />
            <CreatorLink
                name='Marco Acosta'
                to='https://github.com/PowerEngine98'
            />
            <CreatorLink
                name='Susana Sarmiento'
                to='https://api.whatsapp.com/send?phone=573125505966'
            />
            <CreatorLink
                name='Daniel Peña'
                to='https://api.whatsapp.com/send?phone=16475503902'
            />
            <CreatorLink
                name='Andrés Medina'
                to='https://api.whatsapp.com/send?phone=573134847422'
            />
        </ul>
    </div>

export default CreatedBy