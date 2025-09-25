import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainGatePage from "./MainGatePage";
import GatePage from "./GatePage";
import TeacherGatePage from "./TeacherGatePage";
import AgricultureCalculator from "./AgricultureCalculator";
import SemiconductorCalculator from "./SemiconductorCalculator";
import SoftwareCalculator from "./SoftwareCalculator";
import IlCalculator from "./IlCalculator";
import TeacherAgricultureCalculator from "./TeacherAgricultureCalculator";
import TeacherSemiconductorCalculator from "./TeacherSemiconductorCalculator";
import TeacherSoftwareCalculator from "./TeacherSoftwareCalculator";
import TeacherIlCalculator from "./TeacherIlCalculator";

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<MainGatePage />} />
        
        {/* 학생용 게이트 페이지 */}
        <Route path="/student" element={<GatePage />} />
        
        {/* 선생님용 게이트 페이지 */}
        <Route path="/teacher" element={<TeacherGatePage />} />
        
        {/* 학생용 계산기들 */}
        <Route path="/student/agriculture" element={<AgricultureCalculator />} />
        <Route path="/student/semiconductor" element={<SemiconductorCalculator />} />
        <Route path="/student/software" element={<SoftwareCalculator />} />
        <Route path="/student/il" element={<IlCalculator />} />
        
        {/* 선생님용 계산기들 */}
        <Route path="/teacher/agriculture" element={<TeacherAgricultureCalculator />} />
        <Route path="/teacher/semiconductor" element={<TeacherSemiconductorCalculator />} />
        <Route path="/teacher/software" element={<TeacherSoftwareCalculator />} />
        <Route path="/teacher/il" element={<TeacherIlCalculator />} />
        
        {/* 기본 리다이렉트 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
