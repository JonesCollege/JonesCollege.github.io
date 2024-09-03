import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicyPage = () => {
    return (
        <div>
            <h1>Privacy Policy for Jones College Website</h1>
            <h2>Introduction</h2>
            <p>We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our application.</p>

            <h2>Scope of Data Access</h2>
            <p>Our application requires comprehensive access to your calendar data to streamline room bookings and ensure efficient management. This access includes the ability to view, create, edit, and delete events on all your calendars associated with your Google account</p>

            <h2>Justification for Data Access</h2>
            <ul>
                <li>View Events: Provide an overview of available and booked time slots.</li>
                <li>Create Events: Allow users to schedule new bookings directly within their Google Calendar.</li>
                <li>Edit Events: Enable real-time adjustments to existing bookings, ensuring flexibility and responsiveness.</li>
                <li>Delete Events: Maintain accurate and up-to-date schedules by allowing users to cancel or remove bookings.</li>
                <li>Cross-Calendar Functionality: Access and modify events across all calendars, ensuring a unified and efficient booking experience.</li>
            </ul>

            <h2>Information We Collect</h2>
            <p>We collect the following types of information when you use our application:</p>
            <ul>
                <li>Calendar Data: Includes details of events such as title, time, date, and attendees.</li>
                <li>Authentication Data: Information required to authenticate your Google account using OAuth.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
                <li>To provide and maintain our room booking services.</li>
                <li>To manage and schedule room bookings efficiently.</li>
                <li>To enable users to make real-time adjustments to bookings.</li>
                <li>To ensure cross-calendar functionality and a unified booking experience.</li>
                <li>To improve our application and services based on user feedback.</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. This includes sharing information with Google for authentication and calendar management.</p>

            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational measures to safeguard your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and secure data storage.</p>

            <h2>User Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access the personal information we hold about you.</li>
                <li>Request the correction of inaccurate information.</li>
                <li>Request the deletion of your personal information.</li>
                <li>Object to the processing of your personal information.</li>
                <li>Withdraw your consent at any time.</li>
            </ul>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our application and updating the effective date. We encourage you to review this Privacy Policy periodically for any changes.</p>

            <h2>Consent</h2>
            <p>For a visual overview of how our application works and utilizes OAuth scopes, please refer to our <a href="https://www.youtube.com/watch?v=7xDHPG3f1lc">Video Demonstration</a>. This video covers key functionalities including OAuth authentication, creating, editing, deleting bookings, and cross-calendar functionality.</p>

            <h2>Disclosure</h2>
            <p>The Jones Website’s use and transfer of information received from Google APIs to any other app will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
        </div>
    );
};

export default PrivacyPolicyPage;