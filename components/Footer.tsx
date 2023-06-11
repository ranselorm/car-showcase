import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-start text-black-100 mt-5 border-t border-gray-100 ">
      <div className="flex items-start max-md:flex-col sm:px-16 px-6 ">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5">
          <div className="flex flex-col gap-6 justify-start items-start">
            <Image
              src="/logo.svg"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
            <p className="text-base text-gray-700">
              Lorem ipsum dolor, sit amet <br />
              consectetur adipisicing elit.
              <br /> Molestiae, quos.
            </p>
          </div>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div className="footer__link" key={link.title}>
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 uppercase text-xs max-md:flex-col">
        <p>@2023 CarHub. All rights reserved</p>
        <div className="footer__copyrights-link">
          <Link className="text-gray-500 " href="/">
            Privacy & Policy
          </Link>
          <Link className="text-gray-500" href="/">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
