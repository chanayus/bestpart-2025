class Navbar extends HTMLElement {
  pathname = window.location.pathname ?? "";

  getLinkStyle(path) {
    return path.includes(this.pathname) ? "" : "";
  }

  websitePartList = ["/cookies.html", "/api-documents.html", "/index.html", "/service.html", "/demo.html", "/support.html", "/about-us.html"];

  connectedCallback() {
    this.innerHTML = /*html*/ `
      <nav id="navbar" class="w-full bg-black text-white">
        <div class="container flex justify-between items-center py-4">
            <a href="">
              <img src="../images/logo.svg" width="243" height="32" alt="" class="lg:w-60 w-42" />
            </a>
            <div class="hidden lg:flex gap-8 [&_a]:transition-opacity [&_a:hover]:opacity-75">
              <a href="">หน้าหลัก</a>
              <a href="">สินค้า</a>
              <a href="">การรับประกัน</a>
              <a href="">ข่าวสาร</a>
              <a href="">เกี่ยวกับเรา</a>
              <a href="">ติดต่อเรา</a>
            </div>
            <button class="mobile-nav-toggle lg:hidden" >Menu</button>
        </div>
      </nav>
  
      <section id="mobile-nav" class="flex opacity-0 invisible lg:hidden justify-center items-center w-full h-full fixed top-0 left-0 z-30 bg-black/90">
        <button class="mobile-nav-toggle absolute top-4 right-4">Close</button>
      </section>
      `;
  }
}

customElements.define("navbar-component", Navbar);
