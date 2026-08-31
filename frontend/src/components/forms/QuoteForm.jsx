import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import Button from "../ui/Button.jsx";
import { products } from "../../data/products.js";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  product: "",
  quantity: "",
  size: "",
  message: "",
};

export default function QuoteForm({ defaultProductId }) {
  const [form, setForm] = useState({
    ...emptyForm,
    product: defaultProductId ? String(defaultProductId) : "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
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
        <h3 className="font-display text-2xl font-semibold text-ink">
          Quote Request Received
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          Thank you, {form.name.split(" ")[0]}. Our team will review your
          requirements and get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setForm(emptyForm);
            setSubmitted(false);
          }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-sm border border-stone-200 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClasses(errors.name)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClasses(errors.phone)}
            placeholder="+91 00000 00000"
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email}>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClasses(errors.email)}
          placeholder="you@example.com"
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Product">
          <select
            value={form.product}
            onChange={(e) => update("product", e.target.value)}
            className={inputClasses()}
          >
            <option value="">Select a product (optional)</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Quantity">
          <input
            type="text"
            value={form.quantity}
            onChange={(e) => update("quantity", e.target.value)}
            className={inputClasses()}
            placeholder="e.g. 500 sq.ft"
          />
        </Field>
      </div>

      <Field label="Required Size">
        <input
          type="text"
          value={form.size}
          onChange={(e) => update("size", e.target.value)}
          className={inputClasses()}
          placeholder="e.g. 600x600 mm"
        />
      </Field>

      <Field label="Message">
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          className={inputClasses()}
          placeholder="Tell us more about your project or requirements"
        />
      </Field>

      <Button type="submit" variant="accent" size="lg" icon={Send} className="mt-2 justify-center">
        Request Quote
      </Button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}

function inputClasses(error) {
  return `w-full rounded-sm border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-stone-400 focus:outline-none ${
    error ? "border-red-400 focus:border-red-500" : "border-stone-300 focus:border-stone-900"
  }`;
}
