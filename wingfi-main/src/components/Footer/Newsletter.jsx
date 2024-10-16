import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Corrected Twitter import

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    link: 'http://www.linkedin.com/feed',
  },
  {
    icon: <FaFacebookF />,
    link: 'http://www.facebook.com',
  },
  {
    icon: <FaInstagram />,
    link: 'http://www.instagram.com',
  },
  {
    icon: <FaTwitter />,
    link: 'http://www.twitter.com',
  },
];

const Newsletter = () => {
  return (
    <div>
      <div>
        <h2>Newsletter</h2>
        <form action="">
          <div>
            <input type="text" placeholder="Enter your email" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="flex gap-4 mt-4">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
