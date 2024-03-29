import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>

                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">ACCUEIL</a></li>
                            <li><a className="smoothscroll" href="#about">À PROPOS</a></li>
                            <li><a className="smoothscroll" href="#resume">RÉSUMÉ</a></li>
                            <li><a className="smoothscroll" href="#portfolio">PRODUIT</a></li>
                            <li><a className="smoothscroll" href="#testimonials">ENGAGEMENTS</a></li>
                            <li><a className="smoothscroll" href="#footer">CONTACTE</a></li>
                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <img src="images/SCORTEA.PNG" alt="logo"></img>
                            <h3 style={{color: '#fff', fontFamily: 'Dejavu Sans ', fontWeight: 'bold'}}> NE JETEZ PLUS
                                VOS PEAUX D’ORANGES,
                            </h3>
                            <h3 style={{color: '#f68031', fontFamily: 'Dejavu Sans ', fontWeight: 'bold'}}> BUVEZ-LES !
                            </h3>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>

                </header>
            </React.Fragment>
        );
    }
}