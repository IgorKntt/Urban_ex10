import './footer.scss';
import Logo from './LogoKrist.svg';
import Envelope from './icons/envelope.svg';
import Phone from './icons/phone.svg';
import Pointer from './icons/pointer.svg';


export function showFooter() {
  const body = document.getElementsByTagName("body")[0];
  const footer = document.createElement("footer");
  const wrapper = document.createElement("div");
  const footerContent = document.createElement("div");
  const footerBottom = document.createElement("div");
  const footerAddress = document.createElement("address");
  const footerInfo = document.createElement("div");
  const footerService = document.createElement("div");
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
      <span>3891 Ranch</span>
    </p>`;

  footerContent.append(footerAddress);



  footer.setAttribute("id", "footer");
  footer.className = "footer";


  wrapper.className = "footer__wrapper";
  wrapper.append(footerContent, footerBottom);
  footer.append(wrapper);

  body.append(footer);



}
