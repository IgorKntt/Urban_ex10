import './footerLinks.scss';

export function setFooterLinks(linksTitle, linksArr) {

  if (!linksTitle || !linksArr) return null;

  let links = document.createElement("ul");
  links.className = "footer__links";
  links.innerHTML = `<li><h3>${linksTitle}</h3></li>`;

  linksArr.forEach(link => {
    links.innerHTML = links.innerHTML +
      `<li>
        <a href="${link.href}">${link.name}</a>
      </li>`;
  });

  return links;
}
