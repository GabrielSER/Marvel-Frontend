import { Link } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import React from 'react'
import AppContext from '../../AppContext'
import { useContext } from 'react'

const Navbar = () => {
    const context = useContext(AppContext)

    const intl = useIntl()

    function handleChangeLanguage(event) {
        context.setLang(event.target.value)
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-xl-12 Topbar d-none d-lg-block d-xl-block'>
                        <div className='Topbar-text d-flex justify-content-end'>
                            <button className={context.languageSettings.locale.startsWith('en') ? 'Topbar-button-active' : 'Topbar-button'} id='EN' value='en' onClick={handleChangeLanguage}>EN</button>
                            <button className={context.languageSettings.locale.startsWith('es') ? 'Topbar-button-active' : 'Topbar-button'} id='ES' value='es' onClick={handleChangeLanguage}>ES</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row1'>
                <div className='d-none d-lg-block'>
                    <div className='navbarBootstrap-logo'>
                        <Nav.Link className='navbarBootstrap-item'
                            href='/'>
                            <img className='navbarBootstrap-logo-img'
                                src='/Assets/Logos/New-Logo.png'
                                alt='Logo Victoria' />
                        </Nav.Link>
                    </div>
                </div>
            </div>


            <div id='NavbarBootstrap'>

                <NavbarReact expand='none'>
                    <Container>
                        <NavbarReact.Toggle aria-controls='basic-navbar-nav'
                            id='navbarBootstrap-toggle' />
                        <NavbarReact.Collapse id='basic-navbar-nav'
                            className='navbarBootstrap-collapse'>
                            <Nav className='navbarBootstrap-items-list'>
                                <Nav.Link className='navbarBootstrap-item'
                                    id='navbarBootstrap-home-link'
                                    href='/'>
                                    <span className={window?.location.pathname === '/' ? 'navbarBootstrap-active' : ''}>
                                        <FormattedMessage id='Home' />
                                    </span>
                                </Nav.Link>
                                <Nav.Link className='navbarBootstrap-item'
                                    href='/characters'>
                                    <span className={window?.location.pathname ===
                                        '/characters' ? 'navbarBootstrap-active' : ''}>
                                        <FormattedMessage id='Services' />
                                    </span>
                                </Nav.Link>
                                <Nav.Link className='navbarBootstrap-item'
                                    href='/combat'>
                                    <span className={window?.location.pathname ===
                                        '/combat' ? 'navbarBootstrap-active' : ''}>
                                        <FormattedMessage id='Combat' />
                                    </span>
                                </Nav.Link>
                                <Nav.Link className='navbarBootstrap-item'
                                    href='/roleplay'>
                                    <span className={window?.location.pathname ===
                                        '/roleplay' ? 'navbarBootstrap-active' : ''}>
                                        <FormattedMessage id='ROLE' />
                                    </span>
                                </Nav.Link>
                                <Nav.Link className='navbarBootstrap-item'
                                    href='/objects'>
                                    <span className={window?.location.pathname ===
                                        '/objects' ? 'navbarBootstrap-active' : ''}>
                                        <FormattedMessage id='OBJECTS' />
                                    </span>
                                </Nav.Link>
                                <Nav.Link className='navbarBootstrap-item'
                                    href='/places'>
                                    <span className={window?.location.pathname ===
                                        '/places' ? 'navbarBootstrap-active' : ''}>
                                        <FormattedMessage id='PLACES' />
                                    </span>
                                </Nav.Link>
                                <Nav.Link className='navbarBootstrap-item'
                                    href='/nosotros'>
                                    <span className={window?.location.pathname ===
                                        '/nosotros' ? 'navbarBootstrap-active' : ''}>
                                        <FormattedMessage id='ENEMIES' />
                                    </span>
                                </Nav.Link>
                            </Nav>
                            {/*isSigned(context.user)
                                ?
                                <div className='Topbar Topbar-text Topbar-hide-lg'>
                                    <div className='topbar-text-hide-are-you'>
                                        <p className='Topbar-text-high'><FormattedMessage id='Welcome' />{getUserName()}!</p>
                                    </div>
                                    <div>
                                        <Link to='/profile'><p className='Topbar-text-profile'><FormattedMessage id='Profile' /></p></Link>
                                    </div>
                                    <div>
                                        <Link to='/' onClick={context.signOut}><p className='Topbar-text-center'><FormattedMessage id='SignOut' /></p></Link>
                                    </div>
                                </div>
                                : (
                                    context.loginStatus === 2 ?
                                        <div className='Topbar Topbar-text Topbar-hide-lg'>
                                            <div>
                                                <Link to='/' onClick={context.signOut}><p className='Topbar-text-center'><FormattedMessage id='SignOut' /></p></Link>
                                            </div>
                                        </div>
                                        :
                                        <div className='Topbar Topbar-text Topbar-hide-lg'>
                                            <div className='topbar-text-hide-are-you'>
                                                <Link id='Topbar-text-artisan' to='/signupArtesanos'><p className='Topbar-text-high'><FormattedMessage id='AreYouAnArtisan' /></p></Link>
                                            </div>
                                            <div>
                                                <Link to='/login'><p className='Topbar-text-center'><FormattedMessage id='SignIn' /></p></Link>
                                            </div>
                                        </div>
                                )*/}
                        </NavbarReact.Collapse>
                    </Container>
                    <Nav.Link className='navbarBootstrap-item'
                        href='/'>
                        <div className='navbarBootstrap-logo-sm d-lg-none d-xl-none'>
                            <img className='navbarBootstrap-logo-img2'
                                src='/Assets/Logos/small-logo.png'
                                alt='Logo VHS' />
                        </div>
                    </Nav.Link>



                    <div className='navbarBootstrap-cart'>
                        {/*<input className='navbarBootstrap-user-cart'
                               type='image'
                               src='/Assets/Icons/Cart.svg'
                               alt={intl.formatMessage({id: 'Cart'})}
                                onClick={handleGoCart}/>*/}
                        {/*context.cart.items.length > 0 && <a className='navbarBootstrap-cart-count-label'>{getTotalProducts()}</a>*/}

                        {/*<img className='navbarBootstrap-user-cart' src='/Assets/Icons/Cart.svg' alt={intl.formatMessage({ id: 'Cart' })} onClick={handleGoCart}></img>*/}

                        {/*context.cart.items.length > 0 && <span className='navbarBootstrap-cart-count-label' onClick={handleGoCart}> {getTotalProducts()} </span>*/}
                    </div>
                </NavbarReact>
            </div>
        </>

    )
}

export default Navbar