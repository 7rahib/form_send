import React, { useRef, useState } from 'react';
import logo from '../assets/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import emailjs from 'emailjs-com'


const Home = () => {
    const [checked, setChecked] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_27p8ofk', 'template_jimyer9', form.current, 'xxmKrIM7dC-yMCFZl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.reset();
    };

    return (
        <div>
            <div class="navbar grid">
                <div class="place-content-center">
                    <img className='w-24 h-24' src={logo} alt="" />
                </div>
                <hr />
            </div>
            <div>
                <h1 className='text-4xl font-semibold text-center mt-5 text-white'>You seem like a great candidate. We would love to help!</h1>
            </div>
            <h1 className='text-2xl text-center mt-12 text-gray-200'>Sign up for our waitlist here</h1>
            <form ref={form} onSubmit={sendEmail} className='flex justify-center'>
                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className=''>
                            <div className='border-b-2 px-2'>
                                <input type="text" placeholder="First Name" class="input w-full m-3 input1" name="user_name" />
                            </div>
                            <div className='flex items-center border-b-2'>
                                <span className='pl-3'><FontAwesomeIcon icon={faEnvelope} /></span>
                                <input type="text" placeholder="Email" class="input w-full m-3 input1" name="user_email" />
                            </div>
                            <div className='flex items-center border-b-2'>
                                <span className='pl-3'><FontAwesomeIcon icon={faPhone} /></span>
                                <input type="text" placeholder="Phone Number" class="input w-full m-3 input1" name="user_phone" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-5 ml-5'>
                        <div>
                            <input type="checkbox" class="checkbox check1" checked={checked}
                                onChange={(e) => setChecked(e.target.checked)} />
                        </div>
                        <div className='w-15 flex justify-center'>
                            <div>
                                <h1 className='ml-2'>I agree with the <span className='text-blue-700'>terms and condition</span> and I'm also happily subscribing to your newsletter.</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-evenly mt-5 text-white w-50'>
                        <div className='flex items-center btn btn-wide btn-warning'>
                            <input type="submit" Value='Submit' name="user_phone"></input>
                        </div>
                    </div>
                </div >
            </form >
        </div >
    );
};

export default Home;