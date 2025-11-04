class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <footer id="footer" class="w-full py-4">
            <div class="container ">
              Footer
            </div>
        </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
