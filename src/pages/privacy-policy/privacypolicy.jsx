import Navbar from "../../components/navbar/Navbar";
import headEvent from "../../assets/team-head-img.svg";
import Team from "../../components/team/team";
import codelogo from "../../assets/code-logo.png";
import whydesign from "../../assets/team/whydesign.png";
import '../aboutus/about.css'
import CopyRight from "../../components/copyright/CopyRight";

const privacypolicy = () => {
  return (
    <section className="body-wrapper" style={{ backgroundColor: "#171717" }}>
      <Navbar />
      <div className="aboutus-wrapper">
        <div className="aboutus-header">
          <h1>PRIVACY POLICY</h1>
        </div>
        <div className="privacy-content-wrapper">
          <div>
            <h1>Introduction</h1>
            <p>
              This privacy policy sets out how we collect, use, and protect your
              personal information when you visit and use the CODe Design Week
              website. By visiting the website, you agree to the terms of this
              privacy policy.
            </p>
          </div>
          <div>
            <h1>Collection of Personal Information </h1>
            <p>
              We may collect personal information from you when you register for
              the CODe Design Week events, sign up for our newsletter, or fill
              out a contact form. The personal information we collect may
              include your name, email address, phone number, and other contact
              information.
            </p>
          </div>
          <div>
            <h1>Use of Personal Information</h1>
            <p>
              We use your personal information to provide you with information
              about the CODe Design Week events, to send you our newsletter, and
              to respond to your inquiries. We may also use your personal
              information for research and analysis purposes to improve our
              services.
            </p>
          </div>
          <div>
            <h1>Disclosure of Personal Information</h1>
            <p>
              We will not disclose your personal information to any third
              parties without your consent, except as required by law or as
              necessary to provide you with our services. We may disclose your
              personal information to our partners and service providers who
              assist us in the operation of the CODe Design Week events and the
              website.
            </p>
          </div>
          <div>
            <h1>Security of Personal Information</h1>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. We use
              industry-standard security measures, such as encryption and
              firewalls, to protect your personal information.
            </p>
          </div>
          <div>
            <h1>Cookies and Tracking Technologies</h1>
            <p>
              We may use cookies and other tracking technologies to collect
              information about your use of the website, such as your IP
              address, browser type, and pages visited. This information may be
              used to improve the website and our services.
            </p>
          </div>
          <div>
            <h1>Links to Third-Party Websites</h1>
            <p>
              The CODe Design Week website may contain links to third-party
              websites. We are not responsible for the privacy practices or
              content of these websites. We recommend that you review the
              privacy policies of these websites before providing them with any
              personal information.
            </p>
          </div>
          <div>
            <h1>Changes to Privacy Policy</h1>
            <p>
              We reserve the right to modify or update this privacy policy at
              any time. We will post the updated privacy policy on the website,
              and the changes will become effective immediately upon posting.
            </p>
          </div>
          <div>
            <h1>Contact Us</h1>
            <p>
              If you have any questions or concerns about our privacy policy,
              please contact us at code@cce.edu.in or codedesignweek@gmail.com.
            </p>
          </div>
        </div>
      </div>

      <CopyRight />
    </section>
  );
};

export default privacypolicy;
