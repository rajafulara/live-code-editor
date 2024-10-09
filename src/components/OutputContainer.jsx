import React from 'react'
import { PiResize } from "react-icons/pi";
import { MdOutput } from "react-icons/md";

function OutputContainer({ htmlCode, cssCode, jsCode }) {
    return (
        <div className='output-container'>
            <div className='output-head'>
                <div className='left-head'>
                    <span>OUTPUT</span>
                    <span className='output-button' onClick={() => {
                        document.querySelector('iframe').contentDocument.body.innerHTML = htmlCode;
                        document.querySelector('iframe').contentDocument.head.innerHTML = cssCode;
                        document.querySelector('iframe').contentWindow.eval(jsCode)
                    }}>
                        <MdOutput size={25} />
                    </span>
                </div>
                <div className='right-head'>
                    <span>SCREEN-SIZE</span>
                    <span className='size-button' onClick={() => {
                        document.querySelector('.output-container').classList.toggle('full-screen');
                    }}>
                        <PiResize size={25} />
                    </span>
                </div>
            </div>

            <iframe frameborder="0" />

        </div>
    )
}

export default OutputContainer