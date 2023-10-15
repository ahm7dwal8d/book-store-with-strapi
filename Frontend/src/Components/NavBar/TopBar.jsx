import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGooglePlus,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center pb-2">
      <div className="info">
        <FontAwesomeIcon icon={faPhone} />
        <a
          className="text-black dark:text-white hover:text-white ps-2"
          href="tel:+01000751287"
        >
          +01000751287
        </a>
      </div>
      <div className="icons flex">
        <span className="pe-3 text-black dark:text-white inline-block">
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
        <span className="pe-3 text-black dark:text-white inline-block">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        <span className="pe-3 text-black dark:text-white inline-block">
          <FontAwesomeIcon icon={faGooglePlus} />
        </span>
        <span className="pe-3 text-black dark:text-white inline-block">
          <FontAwesomeIcon icon={faInstagram} />
        </span>
        <span className="pe-3 text-black dark:text-white inline-block">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </div>
    </div>
  );
}
