import React from "react";
import { useLocation } from "react-router-dom";

const LegalPage = () => {
    const { pathname } = useLocation();

    const isPrivacy = pathname.includes("privacy");
    const isTerms = pathname.includes("terms");

    return (
        <section className="mx-auto py-8 sm:py-12 px-5 sm:px-12 text-gray-800">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                    {isPrivacy
                        ? "Privacy Policy"
                        : isTerms
                            ? "Terms & Conditions"
                            : "Legal Information"}
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-500">Last Updated: October 2025</p>
            </div>

            {/* Content */}
            <div className="space-y-4 sm:space-y-6 leading-relaxed text-sm sm:text-base md:text-[1.05rem]">
                {isPrivacy && (
                    <>
                        <p className="mb-3 sm:mb-4">
                            At <strong>Code-X-Novas</strong>, your privacy is our top priority.
                            This Privacy Policy outlines how we collect, use, and protect your
                            personal information when you visit our website or engage with our
                            services.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700">
                            1. Information We Collect
                        </div>
                        <ul className="list-disc ml-5 sm:ml-6 space-y-2 mb-3 sm:mb-4 text-sm sm:text-base">
                            <li>
                                Personal details (name, email, phone number) when you contact us
                                or fill out forms.
                            </li>
                            <li>
                                Technical information (IP address, browser type, device
                                information).
                            </li>
                            <li>
                                Project or service-related information voluntarily shared by
                                clients.
                            </li>
                        </ul>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            2. How We Use Your Information
                        </div>
                        <ul className="list-disc ml-5 sm:ml-6 space-y-2 mb-3 sm:mb-4 text-sm sm:text-base">
                            <li>Provide and improve our services.</li>
                            <li>
                                Communicate regarding project updates, proposals, and support.
                            </li>
                            <li>
                                Send promotional or informational emails (you may opt out
                                anytime).
                            </li>
                            <li>Maintain security and prevent fraudulent activity.</li>
                        </ul>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            3. Data Protection
                        </div>
                        <p className="mb-3 sm:mb-4">
                            We implement strong security measures, including encryption and
                            secure servers, to protect your information from unauthorized
                            access, alteration, or disclosure.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            4. Cookies
                        </div>
                        <p className="mb-3 sm:mb-4">
                            Our website uses cookies to enhance user experience and analyze
                            website traffic. You can choose to disable cookies in your browser
                            settings, though some features may not function properly.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            5. Data Sharing
                        </div>
                        <p className="mb-3 sm:mb-4">
                            We do not sell, trade, or rent personal information. Data may only
                            be shared with trusted partners or vendors assisting in service
                            delivery — under strict confidentiality agreements.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            6. Your Rights
                        </div>
                        <p className="mb-3 sm:mb-4">
                            You have the right to access, correct, or request deletion of your
                            personal data. To do so, please contact us at{" "}
                            <a
                                className="text-blue-600 font-medium"
                                href="mailto:code.x.novas@gmail.com"
                            >
                                code.x.novas@gmail.com
                            </a>
                            .
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            7. Updates to This Policy
                        </div>
                        <p className="mb-3 sm:mb-4">
                            We may update our Privacy Policy from time to time. Any changes
                            will be reflected on this page with an updated date.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            8. Contact Us
                        </div>
                        <ul className="ml-5 sm:ml-6 space-y-1 mb-3 sm:mb-4 text-sm sm:text-base">
                            <li>📧 info@codexnovas.in</li>
                            <li>🌐 www.codexnovas.in</li>
                            <li>📞 +91 9348976663</li>
                        </ul>
                    </>
                )}

                {isTerms && (
                    <>
                        <p className="mb-3 sm:mb-4">
                            Welcome to Code-X-Novas ("we," "our," or "us"). By accessing or
                            using our website and services, you agree to comply with and be
                            bound by these Terms and Conditions. Please read them carefully
                            before using our platform.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            1. Acceptance of Terms
                        </div>
                        <p className="mb-3 sm:mb-4">
                            By accessing our website, purchasing services, or engaging with
                            our products, you confirm that you have read, understood, and
                            agreed to these Terms. If you disagree with any part of the Terms,
                            you may not access our website or services.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            2. Services
                        </div>
                        <p className="mb-3 sm:mb-4">
                            Code-X-Novas provides web and app development, AI &amp; ML
                            solutions, UI/UX design, custom LMS, and e-commerce solutions. We
                            reserve the right to modify, suspend, or discontinue any service
                            at any time without prior notice.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            3. Intellectual Property
                        </div>
                        <p className="mb-3 sm:mb-4">
                            All content, designs, code, graphics, and materials available on
                            our website are the exclusive property of Code-X-Novas. You may
                            not copy, reproduce, or distribute any content without written
                            permission from us.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            4. Payments and Pricing
                        </div>
                        <p className="mb-3 sm:mb-4">
                            All prices are listed in INR and are subject to change based on
                            project requirements and service scope. Payment terms will be
                            clearly defined in individual project proposals or contracts.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            5. Client Responsibilities
                        </div>
                        <p className="mb-3 sm:mb-4">
                            Clients must provide accurate project details, credentials, and
                            materials required for development. Any delays in providing these
                            may impact the delivery timeline.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            6. Limitation of Liability
                        </div>
                        <p className="mb-3 sm:mb-4">
                            While we strive for excellence, Code-X-Novas shall not be liable
                            for any indirect, incidental, or consequential damages arising
                            from the use or inability to use our services or website.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            7. Third-Party Services
                        </div>
                        <p className="mb-3 sm:mb-4">
                            Our website or applications may include links to third-party
                            websites or tools. We are not responsible for the content,
                            policies, or practices of any third-party services.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            8. Confidentiality
                        </div>
                        <p className="mb-3 sm:mb-4">
                            All client data and project-related information are treated as
                            confidential and will not be shared with external parties without
                            consent.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            9. Termination
                        </div>
                        <p className="mb-3 sm:mb-4">
                            We reserve the right to suspend or terminate access to our
                            services if these Terms are violated or misuse is detected.
                        </p>

                        <div className="text-lg sm:text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                            10. Governing Law
                        </div>
                        <p className="mb-3 sm:mb-4">
                            These Terms shall be governed and interpreted in accordance with
                            the laws of India, and any disputes shall be subject to the
                            jurisdiction of courts in Bhubaneswar, Odisha.
                        </p>
                    </>
                )}

                {!isPrivacy && !isTerms && (
                    <div className="text-center text-gray-600">
                        <p className="mb-2 text-sm sm:text-base">
                            If you arrived here by mistake, please navigate back to the
                            homepage.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default LegalPage;
