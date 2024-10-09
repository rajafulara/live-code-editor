import React, { useState } from 'react'
import './App.css'
import EditorContainer from './components/EditorContainer'
import OutputContainer from './components/OutputContainer'

function App() {
  const [htmlCode, setHtmlCode] = useState('')
  const [cssCode, setCssCode] = useState('')
  const [jsCode, setJsCode] = useState('')

  return (
    <div className='app'>
      <EditorContainer setHtmlCode={setHtmlCode} setCssCode={setCssCode} setJsCode={setJsCode} />
      <OutputContainer htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
    </div>
  )
}

export default App