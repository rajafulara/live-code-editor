import React, { useState } from 'react'
import { TbBrandCss3 } from "react-icons/tb";
import { FaRegCopy } from "react-icons/fa6";

function CssEditor({ setCssCode }) {
    const text = document.querySelector('#css-text')

    return (
        <div className='code-editor'>
            <div className='code-editor-head'>
                <div className='left-head'>
                    <TbBrandCss3 size={30} />
                    <span>CSS</span>
                </div>
                <div className='right-head'>
                    <span onClick={() => { navigator.clipboard.writeText(text.value) }} className='copy-button css-copy'>
                        <FaRegCopy size={20} />
                    </span>
                </div>
            </div>
            <textarea id='css-text' onChange={(e) => { setCssCode(`<style>${e.target.value}</style>`) }} placeholder='write css here...' spellCheck='false' />
        </div>
    )
}

export default CssEditor