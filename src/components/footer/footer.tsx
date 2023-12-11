import * as React from "react";
import "./footer.sass";
import watch from "@assets/icons/watch.svg";
import phone from "@assets/icons/phone.svg";
import location from "@assets/icons/location.svg";
import TwitterLink from "./twitter-link";
import InstaLink from "./insta-link";
import FacebookLink from "./facebook-link";

const Footer = () => {
  return (
    <footer className="footer" id="contact-us">
      <div className="footer__offer">
        <h2 className="footer__heading">
          Sip, Savor, Smile.
          <span className="footer__accent">It’s coffee time!</span>
        </h2>
        <div className="socials-group">
          <TwitterLink />
          <InstaLink />
          <FacebookLink />
        </div>
      </div>
      <div className="contacts-info">
        <h3 className="contacts__heading">Contact us</h3>
        <div className="contacts-box">
          <a
            className="contact location"
            target="_blank"
            href="https://www.google.com/maps/place/Green+Rd,+Pinon+Hills,+CA+92372,+%D0%A1%D0%A8%D0%90/@34.409106,-117.6383523,17z/data=!3m1!4b1!4m6!3m5!1s0x80c3141ae6cd7f33:0x4e0c98eee446a62b!8m2!3d34.4091016!4d-117.6357774!16s%2Fg%2F1tdy9bdw?hl=ru&entry=ttu"
          >
            <img src={location} alt="location icon" />
            <span>8558 Green Rd., &nbsp;LA</span>
          </a>
          <a className="contact telephon" href="tel:+16035550123">
            <img src={phone} alt="phone icon" />
            <span>+1 (603) 555-0123</span>
          </a>
          <div className="contact working-hours">
            <img src={watch} alt="watch icon" />
            <span>Mon-Sat: 9:00 AM – 23:00 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
