import { useState } from "react";

const Code = () => {
  const [activeTab, setActiveTab] = useState("Code.tsx");

  return (
    <div className="codeEditorContainer bg-gray-900 rounded-lg overflow-hidden shadow-lg w-10/12">
      {/* Tabs */}
      <div className="bg-gray-800 flex items-center text-gray-300">
        <div
          className={`px-4 py-2 cursor-pointer ${
            activeTab === "Code.tsx" ? "bg-gray-700" : ""
          }`}
          onClick={() => setActiveTab("Code.tsx")}
        >
          Code.tsx
        </div>
        <div
          className={`px-4 py-2 cursor-pointer ${
            activeTab === "code.css" ? "bg-gray-700" : ""
          }`}
          onClick={() => setActiveTab("code.css")}
        >
          code.css
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-8 py-8 border-t-[2px] border-indigo-900 overflow-hidden">
        {activeTab === "Code.tsx" && (
          <code className="font-mono text-sm leading-loose vsBackground">
            <div className="myCode">
              <div className="blink">
                <span className="const mr-2">const</span>
                <span className="var mr-2">coder</span>
                <span className="equal mr-2">=</span>
                <span className="return">{`{ `}</span>
                <span className="cursor"></span>
              </div>

              <div>
                <span className="inObject ml-8 mr-2">name:</span>
                <span className="instring">'</span>
                <span className="instring">Simeon Nedqlkov</span>
                <span className="instring">'</span>
                <span className="equal">,</span>
              </div>
              <div>
                <span className="inObject ml-8 mr-2">desiredRole:</span>
                <span className="instring">'</span>
                <span className="instring">Junior Developer</span>
                <span className="instring">'</span>
                <span className="equal">,</span>
              </div>
              <div>
                <span className="inObject ml-8 mr-2">skills:</span>
                <span className="var">[</span>
                <span className="instring">'</span>
                <span className="instring">React</span>
                <span className="instring">', '</span>
                <span className="instring">Angular</span>
                <span className="instring">', '</span>
                <span className="instring">Node</span>
                <span className="instring">', '</span>
                <span className="instring">TypeScript</span>
                <span className="instring">'</span>
                <span className="var">]</span>
                <span className="equal">,</span>
              </div>
              <div>
                <span className="inObject ml-8 mr-2">hardWorker:</span>
                <span className="const">true</span>
                <span className="equal">,</span>
              </div>
              <div>
                <span className="inObject ml-8 mr-2">problemSolver:</span>
                <span className="const">true</span>
                <span className="equal">,</span>
              </div>
              <div>
                <span className="hire ml-8 mr-2">hire:</span>
                <span className="const">function</span>
                <span className="var">()</span>
                <span className="var">{` {`}</span>
              </div>
              <div>
                <span className="return ml-16 mr-2">return</span>
                <span className="text-yellow-400">(</span>
              </div>
              <div>
                <span className="const ml-24">this.</span>
                <span className="var mr-2">hardWorker</span>
                <span className="equal">&amp;&amp;</span>
              </div>
              <div>
                <span className="const ml-24">this.</span>
                <span className="var mr-2">problemSolver</span>
                <span className="equal">&amp;&amp;</span>
              </div>
              <div>
                <span className="const ml-24">this.</span>
                <span className="var mr-2">skills.length</span>
                <span className="equal mr-2">&gt;=</span>
                <span className="number">10</span>
              </div>
              <div>
                <span className="text-yellow-400 ml-16">)</span>
                <span className="equal mr-2">{`;`}</span>
              </div>
              <div>
                <span className="var ml-8">{`}`}</span>
              </div>
              <div>
                <span className="return">{`}`}</span>
              </div>
            </div>
          </code>
        )}

        {activeTab === "code.css" && (
          <code className="font-mono text-sm leading-loose vsBackground">
            <div className="myCode">
              <div>
                <span className="cssVar">.cursor</span>
                <span className="text-yellow-400">{` {`}</span>
              </div>
              <div className="ml-8">
                <span className="inObject">display</span>
                <span className="equal">:</span>
                <span className="instring"> inline-block</span>
                <span className="equal">;</span>
              </div>
              <div className="ml-8">
                <span className="inObject">{`width`}</span>
                <span className="equal">:</span>
                <span className="instring"> 2px</span>
                <span className="equal">;</span>
              </div>
              <div className="ml-8">
                <span className="inObject">height</span>
                <span className="equal">:</span>
                <span className="instring"> 1em</span>
                <span className="equal">;</span>
              </div>

              <div className="ml-8">
                <span className="inObject">animation</span>
                <span className="equal">:</span>
                <span className="instring"> blink 1s step-start infinite</span>
                <span className="equal">;</span>
              </div>

              <div className="text-yellow-400">{`}`}</div>

              <div>
                <span className="return">@keyframes </span>
                <span className="inObject">blink</span>
                <span className="text-yellow-400">{` {`}</span>
              </div>
              <div className="ml-8">
                <span className="equal">0%, 100%</span>
                <span className="return">{` {`}</span>
              </div>
              <div className="ml-16">
                <span className="inObject">opacity</span>
                <span className="equal">:</span>
                <span className="number"> 1</span>
                <span className="equal">;</span>
              </div>
              <div className="return">{`}`}</div>
              <div className="ml-8">
                <span className="equal">50% </span>
                <span className="return">{`{`}</span>
              </div>
              <div className="ml-16">
                <span className="inObject">opacity</span>
                <span className="equal">:</span>
                <span className="number"> 0</span>
                <span className="equal">;</span>
              </div>
              <div className="ml-8 return">{`}`}</div>
              <div className="text-yellow-400">{`}`}</div>
            </div>
          </code>
        )}
      </div>
    </div>
  );
};

export default Code;
