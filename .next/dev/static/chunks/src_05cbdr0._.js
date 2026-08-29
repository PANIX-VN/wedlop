(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$SeatingChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SeatingChart/SeatingChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Attendance$2f$AttendanceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Attendance/AttendanceManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Emulation$2f$EmulationManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Emulation/EmulationManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RuleLookup$2f$RuleLookup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RuleLookup/RuleLookup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DutySchedule$2f$DutyScheduleManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DutySchedule/DutyScheduleManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/initialData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function Home() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('seating');
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // States
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_STUDENTS"]);
    const [rules, setRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_RULES"]);
    const [seatingLayout, setSeatingLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_SEATING_LAYOUT"]);
    const [attendanceRecords, setAttendanceRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [emulationLogs, setEmulationLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dutyConfig, setDutyConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_DUTY_CONFIG"]);
    // Hydrate from LocalStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setStudents((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadStudents"])());
            setRules((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadRules"])());
            setSeatingLayout((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSeating"])());
            setAttendanceRecords((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadAttendance"])());
            setEmulationLogs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadEmulationLogs"])());
            setDutyConfig((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDutyConfig"])());
            setIsLoaded(true);
        }
    }["Home.useEffect"], []);
    // Sync state changes to storage
    const handleUpdateSeating = (newLayout)=>{
        setSeatingLayout(newLayout);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSeating"])(newLayout);
    };
    const handleSaveAttendance = (newRecord)=>{
        const updated = [
            ...attendanceRecords.filter((r)=>r.date !== newRecord.date),
            newRecord
        ];
        setAttendanceRecords(updated);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAttendance"])(updated);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveEmulationLogs"])(updated);
    };
    const handleDeleteEmulationLog = (id)=>{
        const updated = emulationLogs.filter((l)=>l.id !== id);
        setEmulationLogs(updated);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveEmulationLogs"])(updated);
    };
    const handleUpdateRules = (newRules)=>{
        setRules(newRules);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveRules"])(newRules);
    };
    const handleUpdateDutyConfig = (newConfig)=>{
        setDutyConfig(newConfig);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDutyConfig"])(newConfig);
    };
    const handleResetData = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetAllData"])();
        setStudents(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_STUDENTS"]);
        setRules(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_RULES"]);
        setSeatingLayout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_SEATING_LAYOUT"]);
        setAttendanceRecords([]);
        setEmulationLogs([]);
        setDutyConfig(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_DUTY_CONFIG"]);
    };
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-slate-100/80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                activeTab: activeTab,
                setActiveTab: setActiveTab,
                onResetData: handleResetData,
                totalStudents: students.length
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6",
                children: [
                    activeTab === 'seating' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$SeatingChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeatingChart"], {
                        students: students,
                        layout: seatingLayout,
                        onUpdateLayout: handleUpdateSeating
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    activeTab === 'attendance' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Attendance$2f$AttendanceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttendanceManager"], {
                        students: students,
                        attendanceRecords: attendanceRecords,
                        onSaveRecord: handleSaveAttendance
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    activeTab === 'emulation' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Emulation$2f$EmulationManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmulationManager"], {
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
                    activeTab === 'rules' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RuleLookup$2f$RuleLookup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RuleLookup"], {
                        rules: rules,
                        onUpdateRules: handleUpdateRules
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    activeTab === 'duty' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DutySchedule$2f$DutyScheduleManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DutyScheduleManager"], {
                        students: students,
                        dutyConfig: dutyConfig,
                        tasks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_DUTY_TASKS"],
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(Home, "ipr4S3em1e5eJirpIQLfEhALYrc=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Attendance/AttendanceManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttendanceManager",
    ()=>AttendanceManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.mjs [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.mjs [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const AttendanceManager = ({ students, attendanceRecords, onSaveRecord, canTakeAttendance })=>{
    _s();
    const getTodayString = ()=>new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getTodayString());
    const [currentMap, setCurrentMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSavedNotice, setIsSavedNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchFilter, setSearchFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Load existing records for selectedDate or default all to 'present'
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttendanceManager.useEffect": ()=>{
            const existing = attendanceRecords.find({
                "AttendanceManager.useEffect.existing": (r)=>r.date === selectedDate
            }["AttendanceManager.useEffect.existing"]);
            if (existing) {
                setCurrentMap(existing.records);
            } else {
                const initialMap = {};
                students.forEach({
                    "AttendanceManager.useEffect": (s)=>{
                        initialMap[s.id] = 'present';
                    }
                }["AttendanceManager.useEffect"]);
                setCurrentMap(initialMap);
            }
        }
    }["AttendanceManager.useEffect"], [
        selectedDate,
        attendanceRecords,
        students
    ]);
    const handleStatusChange = (studentId, status)=>{
        if (!canTakeAttendance) return;
        setCurrentMap((prev)=>({
                ...prev,
                [studentId]: status
            }));
    };
    const handleAllPresent = ()=>{
        if (!canTakeAttendance) return;
        const newMap = {};
        students.forEach((s)=>{
            newMap[s.id] = 'present';
        });
        setCurrentMap(newMap);
    };
    const handleSave = ()=>{
        if (!canTakeAttendance) return;
        onSaveRecord({
            date: selectedDate,
            records: currentMap
        });
        setIsSavedNotice(true);
        setTimeout(()=>setIsSavedNotice(false), 3000);
    };
    // Stats computation
    const stats = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "AttendanceManager.useMemo[stats]": ()=>{
            let present = 0;
            let excused = 0;
            let unexcused = 0;
            let late = 0;
            Object.values(currentMap).forEach({
                "AttendanceManager.useMemo[stats]": (st)=>{
                    if (st === 'present') present++;
                    else if (st === 'excused') excused++;
                    else if (st === 'unexcused') unexcused++;
                    else if (st === 'late') late++;
                }
            }["AttendanceManager.useMemo[stats]"]);
            return {
                present,
                excused,
                unexcused,
                late
            };
        }
    }["AttendanceManager.useMemo[stats]"], [
        currentMap
    ]);
    const filteredStudents = students.filter((s)=>s.name.toLowerCase().includes(searchFilter.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-slate-800",
                                        children: "Điểm Danh Lớp 11A7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Ghi nhận sĩ số và trạng thái đi học hàng ngày"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-slate-600",
                                        children: "Ngày điểm danh:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: selectedDate,
                                        onChange: (e)=>setSelectedDate(e.target.value),
                                        className: "bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            canTakeAttendance ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAllPresent,
                                        className: "px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                                                className: "w-4 h-4 text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Tất Cả Có Mặt"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSave,
                                        className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Lưu Điểm Danh"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                        className: "w-3.5 h-3.5 text-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Chế độ: Xem Điểm Danh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isSavedNotice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-bold flex items-center gap-2 animate-in fade-in slide-in-from-top-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-4 h-4 text-emerald-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Đã lưu thông tin điểm danh ngày ",
                    selectedDate,
                    " thành công!"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-emerald-700",
                                        children: "Có mặt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-emerald-800 mt-1",
                                        children: stats.present
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-8 h-8 text-emerald-500 opacity-80"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-50/70 border border-amber-200 rounded-2xl p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-amber-700",
                                        children: "Đi muộn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-amber-800 mt-1",
                                        children: stats.late
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-8 h-8 text-amber-500 opacity-80"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-sky-50/70 border border-sky-200 rounded-2xl p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-sky-700",
                                        children: "Nghỉ có phép"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-sky-800 mt-1",
                                        children: stats.excused
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-8 h-8 text-sky-500 opacity-80"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-rose-50/70 border border-rose-200 rounded-2xl p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-rose-700",
                                        children: "Nghỉ không phép"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-rose-800 mt-1",
                                        children: stats.unexcused
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                className: "w-8 h-8 text-rose-500 opacity-80"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-slate-100 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm",
                                children: [
                                    "Danh Sách Điểm Danh (",
                                    filteredStudents.length,
                                    " học sinh)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-48 sm:w-64",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Lọc tên học sinh...",
                                    value: searchFilter,
                                    onChange: (e)=>setSearchFilter(e.target.value),
                                    className: "w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:border-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-slate-50 text-slate-500 text-[11px] font-bold uppercase border-b border-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 w-12 text-center",
                                                children: "STT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Họ và Tên"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Trạng Thái Điểm Danh"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100 text-xs font-medium",
                                    children: filteredStudents.map((student)=>{
                                        const status = currentMap[student.id] || 'present';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50/80 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center font-bold text-slate-500",
                                                    children: student.stt
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-bold text-slate-800",
                                                    children: student.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleStatusChange(student.id, 'present'),
                                                                disabled: !canTakeAttendance,
                                                                className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${status === 'present' ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300' : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'} ${!canTakeAttendance ? 'cursor-default opacity-85' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Có mặt"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleStatusChange(student.id, 'late'),
                                                                disabled: !canTakeAttendance,
                                                                className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${status === 'late' ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300' : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700'} ${!canTakeAttendance ? 'cursor-default opacity-85' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                        lineNumber: 238,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Đi muộn"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleStatusChange(student.id, 'excused'),
                                                                disabled: !canTakeAttendance,
                                                                className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${status === 'excused' ? 'bg-sky-600 text-white shadow-sm ring-2 ring-sky-300' : 'bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-700'} ${!canTakeAttendance ? 'cursor-default opacity-85' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Có phép"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleStatusChange(student.id, 'unexcused'),
                                                                disabled: !canTakeAttendance,
                                                                className: `px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${status === 'unexcused' ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-300' : 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-700'} ${!canTakeAttendance ? 'cursor-default opacity-85' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Không phép"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, student.id, true, {
                                            fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Attendance/AttendanceManager.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AttendanceManager, "G0TLXBg9zIkrKd9Tl6TjkEu6UoE=");
_c = AttendanceManager;
var _c;
__turbopack_context__.k.register(_c, "AttendanceManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DutySchedule/DutyScheduleManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DutyScheduleManager",
    ()=>DutyScheduleManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.mjs [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.mjs [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.mjs [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const DutyScheduleManager = ({ students, dutyRecords, tasks, onUpdateDutyRecords, canEditDuty })=>{
    _s();
    const getTodayStr = ()=>new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getTodayStr());
    const [studentSearch, setStudentSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAddStudentOpen, setIsAddStudentOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Generate 14-day dates array (7 days past + Today + 6 days future)
    const fourteenDaysList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "DutyScheduleManager.useMemo[fourteenDaysList]": ()=>{
            const list = [];
            const today = new Date();
            const dayNames = [
                'Chủ Nhật',
                'Thứ Hai',
                'Thứ Ba',
                'Thứ Tư',
                'Thứ Năm',
                'Thứ Sáu',
                'Thứ Bảy'
            ];
            for(let i = -7; i <= 6; i++){
                const d = new Date(today);
                d.setDate(today.getDate() + i);
                const dateStr = d.toISOString().split('T')[0];
                const dayName = dayNames[d.getDay()];
                list.push({
                    dateStr,
                    dayName,
                    isToday: dateStr === getTodayStr()
                });
            }
            return list;
        }
    }["DutyScheduleManager.useMemo[fourteenDaysList]"], []);
    // Get or initialize record for selected date
    const currentRecord = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "DutyScheduleManager.useMemo[currentRecord]": ()=>{
            const existing = dutyRecords.find({
                "DutyScheduleManager.useMemo[currentRecord].existing": (r)=>r.date === selectedDate
            }["DutyScheduleManager.useMemo[currentRecord].existing"]);
            if (existing) return existing;
            const dateObj = new Date(selectedDate);
            const dayNames = [
                'Chủ Nhật',
                'Thứ Hai',
                'Thứ Ba',
                'Thứ Tư',
                'Thứ Năm',
                'Thứ Sáu',
                'Thứ Bảy'
            ];
            const dayOfWeek = dateObj.getDay();
            // Default Thursday (4) to 'hoc_nghe', Sunday (0) to 'nghi', others to 'hoc_chinh'
            const defaultType = dayOfWeek === 0 ? 'nghi' : dayOfWeek === 4 ? 'hoc_nghe' : 'hoc_chinh';
            return {
                date: selectedDate,
                dayName: dayNames[dayOfWeek],
                type: defaultType,
                assignedStudentIds: [],
                customNote: ''
            };
        }
    }["DutyScheduleManager.useMemo[currentRecord]"], [
        dutyRecords,
        selectedDate
    ]);
    const studentMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "DutyScheduleManager.useMemo[studentMap]": ()=>{
            const map = new Map();
            students.forEach({
                "DutyScheduleManager.useMemo[studentMap]": (s)=>map.set(s.id, s)
            }["DutyScheduleManager.useMemo[studentMap]"]);
            return map;
        }
    }["DutyScheduleManager.useMemo[studentMap]"], [
        students
    ]);
    const handleToggleDayType = ()=>{
        if (!canEditDuty) return;
        const nextType = currentRecord.type === 'hoc_chinh' ? 'hoc_nghe' : currentRecord.type === 'hoc_nghe' ? 'nghi' : 'hoc_chinh';
        const updatedRecord = {
            ...currentRecord,
            type: nextType
        };
        const updatedList = [
            ...dutyRecords.filter((r)=>r.date !== selectedDate),
            updatedRecord
        ];
        onUpdateDutyRecords(updatedList);
    };
    const handleAddStudentToDuty = (studentId)=>{
        if (!canEditDuty) return;
        if (currentRecord.assignedStudentIds.includes(studentId)) return;
        const updatedRecord = {
            ...currentRecord,
            assignedStudentIds: [
                ...currentRecord.assignedStudentIds,
                studentId
            ]
        };
        const updatedList = [
            ...dutyRecords.filter((r)=>r.date !== selectedDate),
            updatedRecord
        ];
        onUpdateDutyRecords(updatedList);
    };
    const handleRemoveStudentFromDuty = (studentId)=>{
        if (!canEditDuty) return;
        const updatedRecord = {
            ...currentRecord,
            assignedStudentIds: currentRecord.assignedStudentIds.filter((id)=>id !== studentId)
        };
        const updatedList = [
            ...dutyRecords.filter((r)=>r.date !== selectedDate),
            updatedRecord
        ];
        onUpdateDutyRecords(updatedList);
    };
    const handleNoteChange = (note)=>{
        if (!canEditDuty) return;
        const updatedRecord = {
            ...currentRecord,
            customNote: note
        };
        const updatedList = [
            ...dutyRecords.filter((r)=>r.date !== selectedDate),
            updatedRecord
        ];
        onUpdateDutyRecords(updatedList);
    };
    // Filter students available to be added
    const availableToAdd = students.filter((s)=>!currentRecord.assignedStudentIds.includes(s.id) && s.name.toLowerCase().includes(studentSearch.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-slate-800",
                                        children: "Lịch Trực Nhật 11A7 (Lưu trữ 14 ngày)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Phân công trực nhật linh hoạt bằng cách thêm học sinh theo ngày"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !canEditDuty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                className: "w-3.5 h-3.5 text-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Quyền truy cập: Chỉ Xem"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-xs uppercase tracking-wider",
                                children: "Lịch 14 ngày gần đây (Bấm chọn ngày để xem/phân công):"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md",
                                children: [
                                    "Đang chọn: ",
                                    currentRecord.dayName,
                                    " (",
                                    selectedDate,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex overflow-x-auto gap-2 pb-2 pt-1 no-scrollbar",
                        children: fourteenDaysList.map((item)=>{
                            const isSelected = item.dateStr === selectedDate;
                            const rec = dutyRecords.find((r)=>r.date === item.dateStr);
                            const count = rec ? rec.assignedStudentIds.length : 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedDate(item.dateStr),
                                className: `flex-1 min-w-[95px] p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-between ${isSelected ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-300' : item.isToday ? 'bg-amber-50 border-amber-300 text-amber-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase font-bold opacity-80",
                                        children: item.dayName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-extrabold my-0.5",
                                        children: item.dateStr.split('-').slice(1).join('/')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[9px] font-bold px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : count > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'}`,
                                        children: count > 0 ? `${count} HS` : 'Chưa xếp'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.dateStr, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-extrabold text-slate-800 text-lg",
                                                        children: [
                                                            currentRecord.dayName,
                                                            " (",
                                                            selectedDate,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    selectedDate === getTodayStr() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase",
                                                        children: "Hôm Nay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 mt-0.5",
                                                children: [
                                                    "Phân công trực nhật cho ngày ",
                                                    selectedDate
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleToggleDayType,
                                        disabled: !canEditDuty,
                                        className: `px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs ${currentRecord.type === 'hoc_chinh' ? 'bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200' : currentRecord.type === 'hoc_nghe' ? 'bg-amber-100 text-amber-800 border border-amber-300 hover:bg-amber-200' : 'bg-slate-100 text-slate-600 border border-slate-300 hover:bg-slate-200'} ${!canEditDuty ? 'opacity-80 cursor-not-allowed' : ''}`,
                                        children: currentRecord.type === 'hoc_chinh' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    className: "w-4 h-4 text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " HỌC CHÍNH ",
                                                canEditDuty && '(Đổi →)'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : currentRecord.type === 'hoc_nghe' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                                    className: "w-4 h-4 text-amber-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " HỌC NGHỀ ",
                                                canEditDuty && '(Đổi →)'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "NGHỈ ",
                                                canEditDuty && '(Đổi →)'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-slate-800 text-sm flex items-center gap-1.5",
                                                children: [
                                                    "Học sinh trực nhật trong ngày (",
                                                    currentRecord.assignedStudentIds.length,
                                                    " học sinh)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            canEditDuty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsAddStudentOpen(true),
                                                className: "px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Thêm Học Sinh Trực"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    currentRecord.assignedStudentIds.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-8 border border-dashed border-slate-300 rounded-2xl text-center bg-slate-50/50 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-slate-500",
                                                children: "Chưa có học sinh nào được phân công cho ngày này."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            canEditDuty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsAddStudentOpen(true),
                                                className: "text-xs font-bold text-teal-600 hover:underline inline-flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Bấm vào đây để chọn học sinh"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 276,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                        children: currentRecord.assignedStudentIds.map((stId)=>{
                                            const st = studentMap.get(stId);
                                            if (!st) return null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between shadow-2xs group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-7 h-7 rounded-lg bg-teal-100 text-teal-800 font-extrabold text-xs flex items-center justify-center",
                                                                children: [
                                                                    "#",
                                                                    st.stt
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-slate-800",
                                                                children: st.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    canEditDuty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleRemoveStudentFromDuty(stId),
                                                        title: "Gỡ học sinh",
                                                        className: "text-slate-400 hover:text-rose-600 p-1 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, stId, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 291,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-slate-700",
                                        children: "Ghi chú phân công ca trực:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        disabled: !canEditDuty,
                                        placeholder: "VD: Mang khẩu trang, làm sạch gầm bàn, đổ rác cuối buổi...",
                                        value: currentRecord.customNote || '',
                                        onChange: (e)=>handleNoteChange(e.target.value),
                                        className: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-teal-500 disabled:opacity-75"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                        className: "w-4 h-4 text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Nhiệm Vụ Trực Nhật Quy Định"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2.5",
                                children: tasks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-slate-50 border border-slate-200/80 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-slate-800 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-3.5 h-3.5 text-teal-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    t.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500 mt-1",
                                                children: t.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isAddStudentOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 pb-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-slate-800 text-base",
                                    children: [
                                        "Thêm Học Sinh Trực Nhật (",
                                        selectedDate,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsAddStudentOpen(false),
                                    className: "text-slate-400 hover:text-slate-600 p-1 rounded-lg",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                            lineNumber: 354,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                    lineNumber: 366,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Tìm tên học sinh...",
                                    value: studentSearch,
                                    onChange: (e)=>setStudentSearch(e.target.value),
                                    className: "w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                            lineNumber: 365,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 max-h-[300px] overflow-y-auto pr-1",
                            children: availableToAdd.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 text-center text-slate-400 text-xs font-medium",
                                children: "Tất cả học sinh tìm kiếm đã được thêm vào trực nhật."
                            }, void 0, false, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 379,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : availableToAdd.map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>handleAddStudentToDuty(st.id),
                                    className: "p-2.5 bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl cursor-pointer transition-all flex items-center justify-between group shadow-2xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-5 h-5 rounded-md bg-teal-100 text-teal-800 font-bold text-[10px] flex items-center justify-center",
                                                    children: st.stt
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold text-slate-700 group-hover:text-teal-800",
                                                    children: st.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                            lineNumber: 389,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-bold text-teal-600 group-hover:underline",
                                            children: "+ Thêm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                            lineNumber: 397,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, st.id, true, {
                                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                    lineNumber: 384,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                            lineNumber: 377,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 pt-3 border-t border-slate-100 text-right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsAddStudentOpen(false),
                                className: "px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all",
                                children: "Đóng"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                                lineNumber: 406,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                    lineNumber: 353,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
                lineNumber: 352,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DutySchedule/DutyScheduleManager.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DutyScheduleManager, "44dO4JBjWPCbB5IAQkuC6DcMp4M=");
_c = DutyScheduleManager;
var _c;
__turbopack_context__.k.register(_c, "DutyScheduleManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Emulation/EmulationManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmulationManager",
    ()=>EmulationManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.mjs [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2d$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw-clock.mjs [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const EmulationManager = ({ students, rules, logs, onAddLog, onDeleteLog })=>{
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedStudentId, setSelectedStudentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedRuleId, setSelectedRuleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customPoints, setCustomPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [customTitle, setCustomTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [logNote, setLogNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [viewHistoryStudent, setViewHistoryStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Compute student totals
    const studentScores = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "EmulationManager.useMemo[studentScores]": ()=>{
            const BASE_SCORE = 100;
            const scores = new Map();
            students.forEach({
                "EmulationManager.useMemo[studentScores]": (s)=>{
                    scores.set(s.id, {
                        total: BASE_SCORE,
                        merits: 0,
                        demerits: 0
                    });
                }
            }["EmulationManager.useMemo[studentScores]"]);
            logs.forEach({
                "EmulationManager.useMemo[studentScores]": (log)=>{
                    const current = scores.get(log.studentId);
                    if (current) {
                        current.total += log.points;
                        if (log.points > 0) current.merits += log.points;
                        else current.demerits += Math.abs(log.points);
                    }
                }
            }["EmulationManager.useMemo[studentScores]"]);
            return scores;
        }
    }["EmulationManager.useMemo[studentScores]"], [
        students,
        logs
    ]);
    // Ranked students list
    const rankedStudents = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "EmulationManager.useMemo[rankedStudents]": ()=>{
            return [
                ...students
            ].map({
                "EmulationManager.useMemo[rankedStudents]": (st)=>({
                        student: st,
                        scoreInfo: studentScores.get(st.id) || {
                            total: 100,
                            merits: 0,
                            demerits: 0
                        }
                    })
            }["EmulationManager.useMemo[rankedStudents]"]).sort({
                "EmulationManager.useMemo[rankedStudents]": (a, b)=>b.scoreInfo.total - a.scoreInfo.total
            }["EmulationManager.useMemo[rankedStudents]"]);
        }
    }["EmulationManager.useMemo[rankedStudents]"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-slate-800",
                                        children: "Điểm Thi Đua Lớp 11A7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full md:w-64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsAddModalOpen(true),
                                className: "px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-slate-100 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-slate-50 text-slate-500 text-[11px] font-bold uppercase border-b border-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 w-16 text-center",
                                                children: "Hạng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4",
                                                children: "Họ và Tên"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Tổng Điểm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Điểm Cộng (+)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Điểm Trừ (-)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center",
                                                children: "Đánh Giá Nề Nếp"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100 text-xs font-medium",
                                    children: filteredRanked.map((item, idx)=>{
                                        const badge = getConductBadge(item.scoreInfo.total);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50/80 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center font-bold",
                                                    children: idx === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-amber-400 text-amber-950 font-extrabold text-xs inline-flex items-center justify-center shadow-xs",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : idx === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-slate-300 text-slate-800 font-extrabold text-xs inline-flex items-center justify-center shadow-xs",
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : idx === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-6 h-6 rounded-full bg-amber-700 text-amber-100 font-extrabold text-xs inline-flex items-center justify-center shadow-xs",
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 font-bold text-slate-800",
                                                    children: item.student.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setViewHistoryStudent(item.student),
                                                        className: "px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[11px] font-semibold transition-all inline-flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2d$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
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
            isAddModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 pb-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-slate-800 text-base",
                                    children: "Ghi Nhận Điểm Thi Đua"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsAddModalOpen(false),
                                    className: "text-slate-400 hover:text-slate-600 p-1 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleAddSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 mb-1",
                                            children: "Chọn Học Sinh:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            required: true,
                                            value: selectedStudentId,
                                            onChange: (e)=>setSelectedStudentId(e.target.value),
                                            className: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "-- Chọn học sinh 11A7 --"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                students.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 mb-1",
                                            children: "Chọn Quy Định (File Lỗi.docx):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedRuleId,
                                            onChange: (e)=>handleRuleSelect(e.target.value),
                                            className: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "-- Tùy chỉnh trực tiếp --"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                rules.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-slate-700 mb-1",
                                                    children: "Tên vi phạm / khen thưởng:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-slate-700 mb-1",
                                                    children: "Số điểm (+/-):"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-slate-700 mb-1",
                                            children: "Ghi chú chi tiết (nếu có):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 flex space-x-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            viewHistoryStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 pb-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewHistoryStudent(null),
                                    className: "text-slate-400 hover:text-slate-600 p-1 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 max-h-[350px] overflow-y-auto pr-1",
                            children: logs.filter((l)=>l.studentId === viewHistoryStudent.id).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 text-center text-slate-400 text-xs font-medium",
                                children: "Chưa có lượt cộng/trừ điểm nào cho học sinh này."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                lineNumber: 339,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : logs.filter((l)=>l.studentId === viewHistoryStudent.id).map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-xl border border-slate-200 bg-slate-50/60 flex items-center justify-between text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-slate-800",
                                                    children: log.ruleTitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Emulation/EmulationManager.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onDeleteLog(log.id),
                                                    className: "text-slate-400 hover:text-red-600",
                                                    title: "Xóa lượt này",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
_s(EmulationManager, "3zNg6vMy5pnYJ2ZHMfeXFtK9/uI=");
_c = EmulationManager;
var _c;
__turbopack_context__.k.register(_c, "EmulationManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.mjs [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.mjs [app-client] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.mjs [app-client] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.mjs [app-client] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$accounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/accounts.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Navbar = ({ activeTab, setActiveTab, currentUser, onOpenLogin, onLogout, totalStudents })=>{
    const tabs = [
        {
            id: 'seating',
            label: 'Sơ Đồ Chỗ Ngồi',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"],
            external: false
        },
        {
            id: 'attendance',
            label: 'Điểm Danh',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"],
            external: false
        },
        {
            id: 'emulation',
            label: 'Điểm Thi Đua',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
            external: true,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$accounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMULATION_SHEET_URL"]
        },
        {
            id: 'rules',
            label: 'Tra Cứu Lỗi',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"],
            external: false
        },
        {
            id: 'duty',
            label: 'Lịch Trực Nhật',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            external: false
        }
    ];
    const getRoleBadgeClass = (role)=>{
        switch(role){
            case 'GVCN':
                return 'bg-purple-100 text-purple-800 border-purple-300';
            case 'LỚP TRƯỞNG':
                return 'bg-blue-100 text-blue-800 border-blue-300';
            case 'LỚP PHÓ HỌC TẬP':
                return 'bg-emerald-100 text-emerald-800 border-emerald-300';
            case 'LỚP PHÓ LAO ĐỘNG':
                return 'bg-amber-100 text-amber-800 border-amber-300';
            case 'LỚP PHÓ KỈ LUẬT':
                return 'bg-sky-100 text-sky-800 border-sky-300';
            default:
                return 'bg-slate-100 text-slate-700 border-slate-300';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md",
                                    children: "11A7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-bold text-slate-800 leading-tight",
                                            children: "QUẢN LÝ LỚP 11A7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-3.5 h-3.5 text-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Sĩ số: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-slate-700",
                                                    children: totalStudents
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 72
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " học sinh"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex space-x-1",
                            children: tabs.map((tab)=>{
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                if (tab.external) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: tab.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-amber-700 hover:bg-amber-50 transition-all border border-transparent hover:border-amber-200",
                                        title: "Mở Google Sheet theo dõi điểm thi đua lớp 11A7",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-4 h-4 text-amber-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: tab.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 86,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "w-3.5 h-3.5 text-amber-500 ml-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 87,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, tab.id, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab.id),
                                    className: `flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-blue-50 text-blue-600 font-semibold shadow-sm border border-blue-200/60' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: `w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: tab.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, tab.id, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-slate-800 leading-tight",
                                                children: currentUser.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] font-extrabold px-1.5 py-0.2 rounded border ${getRoleBadgeClass(currentUser.role)}`,
                                                children: currentUser.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onLogout,
                                        title: "Đăng xuất",
                                        className: "p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onOpenLogin,
                                className: "px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Đăng Nhập"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden flex overflow-x-auto py-2 space-x-1 border-t border-slate-100 no-scrollbar",
                    children: tabs.map((tab)=>{
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        if (tab.external) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: tab.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-800 whitespace-nowrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            tab.label,
                                            " 🔗"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 155,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 147,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab.id),
                            className: `flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 168,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: tab.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 161,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RuleLookup/RuleLookup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RuleLookup",
    ()=>RuleLookup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$docxParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/docxParser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.mjs [app-client] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const RuleLookup = ({ rules, onUpdateRules, canUploadRules })=>{
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadMessage, setUploadMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
        if (!canUploadRules) return;
        const file = e.target.files?.[0];
        if (!file) return;
        setIsUploading(true);
        setUploadMessage(null);
        try {
            const parsedRules = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$docxParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDocxRules"])(file);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-slate-800",
                                        children: "Tra Cứu Lỗi & Quy Định 11A7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Tra cứu nhanh khung điểm trừ, điểm cộng nề nếp từ file `lỗi.docx`"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    canUploadRules ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer transition-all flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isUploading ? 'Đang đọc docx...' : 'Tải lên File lỗi.docx mới'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: ".docx",
                                    onChange: handleFileUpload,
                                    className: "hidden",
                                    disabled: isUploading
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                className: "w-3.5 h-3.5 text-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Chế độ: Tra Cứu"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            uploadMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-purple-50 border border-purple-200 text-purple-800 p-3 rounded-xl text-xs font-bold flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-4 h-4 text-purple-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    uploadMessage
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full sm:w-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Nhập tên lỗi hoặc điểm (VD: đi muộn, -50)...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-purple-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex overflow-x-auto w-full sm:w-auto space-x-1.5 pb-1 sm:pb-0",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedCategory(cat),
                                className: `px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-purple-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`,
                                children: cat === 'all' ? 'Tất Cả Danh Mục' : cat
                            }, cat, false, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: filteredRules.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-full bg-white rounded-2xl p-8 border border-slate-200 text-center text-slate-400 text-xs font-medium",
                    children: "Không tìm thấy quy định phù hợp với từ khóa tra cứu."
                }, void 0, false, {
                    fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : filteredRules.map((rule)=>{
                    const isMerit = rule.points > 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-white rounded-2xl p-4 border shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${isMerit ? 'border-emerald-200 hover:border-emerald-300' : 'border-rose-200 hover:border-rose-300'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 uppercase tracking-wider",
                                                children: rule.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                                lineNumber: 148,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-extrabold px-2.5 py-1 rounded-lg ${isMerit ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'}`,
                                                children: [
                                                    isMerit ? `+${rule.points}` : rule.points,
                                                    " đ/",
                                                    rule.unit
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 147,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-slate-800 text-sm leading-snug",
                                        children: rule.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 146,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            isMerit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                className: "w-3.5 h-3.5 text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                                lineNumber: 169,
                                                columnNumber: 32
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                className: "w-3.5 h-3.5 text-rose-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                                lineNumber: 169,
                                                columnNumber: 85
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isMerit ? 'Khung Điểm Cộng' : 'Khung Điểm Trừ'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 168,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-slate-500",
                                        children: "Quy định lớp 11A7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                        lineNumber: 172,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                                lineNumber: 167,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, rule.id, true, {
                        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                        lineNumber: 140,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RuleLookup/RuleLookup.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RuleLookup, "8xJU4rTlZx2yVzSyqIgIN3B6idw=");
_c = RuleLookup;
var _c;
__turbopack_context__.k.register(_c, "RuleLookup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SeatingChart/DeskConfigModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeskConfigModal",
    ()=>DeskConfigModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.mjs [app-client] (ecmascript) <export default as LayoutGrid>");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 my-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-slate-100 pb-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 text-blue-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-50 border border-blue-200/80 rounded-xl p-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-xs font-bold uppercase tracking-wider text-blue-700 mb-2",
                            children: "Đổi nhanh số chỗ ngồi toàn bộ lớp:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSetGlobalCapacity(3),
                                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-sm transition-all flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSetGlobalCapacity(2),
                                    className: "px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-all",
                                    children: "Bàn 2 chỗ"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 max-h-[50vh] overflow-y-auto pr-2",
                    children: layout.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-slate-200 rounded-xl p-4 bg-slate-50/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-slate-800 text-sm",
                                            children: col.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleAddDesk(col.id),
                                            className: "px-3 py-1 bg-white border border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-300 text-xs font-semibold rounded-lg flex items-center gap-1 shadow-xs transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: col.desks.map((desk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white border border-slate-200 rounded-lg p-3 shadow-2xs flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold text-slate-700",
                                                            children: desk.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center border border-slate-200 rounded-lg overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleCapacityChange(col.id, desk.id, desk.capacity - 1),
                                                                    className: "px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold",
                                                                    children: "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 text-xs font-bold text-slate-800",
                                                                    children: desk.capacity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SeatingChart/DeskConfigModal.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleRemoveDesk(col.id, desk.id),
                                                            className: "text-slate-400 hover:text-red-600 p-1",
                                                            title: "Xóa bàn này",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 border-t border-slate-100 pt-4 flex justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
_c = DeskConfigModal;
var _c;
__turbopack_context__.k.register(_c, "DeskConfigModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SeatingChart/LuckyWheelModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LuckyWheelModal",
    ()=>LuckyWheelModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dices.mjs [app-client] (ecmascript) <export default as Dices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const LuckyWheelModal = ({ isOpen, onClose, students })=>{
    _s();
    const [isSpinning, setIsSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedStudent, setSelectedStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    particleCount: 100,
                    spread: 70,
                    origin: {
                        y: 0.6
                    }
                });
            }
        }, 100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-slate-100 pb-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 text-indigo-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-5 h-5 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-36 h-36 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1.5 shadow-xl flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full bg-white rounded-full flex flex-col items-center justify-center p-3 text-center",
                                children: selectedStudent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                            className: "w-8 h-8 text-amber-500 mb-1 animate-bounce"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__["Dices"], {
                                            className: "w-10 h-10 text-indigo-400 mb-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        selectedStudent && !isSpinning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-800 text-sm font-semibold animate-pulse",
                            children: [
                                "🎉 Chúc mừng ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSpin,
                        disabled: isSpinning || students.length === 0,
                        className: `flex-1 py-3 px-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${isSpinning ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 active:scale-98 shadow-indigo-200'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__["Dices"], {
                                className: `w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/LuckyWheelModal.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(LuckyWheelModal, "abzwplCxhn9oQgMbdYxQlRggUcQ=");
_c = LuckyWheelModal;
var _c;
__turbopack_context__.k.register(_c, "LuckyWheelModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SeatingChart/SeatingChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeatingChart",
    ()=>SeatingChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$DeskConfigModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SeatingChart/DeskConfigModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$LuckyWheelModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SeatingChart/LuckyWheelModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.mjs [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.mjs [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const SeatingChart = ({ students, layout, onUpdateLayout, canEditSeating })=>{
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isConfigOpen, setIsConfigOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWheelOpen, setIsWheelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draggedStudentId, setDraggedStudentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Helper map student ID -> Student object
    const studentMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "SeatingChart.useMemo[studentMap]": ()=>{
            const map = new Map();
            students.forEach({
                "SeatingChart.useMemo[studentMap]": (s)=>map.set(s.id, s)
            }["SeatingChart.useMemo[studentMap]"]);
            return map;
        }
    }["SeatingChart.useMemo[studentMap]"], [
        students
    ]);
    // Assigned student IDs
    const assignedStudentIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "SeatingChart.useMemo[assignedStudentIds]": ()=>{
            const set = new Set();
            layout.forEach({
                "SeatingChart.useMemo[assignedStudentIds]": (col)=>{
                    col.desks.forEach({
                        "SeatingChart.useMemo[assignedStudentIds]": (desk)=>{
                            desk.seats.forEach({
                                "SeatingChart.useMemo[assignedStudentIds]": (seat)=>{
                                    if (seat.studentId) set.add(seat.studentId);
                                }
                            }["SeatingChart.useMemo[assignedStudentIds]"]);
                        }
                    }["SeatingChart.useMemo[assignedStudentIds]"]);
                }
            }["SeatingChart.useMemo[assignedStudentIds]"]);
            return set;
        }
    }["SeatingChart.useMemo[assignedStudentIds]"], [
        layout
    ]);
    // Unassigned students list
    const unassignedStudents = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "SeatingChart.useMemo[unassignedStudents]": ()=>{
            return students.filter({
                "SeatingChart.useMemo[unassignedStudents]": (s)=>!assignedStudentIds.has(s.id)
            }["SeatingChart.useMemo[unassignedStudents]"]);
        }
    }["SeatingChart.useMemo[unassignedStudents]"], [
        students,
        assignedStudentIds
    ]);
    // Drag handlers
    const handleDragStart = (e, studentId)=>{
        if (!canEditSeating) return;
        e.dataTransfer.setData('text/plain', studentId);
        setDraggedStudentId(studentId);
    };
    const handleDragOver = (e)=>{
        if (!canEditSeating) return;
        e.preventDefault();
    };
    const handleDropSeat = (colId, deskId, seatIndex, e)=>{
        if (!canEditSeating) return;
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
                targetDesk.seats[seatIndex].studentId = studentId;
            }
        }
        onUpdateLayout(newLayout);
        setDraggedStudentId(null);
    };
    const handleUnassignSeat = (colId, deskId, seatIndex)=>{
        if (!canEditSeating) return;
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
        if (!canEditSeating) return;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full md:w-72",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Tìm tên học sinh trên sơ đồ...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 font-semibold rounded-lg border border-emerald-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Đã xếp: ",
                                    assignedStudentIds.size,
                                    "/",
                                    students.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            unassignedStudents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 font-semibold rounded-lg border border-amber-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Chưa xếp: ",
                                    unassignedStudents.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2 w-full md:w-auto justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsWheelOpen(true),
                                className: "px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Vòng Quay May Mắn"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            canEditSeating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsConfigOpen(true),
                                className: "px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 transition-all flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "w-4 h-4 text-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Tùy Chỉnh Bàn 3 Chỗ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-400 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                        className: "w-3.5 h-3.5 text-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Quyền: Chỉ Xem Sơ Đồ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 bg-slate-100/70 p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800 text-white text-center py-3 px-6 rounded-xl shadow-md font-bold tracking-widest text-sm uppercase flex items-center justify-center gap-3 border-b-4 border-slate-900",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "BẢNG ĐEN / BÀN GIÁO VIÊN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-5 items-start",
                                children: layout.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/80 backdrop-blur-xs rounded-xl p-3.5 border border-slate-200 shadow-2xs space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-200/70 text-slate-700 font-extrabold text-xs text-center py-1.5 rounded-lg tracking-wide uppercase",
                                                children: col.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: col.desks.map((desk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 border border-slate-200 rounded-xl p-2.5 space-y-1.5 shadow-2xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between text-[11px] font-semibold text-slate-500 px-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: desk.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-mono",
                                                                        children: [
                                                                            desk.capacity,
                                                                            " chỗ"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `grid gap-1.5 ${desk.capacity === 3 ? 'grid-cols-3' : desk.capacity === 4 ? 'grid-cols-4' : 'grid-cols-2'}`,
                                                                children: desk.seats.map((seat, seatIdx)=>{
                                                                    const student = seat.studentId ? studentMap.get(seat.studentId) : null;
                                                                    const isHighlighted = searchTerm.trim() !== '' && student && student.name.toLowerCase().includes(searchTerm.toLowerCase());
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onDragOver: handleDragOver,
                                                                        onDrop: (e)=>handleDropSeat(col.id, desk.id, seatIdx, e),
                                                                        className: `min-h-[56px] p-1.5 rounded-lg border-2 border-dashed transition-all flex flex-col items-center justify-center text-center relative group ${student ? isHighlighted ? 'bg-amber-100 border-amber-500 text-amber-900 shadow-md ring-2 ring-amber-400' : 'bg-white border-blue-200 text-slate-800 shadow-2xs' : 'bg-slate-100/50 border-slate-300 text-slate-400'}`,
                                                                        children: student ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            draggable: canEditSeating,
                                                                            onDragStart: (e)=>handleDragStart(e, student.id),
                                                                            className: `w-full h-full flex flex-col items-center justify-center ${canEditSeating ? 'cursor-grab active:cursor-grabbing' : ''}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[9px] font-bold text-blue-600 bg-blue-50 px-1 rounded",
                                                                                    children: [
                                                                                        "#",
                                                                                        student.stt
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                                    lineNumber: 247,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[11px] font-bold leading-tight line-clamp-2 px-0.5 mt-0.5",
                                                                                    children: student.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                                    lineNumber: 250,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                canEditSeating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleUnassignSeat(col.id, desk.id, seatIdx),
                                                                                    title: "Gỡ khỏi bàn",
                                                                                    className: "absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-sm",
                                                                                    children: "×"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                                    lineNumber: 256,
                                                                                    columnNumber: 37
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                            lineNumber: 242,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-400 font-medium",
                                                                            children: "Chỗ trống"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                            lineNumber: 266,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, seatIdx, false, {
                                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0));
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, desk.id, true, {
                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, col.id, true, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-slate-100 pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-slate-800 text-sm flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-4 h-4 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Danh Sách Chờ Xếp Chỗ (",
                                        unassignedStudents.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-500 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                        className: "w-3.5 h-3.5 text-blue-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    canEditSeating ? 'Kéo thả tên học sinh vào vị trí ghế trống trên sơ đồ.' : 'Xem danh sách các học sinh chưa phân chỗ.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 max-h-[550px] overflow-y-auto pr-1",
                                children: unassignedStudents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center text-emerald-800 text-xs font-semibold",
                                    children: "🎉 Tất cả học sinh 11A7 đã được xếp chỗ ngồi!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : unassignedStudents.map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        draggable: canEditSeating,
                                        onDragStart: (e)=>handleDragStart(e, st.id),
                                        className: `bg-slate-50 border border-slate-200 rounded-xl p-2.5 transition-all flex items-center justify-between shadow-2xs ${canEditSeating ? 'hover:bg-blue-50 hover:border-blue-300 cursor-grab active:cursor-grabbing' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-5 h-5 rounded-md bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center",
                                                        children: st.stt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-slate-700",
                                                        children: st.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            canEditSeating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-400 font-medium",
                                                children: "Kéo thả →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                                lineNumber: 316,
                                                columnNumber: 38
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, st.id, true, {
                                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            canEditSeating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$DeskConfigModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeskConfigModal"], {
                isOpen: isConfigOpen,
                onClose: ()=>setIsConfigOpen(false),
                layout: layout,
                onUpdateLayout: onUpdateLayout,
                onSetGlobalCapacity: handleSetGlobalCapacity
            }, void 0, false, {
                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                lineNumber: 326,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeatingChart$2f$LuckyWheelModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuckyWheelModal"], {
                isOpen: isWheelOpen,
                onClose: ()=>setIsWheelOpen(false),
                students: students
            }, void 0, false, {
                fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SeatingChart/SeatingChart.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SeatingChart, "/vHoPD2pACgnZlqIsDoYXAMTpHo=");
_c = SeatingChart;
var _c;
__turbopack_context__.k.register(_c, "SeatingChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/accounts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLASS_ACCOUNTS",
    ()=>CLASS_ACCOUNTS,
    "EMULATION_SHEET_URL",
    ()=>EMULATION_SHEET_URL,
    "getRolePermissions",
    ()=>getRolePermissions
]);
const CLASS_ACCOUNTS = [
    {
        stt: 0,
        name: 'Tạ Thị Vân',
        role: 'GVCN',
        username: 'van.tt',
        password: 'gvcn@2026#Van'
    },
    {
        stt: 1,
        name: 'Phạm Trường An',
        role: 'HỌC SINH',
        username: 'an.pt',
        password: 'An@2026#01'
    },
    {
        stt: 2,
        name: 'Chu Bùi An',
        role: 'HỌC SINH',
        username: 'an.cb',
        password: 'An@2026#02'
    },
    {
        stt: 3,
        name: 'Lê Tuấn Anh',
        role: 'HỌC SINH',
        username: 'anh.lt',
        password: 'Anh@2026#03'
    },
    {
        stt: 4,
        name: 'Đinh Mạnh Đạt',
        role: 'HỌC SINH',
        username: 'dat.dm',
        password: 'Dat@2026#04'
    },
    {
        stt: 5,
        name: 'Bùi Anh Đức',
        role: 'HỌC SINH',
        username: 'duc.ba',
        password: 'Duc@2026#05'
    },
    {
        stt: 6,
        name: 'Nguyễn Ánh Dương',
        role: 'HỌC SINH',
        username: 'duong.na',
        password: 'Duong@2026#06'
    },
    {
        stt: 7,
        name: 'Lục Đinh Đức Duy',
        role: 'HỌC SINH',
        username: 'duy.ldd',
        password: 'Duy@2026#07'
    },
    {
        stt: 8,
        name: 'Nguyễn Trung Hải',
        role: 'HỌC SINH',
        username: 'hai.nt',
        password: 'Hai@2026#08'
    },
    {
        stt: 9,
        name: 'Nguyễn Mạnh Hùng',
        role: 'HỌC SINH',
        username: 'hung.nm',
        password: 'Hung@2026#09'
    },
    {
        stt: 10,
        name: 'Lê Khánh Hưng',
        role: 'HỌC SINH',
        username: 'hung.lk',
        password: 'Hung@2026#10'
    },
    {
        stt: 11,
        name: 'Đỗ Đức Huy',
        role: 'HỌC SINH',
        username: 'huy.dd',
        password: 'Huy@2026#11'
    },
    {
        stt: 12,
        name: 'Nguyễn Quang Huy',
        role: 'HỌC SINH',
        username: 'huy.nq',
        password: 'Huy@2026#12'
    },
    {
        stt: 13,
        name: 'Nguyễn Trung Kiên',
        role: 'HỌC SINH',
        username: 'kien.nt',
        password: 'Kien@2026#13'
    },
    {
        stt: 14,
        name: 'Vi Thanh Lộc',
        role: 'HỌC SINH',
        username: 'loc.vt',
        password: 'Loc@2026#14'
    },
    {
        stt: 15,
        name: 'Trần Đức Long',
        role: 'HỌC SINH',
        username: 'long.td',
        password: 'Long@2026#15'
    },
    {
        stt: 16,
        name: 'Vũ Minh Lượng',
        role: 'HỌC SINH',
        username: 'luong.vm',
        password: 'Luong@2026#16'
    },
    {
        stt: 17,
        name: 'Vũ Hải Nam',
        role: 'HỌC SINH',
        username: 'nam.vh',
        password: 'Nam@2026#17'
    },
    {
        stt: 18,
        name: 'Đặng Hào Nam',
        role: 'HỌC SINH',
        username: 'nam.dh',
        password: 'Nam@2026#18'
    },
    {
        stt: 19,
        name: 'Vũ Bích Ngọc',
        role: 'HỌC SINH',
        username: 'ngoc.vb',
        password: 'Ngoc@2026#19'
    },
    {
        stt: 20,
        name: 'Trần Minh Nguyệt',
        role: 'HỌC SINH',
        username: 'nguyet.tm',
        password: 'Nguyet@2026#20'
    },
    {
        stt: 21,
        name: 'Phạm Gia Phong',
        role: 'HỌC SINH',
        username: 'phong.pg',
        password: 'Phong@2026#21'
    },
    {
        stt: 22,
        name: 'Vũ Đan Phong',
        role: 'HỌC SINH',
        username: 'phong.vd',
        password: 'Phong@2026#22'
    },
    {
        stt: 23,
        name: 'Nguyễn Tiến Sơn',
        role: 'HỌC SINH',
        username: 'son.nt',
        password: 'Son@2026#23'
    },
    {
        stt: 24,
        name: 'Dương Mạnh Tâm',
        role: 'HỌC SINH',
        username: 'tam.dm',
        password: 'Tam@2026#24'
    },
    {
        stt: 25,
        name: 'Đinh Quyết Tiến',
        role: 'HỌC SINH',
        username: 'tien.dq',
        password: 'Tien@2026#25'
    },
    {
        stt: 26,
        name: 'Phạm Thùy Trang',
        role: 'HỌC SINH',
        username: 'trang.pt',
        password: 'Trang@2026#26'
    },
    {
        stt: 27,
        name: 'Trần Thành Trung',
        role: 'HỌC SINH',
        username: 'trung.tt',
        password: 'Trung@2026#27'
    },
    {
        stt: 28,
        name: 'Nguyễn Minh Tuệ',
        role: 'HỌC SINH',
        username: 'tue.nm',
        password: 'Tue@2026#28'
    },
    {
        stt: 29,
        name: 'Nguyễn Văn Tuyên',
        role: 'HỌC SINH',
        username: 'tuyen.nv',
        password: 'Tuyen@2026#29'
    },
    {
        stt: 30,
        name: 'Đoàn Ánh Vi',
        role: 'LỚP TRƯỞNG',
        username: 'vi.da',
        password: 'Vi@2026#30'
    },
    {
        stt: 31,
        name: 'Bùi Thế Vinh',
        role: 'HỌC SINH',
        username: 'vinh.bt',
        password: 'Vinh@2026#31'
    },
    {
        stt: 32,
        name: 'Lý Triệu Vũ',
        role: 'LỚP PHÓ LAO ĐỘNG',
        username: 'vu.lt',
        password: 'Vu@2026#32'
    },
    {
        stt: 33,
        name: 'Vũ Phạm Hà Châu',
        role: 'HỌC SINH',
        username: 'chau.vph',
        password: 'Chau@2026#33'
    },
    {
        stt: 34,
        name: 'Phạm Hoàng Linh',
        role: 'LỚP PHÓ KỈ LUẬT',
        username: 'linh.ph',
        password: 'Linh@2026#34'
    },
    {
        stt: 35,
        name: 'Vũ Trà My',
        role: 'HỌC SINH',
        username: 'my.vt',
        password: 'My@2026#35'
    },
    {
        stt: 36,
        name: 'Phạm Quang Minh',
        role: 'LỚP PHÓ HỌC TẬP',
        username: 'minh.pq',
        password: 'Minh@2026#36'
    },
    {
        stt: 37,
        name: 'Đinh Thanh Trà',
        role: 'HỌC SINH',
        username: 'tra.dt',
        password: 'tra@2026#37'
    },
    {
        stt: 38,
        name: 'Bao Nam',
        role: 'HỌC SINH',
        username: 'nam.b',
        password: 'NAM@2026#38'
    }
];
const EMULATION_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1IHfludq-G0NRLq4g8VDfYBQpODmBcz5c/edit?usp=sharing&ouid=116788871998135363079&rtpof=true&sd=true';
function getRolePermissions(role) {
    if (!role) {
        // Default guest mode: read only
        return {
            canFullControl: false,
            canTakeAttendance: false,
            canEditDuty: false,
            canEditSeating: false,
            canUploadRules: false
        };
    }
    switch(role){
        case 'GVCN':
        case 'LỚP PHÓ HỌC TẬP':
            return {
                canFullControl: true,
                canTakeAttendance: true,
                canEditDuty: true,
                canEditSeating: true,
                canUploadRules: true
            };
        case 'LỚP TRƯỞNG':
            return {
                canFullControl: false,
                canTakeAttendance: true,
                canEditDuty: false,
                canEditSeating: false,
                canUploadRules: false
            };
        case 'LỚP PHÓ LAO ĐỘNG':
            return {
                canFullControl: false,
                canTakeAttendance: false,
                canEditDuty: true,
                canEditSeating: false,
                canUploadRules: false
            };
        case 'LỚP PHÓ KỈ LUẬT':
        case 'HỌC SINH':
        default:
            return {
                canFullControl: false,
                canTakeAttendance: false,
                canEditDuty: false,
                canEditSeating: false,
                canUploadRules: false
            };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/initialData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/docxParser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDocxRules",
    ()=>parseDocxRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mammoth/lib/index.js [app-client] (ecmascript)");
;
async function parseDocxRules(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extractRawText({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadAttendance",
    ()=>loadAttendance,
    "loadAuthUser",
    ()=>loadAuthUser,
    "loadDutyRecords",
    ()=>loadDutyRecords,
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
    "saveAuthUser",
    ()=>saveAuthUser,
    "saveDutyRecords",
    ()=>saveDutyRecords,
    "saveEmulationLogs",
    ()=>saveEmulationLogs,
    "saveRules",
    ()=>saveRules,
    "saveSeating",
    ()=>saveSeating,
    "saveStudents",
    ()=>saveStudents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/initialData.ts [app-client] (ecmascript)");
;
const STORAGE_KEYS = {
    STUDENTS: '11a7_students',
    RULES: '11a7_rules',
    SEATING: '11a7_seating',
    ATTENDANCE: '11a7_attendance',
    EMULATION_LOGS: '11a7_emulation_logs',
    DUTY_RECORDS: '11a7_duty_records',
    AUTH_USER: '11a7_auth_user'
};
const loadStudents = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const data = localStorage.getItem(STORAGE_KEYS.STUDENTS);
        return data ? JSON.parse(data) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_STUDENTS"];
    } catch (e) {
        console.error('Error loading students', e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_STUDENTS"];
    }
};
const saveStudents = (students)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
};
const loadRules = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const data = localStorage.getItem(STORAGE_KEYS.RULES);
        return data ? JSON.parse(data) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_RULES"];
    } catch (e) {
        console.error('Error loading rules', e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_RULES"];
    }
};
const saveRules = (rules)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEYS.RULES, JSON.stringify(rules));
};
const loadSeating = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const data = localStorage.getItem(STORAGE_KEYS.SEATING);
        return data ? JSON.parse(data) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_SEATING_LAYOUT"];
    } catch (e) {
        console.error('Error loading seating layout', e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_SEATING_LAYOUT"];
    }
};
const saveSeating = (seating)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEYS.SEATING, JSON.stringify(seating));
};
const loadAttendance = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const data = localStorage.getItem(STORAGE_KEYS.ATTENDANCE);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error('Error loading attendance', e);
        return [];
    }
};
const saveAttendance = (attendance)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(attendance));
};
const loadEmulationLogs = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const data = localStorage.getItem(STORAGE_KEYS.EMULATION_LOGS);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error('Error loading emulation logs', e);
        return [];
    }
};
const saveEmulationLogs = (logs)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEYS.EMULATION_LOGS, JSON.stringify(logs));
};
const loadDutyRecords = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const data = localStorage.getItem(STORAGE_KEYS.DUTY_RECORDS);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error('Error loading duty records', e);
        return [];
    }
};
const saveDutyRecords = (records)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Retain records for last 14 days
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 14);
    const cutoffStr = cutoffDate.toISOString().split('T')[0];
    const recentRecords = records.filter((r)=>r.date >= cutoffStr);
    localStorage.setItem(STORAGE_KEYS.DUTY_RECORDS, JSON.stringify(recentRecords));
};
const loadAuthUser = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const data = localStorage.getItem(STORAGE_KEYS.AUTH_USER);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        return null;
    }
};
const saveAuthUser = (user)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (user) {
        localStorage.setItem(STORAGE_KEYS.AUTH_USER, JSON.stringify(user));
    } else {
        localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
    }
};
const resetAllData = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(STORAGE_KEYS.STUDENTS);
    localStorage.removeItem(STORAGE_KEYS.RULES);
    localStorage.removeItem(STORAGE_KEYS.SEATING);
    localStorage.removeItem(STORAGE_KEYS.ATTENDANCE);
    localStorage.removeItem(STORAGE_KEYS.EMULATION_LOGS);
    localStorage.removeItem(STORAGE_KEYS.DUTY_RECORDS);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_05cbdr0._.js.map