
const FooterLink = ({ text, to }) =>
    <a
        className='hover:underline hover:opacity-70'
        href={to}
        target='_blank'
        rel='noopener noreferrer'
    >
        {text}
    </a>

export default FooterLink