import React from "react";
import HomePageButton from "../components/HomePageButton";

const Privacy = () => {
  return (
    <div>
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="p-4 md:px-8 text-white">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Privacy Policy</h2>
          <p className="pb-3">
            This privacy policy discloses the privacy practices for{" "}
            <span className="font-bold text-[var(--orange)]">FitZone</span>.
            This privacy policy applies solely to information collected by this
            website. It will notify you of the following:
          </p>
          <ol className="ps-6 list-decimal">
            <li>
              What personally identifiable information is collected from you
              through the website, how it is used and with whom it may be
              shared.
            </li>
            <li>
              What choices are available to you regarding the use of your data.
            </li>
            <li>
              The security procedures in place to protect the misuse of your
              information.
            </li>
            <li>How you can correct any inaccuracies in the information.</li>
          </ol>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">
            Information Collection, Use, and Sharing
          </h2>
          <p className="pb-3">
            We are the sole owners of the information collected on this site. We
            only have access to/collect information that you voluntarily give us
            via email, phone, or other direct contact from you. We will not sell
            or rent this information to anyone.
          </p>
          <p className="pb-3">
            We will use your information to respond to you, regarding the reason
            you contacted us. We will not share your information with any third
            party outside of our organization, other than as necessary to
            fulfill your request, e.g. to ship an order.
          </p>
          <p>
            Unless you ask us not to, we may contact you via email in the future
            to tell you about specials, new products or services, or changes to
            this privacy policy.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">
            Your Access to and Control Over Information
          </h2>
          <p className="pb-3">
            You may opt out of any future contacts from us at any time. You can
            do the following at any time by contacting us via the email address
            or phone number provided on our website:
          </p>
          <ol className="ps-6 list-decimal">
            <li>See what data we have about you, if any.</li>
            <li>Change/correct any data we have about you.</li>
            <li>Have us delete any data we have about you.</li>
            <li>Express any concern you have about our use of your data.</li>
          </ol>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Security</h2>
          <p className="pb-3">
            We take precautions to protect your information. When you submit
            sensitive information via the website, your information is protected
            both online and offline.
          </p>
          <p className="pb-3">
            Wherever we collect sensitive information (such as credit card
            data), that information is encrypted and transmitted to us in a
            secure way. You can verify this by looking for a lock icon in the
            address bar and looking for "https" at the beginning of the address
            of the Web page.
          </p>
          <p>
            While we use encryption to protect sensitive information transmitted
            online, we also protect your information offline. Only employees who
            need the information to perform a specific job (for example, billing
            or customer service) are granted access to personally identifiable
            information. The computers/servers in which we store personally
            identifiable information are kept in a secure environment.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Updates</h2>
          <p className="pb-3">
            Our Privacy Policy may change from time to time and all updates will
            be posted on this page.
          </p>
          <p className="pb-3">
            If you feel that we are not abiding by this privacy policy, you
            should contact us immediately via email or phone.
          </p>
          <p>
            Thank you for choosing{" "}
            <span className="font-bold text-[var(--orange)]">FitZone</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
