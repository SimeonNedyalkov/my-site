export default function Code() {
  return (
    <div className="codeContainer bg-gray-900 rounded-lg overflow-hidden shadow-lg w-10/12">
      <div className="bg-gray-800 px-4 py-2 flex items-center">
        <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="px-8 py-8 border-t-[2px] border-indigo-900 overflow-hidden">
        <code className="font-mono text-sm leading-loose">
          <div className="myCode">
            <div className="blink">
              <span className="text-pink-500 mr-2">const</span>
              <span className="text-white mr-2">coder</span>
              <span className="text-pink-500 mr-2">=</span>
              <span className="text-gray-400">{`{ `}</span>
              <span className="cursor"></span>
            </div>

            <div>
              <span className="text-white ml-8 mr-2">name:</span>
              <span className="text-gray-400">'</span>
              <span className="text-amber-300">Master Coder</span>
              <span className="text-gray-400">',</span>
            </div>
            <div>
              <span className="text-white ml-8 mr-2">skills:</span>
              <span className="text-gray-400">['</span>
              <span className="text-amber-300">React</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">Node</span>
              <span className="text-gray-400">'],</span>
            </div>
            <div>
              <span className="text-white ml-8 mr-2">hardWorker:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="text-white ml-8 mr-2">problemSolver:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="text-green-400 ml-8 mr-2">hireable:</span>
              <span className="text-orange-400">function</span>
              <span className="text-gray-400">()</span>
              <span className="text-gray-400">{` {`}</span>
            </div>
            <div>
              <span className="text-orange-400 ml-16 mr-2">return</span>
              <span className="text-gray-400">(</span>
            </div>
            <div>
              <span className="text-cyan-400 ml-24">this.</span>
              <span className="text-white mr-2">hardWorker</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="text-cyan-400 ml-24">this.</span>
              <span className="text-white mr-2">problemSolver</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="text-cyan-400 ml-24">this.</span>
              <span className="text-white mr-2">skills.length</span>
              <span className="text-amber-300 mr-2">&gt;=</span>
              <span className="text-orange-400">5</span>
            </div>
            <div>
              <span className="text-gray-400 ml-16 mr-2">);</span>
            </div>
            <div>
              <span className="text-gray-400 ml-8">{`}`}</span>
            </div>
            <div>
              <span className="text-gray-400">{`}`}</span>
            </div>
          </div>
        </code>
      </div>
    </div>
  );
}
