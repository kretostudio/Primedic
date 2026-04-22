"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getIletisim } from "@/lib/get-content";
import { useLocale } from "next-intl";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const initial: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export function IletisimContactForm() {
  const locale = useLocale();
  const iletisim = getIletisim(locale);
  const {
    heading,
    paragraphs,
    contact,
    fields,
    submitLabel,
    sendingLabel,
    successMessage,
  } = iletisim.form;
  const [values, setValues] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO(iletisim-form): POST submissions to the Google Sheets Apps Script
    // webhook URL the client will provide. Replace the setTimeout stub below
    // with `fetch(SHEETS_WEBHOOK_URL, { method: "POST", body: JSON.stringify(values) })`.
    setTimeout(() => {
      setStatus("sent");
      setValues(initial);
    }, 600);
  }

  return (
    <section
      id="iletisim"
      className="bg-white py-[80px] text-black md:py-[120px]"
    >
      <Container width="wide">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-24">
          <div className="flex flex-col">
            <Reveal y={24}>
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-[0.2px] text-black md:text-[34px] lg:text-[40px] lg:leading-[50px]">
                {heading}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-4 text-[18px] font-normal leading-[1.55] text-black md:text-[22px] lg:text-[24px] lg:leading-[40px]">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className="mt-10 space-y-6 md:mt-14">
              <li className="flex items-center gap-3">
                <IconPin />
                <span className="text-[18px] font-bold leading-[26px] text-black md:text-[20px]">
                  {contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone />
                <a
                  href={contact.phoneHref}
                  className="text-[18px] font-bold leading-[26px] text-black transition-colors hover:text-[#b21c1c] md:text-[20px]"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail />
                <a
                  href={contact.emailHref}
                  className="text-[18px] font-bold leading-[26px] text-black transition-colors hover:text-[#b21c1c] md:text-[20px]"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="w-full rounded-[10px] border border-[#bdbdbd] bg-white p-8 shadow-[0_0_20px_0_rgba(0,0,0,0.1)] md:p-12 lg:ml-auto lg:max-w-[725px] lg:p-[50px]"
          >
            <div className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FieldInput
                  id="firstName"
                  label={fields.firstName.label}
                  placeholder={fields.firstName.placeholder}
                  required={fields.firstName.required}
                  value={values.firstName}
                  onChange={update("firstName")}
                  accent
                />
                <FieldInput
                  id="lastName"
                  label={fields.lastName.label}
                  placeholder={fields.lastName.placeholder}
                  required={fields.lastName.required}
                  value={values.lastName}
                  onChange={update("lastName")}
                />
              </div>
              <FieldInput
                id="email"
                type="email"
                label={fields.email.label}
                placeholder={fields.email.placeholder}
                required={fields.email.required}
                value={values.email}
                onChange={update("email")}
              />
              <FieldInput
                id="phone"
                type="tel"
                label={fields.phone.label}
                placeholder={fields.phone.placeholder}
                required={fields.phone.required}
                value={values.phone}
                onChange={update("phone")}
              />
              <FieldTextarea
                id="message"
                label={fields.message.label}
                placeholder={fields.message.placeholder}
                required={fields.message.required}
                value={values.message}
                onChange={update("message")}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-10 flex h-[52px] w-full items-center justify-center rounded-[24px] border border-[#b356c1] bg-[rgba(178,28,28,0.9)] px-8 text-[18px] font-semibold leading-none text-white transition-colors hover:bg-[#b21c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b21c1c]/40 disabled:opacity-70"
            >
              {status === "sending" ? sendingLabel : submitLabel}
            </button>

            {status === "sent" && (
              <p
                role="status"
                className="mt-4 text-center text-[14px] font-medium text-[#11845b]"
              >
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}

type FieldBase = {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
};

type FieldInputProps = FieldBase & {
  type?: "text" | "email" | "tel";
  accent?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FieldInput({
  id,
  label,
  placeholder,
  required,
  type = "text",
  accent,
  value,
  onChange,
}: FieldInputProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`h-[50px] w-full rounded-[10px] border bg-[#f9f9f9] px-5 font-['Open_Sans',sans-serif] text-[16px] leading-[26px] text-[#011334] placeholder:text-[#828282] focus:outline-none focus:ring-2 focus:ring-[#b21c1c]/30 ${
          accent
            ? "border-[#b356c1] bg-white"
            : "border-[#828282]"
        }`}
      />
    </div>
  );
}

type FieldTextareaProps = FieldBase & {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function FieldTextarea({
  id,
  label,
  placeholder,
  required,
  value,
  onChange,
}: FieldTextareaProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        className="h-[140px] w-full resize-none rounded-[10px] border border-[#828282] bg-[#f9f9f9] px-5 py-4 font-['Open_Sans',sans-serif] text-[16px] leading-[26px] text-[#011334] placeholder:text-[#828282] focus:outline-none focus:ring-2 focus:ring-[#b21c1c]/30"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-3 right-3 text-[#828282]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 17L17 3" />
          <path d="M10 3h7v7" />
        </svg>
      </span>
    </div>
  );
}

function IconPin() {
  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      aria-hidden
      className="shrink-0 text-[#b21c1c]"
    >
      <path
        d="M11 1C6 1 2 5 2 10c0 6.5 9 15 9 15s9-8.5 9-15c0-5-4-9-9-9z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0 text-[#b21c1c]"
    >
      <path
        d="M5.2 3h3.1l1.6 4-2.1 1.3a13 13 0 006 6l1.3-2.1 4 1.6V17a3 3 0 01-3 3A15 15 0 012.2 6a3 3 0 013-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden
      className="shrink-0 text-[#b21c1c]"
    >
      <rect
        x="3"
        y="5"
        width="20"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 7l9 7 9-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
