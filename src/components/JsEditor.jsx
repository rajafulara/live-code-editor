import React from 'react'
import { TbBrandJavascript } from "react-icons/tb";
import { FaRegCopy } from "react-icons/fa6";

function JsEditor({ setJsCode }) {
    const text = document.querySelector('#js-text')

    return (
        <div className='code-editor'>
            <div className='code-editor-head'>
                <div className='left-head'>
                    <TbBrandJavascript size={30} />
                    <span>JS</span>
                </div>
                <div className='right-head'>
                    <span onClick={() => { navigator.clipboard.writeText(text.value) }} className='copy-button js-copy'>
                        <FaRegCopy size={20} />
                    </span>
                </div>
            </div>
            <textarea id='js-text' onChange={(e) => { setJsCode(e.target.value) }} placeholder='write js here...' spellCheck='false' />
        </div>
    )
}

export default JsEditor