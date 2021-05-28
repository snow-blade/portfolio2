import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} freeman Irabaruta. All Rights Reserved.`,
  author: {
    name: "Freeman Irabaruta",
    accounts: [
      {
        url: "https://github.com/snow-blade",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/tweepcoder",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/jujue",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://www.linkedin.com/in/freeman-irabaruta-7213981a0/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://www.quora.com/profile/Freeman-Irabaruta",
        label: "Quora Account",
        type: "red",
        icon: <FaQuora />
      },
      {
        url: "mailto:freemanirabaruta@gmail.com",
        label: "Mail Freeman",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
