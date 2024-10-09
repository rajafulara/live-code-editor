import React from 'react'
import { TbBrandHtml5 } from "react-icons/tb";
import { FaRegCopy } from "react-icons/fa6";

function HtmlEditor({ setHtmlCode }) {
    const text = document.querySelector('#html-text')

    return (
        <div className='code-editor'>
            <div className='code-editor-head'>
                <div className='left-head'>
                    <TbBrandHtml5 size={30} />
                    <span>HTML</span>
                </div>
                <div className='right-head'>
                    <span onClick={() => { navigator.clipboard.writeText(text.value) }} className='copy-button html-copy'>
                        <FaRegCopy size={20} />
                    </span>
                </div>
            </div>
            <textarea id='html-text' onChange={(e) => { setHtmlCode(e.target.value) }} placeholder='write html here...' spellCheck='false' />
        </div>
    )
}

export default HtmlEditor