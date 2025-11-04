class Navbar extends HTMLElement {
  pathname = window.location.pathname ?? "";

  getLinkStyle(path) {
    return path.includes(this.pathname) ? "" : "";
  }

  websitePartList = ["/cookies.html", "/api-documents.html", "/index.html", "/service.html", "/demo.html", "/support.html", "/about-us.html"];

  connectedCallback() {
    this.innerHTML = /*html*/ `
      <nav id="navbar" class="w-full ">
        <div class="container flex justify-between items-center py-4">
            <a href="">Home</a>
            <button class="mobile-nav-toggle" >Menu</button>
        </div>
      </nav>
  
      <section id="mobile-nav" class="flex opacity-0 invisible lg:hidden justify-center items-center w-full h-full fixed top-0 left-0 z-30 bg-black/90">
        <button  class="mobile-nav-toggle absolute top-4 right-4">Close</button>
      </section>
      `;
  }
}

customElements.define("navbar-component", Navbar);
