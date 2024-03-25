import React from "react";
import "../Styles/LandingPage.css";
import Navbar from "../Components/Navbar";
import { Link, To } from "react-router-dom";


function LandingPage() {
    
    return (
        <>
            <Navbar />
            <div id="heroSection" className="container d-flex">
                <div id="hero-text-container" className="container">
                    <h1>
                        Your Dream Ride, a Click Away: Explore, Book, and Drive!
                    </h1>
                    <p>
                        Embark on a fresh journey of car rentals through our
                        innovative app. Seamlessly book, manage, and drive your
                        perfect ride, redefining travel convenience.
                    </p>
                    <Link to="/auth"><button type="button" className="btn btn-dark">
                        Find Now!
                    </button></Link>
                    
                </div>
                <img
                    src="/Images/heroSectionImage.png"
                    className="img-fluid"
                    alt="..."
                    width={480}
                    height={480}
                ></img>
            </div>
        </>
    );
}

export default LandingPage;
