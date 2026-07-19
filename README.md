# 🚀 Interactive DSA Runtime Simulator & Visualizer

An enterprise-grade, real-time educational environment engineered to democratize the comprehension of complex computer science fundamentals. Unlike conventional, static simulation tools, this application introduces a state-of-the-art **Live-Editable Syntax Engine** seamlessly coupled with a reactive graphical rendering context, allowing users to mutate code on the fly and immediately observe algorithmic variance and memory allocation changes.

[![React](https://img.shields.io/badge/React-19.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🔬 Core Architectural Pillars

* **✍️ Live Code Mutation Engine:** Integrated a tokenized line-by-line input array wrapper that permits real-time string modifications. Users can alter values, adjust conditions, or refactor logic directly from the view layer without breaking runtime integrity.
* **⏱️ Deterministic Time-Stepped Scheduler:** Implemented a robust execution lifecycle controller powered by React state machines and synchronized `useRef` scheduling intervals. Supports precise `Play`, `Pause`, and full state `Reset` operations.
* **📊 Visual-Code Frame Synchronization:** Engineered a high-precision multi-directional rendering matrix that binds the active line pointer in the `CodeViewer` directly to the operational nodes inside the visual canvas with millisecond-level alignment.
* **🎨 Scalable Layout Integrity:** Formulated utilizing Tailwind CSS's advanced layout mechanics to deliver a zero-collision, fully responsive dark-mode cockpit environment that isolates runtime exceptions from the presentation layer.

---

## 🛠️ Algorithmic & Data Structure Specifications

### 1. Bubble Sort (Sorting Algorithm Context)
* **Graphical Vector:** Dynamically rendered bar graphs adjusting their structural height relative to array memory indices.
* **State Monitors:** Active color interpolation highlights active index pairs ($j$, $j+1$) experiencing comparisons, triggering a smooth state migration upon item swaps.
* **Pointer Matching:** Synchronizes external ($i$) and internal ($j$) loop boundaries natively with the multi-line conditional code block.

### 2. Stack Topology (LIFO Data Structure Context)
* **Graphical Vector:** A structured, bounded memory containment box mimicking real-world stack framing.
* **Mutation Logic:** Dynamically captures chronological data mutations rendering immediate UI updates during `push()` and `pop()` operations with automated frame-drop prevention.

---

## 🎛️ Technology Stack & Dependencies

* **Core Runtime Library:** React (Advanced state-hooks, reference management, declarative UI updates)
* **Design Systems:** Tailwind CSS (Modern Slate & Ultra-low contrast Indigo spectrum palette)
* **Bundler & Tooling:** Vite HMR (Hot Module Replacement optimized compilation)
* **Version Control:** Git distributed ledger via GitHub deployment pipelines

---

## 📂 System Directory Structure

```text
src/
├── components/
│   ├── Sidebar.jsx           # Dashboard controller, algorithm selectors & execution lifecycles
│   ├── VisualizerCanvas.jsx  # Reactive viewport translating mathematical states into visuals
│   └── CodeViewer.jsx        # Inline-editable syntax tracker mapped to the execution stack
├── App.jsx                   # Central nervous system, timing hooks & shared state orchestration
├── main.jsx                  # Application bootstrapper and virtual DOM mounting point
└── index.css                 # Global styling directives and compiled Tailwind utility sheets
