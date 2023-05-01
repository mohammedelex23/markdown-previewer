import "./App.css";
import React, { useEffect, useState } from "react";
import { marked } from "marked";
import Docs from "./components/Docs/Docs";

const App = () => {
  console.log("local", localStorage.getItem("code"));
  const [code, setCode] = useState("## Hello");
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  const [hide, hidePreview] = useState(true);

  const [comp, setComp] = useState("markdown");

  useEffect(() => {
    let savedCode = localStorage.getItem("code");
    if (savedCode) {
      setCode(savedCode);
      setCompiled(marked.parse(savedCode));
    }
  }, []);

  const openComp = (e) => {
    console.log(e.target.id);
    setComp(e.target.id);
  };

  const handleChange = (e) => {
    localStorage.setItem("code", e.target.value);
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button id="markdown" onClick={openComp} className="btn">
            MarkDown
          </button>
          <button id="prev" onClick={openComp}>
            Preview
          </button>
          <button id="docs" onClick={openComp}>
            Docs
          </button>
        </div>
        {comp === "markdown" && (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        )}
        {comp === "prev" && (
          <div>
            <textarea readOnly value={compiled} />
          </div>
        )}
        {comp === "docs" && <Docs />}
      </div>
    </>
  );
};

export default App;
