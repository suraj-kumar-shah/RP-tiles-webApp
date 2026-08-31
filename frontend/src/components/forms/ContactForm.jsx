import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import Button from "../ui/Button.jsx";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please add a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-sm border border-stone-200 bg-white px-6 py-14 text-center shadow-card">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 size={28} strokeWidth={1.75} />
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink">Message Sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          Thanks for reaching out. Our team will respond within one business day.
        </p>
        <Button variant="outline" onClick={() => { setForm({ name: "", email: "", phone: "", message: "" }); setSubmitted(false); }}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 rounded-sm border border-stone-200 bg-white p-6 shadow-card sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink">Full Name</span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClasses(errors.name)}
            placeholder="Your name"
          />
          {errors.name && <span className="text-xs text-red-600">{errors.name}</span>}
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink">Phone Number</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClasses()}
            placeholder="+91 00000 00000"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Email</span>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClasses(errors.email)}
          placeholder="you@example.com"
        />
        {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Message</span>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={5}
          className={inputClasses(errors.message)}
          placeholder="How can we help?"
        />
        {errors.message && <span className="text-xs text-red-600">{errors.message}</span>}
      </label>

      <Button type="submit" variant="accent" size="lg" icon={Send} className="mt-2 justify-center">
        Send Message
      </Button>
    </form>
  );
}

function inputClasses(error) {
  return `w-full rounded-sm border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-stone-400 focus:outline-none ${
    error ? "border-red-400 focus:border-red-500" : "border-stone-300 focus:border-stone-900"
  }`;
}
