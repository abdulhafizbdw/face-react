import React, { Component } from 'react';
import photo from '../assets/img/cat.jpg';

export default class Result extends Component {

	render() {
		return (
            <div id="about" className="w-full min-h-screen flex flex-col justify-center items-center py-12">
                <div className="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0">
                    <h2 className="font-bold tracking-wider text-gray-800 text-4xl mb-4">Alert!!!</h2>
                    <div className="font-light text-black text-xl">
                        This person(s) is not wearing face mask
                    </div>
                    <div className="flex justify-around overflow-hidden lg:-mx-2 my-12">
            
                        <div className="w-1/4 px-2 overflow-hidden lg:my-2 lg:px-2 lg:w-1/4">
                        <img className="my-12 mx-auto" src={photo} alt=""/>
                        <p>
                            Abdulhafiz Bindawa
                            <br/> Student Id: 191222
                        </p>
                        </div>
                    
                        <div className="w-1/4 px-2 overflow-hidden lg:my-2 lg:px-2 lg:w-1/4">
                            <img className="my-12 mx-auto" src={photo} alt=""/>
                            <p>
                                Abdulhafiz Bindawa
                                <br/> Student Id: 191222
                            </p>
                        </div>
                    
                        <div className="w-1/4 px-2 overflow-hidden lg:my-2 lg:px-2 lg:w-1/4">
                            <img className="my-12 mx-auto" src={photo} alt=""/>
                            <p>
                                Abdulhafiz Bindawa
                                <br/> Student Id: 191222
                            </p>
                        </div>
                    
                        <div className="w-1/4 px-2 overflow-hidden lg:my-2 lg:px-2 lg:w-1/4">
                            <img className="my-12 mx-auto" src={photo} alt=""/>
                            <p>
                                Abdulhafiz Bindawa
                                <br/> Student Id: 191222
                            </p>
                        </div>
                    
                    </div>
                </div>
                
                <div className="flex flex-row w-full justify-center">
                    <a className="px-10 py-2 text-gray-200 bg-pink-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red" href="#features">Continue</a>
                </div>
            </div>
		);
	}
}
