import React from "react";

function Projects() {
    return (
        <>
            <section id="My-Work" class="row justify-content-center mtb">
                <div class="col-12  text-center">
                    <h1 class="font-wieght-bolder text-info header-font">My Work</h1>
                </div>
                <section class="container justify-content-center mt-3">
                    <div class="row justify-content-center">
                        <h3 class=" col-12 text-center">Projects</h3>
                        <div class="card d-flex card-border project"  >
                            <a href="https://domenicsw92.github.io/Have-You-Heard-Of/" target="_blank" rel="noreferrer">
                                <img class="d-block w-100" src="/public/images/heard of_ demo.gif"
                                    alt="First slide"></img>
                            </a>
                            <div class="card-body">
                                <h5 class="text-center">Have-You-Heard-Of</h5>
                                <p>Have you heard of? is a one-stop solution to find concerts in your area, show youtube
                                    video and there is a sample song of their top 5 tracks.</p>
                            </div>
                        </div>

                        <div class="card d-flex card-border project">
                            <a href="https://fierce-crag-87332.herokuapp.com/" target="_blank" rel="noreferrer">
                                <img class="d-block w-100" src="/public/images/project2.png  " alt="First slide"></img>
                            </a>
                            <div class="card-body">
                                <h5 class="text-center">Ain't Your Mama's Cooking</h5>
                                <p>Are you tired of making descions? Do you and your spouse agrue over what to cook? Have no
                                    fear because yo Mama's cooking is here!</p>
                            </div>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon blue" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon blue" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </section>

                <section class="container justify-content-center mt-3">
                    <div class="row justify-content-center">
                        <h3 class=" col-12 text-center"> Other Works</h3>
                        <div id="carouselExampleIndicators" class="carousel slide col-12 col-md-6 work-border"
                            data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <a href="https://github.com/Domenicsw92/Employee-Tracker" target="_blank" rel="noreferrer">
                                        <img class="d-block w-100" src="/public/images/tracker.gif" alt="First slide"></img>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="https://desolate-sands-50853.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <img class="d-block w-100" src="/public/images/noteDemo.gif" alt="Second slide"></img>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="https://domenicsw92.github.io/Ask-Oly/" target="_blank" rel="noreferrer">
                                        <img class="d-block w-100" src="/public/images/Weatherdash.gif" alt="Third slide"></img>
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="https://domenicsw92.github.io/Work-Day-Planner/" target="_blank" rel="noreferrer">
                                        <img class="d-block w-100" src="/public/images/dayplanner.gif" alt="Fourth slide"></img>
                                    </a>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                data-slide="prev">
                                <span class="carousel-control-prev-icon blue" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                data-slide="next">
                                <span class="carousel-control-next-icon blue" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </section>

            </section>
        </>
    );
}

export default Projects;