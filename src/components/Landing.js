import React, { Fragment } from 'react';
import { Capture, useModal, useSync } from '@flexisaf/facial-biometric';
import landingImg from '../assets/img/undraw_Friends_online_re_r7pq.svg'
import aboutImg from '../assets/img/undraw_asset_selection_ix3v.svg'

import '@flexisaf/facial-biometric/dist/index.css';

const orgId = 'A';

const Landing = () => {

    // cStyles = {
	// 	container: 'flex justify-center items-center h-screen bg-blue-100',
	// 	card: 'text-center text-blue-600 rounded-lg bg-gray-50 border p-8 shadow-sm',
	// 	title: 'font-bold text-6xl',
	// 	subTitle: 'text-2xl text-blue-400',
	// };

    const onCapture = (payload) => {
        console.log('Got => ', payload)
    }

    const modalProps = useModal({ onCapture });

    console.log('modalProps => ', modalProps)

    const onToggle = () => {
        const data = { name: 'Abdul', orgId };
        modalProps.toggle(data, 'capture')
    }

    useSync({ orgId });

    return (
        <div>
            {/* <div className="header w-full min-h-screen flex flex-col justify-between">
                <div className="flex flex-col justify-center h-full py-12">
                    <div className="self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0">
                        <div className="w-full text-center sm:text-left sm:w-1/2 py-12 sm:px-8">
                            <h1 className="tracking-wide text-pink-600 text-2xl mb-6">New Thing: <span className="text-gray-800 font-bold tracking tracking-widest">MaskApp</span></h1>
                            <h2 className="font-bold tracking-widest text-4xl">Be proactive...</h2>
                            <span className="content__container block font-light text-browngray text-2xl my-6">
                                <ul className="content__container__list">
                                    <li className="content__container__list__item xl:pl-3">COVID is Real!</li>
                                    <li className="content__container__list__item xl:pl-3">Wear a face mask</li>
                                    <li className="content__container__list__item xl:pl-3">Use hand sanitizer</li>
                                    <li className="content__container__list__item xl:pl-3">Cover your mouth</li>
                                    <li className="content__container__list__item xl:pl-3">Comply</li>
                                    <li className="content__container__list__item xl:pl-3">Take care</li>
                                    <li className="content__container__list__item xl:pl-3">Be Safe!</li>
                                </ul>
                            </span>
                            <p className="font-bold tracking-widest text-4xl">...think about it!</p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <img src={landingImg} alt="AWE.SOME header"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center pb-12">
                    <a className="px-10 py-2 text-gray-200 bg-pink-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red" href="#about">More Information</a>
                </div>
            </div> */}

            {/* <div id="about" className="w-full min-h-screen flex flex-col justify-center items-center py-12">
                <div className="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0">
                    <h2 className="font-bold tracking-wider text-gray-800 text-4xl mb-4">Webcam Capture</h2>
                    <div className="font-light text-black text-xl">
                        <b>Note:</b> According to Canvas, please make sure you place your face within the box.
                        <br/>
                        <b>Click on the button below to take a picture.</b>
                    </div>
                    <img className="my-12 max-w-full mx-auto" src={aboutImg} alt="AWE.SOME"/>
                </div>
                <div className="flex flex-row w-full justify-center"> */}
                    <button
                        className="px-10 py-2 text-gray-200 bg-pink-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red"
                        onClick={onToggle}
                    >
                        Take a picture
                    </button>
                {/* </div>
            </div> */}

            <Capture {...modalProps} />
        </div>
    );
}

export default Landing;
