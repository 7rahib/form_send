import React, { useRef, useState } from "react";
import logo from "../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

const Home = () => {
    console.log("Hiiiiiiiiiiiii");
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        console.log("Hello");
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8yjvfra",
                "template_n0oc7rt",
                form.current,
                "REidNcEQRS9YTHz-g"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        // e.reset();
        navigate("/message");
    };

    function myFuction(genderId) {
        //console.log(genderId);
        document.getElementById(genderId).classList.add("chosen");
        if (genderId != "male")
            document.getElementById("male").classList.remove("chosen");
        if (genderId != "female")
            document.getElementById("female").classList.remove("chosen");
        if (genderId != "x")
            document.getElementById("x").classList.remove("chosen");
    }

    return (
        <div className="parent-container">
            <div className="child-container">
                <div className="navbar grid">
                    <div className="place-content-center">
                        <img className="w-24 h-24" src={logo} alt="" />
                    </div>
                </div>
                <div>
                    <div className="not-responsive">
                        <h1 className="text-4xl font-semibold text-center mt-5 text-white motto">
                            You seem like a great candidate. We would love <br className="break" />{" "}
                            <span>
                                <h1 className="mt-4 to-help">to help!</h1>
                            </span>
                        </h1>
                    </div>
                    <div className="responsive">
                        <h1 className="text-4xl font-semibold text-center mt-5 text-white motto">
                            You seem like a great candidate. We would love to help!
                        </h1>
                    </div>

                </div>
                <h1 className="text-2xl text-center mb-8 mt-4 text-gray-200">
                    Sign up for our waitlist here
                </h1>
                <form ref={form} onSubmit={sendEmail} className="flex justify-center">
                    <div className="form-container">
                        <div className="flex flex-col justify-center items-center">
                            <div className="mx-3 input-container">
                                <div className="flex mt-5">
                                    <div
                                        onClick={() => myFuction("male")}
                                        id="male"
                                        className="gender-box text-center chosen mr-5 flex items-center justify-center"
                                    >
                                        <h4>MRS</h4>
                                    </div>
                                    <div
                                        onClick={() => myFuction("female")}
                                        id="female"
                                        className="gender-box text-center mr-5 flex items-center justify-center"
                                    >
                                        <h4>MR</h4>
                                    </div>
                                    <div
                                        onClick={() => myFuction("x")}
                                        id="x"
                                        className="gender-box text-center flex items-center justify-center"
                                    >
                                        <h4>X</h4>
                                    </div>
                                </div>
                                {/* <div className="border-b-2 ">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="input input-name w-full m-3 input1"
                  name="user_name"
                />
              </div> */}
                                <div className="flex items-center border-b-2">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your Name"
                                        className="input w-full m-3 input1"
                                        name="user_name"
                                    />
                                </div>
                                <div className="flex items-center border-b-2">
                                    <span className="pl-3">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Email address"
                                        className="input w-full m-3 input1"
                                        name="user_email"
                                    />
                                </div>
                                <div className="flex items-center border-b-2">
                                    <span className="pl-3">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </span>
                                    {/* <input type="text" multiline="true" required placeholder="Phone number including country code&#10;(optional)e.g. +1 123 456 7890" className="input w-full m-3 input1 flex flex-wrap" name="user_phone" /> */}
                                    <textarea
                                        required
                                        placeholder="Phone number including country code&#10;(optional)e.g. +1 123 456 7890"
                                        className="input w-full m-3 input1 text-area flex flex-wrap"
                                        name="user_phone"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-8 checkbox-container">
                            <div>
                                <input
                                    required
                                    type="checkbox"
                                    className="checkbox check1"
                                    checked={checked}
                                    onChange={(e) => setChecked(e.target.checked)}
                                />
                            </div>
                            <div className="w-15 flex justify-center">
                                <div>
                                    <h1 className="ml-2">
                                        I agree with the{" "}
                                        <a
                                            href="https://www.loansdirect.capital/terms-of-use.html"
                                            className="text-blue-700"
                                        >
                                            terms and condition
                                        </a>{" "}
                                        and I'm also <br /> happily subscribing to your newsletter.
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-evenly mt-5 text-white btn-container">
                            <div className="flex btn-top">
                                <input
                                    className="btn btn-wide btn-warning"
                                    type="Submit"
                                    value={"Submit"}
                                    name="user_phone"
                                ></input>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;
