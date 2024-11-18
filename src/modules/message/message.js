import "./message.scss"

export function showMessage(type, text) {

  const messageContainer = document.getElementById("messageContainer");
  //type - success, fail, warning;
  let message = document.createElement("div");
  message.className = `message__element ${type}`;
  message.innerHTML = text;

  messageContainer.append(message);

  setTimeout(() => message.remove(), 5000);

}
