import React from "react";
import html from "../images/icons/html.png"
import css from "../images/icons/css.png"
import js from "../images/icons/js.png"
import bootstrap from "../images/icons/bootstrap.png"
import materialize from "../images/icons/materialize.png"
import NodeJS from "../images/icons/NodeJS.png"
import mysql from "../images/icons/mysql.png"
import express from "../images/icons/express.png"
import github from "../images/icons/github-logo.png"
import heroku from "../images/icons/heroku.png"
import react from "../images/icons/React.png"
import jq from "../images/icons/jQuery.png"
import mongo from "../images/icons/mongodb.png"
import mern from "../images/icons/mern.jpg";

function Skills() {
    return (
        <>
        <section id="skills" className="container justify-content-center mtb">
            <div className="row justify-content-center">
                <h2 className="skills">Skills</h2>
            </div>
            <div className="row justify-content-center">

                <div className="col-12 col-md-3 mx">
                    <img src={html} alt=""></img>
                </div>
                <div className="col-12 col-md-3 mx">
                    <img src={css} alt=""></img>
                </div>
                <div className="col-12 col-md-3 mx">
                    <img src={js} alt=""></img>
                </div>
            </div>
            <div className="row justify-content-center ">
                <div className="col-12 col-md-4 mx-5">
                    <img src={bootstrap} height="200" width="200" alt=""></img>
                </div>
                <div className="col-12 col-md-4 mx-5">
                    <img src={materialize} height="200" width="200" alt=""></img>
                </div>
                <div className="col-12 col-md-4 mx-5">
                    <img src={NodeJS} height="200" width="200" alt=""></img>
                </div>
                <div className="col-12 col-md-4 mx-5">
                    <img src={mysql} height="200" width="200" alt=""></img>
                </div>
            </div>
            <div className="row justify-content-center ">
                <div className="col-12 col-md-4 mx-5">
                    <img src={express} height="200" width="200" alt=""></img>
                </div>
                <div className="col-12 col-md-4 mx-5">
                    <img src={github} height="200" width="200" alt=""></img>
                </div>
                <div className="col-12 col-md-4 mx-5">
                    <img src={heroku} height="200" width="200" alt=""></img>
                </div>
                <div className="col-12 col-md-4 mx-5">
                    <img src={react} height="200" width="200" alt=""></img>
                </div>
            </div>
            <div className="row justify-content-center ">
                <div className="col-12 col-md-4 mx-5">
                    <img src={jq} height="200" width="200" alt=""></img>
                </div>
                <div className="col-12 col-md-4 mx-5">
                    <img src={mongo} height="200" width="200" alt=""></img>
                </div>
                <div className="col-12 col-md-4 mx-5">
                    <img src={mern} height="200" width="200" alt=""></img>
                </div>
            </div>
        </section>

        </>
    );
}

export default Skills;