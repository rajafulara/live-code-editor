import React from 'react'
import HtmlEditor from './HtmlEditor'
import CssEditor from './CssEditor'
import JsEditor from './JsEditor'

function EditorContainer({ setHtmlCode, setCssCode, setJsCode }) {
    return (
        <div className='editor-container'>
            <HtmlEditor setHtmlCode={setHtmlCode} />
            <CssEditor setCssCode={setCssCode} />
            <JsEditor setJsCode={setJsCode} />
        </div>
    )
}

export default EditorContainer