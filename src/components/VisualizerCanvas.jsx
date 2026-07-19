export default function VisualizerCanvas({ mode, array, stack, activeIndices }) {
  return (
    <div className="flex-1 bg-slate-950 p-6 flex flex-col items-center justify-center relative">
      <div className="border-2 border-dashed border-slate-800 rounded-xl w-full h-full flex items-center justify-center p-6">
        
        {/* العرض الخاص بخوارزمية الترتيب الفقاعي */}
        {mode === "bubble-sort" && (
          <div className="flex items-end gap-3 h-64 valignment-bottom">
            {array.map((value, idx) => {
              const isActive = activeIndices.includes(idx);
              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div 
                    style={{ height: `${value * 2.5}px` }} 
                    className={`w-12 rounded-t-md transition-all duration-300 flex items-end justify-center pb-2 text-xs font-bold text-white ${
                      isActive ? "bg-amber-500 animate-pulse scale-105" : "bg-indigo-600"
                    }`}
                  >
                    {value}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* العرض الخاص بهيكل بيانات الـ Stack */}
        {mode === "stack" && (
          <div className="flex flex-col-reverse justify-start border-b-4 border-x-4 border-slate-700 p-4 w-48 min-h-80 gap-2 bg-slate-900/45 rounded-b-md">
            {stack.map((value, idx) => (
              <div 
                key={idx} 
                className="bg-teal-600 text-white font-bold p-3 rounded text-center border border-teal-400 shadow-md animate-bounce"
              >
                {value}
              </div>
            ))}
            {stack.length === 0 && (
              <div className="text-slate-600 text-sm text-center my-auto">المكدس فارغ حالياً</div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}