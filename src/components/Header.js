import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';

export default class Header extends Component {

	render() {
		return (
            <nav className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white sm:bg-transparent shadow sm:shadow-none border-t-4 border-pink-600">
                <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
                    <a href="/" className="no-underline"><img src={logo} alt="Logo" className="h-12 py-1"/></a>
                    <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button" onClick="navToggle();" aria-label="Show Menu"><span className="hamburger__top-bun"></span><span className="hamburger__bottom-bun"></span></button>
                </div>
                <div id="menu" className="w-full sm:w-auto self-end sm:self-center hidden sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0">
                    <a className="text-gray-800 border border-indigo-800 text-lg bg-gray-100 rounded-full w-auto no-underline text-center sm:text-left hover:border-pink-600 hover:text-pink-600 hover:bg-white hover:shadow-md px-6 py-1 my-2 sm:my-0 sm:ml-4" href="/#about">Take a Picture</a>
                    <a className="text-gray-800 font-bold hover:text-pink-600 text-lg text-center w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1" href="completecapture">Capture</a>
                    <a className="text-gray-800 font-bold hover:text-pink-600 text-lg text-center w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1" href="result">Result</a>
                </div>
            </nav>
		);
	}
}
