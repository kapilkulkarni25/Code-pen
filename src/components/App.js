import { useState, useEffect } from 'react'
import Editor from './Editor'



function App() {

  const [html, setHtml] = useState('<h1>Hello</h1>')
  const [css, setCss] = useState('body{background-color:wheat;}')
  const [js, setJs] = useState('document.body.style.color = "white"', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {

    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
      `)
    }, 500)
    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML"
          value={html}
          onChange={setHtml}
        >Hello</Editor>
        <Editor language="css" displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor language="javascript" displayName="JS"
          value={js}
          onChange={setJs}
        />


      </div>
      <div className="pane">
        <iframe title="output"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

    </>

  );
}

export default App;
