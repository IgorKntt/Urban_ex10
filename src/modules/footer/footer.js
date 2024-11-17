import './footer.scss';
import Logo from './LogoKrist.svg';
import Envelope from './icons/envelope.svg';
import Phone from './icons/phone.svg';
import Pointer from './icons/pointer.svg';
import { setFooterLinks } from './footerLinks/footerLinks';


export function showFooter() {
  const body = document.getElementsByTagName("body")[0];
  const footer = document.createElement("footer");
  const wrapper = document.createElement("div");
  const footerContent = document.createElement("div");
  const footerBottom = document.createElement("div");
  const footerAddress = document.createElement("address");
  const footerSubscribe = document.createElement("div");

  footerAddress.className = "footer__address"
  footerAddress.innerHTML = `
    <p>
      <img src=${Logo} alt="Logo" class="footer__logo">
    </p>
    <p>
      <img src=${Phone} alt="phone" width=24 height=24>
      <a href="tel:+1 7045550127">(704) 555-0127</a>
    </p>
    <p>
      <img src=${Envelope} alt="mail" width=24 height=24>
      <a href="mailto:krist@example.com">krist@example.com</a>
    </p>
    <p>
      <img src=${Pointer} alt="address" width=24 height=24>
      <span>3891 Ranchview Dr. Richardson, California 62639</span>
    </p>`;
  footerContent.className = "footer__content";


  const footerInfo = setFooterLinks("Information", [
    {
      href: "#",
      name: "My Account"
    },
    {
      href: "#",
      name: "Login"
    },
    {
      href: "#",
      name: "My Cart"
    },
    {
      href: "#",
      name: "My Wishlist"
    },
    {
      href: "#",
      name: "Checkout"
    }
  ]);

  const footerService = setFooterLinks("Service", [
    {
      href: "#",
      name: "About Us"
    },
    {
      href: "#",
      name: "Careers"
    },
    {
      href: "#",
      name: "Delivery Information"
    },
    {
      href: "#",
      name: "Privacy Policy"
    },
    {
      href: "#",
      name: "Terms & Conditions"
    }
  ]);

  footerSubscribe.className = "footer__subscribe"
  footerSubscribe.innerHTML = `
    <h3>Subscribe</h3>
    <p>Enter your email below to be the first to know
     about new collections and product launches.</p>
     <div class="footer__subscribe-email">
      <img src="${Envelope}" width=24 height=24 alt="envelope">
      <input type="text" placeholder="Your Email">
      <span>&#8594</span>
     </div>

  `;

  footerContent.append(footerAddress, footerInfo, footerService, footerSubscribe);


  footer.setAttribute("id", "footer");
  footer.className = "footer";


  wrapper.className = "footer__wrapper";
  wrapper.append(footerContent, footerBottom);
  footer.append(wrapper);

  body.append(footer);



}
