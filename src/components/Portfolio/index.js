import React, { useState, useEffect } from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from "../../Data/portfolio.json"

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-Animate');
    console.log(portfolioData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover} 
                                className="portfolio-image"
                                alt="portfolio" />
                            </div>
                        )
                    })
                }
                </div>
        );
    }

    return (
        <>
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                letterClass={letterClass}
                StrArray={"Portfolio".split("")}
                idx={15}
                />
            </h1>
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Portfolio;