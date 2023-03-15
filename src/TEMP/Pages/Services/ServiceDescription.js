import React, { useLayoutEffect } from 'react'
import "./Services.css"
import { FormattedMessage } from "react-intl";
import { Slide } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';

function ServiceDescription() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })


    const Title = withReveal(styled.p`
  `, <Slide left duration={1000} delay={200} />);
    const Texto = withReveal(styled.p`S
  `, <Slide right duration={1000} delay={200} />);
    const Mucho = withReveal(styled.p`
`, <Slide right duration={1000} delay={300} />);
    const Imagen = withReveal(styled.p`
`, <Slide left duration={1000} delay={300} />);
    const ImagenM = withReveal(styled.p`
`, <Slide left duration={1000} delay={200} />);
    return (
                <div className="container-fluid">
                    <div className="row products-row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="products-header">
                                <h3 className="product-h3"><FormattedMessage id="Services" /></h3>
                                <p><FormattedMessage id="BannerDescription" /></p>
                            </div>
                        </div>
                        <div className="products-image-col col-lg-6 col-xl-6 d-none d-lg-block d-xl-block">
                            <img id="banner-image" src="/Assets/Photos/Login/main.png" />
                        </div>
                    </div>
                </div>
    )
}

export default ServiceDescription;
