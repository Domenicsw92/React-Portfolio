import React from "react";

function About() {
    return (
        <>
            <header class="jumbotron jumbotron-fluid mtb">
                <div id="About-me" class="container">
                    <div class="row align-items-end">
                        <div class="col-12 col-md-6">
                            <img class='Avatar rounded-circle img-fluid ' src="/public/images/Profilepic2.JPG"
                                alt=" avatar placeholder" />
                        </div>

                        <div class="col-12 col-md-6">
                            <h1>About Me</h1>
                            <h2>Hello, My name is Domenic, and it is a pleasure to meet you</h2>
                            <p>Hello my name is Domenic Wilhelm and I am 28 years old, I am currently working for the government at the Denver Airport, and I have decided to make a change in career field by joining a Bootcamp offered by Denver University to learn Coding/ Frontend Web-Development and get my Certificate, to hopefully get a job as an IT specialist. <br />
                                I am originally from Austin, Texas and made the spontaneous decision to move to Colorado for a job opportunity. My hobbies have always been the outdoors fly fishing, hiking, kayaking and recently skiing. I also enjoy cooking and gaming. And I am currently living in Denver, Colorado. </p>
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
}

export default About;