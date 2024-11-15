import './header.scss';
import Logo from './LogoKrist.svg';

export function showHeader() {
  const header = document.createElement("header");
  const wrapper = document.createElement("div");
  const logoElem = document.createElement("div");
  // const logo = new Image();
  const nav = document.createElement("nav");
  const menu = document.createElement("div");
  const body = document.getElementsByTagName("body")[0];
  //console.log(body.prepend);


  header.setAttribute("id", "header");
  header.className = "header";

  wrapper.className = "header__contentWrapper";

  logoElem.className = "header__logo";

  logoElem.innerHTML =
    `<img src="${Logo}" alt="logo">`;
  /*
  logo.src = Logo;
  logo.alt = "logo";
  logoElem.appendChild(logo);*/

  nav.className = "header__nav";
  nav.innerHTML =
    `<ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Our Story</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>`;


  menu.className = "header__menu";
  menu.innerHTML = "Menu items";



  //TODO: append logo from module
  //TODO: append nav from module
  //TODO: append menu from module

  wrapper.append(logoElem, nav, menu);
  header.appendChild(wrapper);

  body.prepend(header);
  /*

  header.innerHTML = `<div class="header__contentWrapper">
      <div class="header__logo">
        <img src="../public/img/LogoKrist.svg" alt="Logo">
      </div>
      <nav class="header__nav">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Our Story</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div class="header__menu">Menu items</div>
    </div>`
*/
  return header;
}
