import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IssuePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const issue = location.state;

    if (!issue) {
        return <p className="text-center text-red-500">Issue not found.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="bg-black text-white font-bold px-4 py-2 rounded-full transition duration-250 hover:bg-gray-900 text-xs hover:cursor-pointer"
            >
                ← Back to Issues
            </button>

            {/* Issue Title & Meta */}
            <h1 className="text-3xl font-bold mt-4">{issue.title}</h1>
            <div className="flex space-x-2 text-gray-500 text-sm mt-2">
                <span>{issue.location}</span>
                <span>•</span>
                <span>Status: {issue.status}</span>
            </div>

            {/* Issue Description */}
            <p className="mt-4 text-gray-700">{issue.desc}</p>

            {/* Issue Category Badge */}
            <span className="inline-block bg-blue-100 text-black text-xs font-semibold px-3 py-1 rounded-full mt-4">
                {issue.type}
            </span>

            {/* Call to Action for Volunteers */}
            <div className="mt-6 bg-gray-100 p-4 rounded-md">
                <h2 className="text-xl font-semibold">Volunteer for this Issue</h2>
                <p className="text-gray-600">Join others who are working to resolve this issue.</p>
                <button onClick={() => { navigate("/signVolunteer", { replace: true }) }} className="mt-3 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-900 hover:cursor-pointer">
                    Sign Up to Volunteer
                </button>
            </div>
        </div>
    );
};

export default IssuePage;
