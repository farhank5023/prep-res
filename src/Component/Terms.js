import React, { Component } from "react";
import "./BookForm.css";

export class BookForm extends Component {
  render() {
    return (
      <div>
        <div className="container-form" style={{ textAlign: "left" }}>
          <form
            id="contact"
            style={{ height: "80vh", overflowY: "scroll", borderRadius: "0" }}
          >
            <div>
              <button
                className="close-btn"
                type="button"
                onClick={() => {
                  document.getElementById("term-form").style.visibility =
                    "hidden";
                  document.querySelector(".landing-outer-div").style.filter =
                    "none";
                  document.querySelector(".footer").style.filter = "blur(0px)";
                }}
              >
                <img
                  src="https://ik.imagekit.io/p3m4p352x/close-button-png-27.png?updatedAt=1693842648252"
                  width="25px"
                  height="25px"
                  alt=""
                />
              </button>
            </div>
            <h3 id="report-text">Terms of Use Agreement</h3>
            <h4>Effective Date: 11/10/2023</h4>
            <ul>
              <li>
                Acceptance of Terms
                <br />
                By accessing or using the Prepcrazy Resource Portal (the
                "Website"), you agree to comply with and be bound by these Terms
                of Use ("Terms"). If you do not agree to these Terms, please do
                not use the Website.
              </li>
              <br />
              <li>
                Use of Content
                <br />
                (a) You may use the resources available on the Website for
                educational and non-commercial purposes only.
                <br />
                <br />
                (b) You may not modify, reproduce, distribute, transmit,
                display, perform, publish, or create derivative works from any
                content on the Website without obtaining prior written consent
                from Campus Credentials.
              </li>
              <br />
              <li>
                User Registration
                <br />
                (a) In order to access certain resources on the Website, you may
                be required to provide your name, phone number, and email
                address. You agree to provide accurate and complete information
                and to update your registration information promptly.
                <br />
                <br />
                (b) You are responsible for maintaining the confidentiality of
                your login credentials and are solely responsible for all
                activities that occur under your account.
              </li>
              <br />
              <li>
                Copyright and Intellectual Property
                <br />
                (a) All content on the Website, unless otherwise indicated, is
                the property of Campus Credentials or its licensors and is
                protected by copyright, trademark, and other intellectual
                property laws.
                <br />
                <br />
                (b) Proper citations and credits are given to the original
                authors or creators of the resources, as applicable. Users are
                required to respect these citations and credits.
              </li>
              <br />
              <li>
                User Conduct
                <br />
                (a) You agree not to use the Website for any unlawful,
                fraudulent, or malicious purpose.
                <br />
                <br />
                (b) You agree not to interfere with or disrupt the Website or
                servers or networks connected to the Website.
              </li>
              <br />
              <li>
                Disclaimer of Warranties
                <br />
                (a) Campus Credentials provides the Website and its content on
                an "as-is" and "as available" basis without any warranties,
                express or implied.
                <br />
                <br />
                (b) Campus Credentials does not guarantee the accuracy,
                reliability, or completeness of the content on the Website.
              </li>
              <br />
              <li>
                Limitation of Liability
                <br />
                (a) To the extent permitted by law, Campus Credentials shall not
                be liable for any indirect, incidental, consequential, or
                punitive damages arising out of or relating to the use of the
                Website.
              </li>
              <br />
              <li>
                Indemnification
                <br />
                You agree to indemnify and hold Campus Credentials, its
                affiliates, and their respective officers, directors, employees,
                and agents harmless from and against any claims, liabilities,
                damages, losses, and expenses, including reasonable attorney's
                fees, arising out of or in any way connected with your use of
                the Website.
              </li>
              <br />
              <li>
                Termination
                <br />
                Campus Credentials may terminate or suspend your access to the
                Website at its sole discretion, with or without cause and
                without notice.
              </li>
              <br />
              <li>
                Governing Law
                <br />
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Jurisdiction], without regard to its
                conflict of law principles.
              </li>
              <br />
              <li>
                Changes to Terms
                <br />
                Campus Credentials reserves the right to modify these Terms at
                any time. Any changes will be posted on the Website, and your
                continued use of the Website after such changes constitutes your
                acceptance of the modified Terms.
              </li>
              <br />
              <li>
                Contact Information
                <br />
                If you have any questions or concerns about these Terms, please
                contact us at{" "}
                <a
                  href="mailto:support@prepcrazy.com"
                  style={{
                    fontWeight: "900",
                    color: "#3e66dc",
                  }}
                >
                  support@prepcrazy.com
                </a>
                .
              </li>

              <br />
              <br />
              <p
                style={{
                  fontWeight: "100",
                  fontSize: "14px",
                  lineHeight: "20px",
                  marginBottom: "25px",
                }}
              >
                By using the Prepcrazy Resource Portal, you acknowledge that you
                have read, understood, and agree to be bound by these Terms of
                Use.
              </p>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default BookForm;
