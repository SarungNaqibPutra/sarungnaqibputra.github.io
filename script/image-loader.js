function imageLoader () {
    fetch('/page/imageloader.html')
    .then(Response => Response.text())
    .then(html => {
        const loadContainer = document.getElementsByClassName('image-loader')
        imageLoader.innerHTML = html;
    });
}
navbarLoader();