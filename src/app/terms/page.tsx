import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Rescue World TV",
  description:
    "Terms and conditions for using Rescue World TV streaming services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    text: "These Terms of Use govern access to the Rescue World TV website, streaming applications, and related services. By using our services, you agree to these terms. If you do not agree, please discontinue use of the services.",
  },
  {
    title: "2. Our Mission and Services",
    text: "Rescue World TV is a Christian streaming platform dedicated to sharing the everlasting gospel of Jesus Christ through biblical, spiritual, educational, and family-oriented programming. Our services may include live television, on-demand videos, sermons, Bible studies, music, health programs, and documentaries.",
  },
  {
    title: "3. Access to Our Services",
    text: "Our services are intended for personal and non-commercial viewing. Access may require a compatible device and an internet connection. Users are responsible for any internet or data charges associated with accessing our content.",
  },
  {
    title: "4. Intellectual Property",
    text: "The content, logos, graphics, videos, audio recordings, and other materials available through Rescue World TV are owned by Rescue World TV, its licensors, or their respective copyright holders. All applicable intellectual property rights are reserved.",
  },
  {
    title: "5. Acceptable Use",
    text: "Users may not unlawfully reproduce, redistribute, sell, retransmit, or commercially exploit our content without authorization. Users must not interfere with the operation, security, or availability of our services. Nothing in these terms restricts rights permitted by applicable law.",
  },
  {
    title: "6. Content Availability",
    text: "Programming schedules, live streams, languages, and available content may change. Certain content may be restricted in specific geographical regions due to licensing, technical limitations, or distribution rights.",
  },
  {
    title: "7. Religious and Educational Content",
    text: "Rescue World TV provides Christian religious and educational programming intended to encourage spiritual growth, biblical understanding, and healthy living. Health-related content is provided for informational purposes and is not a substitute for professional medical advice, diagnosis, or treatment.",
  },
  {
    title: "8. Children and Family Viewing",
    text: "Our platform may include programming intended for children and families. Parents and legal guardians are encouraged to supervise children's use of streaming services and select appropriate content.",
  },
  {
    title: "9. Third-Party Services",
    text: "Rescue World TV may rely on third-party technology and distribution platforms, including Roku, Cloudflare, YouTube, and Vimeo. Access to these services may also be subject to the applicable terms and privacy policies of their respective providers.",
  },
  {
    title: "10. Service Availability",
    text: "We seek to provide a reliable streaming experience. However, interruptions, maintenance, technical failures, and changes in content availability may occur. Continuous and uninterrupted access cannot be guaranteed.",
  },
  {
    title: "11. Limitation of Liability",
    text: "To the extent permitted by applicable law, Rescue World TV is not responsible for losses resulting from service interruptions, device incompatibility, or unauthorized use of its services. Nothing in these terms excludes liability or consumer rights that cannot lawfully be excluded.",
  },
  {
    title: "12. Changes to These Terms",
    text: "These Terms of Use may be updated to reflect changes in our services, technology, or applicable legal requirements. Updated terms will be made available on our website.",
  },
];

export default function TermsPage() {
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
            Terms of Use
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
              13. Privacy Policy
            </h2>

            <p className="leading-relaxed text-gray-300">
              Information regarding the processing of personal
              data is available in our Privacy Policy.
            </p>

            <a
              href="/privacy"
              className="mt-4 inline-block text-blue-400 hover:underline"
            >
              Read our Privacy Policy
            </a>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              14. Contact Us
            </h2>

            <p className="leading-relaxed text-gray-300">
              For questions concerning these Terms of Use,
              please contact:
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
