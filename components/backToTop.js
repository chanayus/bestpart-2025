class BackToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <button type="button" id="back-to-top">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="50" cy="50" r="45" fill="none" stroke="var(--primary)" stroke-width="6" />
        </svg>
        <div class="bg-primary svg-icon" data-src="../icons/back-to-top.svg"></div>
    </button>
    `;
    }
}

customElements.define("back-to-top-component", BackToTop);
