import React, { useRef, useState } from 'react';
import logo from '../assets/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import './Message.css'

const Messsage = () => {
    return (
        <div>
            <div className="navbar grid">
                <div className="place-content-center">
                    <img className='w-24 h-24' src={logo} alt="" />
                </div>
                <hr />
            </div>
            <div className='flex flex-col items-center message-container ml-3'>
                <div className='mb-16'>
                    <h1>Thank you for your time!</h1>
                </div>
                <div className='mb-8'>
                    <h2>You can keep up to date by following our podcast Startuprad.io</h2>
                </div>
                <div className='links mb-4'>
                    <ul>
                        <li><a>Yes, take me there</a></li>
                    </ul>
                </div>
                <div className='mb-16'>
                    <h4>Thank you for signing up. Now you can tell your friends and share Startupraven here:</h4>
                </div>
                <div className='links'>
                    <ul>
                        <li><a><i class="fab fa-linkedin mr-4"></i>LinkedIn</a></li>
                        <li><a><i class="fab fa-twitter mr-4"></i>Twitter</a></li>
                        <li><a><i class="fab fa-facebook mr-4"></i>Facebook</a></li>
                        <li><a><i class="fas fa-envelope mr-4"></i>Via Email</a></li>
                        <li><a><i class="fab fa-telegram mr-4"></i>Telegram</a></li>
                        <li><a><i class="fab fa-whatsapp mr-4"></i>Whatsapp</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Messsage;