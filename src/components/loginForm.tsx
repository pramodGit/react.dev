import React, { useState, useEffect } from "react";

type FormState = {
  email: string;
  password: string;
};

type FormErrors = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const [form, setForm] = useState<FormState>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  // Regex helpers
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d).{6,}$/; // At least 6 chars, 1 digit

  const validate = (form: FormState): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "Password must be at least 6 characters and include a number";
    }

    return newErrors;
  };

  // Live validation
  useEffect(() => {
    const newErrors = validate(form);
    setErrors(newErrors);
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(form);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Login Form</h2>

      <div style={{ marginBottom: 16 }}>
        <label>Email:</label><br />
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>
        )}
      </div>

      <div style={{ marginBottom: 16 }}>
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && (
          <div style={{ color: "red", fontSize: 12 }}>{errors.password}</div>
        )}
      </div>

      <button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        style={{ padding: "6px 12px" }}
      >
        Submit
      </button>

      {submitted && (
        <div
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: "#d4edda",
            color: "#155724",
          }}
        >
          <strong>Submitted Data:</strong><br />
          Email: {submitted.email}<br />
          Password: {submitted.password}
        </div>
      )}
    </form>
  );
};

export default LoginForm;
