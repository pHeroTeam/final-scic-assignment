import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div class="footer-basic">
        <footer>
                <div class="social">
                    <a href="#"><FaInstagramSquare /></a>
                    <a href="#"><FaFacebookSquare /></a>
                </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">Home</a></li>
                <li class="list-inline-item"><a href="/about">About Us</a></li>
                <div className="container">
                    <p className="text-white p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat non aliquam dolores, id animi veritatis quia sint omnis alias itaque minus accusamus consequuntur vel hic. Laborum quidem illum consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat non aliquam dolores, id animi veritatis quia sint omnis alias itaque minus accusamus consequuntur vel hic. Laborum quidem illum consectetur.</p>
                </div>
            </ul>
            <p class="copyright">Company Name © 2021</p>
        </footer>
    </div>
    );
};

export default Footer;