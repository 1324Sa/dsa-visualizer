export default function CodeViewer({ mode, currentLine, lines, setLines }) {
  
  // وظيفة لتعديل سطر معين في الكود عند قيام المستخدم بالكتابة
  const handleLineChange = (index, newValue) => {
    const updatedLines = [...lines];
    updatedLines[index] = newValue;
    setLines(updatedLines);
  };

  return (
    <div className="w-96 bg-slate-900 border-r border-slate-800 p-6 h-screen flex flex-col text-left font-mono" dir="ltr">
      <h3 className="text-sm font-semibold text-indigo-400 mb-4 text-right" dir="rtl">
        // تتبع وتعديل الكود البرمجي (اضغط لتعديل الكود حياً)
      </h3>
      
      <div className="bg-slate-950 p-4 rounded text-sm text-slate-300 flex-1 overflow-y-auto flex flex-col gap-1">
        {lines.map((lineText, idx) => {
          const isHighlighted = currentLine === idx;
          return (
            <div 
              key={idx} 
              className={`flex items-center rounded pl-2 transition-all ${
                isHighlighted ? "bg-indigo-950/70 text-indigo-300 border-l-4 border-indigo-500" : ""
              }`}
            >
              {/* رقم السطر */}
              <span className="text-slate-600 mr-3 select-none w-5 text-right">{idx + 1} |</span>
              
              {/* حقل إدخال مرن يتيح للمستخدم التعديل المباشر */}
              <input
                type="text"
                value={lineText}
                onChange={(e) => handleLineChange(idx, e.target.value)}
                className="bg-transparent text-slate-300 focus:text-white border-none outline-none w-full py-0.5 font-mono cursor-edit selection:bg-indigo-500/30"
                style={{ direction: "ltr" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}