import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rescue World TV",
  description:
    "Privacy Policy for the Rescue World TV website and streaming applications.",
};

const sections = [
  {
    title: "1. Introduction",
    text: "Rescue World TV respects your privacy. This Privacy Policy describes how information may be collected, used, and protected when you access our website, streaming applications, and related services.",
  },
  {
    title: "2. Information We May Collect",
    text: "When you access our services, technical information such as IP addresses, device types, browser information, operating systems, and playback activity may be processed. If you contact us, we may also receive your name, email address, and the information you voluntarily provide.",
  },
  {
    title: "3. How Information Is Used",
    text: "Information may be used to deliver streaming content, maintain our services, improve playback quality, diagnose technical issues, protect our platform, and respond to inquiries.",
  },
  {
    title: "4. Third-Party Services",
    text: "Our platform may use third-party services, including Cloudflare, Roku, YouTube, and Vimeo, to provide hosting, video delivery, and other functionality. These providers may process information according to their respective privacy policies.",
  },
  {
    title: "5. Cookies and Similar Technologies",
    text: "Our website and third-party services may use cookies, local storage, or similar technologies to support functionality, security, preferences, and performance measurement.",
  },
  {
    title: "6. Information Sharing",
    text: "Information may be processed by service providers to operate our platform or disclosed when required by applicable law. Any additional data-sharing practices must be described in the final version of this policy.",
  },
  {
    title: "7. Children's Privacy",
    text: "Rescue World TV provides family-oriented Christian programming. Services directed to children must be operated with appropriate privacy protections and parental consent where required by applicable law. Parents or guardians may contact us with questions regarding children's personal information.",
  },
  {
    title: "8. Data Security and Retention",
    text: "We seek to protect personal information through appropriate administrative and technical safeguards. Information should be retained only for legitimate operational and legal purposes.",
  },
  {
    title: "9. International Access",
    text: "Rescue World TV is intended for an international audience. Information may be processed in countries where our infrastructure and service providers operate.",
  },
  {
    title: "10. Your Privacy Rights",
    text: "Depending on applicable law, you may have rights to access, correct, or delete personal information, restrict certain processing, or exercise other privacy rights. You may contact us to submit a privacy-related request.",
  },
  {
    title: "11. Changes to This Policy",
    text: "This Privacy Policy may be updated to reflect changes in our services, technology, or legal obligations. Updated versions will be made available on our website.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">

        <a
          href="/"
          className="mb-10 inline-block text-sm text-gray-400 hover:text-white"
        >
          &larr; Back to Rescue World TV
        </a>

        <header className="mb-12 border-b border-gray-800 pb-8">
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
            Rescue World TV
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-gray-400">
            Draft — Pending final review
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-semibold">
                {section.title}
              </h2>

              <p className="leading-relaxed text-gray-300">
                {section.text}
              </p>
            </section>
          ))}

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              12. Contact Us
            </h2>

            <p className="leading-relaxed text-gray-300">
              For questions regarding this Privacy Policy
              or your personal information, please contact:
            </p>

            <p className="mt-4 font-semibold">
              Rescue World TV
            </p>

            <a
              href="mailto:info@rescueworldtv.org"
              className="mt-2 block text-blue-400 hover:underline"
            >
              info@rescueworldtv.org
            </a>

            <a
              href="https://rescueworldtv.org"
              className="mt-2 block text-blue-400 hover:underline"
            >
              www.rescueworldtv.org
            </a>
          </section>
        </div>

        <footer className="mt-16 border-t border-gray-800 pt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Rescue World TV.
          All rights reserved.
        </footer>

      </div>
    </main>
  );
}
