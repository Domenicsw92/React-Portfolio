import React from "react";
import project1 from "../images/project1.gif"
import project2 from "../images/project2.png"
import tracker from "../images/tracker.gif"
import dayplanner from "../images/dayplanner.gif"
import noteDemo from "../images/noteDemo.gif"
import weather from "../images/Weatherdash.gif"



function Projects() {
    return (
        <>
            <section id="My-Work" className="row justify-content-center mtb">
                <div className="col-12  text-center">
                    <h1 className="font-wieght-bolder text-info header-font">My Work</h1>
                </div>
                <section className="container justify-content-center mt-3">
                    <div className="row justify-content-center">
                        <h3 className=" col-12 text-center">Projects</h3>
                        <div className="card d-flex card-border project"  >
                            <a href="https://domenicsw92.github.io/Have-You-Heard-Of/" target="_blank" rel="noreferrer">
                                <img className="d-block w-100" src={project1}
                                    alt="First slide"></img>
                            </a>
                            <div className="card-body">
                                <h5 className="text-center">Have-You-Heard-Of</h5>
                                <p>Have you heard of? is a one-stop solution to find concerts in your area, show youtube
                                    video and there is a sample song of their top 5 tracks.</p>
                            </div>
                        </div>

                        <div className="card d-flex card-border project">
                            <a href="https://fierce-crag-87332.herokuapp.com/" target="_blank" rel="noreferrer">
                                <img className="d-block w-100" src={project2} alt="First slide"></img>
                            </a>
                            <div className="card-body">
                                <h5 className="text-center">Ain't Your Mama's Cooking</h5>
                                <p>Are you tired of making descions? Do you and your spouse agrue over what to cook? Have no
                                    fear because yo Mama's cooking is here!</p>
                            </div>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon blue" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon blue" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </section>

                <section className="container justify-content-center mt-3">
                    <div className="row justify-content-center">
                        <h3 className=" col-12 text-center"> Other Works</h3>
                        <div id="carouselExampleIndicators" className="carousel slide col-12 col-md-6 work-border"
                            data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <a href="https://github.com/Domenicsw92/Employee-Tracker" target="_blank" rel="noreferrer">
                                        <img className="d-block w-100" src={tracker} alt="First slide"></img>
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a href="https://desolate-sands-50853.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <img className="d-block w-100" src={noteDemo} alt="Second slide"></img>
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a href="https://domenicsw92.github.io/Ask-Oly/" target="_blank" rel="noreferrer">
                                        <img className="d-block w-100" src={weather} alt="Third slide"></img>
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a href="https://domenicsw92.github.io/Work-Day-Planner/" target="_blank" rel="noreferrer">
                                        <img className="d-block w-100" src={dayplanner} alt="Fourth slide"></img>
                                    </a>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                data-slide="prev">
                                <span className="carousel-control-prev-icon blue" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                data-slide="next">
                                <span className="carousel-control-next-icon blue" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </section>

            </section>
        </>
    );
}

export default Projects;