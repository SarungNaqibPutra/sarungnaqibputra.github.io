function navbarLoader () {
    fetch('/page/navbar.html')
    .then(Response => Response.text())
    .then(html => {
        const navbarContainer = document.getElementById('navbar-container')
        navbarContainer.innerHTML = html;
    });
}
navbarLoader();

const scrollButton = document.querySelector(".scroll-top");
scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

