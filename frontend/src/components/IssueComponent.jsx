import React from "react";
import { useNavigate } from "react-router-dom";

const IssueComponent = ({ issue }) => {
    const navigate = useNavigate();

    const handleClickProject = () => {
        navigate('/issue', { state: issue });
    };

    return (
        <div className="p-4 border rounded-md shadow-md cursor-pointer hover:bg-gray-50 flex flex-col max-w-full" onClick={handleClickProject}>
            <div className="flex justify-between">
                <div className="h-full flex flex-col gap-2">
                    <div className="flex gap-5">
                        <h2 className="text-lg font-semibold">{issue.title}</h2>
                        <div className="flex gap-2">
                            <h2 className="text-sm scale-[0.975] bg-black text-white px-2 py-1 rounded-full">{issue.type}</h2>
                        </div>
                    </div>
                    <p className="text-gray-600 ">{issue.desc}</p>
                </div>
                <div className="h-full flex flex-col gap-2 min-w-fit">
                    <h2 className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">{issue.pin}</h2>
                    <h2 className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">{issue.status}</h2>
                </div>
            </div>
        </div>
    );
};

export default IssueComponent;
