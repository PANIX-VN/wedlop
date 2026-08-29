module.exports = [
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$SeatingChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SeatingChart/SeatingChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Attendance$2f$AttendanceManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Attendance/AttendanceManager.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Emulation$2f$EmulationManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Emulation/EmulationManager.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RuleLookup$2f$RuleLookup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RuleLookup/RuleLookup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DutySchedule$2f$DutyScheduleManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DutySchedule/DutyScheduleManager.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/initialData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/storage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function Home() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('seating');
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // States
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_STUDENTS"]);
    const [rules, setRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_RULES"]);
    const [seatingLayout, setSeatingLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_SEATING_LAYOUT"]);
    const [attendanceRecords, setAttendanceRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [emulationLogs, setEmulationLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dutyConfig, setDutyConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_DUTY_CONFIG"]);
    // Hydrate from LocalStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setStudents((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadStudents"])());
        setRules((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadRules"])());
        setSeatingLayout((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSeating"])());
        setAttendanceRecords((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadAttendance"])());
        setEmulationLogs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadEmulationLogs"])());
        setDutyConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDutyConfig"])());
        setIsLoaded(true);
    }, []);
    // Sync state changes to storage
    const handleUpdateSeating = (newLayout)=>{
        setSeatingLayout(newLayout);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveSeating"])(newLayout);
    };
    const handleSaveAttendance = (newRecord)=>{
        const updated = [
            ...attendanceRecords.filter((r)=>r.date !== newRecord.date),
            newRecord
        ];
        setAttendanceRecords(updated);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAttendance"])(updated);
    };
    const handleAddEmulationLog = (logData)=>{
        const newLog = {
            ...logData,
            id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`
        };
        const updated = [
            newLog,
            ...emulationLogs
        ];
        setEmulationLogs(updated);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveEmulationLogs"])(updated);
    };
    const handleDeleteEmulationLog = (id)=>{
        const updated = emulationLogs.filter((l)=>l.id !== id);
        setEmulationLogs(updated);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveEmulationLogs"])(updated);
    };
    const handleUpdateRules = (newRules)=>{
        setRules(newRules);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveRules"])(newRules);
    };
    const handleUpdateDutyConfig = (newConfig)=>{
        setDutyConfig(newConfig);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDutyConfig"])(newConfig);
    };
    const handleResetData = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetAllData"])();
        setStudents(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_STUDENTS"]);
        setRules(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_RULES"]);
        setSeatingLayout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_SEATING_LAYOUT"]);
        setAttendanceRecords([]);
        setEmulationLogs([]);
        setDutyConfig(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_DUTY_CONFIG"]);
    };
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold text-slate-600",
                        children: "Đang tải dữ liệu Lớp 11A7..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-slate-100/80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {
                activeTab: activeTab,
                setActiveTab: setActiveTab,
                onResetData: handleResetData,
                totalStudents: students.length
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6",
                children: [
                    activeTab === 'seating' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$SeatingChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SeatingChart"], {
                        students: students,
                        layout: seatingLayout,
                        onUpdateLayout: handleUpdateSeating
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    activeTab === 'attendance' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Attendance$2f$AttendanceManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttendanceManager"], {
                        students: students,
                        attendanceRecords: attendanceRecords,
                        onSaveRecord: handleSaveAttendance
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    activeTab === 'emulation' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Emulation$2f$EmulationManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmulationManager"], {
                        students: students,
                        rules: rules,
                        logs: emulationLogs,
                        onAddLog: handleAddEmulationLog,
                        onDeleteLog: handleDeleteEmulationLog
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    activeTab === 'rules' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RuleLookup$2f$RuleLookup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuleLookup"], {
                        rules: rules,
                        onUpdateRules: handleUpdateRules
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    activeTab === 'duty' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DutySchedule$2f$DutyScheduleManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DutyScheduleManager"], {
                        students: students,
                        dutyConfig: dutyConfig,
                        tasks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_DUTY_TASKS"],
                        onUpdateDutyConfig: handleUpdateDutyConfig
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold",
                        children: "Bản quyền © 2026 - Lớp 11A7 • Hệ Thống Quản Lý Lớp Học Thông Minh"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Attendance/AttendanceManager.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttendanceManager",
    ()=>AttendanceManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.mjs [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.mjs [app-ssr] (ecmascript) <export default as CheckCheck>");
'use client';
;
;
;
const AttendanceManager = ({ students, attendanceRecords, onSaveRecord })=>{
    const getTodayString = ()=>new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getTodayString());
    const [currentMap, setCurrentMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSavedNotice, setIsSavedNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchFilter, setSearchFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Load existing records for selectedDate or default all to 'present'
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const existing = attendanceRecords.find((r)=>r.date === selectedDate);
        if (existing) {
            setCurrentMap(existing.records);
        } else {
            const initialMap = {};
            students.forEach((s)=>{
                initialMap[s.id] = 'present';
            });
            setCurrentMap(initialMap);
        }
    }, [
        selectedDate,
        attendanceRecords,
        students
    ]);
    const handleStatusChange = (studentId, status)=>{
        setCurrentMap((prev)=>({
                ...prev,
                [studentId]: status
            }));
    };
    const handleAllPresent = ()=>{
        const newMap = {};
        students.forEach((s)=>{
            newMap[s.id] = 'present';
        });
        setCurrentMap(newMap);
    };
    const handleSave = ()=>{
        onSaveRecord({
            date: selectedDate,
            records: currentMap
        });
        setIsSavedNotice(true);
        setTimeout(()=>setIsSavedNotice(false), 3000);
    };
    // Stats computation
    const stats = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        let present = 0;
        let excused = 0;
        let unexcused = 0;
        let late = 0;
        Object.values(currentMap).forEach((st)=>{
            if (st === 'present') present++;
            else if (st === 'excused') excused++;
            else if (st === 'unexcused') unexcused++;
            else if (st === 'late') late++;
        });
        return {
            present,
            excused,
            unexcused,
            late
        };
    }, [
        currentMap
    ]);
    const filteredStudents = students.filter((s)=>s.name.toLowerCase().includes(searchFilter.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-slate-800",
                                        children: "Điểm Danh Lớp 11A7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Ghi nhận sĩ số và trạng thái đi học hàng ngày"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-slate-600",
                                        children: "Ngày điểm danh:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: selectedDate,
                                        onChange: (e)=>setSelectedDate(e.target.value),
                                        className: "bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAllPresent,
                                className: "px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                                        className: "w-4 h-4 text-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Tất Cả Có Mặt"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Lưu Điểm Danh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isSavedNotice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-bold flex items-center gap-2 animate-in fade-in slide-in-from-top-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-4 h-4 text-emerald-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Đã lưu thông tin điểm danh ngày ",
                    selectedDate,
                    " thành công!"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-emerald-700",
                                        children: "Có mặt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-emerald-800 mt-1",
                                        children: stats.present
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-8 h-8 text-emerald-500 opacity-80"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-50/70 border border-amber-200 rounded-2xl p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-amber-700",
                                        children: "Đi muộn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-amber-800 mt-1",
                                        children: stats.late
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-8 h-8 text-amber-500 opacity-80"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-sky-50/70 border border-sky-200 rounded-2xl p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-sky-700",
                                        children: "Nghỉ có phép"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-sky-800 mt-1",
                                        children: stats.excused
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-8 h-8 text-sky-500 opacity-80"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-rose-50/70 border border-rose-200 rounded-2xl p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-rose-700",
                                        children: "Nghỉ không phép"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-rose-800 mt-1",
                                        children: stats.unexcused
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                className: "w-8 h-8 text-rose-500 opacity-80"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-slate-100 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm",
                                children: [
                                    "Danh Sách Điểm Danh (",
                                    filteredStudents.length,
                                    " học sinh)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-48 sm:w-64",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Lọc tên học sinh...",
                                    value: searchFilter,
                                    onChange: (e)=>setSearchFilter(e.target.value),
                                    className: "w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:border-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-slate-50 text-slate-500 text-[11px] font-bold uppercase border-b border-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 w-12 text-center",
                                                children: "STT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Họ và Tên"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Trạng Thái Điểm Danh"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100 text-xs font-medium",
                                    children: filteredStudents.map((student)=>{
                                        const status = currentMap[student.id] || 'present';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50/80 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center font-bold text-slate-500",
                                                    children: student.stt
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-bold text-slate-800",
                                                    children: student.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleStatusChange(student.id, 'present'),
                                                                className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${status === 'present' ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300' : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Có mặt"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleStatusChange(student.id, 'late'),
                                                                className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${status === 'late' ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300' : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Đi muộn"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleStatusChange(student.id, 'excused'),
                                                                className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${status === 'excused' ? 'bg-sky-600 text-white shadow-sm ring-2 ring-sky-300' : 'bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-700'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                        lineNumber: 235,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Có phép"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleStatusChange(student.id, 'unexcused'),
                                                                className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${status === 'unexcused' ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-300' : 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-700'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Không phép"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, student.id, true, {
                                            fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/DutySchedule/DutyScheduleManager.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DutyScheduleManager",
    ()=>DutyScheduleManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.mjs [app-ssr] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.mjs [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.mjs [app-ssr] (ecmascript) <export default as Edit3>");
'use client';
;
;
;
const DutyScheduleManager = ({ students, dutyConfig, tasks, onUpdateDutyConfig })=>{
    const [selectedGroup, setSelectedGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [editingDay, setEditingDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Split students into 4 groups (Tổ 1..4)
    const groupMembers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const groups = {
            1: [],
            2: [],
            3: [],
            4: []
        };
        students.forEach((s)=>{
            const g = s.group || (s.stt - 1) % 4 + 1;
            if (!groups[g]) groups[g] = [];
            groups[g].push(s);
        });
        return groups;
    }, [
        students
    ]);
    const handleToggleDayType = (dayOfWeek)=>{
        const updated = dutyConfig.map((day)=>{
            if (day.dayOfWeek === dayOfWeek) {
                const nextType = day.type === 'hoc_chinh' ? 'hoc_nghe' : day.type === 'hoc_nghe' ? 'nghi' : 'hoc_chinh';
                return {
                    ...day,
                    type: nextType
                };
            }
            return day;
        });
        onUpdateDutyConfig(updated);
    };
    const handleGroupAssignedChange = (dayOfWeek, groupNum)=>{
        const updated = dutyConfig.map((day)=>{
            if (day.dayOfWeek === dayOfWeek) {
                return {
                    ...day,
                    groupAssigned: groupNum
                };
            }
            return day;
        });
        onUpdateDutyConfig(updated);
    };
    const handleNoteChange = (dayOfWeek, note)=>{
        const updated = dutyConfig.map((day)=>{
            if (day.dayOfWeek === dayOfWeek) {
                return {
                    ...day,
                    customNote: note
                };
            }
            return day;
        });
        onUpdateDutyConfig(updated);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-slate-800",
                                        children: "Lịch Trực Nhật Lớp 11A7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Phân công ca trực nhật tự động, hỗ trợ phân biệt Học Chính & Học Nghề"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3 text-xs font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-xl border border-blue-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Học Chính"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-xl border border-amber-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Học Nghề"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: dutyConfig.map((day)=>{
                    const isHocChinh = day.type === 'hoc_chinh';
                    const isHocNghe = day.type === 'hoc_nghe';
                    const assignedMembers = groupMembers[day.groupAssigned] || [];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-white rounded-2xl p-5 border shadow-2xs transition-all flex flex-col justify-between ${isHocChinh ? 'border-blue-200/80 hover:border-blue-300' : isHocNghe ? 'border-amber-200/80 hover:border-amber-300' : 'border-slate-200 opacity-60'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-slate-100 pb-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-extrabold text-slate-800 text-base",
                                                        children: day.dayName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleToggleDayType(day.dayOfWeek),
                                                        title: "Bấm để đổi loại buổi học (Học chính / Học nghề / Nghỉ)",
                                                        className: `mt-1 text-[11px] font-bold px-2.5 py-0.5 rounded-md inline-flex items-center gap-1 transition-all ${isHocChinh ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' : isHocNghe ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`,
                                                        children: isHocChinh ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " HỌC CHÍNH (Đổi →)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)) : isHocNghe ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " HỌC NGHỀ (Đổi →)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)) : 'NGHỈ (Đổi →)'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[10px] font-bold text-slate-400 uppercase mb-0.5",
                                                        children: "Phân công:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: day.groupAssigned,
                                                        onChange: (e)=>handleGroupAssignedChange(day.dayOfWeek, Number(e.target.value)),
                                                        className: "bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 rounded-lg px-2 py-1 focus:outline-none focus:border-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 1,
                                                                children: "Tổ 1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 2,
                                                                children: "Tổ 2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 3,
                                                                children: "Tổ 3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 4,
                                                                children: "Tổ 4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-slate-700 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "w-3.5 h-3.5 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Tổ Trực Nhật (#",
                                                    day.groupAssigned,
                                                    "):"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5",
                                                children: assignedMembers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-slate-100 text-slate-700 text-[11px] font-semibold px-2 py-0.5 rounded-md border border-slate-200/60",
                                                        children: m.name
                                                    }, m.id, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 text-xs",
                                        children: editingDay === day.dayOfWeek ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                defaultValue: day.customNote || '',
                                                onBlur: (e)=>{
                                                    handleNoteChange(day.dayOfWeek, e.target.value);
                                                    setEditingDay(null);
                                                },
                                                autoFocus: true,
                                                className: "w-full bg-white border border-blue-300 rounded px-2 py-1 text-xs font-medium focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 176,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                            lineNumber: 175,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setEditingDay(day.dayOfWeek),
                                            className: "cursor-pointer text-slate-600 hover:text-blue-600 flex items-center justify-between font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "line-clamp-2",
                                                    children: day.customNote || 'Thêm ghi chú ca trực...'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                    className: "w-3.5 h-3.5 text-slate-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                            lineNumber: 188,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-3 border-t border-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-bold text-slate-500 uppercase mb-2",
                                        children: "Nhiệm vụ trực nhật:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: tasks.slice(0, 3).map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-1.5 text-xs text-slate-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                        className: "w-3.5 h-3.5 text-emerald-600 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: task.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, task.id, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 204,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, day.dayOfWeek, true, {
                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                        className: "w-4 h-4 text-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Các Công Việc Trực Nhật Quy Định"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2.5",
                                children: tasks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-slate-50 border border-slate-200/80 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-slate-800",
                                                children: t.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500 mt-0.5",
                                                children: t.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-slate-100 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-slate-800 text-sm flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-4 h-4 text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 237,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Danh Sách Phân Tổ 11A7"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-1",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4
                                        ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedGroup(g),
                                                className: `px-3 py-1 rounded-lg text-xs font-bold transition-all ${selectedGroup === g ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`,
                                                children: [
                                                    "Tổ ",
                                                    g
                                                ]
                                            }, g, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                children: (groupMembers[selectedGroup] || []).map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-extrabold text-xs flex items-center justify-center",
                                                children: [
                                                    "#",
                                                    st.stt
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-800",
                                                children: st.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, st.id, true, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Emulation/EmulationManager.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmulationManager",
    ()=>EmulationManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.mjs [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2d$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw-clock.mjs [app-ssr] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
const EmulationManager = ({ students, rules, logs, onAddLog, onDeleteLog })=>{
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedStudentId, setSelectedStudentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedRuleId, setSelectedRuleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [customPoints, setCustomPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [customTitle, setCustomTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [logNote, setLogNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [viewHistoryStudent, setViewHistoryStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Compute student totals
    const studentScores = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const BASE_SCORE = 100;
        const scores = new Map();
        students.forEach((s)=>{
            scores.set(s.id, {
                total: BASE_SCORE,
                merits: 0,
                demerits: 0
            });
        });
        logs.forEach((log)=>{
            const current = scores.get(log.studentId);
            if (current) {
                current.total += log.points;
                if (log.points > 0) current.merits += log.points;
                else current.demerits += Math.abs(log.points);
            }
        });
        return scores;
    }, [
        students,
        logs
    ]);
    // Ranked students list
    const rankedStudents = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return [
            ...students
        ].map((st)=>({
                student: st,
                scoreInfo: studentScores.get(st.id) || {
                    total: 100,
                    merits: 0,
                    demerits: 0
                }
            })).sort((a, b)=>b.scoreInfo.total - a.scoreInfo.total);
    }, [
        students,
        studentScores
    ]);
    const filteredRanked = rankedStudents.filter((r)=>r.student.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleRuleSelect = (ruleId)=>{
        setSelectedRuleId(ruleId);
        if (ruleId === 'custom') return;
        const rule = rules.find((r)=>r.id === ruleId);
        if (rule) {
            setCustomPoints(rule.points);
            setCustomTitle(rule.title);
        }
    };
    const handleAddSubmit = (e)=>{
        e.preventDefault();
        if (!selectedStudentId) return;
        const student = students.find((s)=>s.id === selectedStudentId);
        if (!student) return;
        onAddLog({
            studentId: student.id,
            studentName: student.name,
            ruleTitle: customTitle || 'Điểm điều chỉnh',
            points: customPoints,
            date: new Date().toISOString().split('T')[0],
            note: logNote
        });
        setIsAddModalOpen(false);
        setSelectedStudentId('');
        setSelectedRuleId('');
        setCustomPoints(0);
        setCustomTitle('');
        setLogNote('');
    };
    const getConductBadge = (score)=>{
        if (score >= 110) return {
            label: 'Xuất sắc',
            color: 'bg-emerald-100 text-emerald-800 border-emerald-300'
        };
        if (score >= 90) return {
            label: 'Tốt',
            color: 'bg-blue-100 text-blue-800 border-blue-300'
        };
        if (score >= 70) return {
            label: 'Khá',
            color: 'bg-amber-100 text-amber-800 border-amber-300'
        };
        return {
            label: 'Yếu / Nhắc nhở',
            color: 'bg-rose-100 text-rose-800 border-rose-300'
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-slate-800",
                                        children: "Điểm Thi Đua Lớp 11A7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Bảng xếp hạng nề nếp, điểm cộng & trừ theo quy định"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full md:w-64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Tìm kiếm học sinh...",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        className: "w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsAddModalOpen(true),
                                className: "px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Ghi Điểm Cộng / Trừ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-slate-100 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-4 h-4 text-amber-500 fill-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Bảng Xếp Hạng Thi Đua (",
                                    filteredRanked.length,
                                    " học sinh)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-400",
                                children: "Điểm khởi điểm ban đầu: 100đ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-slate-50 text-slate-500 text-[11px] font-bold uppercase border-b border-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 w-16 text-center",
                                                children: "Hạng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Họ và Tên"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Tổng Điểm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Điểm Cộng (+)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Điểm Trừ (-)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Đánh Giá Nề Nếp"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Thao Tác"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100 text-xs font-medium",
                                    children: filteredRanked.map((item, idx)=>{
                                        const badge = getConductBadge(item.scoreInfo.total);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50/80 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center font-bold",
                                                    children: idx === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-amber-400 text-amber-950 font-extrabold text-xs inline-flex items-center justify-center shadow-xs",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : idx === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-slate-300 text-slate-800 font-extrabold text-xs inline-flex items-center justify-center shadow-xs",
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : idx === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-amber-700 text-amber-100 font-extrabold text-xs inline-flex items-center justify-center shadow-xs",
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 font-semibold",
                                                        children: idx + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-bold text-slate-800",
                                                    children: item.student.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center font-extrabold text-sm text-slate-900",
                                                    children: [
                                                        item.scoreInfo.total,
                                                        " đ"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center font-bold text-emerald-600",
                                                    children: [
                                                        "+",
                                                        item.scoreInfo.merits
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center font-bold text-rose-600",
                                                    children: [
                                                        "-",
                                                        item.scoreInfo.demerits
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2.5 py-1 rounded-full text-[10px] font-bold border ${badge.color}`,
                                                        children: badge.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setViewHistoryStudent(item.student),
                                                        className: "px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[11px] font-semibold transition-all inline-flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2d$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                                                className: "w-3.5 h-3.5 text-slate-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Nhật ký"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, item.student.id, true, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isAddModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 pb-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-slate-800 text-base",
                                    children: "Ghi Nhận Điểm Thi Đua"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsAddModalOpen(false),
                                    className: "text-slate-400 hover:text-slate-600 p-1 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleAddSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 mb-1",
                                            children: "Chọn Học Sinh:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            required: true,
                                            value: selectedStudentId,
                                            onChange: (e)=>setSelectedStudentId(e.target.value),
                                            className: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "-- Chọn học sinh 11A7 --"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                students.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: s.id,
                                                        children: [
                                                            "#",
                                                            s.stt,
                                                            " - ",
                                                            s.name
                                                        ]
                                                    }, s.id, true, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 mb-1",
                                            children: "Chọn Quy Định (File Lỗi.docx):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedRuleId,
                                            onChange: (e)=>handleRuleSelect(e.target.value),
                                            className: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "-- Tùy chỉnh trực tiếp --"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                rules.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: r.id,
                                                        children: [
                                                            "[",
                                                            r.category,
                                                            "] ",
                                                            r.title,
                                                            " (",
                                                            r.points > 0 ? `+${r.points}` : r.points,
                                                            "đ/",
                                                            r.unit,
                                                            ")"
                                                        ]
                                                    }, r.id, true, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-slate-700 mb-1",
                                                    children: "Tên vi phạm / khen thưởng:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    placeholder: "VD: Đi muộn, Làm BT tốt...",
                                                    value: customTitle,
                                                    onChange: (e)=>setCustomTitle(e.target.value),
                                                    className: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-slate-700 mb-1",
                                                    children: "Số điểm (+/-):"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    required: true,
                                                    value: customPoints,
                                                    onChange: (e)=>setCustomPoints(Number(e.target.value)),
                                                    className: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:bg-white focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 mb-1",
                                            children: "Ghi chú chi tiết (nếu có):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Ghi chú thêm về hoàn cảnh...",
                                            value: logNote,
                                            onChange: (e)=>setLogNote(e.target.value),
                                            className: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 flex space-x-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-md transition-all",
                                        children: "Xác Nhận Ghi Điểm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                    lineNumber: 223,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            viewHistoryStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 pb-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-slate-800 text-base",
                                            children: [
                                                "Nhật Ký Thi Đua: ",
                                                viewHistoryStudent.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: [
                                                "Mã STT: #",
                                                viewHistoryStudent.stt
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewHistoryStudent(null),
                                    className: "text-slate-400 hover:text-slate-600 p-1 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 max-h-[350px] overflow-y-auto pr-1",
                            children: logs.filter((l)=>l.studentId === viewHistoryStudent.id).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 text-center text-slate-400 text-xs font-medium",
                                children: "Chưa có lượt cộng/trừ điểm nào cho học sinh này."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                lineNumber: 339,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : logs.filter((l)=>l.studentId === viewHistoryStudent.id).map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-xl border border-slate-200 bg-slate-50/60 flex items-center justify-between text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-slate-800",
                                                    children: log.ruleTitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-400",
                                                    children: [
                                                        log.date,
                                                        " ",
                                                        log.note ? `• ${log.note}` : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 350,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-extrabold text-xs px-2 py-0.5 rounded-lg ${log.points > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`,
                                                    children: [
                                                        log.points > 0 ? `+${log.points}` : log.points,
                                                        "đ"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onDeleteLog(log.id),
                                                    className: "text-slate-400 hover:text-red-600",
                                                    title: "Xóa lượt này",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 354,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, log.id, true, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 346,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                    lineNumber: 323,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                lineNumber: 322,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.mjs [app-ssr] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.mjs [app-ssr] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.mjs [app-ssr] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-ssr] (ecmascript) <export default as RefreshCw>");
'use client';
;
;
const Navbar = ({ activeTab, setActiveTab, onResetData, totalStudents })=>{
    const tabs = [
        {
            id: 'seating',
            label: 'Sơ Đồ Chỗ Ngồi',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"],
            desc: 'Bàn 3 chỗ & Kéo thả'
        },
        {
            id: 'attendance',
            label: 'Điểm Danh',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"],
            desc: 'Tick chọn theo ngày'
        },
        {
            id: 'emulation',
            label: 'Điểm Thi Đua',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
            desc: 'Bảng xếp hạng & Cộng trừ điểm'
        },
        {
            id: 'rules',
            label: 'Tra Cứu Lỗi',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"],
            desc: 'Quy định & Upload Docx'
        },
        {
            id: 'duty',
            label: 'Lịch Trực Nhật',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            desc: 'Học chính & Học nghề'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md",
                                    children: "11A7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-bold text-slate-800 leading-tight",
                                            children: "QUẢN LÝ LỚP 11A7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-3.5 h-3.5 text-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Sĩ số: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-slate-700",
                                                    children: totalStudents
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 72
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " học sinh"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex space-x-1",
                            children: tabs.map((tab)=>{
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab.id),
                                    className: `flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-blue-50 text-blue-600 font-semibold shadow-sm border border-blue-200/60' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: `w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: tab.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, tab.id, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (confirm('Bạn có chắc chắn muốn khôi phục dữ liệu ban đầu về trạng thái mặc định của Lớp 11A7?')) {
                                        onResetData();
                                    }
                                },
                                title: "Khôi phục dữ liệu ban đầu",
                                className: "p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1 text-xs font-medium border border-transparent hover:border-red-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Khôi phục mặc định"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden flex overflow-x-auto py-2 space-x-1 border-t border-slate-100 no-scrollbar",
                    children: tabs.map((tab)=>{
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab.id),
                            className: `flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: tab.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 91,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/RuleLookup/RuleLookup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RuleLookup",
    ()=>RuleLookup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$docxParser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/docxParser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.mjs [app-ssr] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
'use client';
;
;
;
;
const RuleLookup = ({ rules, onUpdateRules })=>{
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadMessage, setUploadMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const categories = [
        'all',
        'Chuyên cần',
        'Học tập',
        'Nề nếp',
        'Ứng xử',
        'Cán bộ lớp',
        'Khác'
    ];
    const filteredRules = rules.filter((rule)=>{
        const matchesSearch = rule.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCat = selectedCategory === 'all' || rule.category === selectedCategory;
        return matchesSearch && matchesCat;
    });
    const handleFileUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setIsUploading(true);
        setUploadMessage(null);
        try {
            const parsedRules = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$docxParser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDocxRules"])(file);
            if (parsedRules.length > 0) {
                onUpdateRules(parsedRules);
                setUploadMessage(`Đã cập nhật ${parsedRules.length} quy định từ file ${file.name}!`);
            } else {
                setUploadMessage('Không tìm thấy cấu trúc quy định hợp lệ trong file docx.');
            }
        } catch (err) {
            console.error(err);
            setUploadMessage('Lỗi khi đọc file docx. Vui lòng kiểm tra định dạng.');
        } finally{
            setIsUploading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-slate-800",
                                        children: "Tra Cứu Lỗi & Quy Định 11A7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Tra cứu nhanh khung điểm trừ, điểm cộng nề nếp từ file `lỗi.docx`"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer transition-all flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isUploading ? 'Đang đọc docx...' : 'Tải lên File lỗi.docx mới'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: ".docx",
                                    onChange: handleFileUpload,
                                    className: "hidden",
                                    disabled: isUploading
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            uploadMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-purple-50 border border-purple-200 text-purple-800 p-3 rounded-xl text-xs font-bold flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-4 h-4 text-purple-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    uploadMessage
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full sm:w-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Nhập tên lỗi hoặc điểm (VD: đi muộn, -50)...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-purple-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex overflow-x-auto w-full sm:w-auto space-x-1.5 pb-1 sm:pb-0",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedCategory(cat),
                                className: `px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-purple-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`,
                                children: cat === 'all' ? 'Tất Cả Danh Mục' : cat
                            }, cat, false, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: filteredRules.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-full bg-white rounded-2xl p-8 border border-slate-200 text-center text-slate-400 text-xs font-medium",
                    children: "Không tìm thấy quy định phù hợp với từ khóa tra cứu."
                }, void 0, false, {
                    fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : filteredRules.map((rule)=>{
                    const isMerit = rule.points > 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-white rounded-2xl p-4 border shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${isMerit ? 'border-emerald-200 hover:border-emerald-300' : 'border-rose-200 hover:border-rose-300'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 uppercase tracking-wider",
                                                children: rule.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-extrabold px-2.5 py-1 rounded-lg ${isMerit ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'}`,
                                                children: [
                                                    isMerit ? `+${rule.points}` : rule.points,
                                                    " đ/",
                                                    rule.unit
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                                lineNumber: 142,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-slate-800 text-sm leading-snug",
                                        children: rule.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 137,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            isMerit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                className: "w-3.5 h-3.5 text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                                lineNumber: 160,
                                                columnNumber: 32
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                className: "w-3.5 h-3.5 text-rose-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                                lineNumber: 160,
                                                columnNumber: 85
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isMerit ? 'Khung Điểm Cộng' : 'Khung Điểm Trừ'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-slate-500",
                                        children: "Quy định lớp 11A7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 158,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, rule.id, true, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 131,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/SeatingChart/DeskConfigModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeskConfigModal",
    ()=>DeskConfigModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.mjs [app-ssr] (ecmascript) <export default as LayoutGrid>");
'use client';
;
;
const DeskConfigModal = ({ isOpen, onClose, layout, onUpdateLayout, onSetGlobalCapacity })=>{
    if (!isOpen) return null;
    const handleAddDesk = (colId)=>{
        const updated = layout.map((col)=>{
            if (col.id === colId) {
                const deskNumber = col.desks.length + 1;
                const newDesk = {
                    id: `${colId}-desk-${Date.now()}`,
                    name: `Bàn ${deskNumber}`,
                    capacity: 3,
                    seats: [
                        {
                            seatIndex: 0,
                            studentId: null
                        },
                        {
                            seatIndex: 1,
                            studentId: null
                        },
                        {
                            seatIndex: 2,
                            studentId: null
                        }
                    ]
                };
                return {
                    ...col,
                    desks: [
                        ...col.desks,
                        newDesk
                    ]
                };
            }
            return col;
        });
        onUpdateLayout(updated);
    };
    const handleRemoveDesk = (colId, deskId)=>{
        const updated = layout.map((col)=>{
            if (col.id === colId) {
                return {
                    ...col,
                    desks: col.desks.filter((d)=>d.id !== deskId)
                };
            }
            return col;
        });
        onUpdateLayout(updated);
    };
    const handleCapacityChange = (colId, deskId, newCap)=>{
        if (newCap < 1 || newCap > 5) return;
        const updated = layout.map((col)=>{
            if (col.id === colId) {
                const newDesks = col.desks.map((desk)=>{
                    if (desk.id === deskId) {
                        const seats = [];
                        for(let i = 0; i < newCap; i++){
                            seats.push(desk.seats[i] || {
                                seatIndex: i,
                                studentId: null
                            });
                        }
                        return {
                            ...desk,
                            capacity: newCap,
                            seats
                        };
                    }
                    return desk;
                });
                return {
                    ...col,
                    desks: newDesks
                };
            }
            return col;
        });
        onUpdateLayout(updated);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 my-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-slate-100 pb-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 text-blue-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-slate-800",
                                    children: "Tùy Chỉnh Cấu Hình Bàn Học (Bàn 3 Chỗ)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-50 border border-blue-200/80 rounded-xl p-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-xs font-bold uppercase tracking-wider text-blue-700 mb-2",
                            children: "Đổi nhanh số chỗ ngồi toàn bộ lớp:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSetGlobalCapacity(3),
                                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-sm transition-all flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Bàn 3 chỗ (Khuyên dùng)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSetGlobalCapacity(2),
                                    className: "px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-all",
                                    children: "Bàn 2 chỗ"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSetGlobalCapacity(4),
                                    className: "px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-all",
                                    children: "Bàn 4 chỗ"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 max-h-[50vh] overflow-y-auto pr-2",
                    children: layout.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-slate-200 rounded-xl p-4 bg-slate-50/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-slate-800 text-sm",
                                            children: col.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleAddDesk(col.id),
                                            className: "px-3 py-1 bg-white border border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-300 text-xs font-semibold rounded-lg flex items-center gap-1 shadow-xs transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-3.5 h-3.5 text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Thêm Bàn"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: col.desks.map((desk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white border border-slate-200 rounded-lg p-3 shadow-2xs flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold text-slate-700",
                                                            children: desk.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-500",
                                                            children: [
                                                                desk.capacity,
                                                                " chỗ ngồi"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center border border-slate-200 rounded-lg overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleCapacityChange(col.id, desk.id, desk.capacity - 1),
                                                                    className: "px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold",
                                                                    children: "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 text-xs font-bold text-slate-800",
                                                                    children: desk.capacity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleCapacityChange(col.id, desk.id, desk.capacity + 1),
                                                                    className: "px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold",
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleRemoveDesk(col.id, desk.id),
                                                            className: "text-slate-400 hover:text-red-600 p-1",
                                                            title: "Xóa bàn này",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, desk.id, true, {
                                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, col.id, true, {
                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 border-t border-slate-100 pt-4 flex justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Hoàn Tất Cấu Hình"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/SeatingChart/LuckyWheelModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LuckyWheelModal",
    ()=>LuckyWheelModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dices.mjs [app-ssr] (ecmascript) <export default as Dices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const LuckyWheelModal = ({ isOpen, onClose, students })=>{
    const [isSpinning, setIsSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedStudent, setSelectedStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!isOpen) return null;
    const handleSpin = ()=>{
        if (students.length === 0 || isSpinning) return;
        setIsSpinning(true);
        setSelectedStudent(null);
        let counter = 0;
        const maxTicks = 30;
        const interval = setInterval(()=>{
            const randomIndex = Math.floor(Math.random() * students.length);
            setSelectedStudent(students[randomIndex]);
            counter++;
            if (counter >= maxTicks) {
                clearInterval(interval);
                setIsSpinning(false);
                // Trigger confetti
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                    particleCount: 100,
                    spread: 70,
                    origin: {
                        y: 0.6
                    }
                });
            }
        }, 100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-slate-100 pb-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 text-indigo-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-5 h-5 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-slate-800",
                                    children: "Vòng Quay Ngẫu Nhiên Lớp 11A7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-36 h-36 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1.5 shadow-xl flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full bg-white rounded-full flex flex-col items-center justify-center p-3 text-center",
                                children: selectedStudent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                            className: "w-8 h-8 text-amber-500 mb-1 animate-bounce"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold text-indigo-600 uppercase tracking-wider",
                                            children: [
                                                "STT: ",
                                                selectedStudent.stt
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-extrabold text-slate-800 line-clamp-2 leading-tight",
                                            children: selectedStudent.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__["Dices"], {
                                            className: "w-10 h-10 text-indigo-400 mb-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400",
                                            children: "Bấm quay để chọn học sinh"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        selectedStudent && !isSpinning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-800 text-sm font-semibold animate-pulse",
                            children: [
                                "🎉 Chúc mừng ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold underline",
                                    children: selectedStudent.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 28
                                }, ("TURBOPACK compile-time value", void 0)),
                                " đã được chọn!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSpin,
                        disabled: isSpinning || students.length === 0,
                        className: `flex-1 py-3 px-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${isSpinning ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 active:scale-98 shadow-indigo-200'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__["Dices"], {
                                className: `w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isSpinning ? 'Đang quay...' : 'Quay Ngẫu Nhiên'
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/SeatingChart/SeatingChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeatingChart",
    ()=>SeatingChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$DeskConfigModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SeatingChart/DeskConfigModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$LuckyWheelModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SeatingChart/LuckyWheelModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.mjs [app-ssr] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.mjs [app-ssr] (ecmascript) <export default as HelpCircle>");
'use client';
;
;
;
;
;
const SeatingChart = ({ students, layout, onUpdateLayout })=>{
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isConfigOpen, setIsConfigOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWheelOpen, setIsWheelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draggedStudentId, setDraggedStudentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Helper map student ID -> Student object
    const studentMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const map = new Map();
        students.forEach((s)=>map.set(s.id, s));
        return map;
    }, [
        students
    ]);
    // Assigned student IDs
    const assignedStudentIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const set = new Set();
        layout.forEach((col)=>{
            col.desks.forEach((desk)=>{
                desk.seats.forEach((seat)=>{
                    if (seat.studentId) set.add(seat.studentId);
                });
            });
        });
        return set;
    }, [
        layout
    ]);
    // Unassigned students list
    const unassignedStudents = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return students.filter((s)=>!assignedStudentIds.has(s.id));
    }, [
        students,
        assignedStudentIds
    ]);
    // Drag handlers
    const handleDragStart = (e, studentId)=>{
        e.dataTransfer.setData('text/plain', studentId);
        setDraggedStudentId(studentId);
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
    };
    const handleDropSeat = (colId, deskId, seatIndex, e)=>{
        e.preventDefault();
        const studentId = e.dataTransfer.getData('text/plain');
        if (!studentId) return;
        // Create deep copy of layout
        const newLayout = layout.map((col)=>({
                ...col,
                desks: col.desks.map((desk)=>({
                        ...desk,
                        seats: desk.seats.map((seat)=>({
                                ...seat
                            }))
                    }))
            }));
        // Find and remove student from old seat if assigned
        newLayout.forEach((col)=>{
            col.desks.forEach((desk)=>{
                desk.seats.forEach((seat)=>{
                    if (seat.studentId === studentId) {
                        seat.studentId = null;
                    }
                });
            });
        });
        // Assign to new seat
        const targetCol = newLayout.find((c)=>c.id === colId);
        if (targetCol) {
            const targetDesk = targetCol.desks.find((d)=>d.id === deskId);
            if (targetDesk && targetDesk.seats[seatIndex]) {
                // Swap if seat already occupied
                const currentOccupant = targetDesk.seats[seatIndex].studentId;
                targetDesk.seats[seatIndex].studentId = studentId;
                if (currentOccupant && currentOccupant !== studentId) {
                // Put previous occupant back in unassigned pool (already handled since old seat cleared)
                }
            }
        }
        onUpdateLayout(newLayout);
        setDraggedStudentId(null);
    };
    const handleUnassignSeat = (colId, deskId, seatIndex)=>{
        const newLayout = layout.map((col)=>{
            if (col.id === colId) {
                const desks = col.desks.map((desk)=>{
                    if (desk.id === deskId) {
                        const seats = desk.seats.map((seat)=>{
                            if (seat.seatIndex === seatIndex) {
                                return {
                                    ...seat,
                                    studentId: null
                                };
                            }
                            return seat;
                        });
                        return {
                            ...desk,
                            seats
                        };
                    }
                    return desk;
                });
                return {
                    ...col,
                    desks
                };
            }
            return col;
        });
        onUpdateLayout(newLayout);
    };
    const handleSetGlobalCapacity = (capacity)=>{
        const newLayout = layout.map((col)=>({
                ...col,
                desks: col.desks.map((desk)=>{
                    const seats = [];
                    for(let i = 0; i < capacity; i++){
                        seats.push(desk.seats[i] || {
                            seatIndex: i,
                            studentId: null
                        });
                    }
                    return {
                        ...desk,
                        capacity,
                        seats
                    };
                })
            }));
        onUpdateLayout(newLayout);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full md:w-72",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Tìm tên học sinh trên sơ đồ...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 font-semibold rounded-lg border border-emerald-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Đã xếp: ",
                                    assignedStudentIds.size,
                                    "/",
                                    students.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            unassignedStudents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 font-semibold rounded-lg border border-amber-200 animate-pulse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Chưa xếp: ",
                                    unassignedStudents.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2 w-full md:w-auto justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsWheelOpen(true),
                                className: "px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Vòng Quay May Mắn"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsConfigOpen(true),
                                className: "px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 transition-all flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "w-4 h-4 text-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Tùy Chỉnh Bàn 3 Chỗ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 bg-slate-100/70 p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800 text-white text-center py-3 px-6 rounded-xl shadow-md font-bold tracking-widest text-sm uppercase flex items-center justify-center gap-3 border-b-4 border-slate-900",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "BẢNG ĐEN / BÀN GIÁO VIÊN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-5 items-start",
                                children: layout.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/80 backdrop-blur-xs rounded-xl p-3.5 border border-slate-200 shadow-2xs space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-200/70 text-slate-700 font-extrabold text-xs text-center py-1.5 rounded-lg tracking-wide uppercase",
                                                children: col.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: col.desks.map((desk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 border border-slate-200 rounded-xl p-2.5 space-y-1.5 shadow-2xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between text-[11px] font-semibold text-slate-500 px-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: desk.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-mono",
                                                                        children: [
                                                                            desk.capacity,
                                                                            " chỗ"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                        lineNumber: 207,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `grid gap-1.5 ${desk.capacity === 3 ? 'grid-cols-3' : desk.capacity === 4 ? 'grid-cols-4' : 'grid-cols-2'}`,
                                                                children: desk.seats.map((seat, seatIdx)=>{
                                                                    const student = seat.studentId ? studentMap.get(seat.studentId) : null;
                                                                    const isHighlighted = searchTerm.trim() !== '' && student && student.name.toLowerCase().includes(searchTerm.toLowerCase());
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onDragOver: handleDragOver,
                                                                        onDrop: (e)=>handleDropSeat(col.id, desk.id, seatIdx, e),
                                                                        className: `min-h-[56px] p-1.5 rounded-lg border-2 border-dashed transition-all flex flex-col items-center justify-center text-center relative group ${student ? isHighlighted ? 'bg-amber-100 border-amber-500 text-amber-900 shadow-md ring-2 ring-amber-400' : 'bg-white border-blue-200 text-slate-800 shadow-2xs hover:border-blue-400' : 'bg-slate-100/50 border-slate-300 text-slate-400 hover:border-blue-400 hover:bg-blue-50/50'}`,
                                                                        children: student ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            draggable: true,
                                                                            onDragStart: (e)=>handleDragStart(e, student.id),
                                                                            className: "w-full h-full cursor-grab active:cursor-grabbing flex flex-col items-center justify-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[9px] font-bold text-blue-600 bg-blue-50 px-1 rounded",
                                                                                    children: [
                                                                                        "#",
                                                                                        student.stt
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                                    lineNumber: 240,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[11px] font-bold leading-tight line-clamp-2 px-0.5 mt-0.5",
                                                                                    children: student.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                                    lineNumber: 243,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleUnassignSeat(col.id, desk.id, seatIdx),
                                                                                    title: "Gỡ khỏi bàn",
                                                                                    className: "absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-sm",
                                                                                    children: "×"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                                    lineNumber: 248,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                            lineNumber: 235,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-400 font-medium",
                                                                            children: "Chỗ trống"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                            lineNumber: 257,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, seatIdx, false, {
                                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0));
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, desk.id, true, {
                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, col.id, true, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-slate-100 pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-slate-800 text-sm flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-4 h-4 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Danh Sách Chờ Xếp Chỗ (",
                                        unassignedStudents.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-500 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                        className: "w-3.5 h-3.5 text-blue-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Kéo thả tên học sinh vào vị trí ghế trống trên sơ đồ."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 max-h-[550px] overflow-y-auto pr-1",
                                children: unassignedStudents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center text-emerald-800 text-xs font-semibold",
                                    children: "🎉 Tất cả học sinh 11A7 đã được xếp chỗ ngồi!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : unassignedStudents.map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        draggable: true,
                                        onDragStart: (e)=>handleDragStart(e, st.id),
                                        className: "bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl p-2.5 cursor-grab active:cursor-grabbing transition-all flex items-center justify-between group shadow-2xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-5 h-5 rounded-md bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center",
                                                        children: st.stt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-slate-700 group-hover:text-blue-700",
                                                        children: st.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-400 font-medium",
                                                children: "Kéo thả →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                lineNumber: 304,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, st.id, true, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$DeskConfigModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeskConfigModal"], {
                isOpen: isConfigOpen,
                onClose: ()=>setIsConfigOpen(false),
                layout: layout,
                onUpdateLayout: onUpdateLayout,
                onSetGlobalCapacity: handleSetGlobalCapacity
            }, void 0, false, {
                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$LuckyWheelModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuckyWheelModal"], {
                isOpen: isWheelOpen,
                onClose: ()=>setIsWheelOpen(false),
                students: students
            }, void 0, false, {
                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/data/initialData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_DUTY_CONFIG",
    ()=>INITIAL_DUTY_CONFIG,
    "INITIAL_DUTY_TASKS",
    ()=>INITIAL_DUTY_TASKS,
    "INITIAL_RULES",
    ()=>INITIAL_RULES,
    "INITIAL_SEATING_LAYOUT",
    ()=>INITIAL_SEATING_LAYOUT,
    "INITIAL_STUDENTS",
    ()=>INITIAL_STUDENTS
]);
const INITIAL_STUDENTS = [
    {
        id: '1',
        stt: 1,
        name: 'CHU BÙI AN',
        group: 1
    },
    {
        id: '2',
        stt: 2,
        name: 'PHẠM TRƯỜNG AN',
        group: 1
    },
    {
        id: '3',
        stt: 3,
        name: 'LÊ TUẤN ANH',
        group: 1
    },
    {
        id: '4',
        stt: 4,
        name: 'VŨ PHẠM HÀ CHÂU',
        group: 1
    },
    {
        id: '5',
        stt: 5,
        name: 'LỤC ĐINH ĐỨC DUY',
        group: 1
    },
    {
        id: '6',
        stt: 6,
        name: 'NGUYỄN ÁNH DƯƠNG',
        group: 1
    },
    {
        id: '7',
        stt: 7,
        name: 'ĐINH MẠNH ĐẠT',
        group: 1
    },
    {
        id: '8',
        stt: 8,
        name: 'BÙI ANH ĐỨC',
        group: 1
    },
    {
        id: '9',
        stt: 9,
        name: 'NGUYỄN TRUNG HẢI',
        group: 1
    },
    {
        id: '10',
        stt: 10,
        name: 'NGUYỄN MẠNH HÙNG',
        group: 2
    },
    {
        id: '11',
        stt: 11,
        name: 'ĐỖ ĐỨC HUY',
        group: 2
    },
    {
        id: '12',
        stt: 12,
        name: 'NGUYỄN QUANG HUY',
        group: 2
    },
    {
        id: '13',
        stt: 13,
        name: 'LÊ KHÁNH HƯNG',
        group: 2
    },
    {
        id: '14',
        stt: 14,
        name: 'NGUYỄN TRUNG KIÊN',
        group: 2
    },
    {
        id: '15',
        stt: 15,
        name: 'PHẠM HOÀNG LINH',
        group: 2
    },
    {
        id: '16',
        stt: 16,
        name: 'TRẦN ĐỨC LONG',
        group: 2
    },
    {
        id: '17',
        stt: 17,
        name: 'VI THANH LỘC',
        group: 2
    },
    {
        id: '18',
        stt: 18,
        name: 'VŨ MINH LƯỢNG',
        group: 2
    },
    {
        id: '19',
        stt: 19,
        name: 'PHẠM QUANG MINH',
        group: 3
    },
    {
        id: '20',
        stt: 20,
        name: 'VŨ TRÀ MY',
        group: 3
    },
    {
        id: '21',
        stt: 21,
        name: 'ĐẶNG HÀO NAM',
        group: 3
    },
    {
        id: '22',
        stt: 22,
        name: 'VŨ HẢI NAM',
        group: 3
    },
    {
        id: '23',
        stt: 23,
        name: 'VŨ BÍCH NGỌC',
        group: 3
    },
    {
        id: '24',
        stt: 24,
        name: 'TRẦN MINH NGUYỆT',
        group: 3
    },
    {
        id: '25',
        stt: 25,
        name: 'PHẠM GIA PHONG',
        group: 3
    },
    {
        id: '26',
        stt: 26,
        name: 'VŨ ĐAN PHONG',
        group: 3
    },
    {
        id: '27',
        stt: 27,
        name: 'NGUYỄN TIẾN SƠN',
        group: 3
    },
    {
        id: '28',
        stt: 28,
        name: 'DƯƠNG MẠNH TÂM',
        group: 4
    },
    {
        id: '29',
        stt: 29,
        name: 'ĐINH QUYẾT TIẾN',
        group: 4
    },
    {
        id: '30',
        stt: 30,
        name: 'PHẠM THÙY TRANG',
        group: 4
    },
    {
        id: '31',
        stt: 31,
        name: 'TRẦN THÀNH TRUNG',
        group: 4
    },
    {
        id: '32',
        stt: 32,
        name: 'NGUYỄN MINH TUỆ',
        group: 4
    },
    {
        id: '33',
        stt: 33,
        name: 'NGUYỄN VĂN TUYÊN',
        group: 4
    },
    {
        id: '34',
        stt: 34,
        name: 'ĐOÀN ÁNH VI',
        group: 4
    },
    {
        id: '35',
        stt: 35,
        name: 'BÙI THẾ VINH',
        group: 4
    },
    {
        id: '36',
        stt: 36,
        name: 'LÝ TRIỆU VŨ',
        group: 4
    },
    {
        id: '37',
        stt: 37,
        name: 'ĐINH THANH TRÀ',
        group: 4
    },
    {
        id: '38',
        stt: 38,
        name: 'BẢO NAM',
        group: 4
    }
];
const INITIAL_RULES = [
    // Điểm Trừ
    {
        id: 'r1',
        category: 'Chuyên cần',
        title: 'Đi muộn dưới 5 phút',
        points: -5,
        unit: 'lần'
    },
    {
        id: 'r2',
        category: 'Chuyên cần',
        title: 'Đi muộn trên 5 phút',
        points: -10,
        unit: 'lần'
    },
    {
        id: 'r3',
        category: 'Chuyên cần',
        title: 'Vào lớp muộn',
        points: -20,
        unit: 'lần'
    },
    {
        id: 'r4',
        category: 'Chuyên cần',
        title: 'Nghỉ học ko lý do',
        points: -30,
        unit: 'lần'
    },
    {
        id: 'r5',
        category: 'Chuyên cần',
        title: 'Nghỉ học có phép từ buổi thứ 4 trở đi (Văn hóa)',
        points: -10,
        unit: 'lần'
    },
    {
        id: 'r6',
        category: 'Chuyên cần',
        title: 'Nghỉ học nghề (từ buổi thứ 3)',
        points: -10,
        unit: 'lần'
    },
    {
        id: 'r7',
        category: 'Chuyên cần',
        title: 'Bỏ tiết',
        points: -30,
        unit: 'lần'
    },
    {
        id: 'r8',
        category: 'Chuyên cần',
        title: 'Không chào cờ hoặc tham gia các buổi SH tập thể',
        points: -20,
        unit: 'lần'
    },
    {
        id: 'r9',
        category: 'Học tập',
        title: 'Không làm BT, ko học bài',
        points: -10,
        unit: 'lần'
    },
    {
        id: 'r10',
        category: 'Học tập',
        title: 'Quên sách vở dụng cụ',
        points: -5,
        unit: 'lần'
    },
    {
        id: 'r11',
        category: 'Học tập',
        title: 'Không thực hiện nhiệm vụ học tập',
        points: -5,
        unit: 'lần'
    },
    {
        id: 'r12',
        category: 'Học tập',
        title: 'Ngủ trong giờ',
        points: -10,
        unit: 'lần'
    },
    {
        id: 'r13',
        category: 'Học tập',
        title: 'Không ghi bài',
        points: -10,
        unit: 'lần'
    },
    {
        id: 'r14',
        category: 'Học tập',
        title: 'Không làm OLM',
        points: -10,
        unit: 'bài'
    },
    {
        id: 'r15',
        category: 'Học tập',
        title: 'Sử dụng điện thoại',
        points: -50,
        unit: 'lần'
    },
    {
        id: 'r16',
        category: 'Học tập',
        title: 'Bị GV nhắc',
        points: -10,
        unit: 'lần'
    },
    {
        id: 'r17',
        category: 'Học tập',
        title: 'Nói leo',
        points: -5,
        unit: 'lần'
    },
    {
        id: 'r18',
        category: 'Nề nếp',
        title: 'Không đúng đồng phục',
        points: -10,
        unit: 'lần'
    },
    {
        id: 'r19',
        category: 'Nề nếp',
        title: 'Dép lê',
        points: -5,
        unit: 'lần'
    },
    {
        id: 'r20',
        category: 'Nề nếp',
        title: 'Tự ý đổi chỗ',
        points: -20,
        unit: 'lần'
    },
    {
        id: 'r21',
        category: 'Nề nếp',
        title: 'Vi phạm giờ truy bài',
        points: -10,
        unit: 'lần'
    },
    {
        id: 'r22',
        category: 'Nề nếp',
        title: 'Không trực nhật',
        points: -20,
        unit: 'lần'
    },
    {
        id: 'r23',
        category: 'Nề nếp',
        title: 'Không lao động',
        points: -20,
        unit: 'lần'
    },
    {
        id: 'r24',
        category: 'Nề nếp',
        title: 'Xả rác',
        points: -5,
        unit: 'lần'
    },
    {
        id: 'r25',
        category: 'Nề nếp',
        title: 'Làm hư hỏng tài sản',
        points: -20,
        unit: 'lần'
    },
    {
        id: 'r26',
        category: 'Ứng xử',
        title: 'Nói tục/chửi bậy',
        points: -5,
        unit: 'lần'
    },
    {
        id: 'r27',
        category: 'Ứng xử',
        title: 'Trêu chọc bạn quá mức',
        points: -20,
        unit: 'lần'
    },
    {
        id: 'r28',
        category: 'Ứng xử',
        title: 'Gây mất đoàn kết',
        points: -30,
        unit: 'lần'
    },
    {
        id: 'r29',
        category: 'Ứng xử',
        title: 'Thiếu tôn trọng giáo viên',
        points: -50,
        unit: 'lần'
    },
    {
        id: 'r30',
        category: 'Ứng xử',
        title: 'Đánh nhau/bắt nạt bạn',
        points: -50,
        unit: 'lần'
    },
    {
        id: 'r31',
        category: 'Ứng xử',
        title: 'Vi phạm ATGT',
        points: -50,
        unit: 'lần'
    },
    {
        id: 'r32',
        category: 'Khác',
        title: 'Nói linh tinh trên nhóm',
        points: -30,
        unit: 'lần'
    },
    {
        id: 'r33',
        category: 'Khác',
        title: 'Cợt nhả',
        points: -30,
        unit: 'lần'
    },
    {
        id: 'r34',
        category: 'Khác',
        title: 'Không nắm thông tin trên Zalo',
        points: -5,
        unit: 'lần'
    },
    // Điểm Cộng
    {
        id: 'r35',
        category: 'Học tập',
        title: 'Phát biểu xây dựng bài tốt',
        points: 3,
        unit: 'lần'
    },
    {
        id: 'r36',
        category: 'Học tập',
        title: 'Có điểm 9,10 sổ đầu bài',
        points: 10,
        unit: 'lần'
    },
    {
        id: 'r37',
        category: 'Học tập',
        title: 'Điểm Thi 9,10',
        points: 30,
        unit: 'lần'
    },
    {
        id: 'r38',
        category: 'Ứng xử',
        title: 'Giúp đỡ bạn trong học tập',
        points: 10,
        unit: 'lần'
    },
    {
        id: 'r39',
        category: 'Nề nếp',
        title: 'Hoàn thành tốt nhiệm vụ lớp',
        points: 10,
        unit: 'lần'
    },
    {
        id: 'r40',
        category: 'Nề nếp',
        title: 'Nhiệt tình tham gia các hoạt động cô giao',
        points: 10,
        unit: 'lần'
    },
    {
        id: 'r41',
        category: 'Nề nếp',
        title: 'Xung phong Tham gia lao động',
        points: 20,
        unit: 'lần'
    },
    {
        id: 'r42',
        category: 'Nề nếp',
        title: 'Tham gia hoạt động của Đoàn TN',
        points: 10,
        unit: 'lần'
    },
    {
        id: 'r43',
        category: 'Ứng xử',
        title: 'Nhặt được của rơi trả người mất',
        points: 20,
        unit: 'lần'
    },
    {
        id: 'r44',
        category: 'Nề nếp',
        title: 'Tham gia tổ chức các ngày kỉ niệm cho lớp',
        points: 40,
        unit: 'lần'
    },
    {
        id: 'r45',
        category: 'Ứng xử',
        title: 'Có hành động đẹp',
        points: 5,
        unit: 'lần'
    },
    {
        id: 'r46',
        category: 'Nề nếp',
        title: 'Tham gia tích cực hoạt động lớp',
        points: 20,
        unit: 'lần'
    },
    {
        id: 'r47',
        category: 'Học tập',
        title: 'Đại diện lớp tham gia cuộc thi/hoạt động',
        points: 40,
        unit: 'lần'
    },
    {
        id: 'r48',
        category: 'Học tập',
        title: 'Đạt giải cấp trường',
        points: 60,
        unit: 'lần'
    },
    {
        id: 'r49',
        category: 'Học tập',
        title: 'Đạt giải cấp thành phố/tỉnh',
        points: 100,
        unit: 'lần'
    },
    {
        id: 'r50',
        category: 'Học tập',
        title: 'Có sản phẩm STEM/KHKT',
        points: 50,
        unit: 'lần'
    },
    {
        id: 'r51',
        category: 'Nề nếp',
        title: 'Tham gia văn nghệ/thể thao',
        points: 50,
        unit: 'lần'
    },
    {
        id: 'r52',
        category: 'Ứng xử',
        title: 'Khắc phục tốt lỗi trước đây',
        points: 10,
        unit: 'lần'
    },
    {
        id: 'r53',
        category: 'Khác',
        title: 'Cô Vân khen',
        points: 10,
        unit: 'lần'
    },
    // Cán bộ lớp
    {
        id: 'r54',
        category: 'Cán bộ lớp',
        title: 'Tổ trưởng',
        points: 10,
        unit: 'tuần'
    },
    {
        id: 'r55',
        category: 'Cán bộ lớp',
        title: 'Giữ SĐB',
        points: 10,
        unit: 'tuần'
    },
    {
        id: 'r56',
        category: 'Cán bộ lớp',
        title: 'Lớp Phó LĐ',
        points: 15,
        unit: 'tuần'
    },
    {
        id: 'r57',
        category: 'Cán bộ lớp',
        title: 'Lớp Phó HT',
        points: 15,
        unit: 'tuần'
    },
    {
        id: 'r58',
        category: 'Cán bộ lớp',
        title: 'Lớp trưởng',
        points: 15,
        unit: 'tuần'
    }
];
const INITIAL_SEATING_LAYOUT = [
    {
        id: 'col-1',
        name: 'Dãy 1 (Bên Trái)',
        desks: [
            {
                id: 'd1-1',
                name: 'Bàn 1',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '12'
                    },
                    {
                        seatIndex: 1,
                        studentId: '25'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd1-2',
                name: 'Bàn 2',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '6'
                    },
                    {
                        seatIndex: 1,
                        studentId: '2'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd1-3',
                name: 'Bàn 3',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '31'
                    },
                    {
                        seatIndex: 1,
                        studentId: '33'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd1-4',
                name: 'Bàn 4',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '27'
                    },
                    {
                        seatIndex: 1,
                        studentId: '1'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd1-5',
                name: 'Bàn 5',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '20'
                    },
                    {
                        seatIndex: 1,
                        studentId: '30'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd1-6',
                name: 'Bàn 6',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '14'
                    },
                    {
                        seatIndex: 1,
                        studentId: '5'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            }
        ]
    },
    {
        id: 'col-2',
        name: 'Dãy 2 (Giữa)',
        desks: [
            {
                id: 'd2-1',
                name: 'Bàn 1',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '35'
                    },
                    {
                        seatIndex: 1,
                        studentId: '17'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd2-2',
                name: 'Bàn 2',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '7'
                    },
                    {
                        seatIndex: 1,
                        studentId: '11'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd2-3',
                name: 'Bàn 3',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '32'
                    },
                    {
                        seatIndex: 1,
                        studentId: '29'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd2-4',
                name: 'Bàn 4',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '3'
                    },
                    {
                        seatIndex: 1,
                        studentId: '8'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd2-5',
                name: 'Bàn 5',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '16'
                    },
                    {
                        seatIndex: 1,
                        studentId: '13'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd2-6',
                name: 'Bàn 6',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '28'
                    },
                    {
                        seatIndex: 1,
                        studentId: '9'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            }
        ]
    },
    {
        id: 'col-3',
        name: 'Dãy 3 (Bên Phải)',
        desks: [
            {
                id: 'd3-1',
                name: 'Bàn 1',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '26'
                    },
                    {
                        seatIndex: 1,
                        studentId: '23'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd3-2',
                name: 'Bàn 2',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '34'
                    },
                    {
                        seatIndex: 1,
                        studentId: '10'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd3-3',
                name: 'Bàn 3',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '18'
                    },
                    {
                        seatIndex: 1,
                        studentId: '21'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd3-4',
                name: 'Bàn 4',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '36'
                    },
                    {
                        seatIndex: 1,
                        studentId: '4'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd3-5',
                name: 'Bàn 5',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '15'
                    },
                    {
                        seatIndex: 1,
                        studentId: '19'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd3-6',
                name: 'Bàn 6',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '24'
                    },
                    {
                        seatIndex: 1,
                        studentId: '37'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            },
            {
                id: 'd3-7',
                name: 'Bàn Bổ Sung',
                capacity: 3,
                seats: [
                    {
                        seatIndex: 0,
                        studentId: '22'
                    },
                    {
                        seatIndex: 1,
                        studentId: '38'
                    },
                    {
                        seatIndex: 2,
                        studentId: null
                    }
                ]
            }
        ]
    }
];
const INITIAL_DUTY_CONFIG = [
    {
        dayOfWeek: 1,
        dayName: 'Thứ Hai',
        type: 'hoc_chinh',
        groupAssigned: 1,
        customNote: 'Chào cờ đầu tuần - Trực nhật kỹ phòng học & sân cờ'
    },
    {
        dayOfWeek: 2,
        dayName: 'Thứ Ba',
        type: 'hoc_chinh',
        groupAssigned: 2,
        customNote: 'Học chính văn hóa'
    },
    {
        dayOfWeek: 3,
        dayName: 'Thứ Tư',
        type: 'hoc_chinh',
        groupAssigned: 3,
        customNote: 'Học chính văn hóa'
    },
    {
        dayOfWeek: 4,
        dayName: 'Thứ Năm',
        type: 'hoc_nghe',
        groupAssigned: 4,
        customNote: 'HỌC NGHỀ: Vệ sinh cuối ca học nghề & sắp xếp dụng cụ'
    },
    {
        dayOfWeek: 5,
        dayName: 'Thứ Sáu',
        type: 'hoc_chinh',
        groupAssigned: 1,
        customNote: 'Học chính văn hóa'
    },
    {
        dayOfWeek: 6,
        dayName: 'Thứ Bảy',
        type: 'hoc_chinh',
        groupAssigned: 2,
        customNote: 'Sinh hoạt lớp & Tổng vệ sinh cuối tuần'
    }
];
const INITIAL_DUTY_TASKS = [
    {
        id: 't1',
        name: 'Lau bảng & Giặt giẻ lau',
        description: 'Chuẩn bị phấn/bút, lau sạch bảng trước các tiết học'
    },
    {
        id: 't2',
        name: 'Quét dọn phòng học',
        description: 'Quét sạch gầm bàn, lối đi và hành lang trước cửa lớp'
    },
    {
        id: 't3',
        name: 'Đổ rác & Thay túi rác',
        description: 'Gom rác trong thùng lớp học mang đến nơi quy định'
    },
    {
        id: 't4',
        name: 'Kê bàn ghế & Lau bàn GV',
        description: 'Kê ngay ngắn các dãy bàn ghế, lau sạch bàn giáo viên'
    },
    {
        id: 't5',
        name: 'Tắt điện & Khóa cửa',
        description: 'Tắt toàn bộ quạt, đèn và khóa cửa lớp khi ra về'
    }
];
}),
"[project]/src/utils/docxParser.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDocxRules",
    ()=>parseDocxRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mammoth/lib/index.js [app-ssr] (ecmascript)");
;
async function parseDocxRules(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extractRawText({
            arrayBuffer
        });
        const text = result.value;
        const lines = text.split('\n').map((l)=>l.trim()).filter(Boolean);
        const rules = [];
        let currentCategory = 'Khác';
        let isMeritSection = false;
        lines.forEach((line, index)=>{
            if (line.includes('ĐIỂM TRỪ')) {
                isMeritSection = false;
                return;
            }
            if (line.includes('ĐIỂM CỘNG')) {
                isMeritSection = true;
                return;
            }
            if ([
                'Chuyên cần',
                'Học tập',
                'Nề nếp',
                'Ứng xử',
                'Cán bộ lớp',
                'Khác'
            ].includes(line)) {
                currentCategory = line;
                return;
            }
            // Check if line contains score pattern like "-5/lần", "+3/lần", "-10/bài", "+10/tuần"
            const scoreMatch = line.match(/([+-]?\d+)\s*\/\s*(\w+)/);
            if (scoreMatch) {
                const rawPoints = parseInt(scoreMatch[1], 10);
                const points = isMeritSection ? Math.abs(rawPoints) : rawPoints > 0 ? -rawPoints : rawPoints;
                const unit = scoreMatch[2] || 'lần';
                const title = line.replace(scoreMatch[0], '').trim();
                if (title) {
                    rules.push({
                        id: `docx-${Date.now()}-${index}`,
                        category: currentCategory,
                        title: title,
                        points: points,
                        unit: unit
                    });
                }
            }
        });
        return rules;
    } catch (error) {
        console.error('Error parsing docx file:', error);
        throw error;
    }
}
}),
"[project]/src/utils/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadAttendance",
    ()=>loadAttendance,
    "loadDutyConfig",
    ()=>loadDutyConfig,
    "loadEmulationLogs",
    ()=>loadEmulationLogs,
    "loadRules",
    ()=>loadRules,
    "loadSeating",
    ()=>loadSeating,
    "loadStudents",
    ()=>loadStudents,
    "resetAllData",
    ()=>resetAllData,
    "saveAttendance",
    ()=>saveAttendance,
    "saveDutyConfig",
    ()=>saveDutyConfig,
    "saveEmulationLogs",
    ()=>saveEmulationLogs,
    "saveRules",
    ()=>saveRules,
    "saveSeating",
    ()=>saveSeating,
    "saveStudents",
    ()=>saveStudents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/initialData.ts [app-ssr] (ecmascript)");
;
const STORAGE_KEYS = {
    STUDENTS: '11a7_students',
    RULES: '11a7_rules',
    SEATING: '11a7_seating',
    ATTENDANCE: '11a7_attendance',
    EMULATION_LOGS: '11a7_emulation_logs',
    DUTY_CONFIG: '11a7_duty_config'
};
const loadStudents = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_STUDENTS"];
    //TURBOPACK unreachable
    ;
};
const saveStudents = (students)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const loadRules = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_RULES"];
    //TURBOPACK unreachable
    ;
};
const saveRules = (rules)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const loadSeating = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_SEATING_LAYOUT"];
    //TURBOPACK unreachable
    ;
};
const saveSeating = (seating)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const loadAttendance = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
};
const saveAttendance = (attendance)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const loadEmulationLogs = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
};
const saveEmulationLogs = (logs)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const loadDutyConfig = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_DUTY_CONFIG"];
    //TURBOPACK unreachable
    ;
};
const saveDutyConfig = (config)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const resetAllData = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__10ywox0._.js.map