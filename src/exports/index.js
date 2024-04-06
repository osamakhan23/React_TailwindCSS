import { code, db, globe, lock } from "../assets/icons";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";

export const aboutgrids = [
  {
    icon: code,
    heading: "SSL Certificate",
    text: "Secure your customer interactions with top-tier SSL certificates, ensuring every transaction is protected from prying eyes.",
    label: "Secure Now",
  },
  {
    icon: db,
    heading: "Personal Domain",
    text: "Carve your unique space on the web with a personal domain that reflects your brand and sets you apart.",
    label: "Claim Yours",
  },
  {
    icon: globe,
    heading: "Media Storage",
    text: "Expand your digital horizons with vast media storage solutions, catering to your growing content needs without compromising speed.",
    label: "Expand Storage",
  },
  {
    icon: lock,
    heading: "Code Editor",
    text: "Streamline your development with an integrated code editor that offers speed, efficiency, and a suite of tools at your fingertips.",
    label: "Code Smarter",
  },
];

export const clients = [
  {
    image: client1,
    about:
      "As a freelance photographer, the personalized portfolio hosting solutions provided by the team have allowed me to showcase my work like never before. The responsive design ensures my portfolio looks stunning on all devices.",
    name: "Jordan Doe",
    profile: "Freelance Photographer",
  },
  {
    image: client2,
    about:
      "Our startup needed a robust platform to handle our e-commerce traffic, and we found the perfect match here. The customer support team guided us through every step, making our launch smooth and successful.",
    name: "Alexis Taylor",
    profile: "Co-founder & CEO",
  },
  {
    image: client3,
    about:
      "Switching to this hosting service was a game-changer for our online learning platform. The high uptime and fast load times have significantly improved our user experience.",
    name: "Elliott Bennett",
    profile: "CTO, Edutech Startup",
  },
  {
    image: client4,
    about:
      "I've seen a notable improvement in my website's performance since moving to this cloud hosting. As a web developer, I appreciate the advanced tools and technologies they provide.",
    name: "Samira Khan",
    profile: "Web Developer & Tech Blogger",
  },
];

export const pricing = [
  {
    plan: "Basic Plan",
    price: "$2.99/month",
    label: "Get Started",
    about:
      "Ideal for personal blogs or small business websites. Comes with 10 GB storage, 1 domain, and basic support.",
  },

  {
    plan: "Pro Plan",
    price: "$5.99/month",
    label: "Go Pro",
    about:
      "Perfect for growing businesses needing more resources. Includes 50 GB storage, up to 5 domains, and priority support.",
  },

  {
    plan: "Premium Plan",
    price: "$15.99/month",
    label: "Go Premium",
    about:
      "For large scale operations with 200 GB storage, unlimited domains, advanced security features, and 24/7 support.",
  },

  {
    plan: "Ultimate Plan",
    price: "$29.99/month",
    label: "Get Ultimate",
    about:
      "The complete package for high-traffic sites, with unlimited storage, domains, and dedicated support team.",
  },
];
