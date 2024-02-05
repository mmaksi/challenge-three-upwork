"use client";
import React, { useState } from "react";
import InputField from "./Input";
import Button from "./Button";

interface FormProps {
  title: string;
}

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Form: React.FC<FormProps> = (props) => {
  const { title } = props;
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const { email, password } = formData;
    if (!emailRegex.test(email) || password.length < 8) {
      setErrorMessage("Invalid email or password.");
      setSuccessMessage("");
    } else {
      setErrorMessage("");
      setSuccessMessage("Login successful!");
      // Here you can add code for actual login functionality
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm -space-y-px">
            <InputField
              label="Email Address"
              id="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
            />
            <InputField
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button onClick={handleLogin}>Sign in</Button>
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm text-center">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="text-green-500 text-sm text-center">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
