export default function Sidebar({ mode, setMode, isRunning, setIsRunning, resetVisualizer }) {
  return (
    <div className="w-80 bg-slate-800 p-6 flex flex-col gap-6 border-l border-slate-700 h-screen">
      <h1 className="text-xl font-bold text-indigo-400 text-center">DSA Visualizer</h1>
      
      {/* قسم الاختيار */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-slate-400">اختر الخوارزمية / الهيكل</label>
        <select 
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="bg-slate-900 border border-slate-600 p-2 rounded text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
        >
          <option value="bubble-sort">Bubble Sort (خوارزمية)</option>
          <option value="stack">Stack (هيكل بيانات)</option>
        </select>
      </div>

      {/* أزرار التحكم بالوقت */}
      <div className="mt-auto flex flex-col gap-2">
        <span className="text-sm text-slate-400">التحكم بالتنفيذ</span>
        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => setIsRunning(!isRunning)}
            className={`p-2 rounded font-medium text-white cursor-pointer transition ${
              isRunning ? "bg-amber-600 hover:bg-amber-500" : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            {isRunning ? "إيقاف مؤقت" : "تشغيل"}
          </button>
          <button 
            onClick={resetVisualizer}
            className="bg-slate-700 border border-slate-600 hover:bg-slate-600 p-2 rounded font-medium text-white cursor-pointer"
          >
            إعادة ضبط
          </button>
        </div>
      </div>
    </div>
  );
}