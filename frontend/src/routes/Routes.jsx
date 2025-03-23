import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Landing from "../pages/Landing";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateIssue from "../pages/CreateIssue";
import IssuePage from "../pages/IssuePage";
import AboutUs from "../pages/AboutUs";
import TermsOfService from "../pages/terms";
import PrivacyPolicy from "../pages/privacy";
import { Cookie } from "lucide-react";
import CookiesPolicy from "../pages/cookies";
import ContactUs from "../pages/contact";

// Lazy-loaded components for better performance
const Login = lazy(() => import("../pages/forms/Login"));
const Register = lazy(() => import("../pages/forms/Register"));
const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/User"));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Navbar />
                            <Landing />
                            <Footer />
                        </>
                    } />
                    <Route path="/login" element={
                        <>
                            <Login />
                        </>
                    } />
                    <Route path="/register" element={
                        <>
                            <Register />
                        </>
                    } />
                    <Route path="/About-Us" element={
                        <>
                            <Navbar />
                            <AboutUs />
                            <Footer />
                        </>
                    } />
                       <Route path="/Terms" element={
                        <>
                            <Navbar />
                            <TermsOfService />
                            <Footer />
                        </>
                    } />
                         <Route path="/privacy" element={
                        <>
                            <Navbar />
                            <PrivacyPolicy />
                            <Footer />
                        </>
                    } />
                     <Route path="/cookies" element={
                        <>
                            <Navbar />
                            <CookiesPolicy />
                            <Footer />
                        </>
                    } />
                     <Route path="/contact" element={
                        <>
                            <Navbar />
                            <ContactUs />
                            <Footer />
                        </>
                    } />
                    {/* Protected Routes */}
                    <Route path="/home" element={<ProtectedRoute>
                        <Navbar />
                        <Home />
                    </ProtectedRoute>} />

                    <Route path="/createIssue" element={<ProtectedRoute>
                        <Navbar />
                        <CreateIssue />
                    </ProtectedRoute>} />

                    <Route path="/user" element={<ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>} />

                    <Route path="/issue" element={
                        <>
                            <ProtectedRoute>
                                <Navbar />
                                <IssuePage />
                            </ProtectedRoute>
                        </>
                    } />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
