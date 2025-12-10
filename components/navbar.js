class Navbar extends HTMLElement {
  pathname = window.location.pathname ?? "";

  getLinkStyle(path) {
    return path.includes(this.pathname) ? "text-primary" : "text-white";
  }

  websitePartList = ["/cookies.html", "/api-documents.html", "/index.html", "/service.html", "/demo.html", "/support.html", "/about-us.html"];

  connectedCallback() {
    this.innerHTML = /*html*/ `
      <nav id="navbar" class=" fixed top-0 left-0 w-full bg-black text-white  z-30">
        <div class="container flex justify-between items-center py-4">
            <a href="../index.html">
              <img src="../images/logo.svg" width="243" height="32" alt="" class="lg:w-60 w-42" />
            </a>
            <div class="hidden lg:flex items-center gap-8 [&_a,&>.open-modal-button]:transition-opacity [&_a:hover,&>.open-modal-button:hover]:opacity-75">
              <a href="../index.html">หน้าหลัก</a>
              <a href="../index.html#product-section">สินค้า</a>
              <button class="open-modal-button" data-target="#warranty-register">การรับประกัน</button>
              <a href="../index.html#news-section">ข่าวสาร</a>
              <a href="../index.html#about-section">เกี่ยวกับเรา</a>
              <a href="#footer">ติดต่อเรา</a>
              <button type="button" id="lang-switcher" class="flex items-center gap-x-2 relative">
                <img src="../icons/global.svg" alt="" />
                <span>ไทย</span>
                <img src="../icons/chevron-down.svg" alt="" />

                <div class="dropdown absolute bg-white space-y-2 text-black rounded z-10 top-[calc(100%+0.5rem)] right-0 min-w-25 h-fit p-3 text-right flex flex-col gap-2">
                  <a href="" class="flex items-center gap-x-1.5">
                    <img src="../images/thai.png" alt="" class="size-4" />  
                    ไทย
                  </a>
                  <a href="" class="flex items-center gap-x-1.5">
                    <img src="../images/uk.png" alt="" class="size-4" />  
                    English
                  </a>
                </div>
              </button>
            </div>
            <button class="mobile-nav-toggle lg:hidden size-9" >
              <img src="../icons/bar.svg" alt="" width="36" />
            </button>
        </div>
      </nav>
  
      <section id="mobile-nav" class="flex opacity-0 gap-32 invisible lg:hidden justify-center items-center flex-col w-full h-full fixed top-0 left-0 z-30 bg-black/90">
        <button class="mobile-nav-toggle absolute top-4 right-4">
          <img src="../icons/x.svg" alt="" width="36" />
        </button>
        <div class="menu-list font-medium gap-8 flex flex-col text-2xl text-center">
          <a href="../index.html" class="transition-colors text-white hover:text-orange">หน้าหลัก</a>
          <a href="../index.html#product-section" class="transition-colors ${this.getLinkStyle(["/product.html"])}">สินค้า</a>
          <button class="open-modal-button text-white" data-target="#warranty-register">การรับประกัน</button>
          <a href="../index.html#news-section" class="transition-colors ${this.getLinkStyle(["/news.html"])}">ข่าวสาร</a>
          <a href="../index.html#about-section" class="transition-colors ${this.getLinkStyle(["/about.html"])}">เกี่ยวกับเรา</a>
          <a href="#footer" class="btn-orange px-10 py-2.5 text-white">ติดต่อเรา</a>
        </div>

        <div id="mobile-lang-switcher" class="text-white flex items-center gap-8 text-lg">
          <a href="" class="flex items-center gap-x-1.5">
            <img src="../images/thai.png" alt="" class="size-4" />  
            ไทย
          </a>
          <a href="" class="flex items-center gap-x-1.5">
            <img src="../images/uk.png" alt="" class="size-4" />  
            English
          </a>
        </div>
      </section>
      `;
  }
}

customElements.define("navbar-component", Navbar);
