import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignVolunteer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/v1/volunteer-signup", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    "Content-Type": "application/json",
                },
            });
            alert("Successfully signed up as a volunteer!");
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Failed to sign up. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Sign Up as a Volunteer</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Input */}
                <div>
                    <label className="block text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Phone Input */}
                <div>
                    <label className="block text-sm font-medium">Phone Number</label>
                    <input
                        type="text"
                        {...register("phone", { required: "Phone number is required" })}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                {/* Availability Dropdown */}
                <div>
                    <label className="block text-sm font-medium">Availability</label>
                    <select {...register("availability")} className="w-full p-2 border rounded-md">
                        <option value="weekdays">Weekdays</option>
                        <option value="weekends">Weekends</option>
                        <option value="anytime">Anytime</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignVolunteer;