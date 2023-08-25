import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import './premium.css';
function premium() {
    return (
        <div className='bg'>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link
                href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="css/style.css" />
            <title>Flipping Cards</title>
            <h1>Premium Subscriptions</h1>
            <section className="section-plans" id="section-plans">
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front-1">
                                <div className="card__title card__title--1">
                                    <i className="fas fa-paper-plane" />
                                    <h4 className="card__heading">Basic</h4>
                                </div>
                                <div className="card__details">
                                    <ul>
                                        <li>1 Website</li>
                                        <li>50 GB SSD Storage</li>
                                        <li>Unmetered Bandwidth</li>
                                        <li>Free SSL Certificate</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$2.95/mo*</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">
                                        Select
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front-2">
                                <div className="card__title card__title--2">
                                    <i className="fas fa-plane" />
                                    <h4 className="card__heading">Plus</h4>
                                </div>
                                <div className="card__details">
                                    <ul>
                                        <li>Includes Basic</li>
                                        <li>Unlimited</li>
                                        <li>Unlimited</li>
                                        <li>Unlimited Domains</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$5.45/mo*</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">
                                        Select
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front-3">
                                <div className="card__title card__title--3">
                                    <i className="fas fa-rocket" />
                                    <h4 className="card__heading">Pro</h4>
                                </div>
                                <div className="card__details">
                                    <ul>
                                        <li>Includes Plus</li>
                                        <li>High Performance</li>
                                        <li>2 Spam Experts</li>
                                        <li>Free SSL Certificate</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$13.95/mo</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">
                                        Select
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default premium;