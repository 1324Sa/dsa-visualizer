import { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import VisualizerCanvas from "./components/VisualizerCanvas";
import CodeViewer from "./components/CodeViewer";

export default function App() {
  // الحالات العامة للتطبيق
  const [mode, setMode] = useState("bubble-sort"); // bubble-sort أو stack
  const [isRunning, setIsRunning] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);

  // الكود البرمجي لكل قسم (مصفوفة من الأسطر القابلة للتعديل)
  const [bubbleLines, setBubbleLines] = useState([
    "function bubbleSort(arr) {",
    "  for (let i = 0; i < arr.length; i++)",
    "    for (let j = 0; j < arr.length - i - 1; j++)",
    "      if (arr[j] > arr[j+1]) swap(arr, j, j+1)",
    "}"
  ]);

  const [stackLines, setStackLines] = useState([
    "let stack = [];",
    "stack.push(40); // إضافة عنصر",
    "stack.push(70); // إضافة عنصر",
    "stack.pop();    // حذف عنصر",
    "stack.push(90); // إضافة عنصر"
  ]);

  // بيانات المحاكاة
  const [array, setArray] = useState([60, 25, 85, 40, 15, 70, 45]); // أعمدة الـ Bubble Sort
  const [stack, setStack] = useState([20, 50]); // عناصر الـ Stack
  const [activeIndices, setActiveIndices] = useState([]); // العناصر النشطة أثناء الترتيب

  // متغيرات مرجعية لإدارة التوقيت والخطوات
  const timerRef = useRef(null);
  const stepRef = useRef(0);
  const internalDataRef = useRef({ i: 0, j: 0, completed: false, stackStep: 0 });

  // إعادة ضبط المحاكاة عند تغيير الخوارزمية/الهيكل
  const resetVisualizer = (newMode = mode) => {
    setIsRunning(false);
    setCurrentLine(-1);
    stepRef.current = 0;
    if (newMode === "bubble-sort") {
      setArray([60, 25, 85, 40, 15, 70, 45]);
      setActiveIndices([]);
      internalDataRef.current = { i: 0, j: 0, completed: false };
    } else {
      setStack([20, 50]);
      internalDataRef.current = { stackStep: 0 };
    }
  };

  // التحكم بمحرك المحاكاة خطوة بخطوة
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        if (mode === "bubble-sort") {
          runBubbleSortStep();
        } else {
          runStackStep();
        }
      }, 1000); // سرعة الحركة (ثانية لكل خطوة)
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, mode, array, stack]);

  // منطق محاكاة الفقاعة (Bubble Sort) خطوة بخطوة متزامنة مع الكود
  const runBubbleSortStep = () => {
    let { i, j, completed } = internalDataRef.current;
    let arr = [...array];

    if (completed) {
      setIsRunning(false);
      setCurrentLine(-1);
      setActiveIndices([]);
      return;
    }

    // تدوير الخطوات البرمجية بناءً على المؤشرات
    if (stepRef.current === 0) {
      setCurrentLine(0); // السطر الأول
      stepRef.current = 1;
    } else if (stepRef.current === 1) {
      setCurrentLine(1); // سطر الدوران الأول i
      if (i >= arr.length) {
        internalDataRef.current.completed = true;
      }
      stepRef.current = 2;
    } else if (stepRef.current === 2) {
      setCurrentLine(2); // سطر الدوران الثاني j
      if (j >= arr.length - i - 1) {
        internalDataRef.current.j = 0;
        internalDataRef.current.i = i + 1;
        stepRef.current = 1; // العودة للدوران الخارجي
      } else {
        setActiveIndices([j, j + 1]);
        stepRef.current = 3;
      }
    } else if (stepRef.current === 3) {
      setCurrentLine(3); // سطر الفحص والتبديل
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        setArray(arr);
      }
      internalDataRef.current.j = j + 1;
      stepRef.current = 2; // العودة لفحص العنصر التالي
    }
  };

  // منطق محاكاة المكدس (Stack) خطوة بخطوة
  const runStackStep = () => {
    let { stackStep } = internalDataRef.current;
    let currentStack = [...stack];

    if (stackStep > 4) {
      setIsRunning(false);
      setCurrentLine(-1);
      return;
    }

    setCurrentLine(stackStep);

    if (stackStep === 0) {
      // let stack = []
    } else if (stackStep === 1) {
      currentStack.push(40);
      setStack(currentStack);
    } else if (stackStep === 2) {
      currentStack.push(70);
      setStack(currentStack);
    } else if (stackStep === 3) {
      currentStack.pop();
      setStack(currentStack);
    } else if (stackStep === 4) {
      currentStack.push(90);
      setStack(currentStack);
    }

    internalDataRef.current.stackStep = stackStep + 1;
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden text-right" dir="rtl">
      {/* القائمة الجانبية للتحكم */}
      <Sidebar 
        mode={mode} 
        setMode={(m) => { setMode(m); resetVisualizer(m); }} 
        isRunning={isRunning} 
        setIsRunning={setIsRunning} 
        resetVisualizer={() => resetVisualizer(mode)}
      />

      {/* مساحة العرض الرئيسية */}
      <VisualizerCanvas mode={mode} array={array} stack={stack} activeIndices={activeIndices} />

      {/* شاشة الكود الجانبية القابلة للتعديل */}
      <CodeViewer 
        mode={mode} 
        currentLine={currentLine} 
        lines={mode === "bubble-sort" ? bubbleLines : stackLines}
        setLines={mode === "bubble-sort" ? setBubbleLines : setStackLines}
      />
    </div>
  );
}