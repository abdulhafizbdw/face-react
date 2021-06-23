import React, { Component } from 'react';
import success from '../assets/img/success.svg';

export default class CompleteCapture extends Component {

	render() {
		return (
            <div id="about" className="w-full min-h-screen flex flex-col justify-center items-center py-12">
                <div className="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0">
                    <h2 className="font-bold tracking-wider text-gray-800 text-4xl mb-4">Facial Capture is Complete</h2>
                    <div className="font-light text-black text-xl">
                        Your data has been stored on the system. <br/> Thank you for your cooperation!
                    </div>
                    <img width="150px" className="my-12 mx-auto" src={success} alt=""/>
                </div>
                <div className="flex flex-row w-full justify-center">
                    <a className="px-10 py-2 text-gray-200 bg-pink-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red" href="#features">Continue</a>
                </div>
            </div>
		);
	}
}
