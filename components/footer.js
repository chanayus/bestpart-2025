class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <footer id="footer" class="w-full flex max-lg:flex-col">
            <div class="flex-1">
              <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.3769686345677!2d100.43366209999999!3d13.8163882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2916564905a3b%3A0xc5e3e5435686e0b5!2z4Lia4LiI4LiBLiDguYDguJrguKrguJfguYzguYTguJfguKPguYwgKOC5hOC4l-C4ouC5geC4peC4meC4lOC5jCk!5e0!3m2!1sth!2sth!4v1762247453768!5m2!1sth!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="flex-1 flex bg-black text-white justify-center items-center py-16">
              <div class="space-y-6">
                <img src="../images/logo.svg" width="243" height="32" class="w-48" alt="" />
                <address class="not-italic">
                  <p class="font-semibold text-xl">บริษัท เบสท์ไทร์ (ไทยแลนด์) จำกัด</p>
                  <p>989 หมู่ที่ 4 บางขุนกอง บางกรวย <br /> นนทบุรี 11130</p>
                </address>

                <div>
                  <p class="font-semibold text-xl"><b>ติดต่อเรา</b></p>
                  <p>เบอร์โทรศัพท์: 080-056-5888</p>
                  <p>Email: sales@bestpartth.com</p>
                </div>

                <div class="flex gap-x-6 items-center">
                    <img src="../images/qr-code.png" alt="" width="120" height="120" class="rounded-xl">
                    <div class="space-y-3">
                        <a href="https://line.me/R/ti/p/@bestpartth?from=page&amp;accountId=bestpartth" target="_blank" class="flex gap-x-3 items-center  link">
                            <img src="../icons/line.svg" alt="" width="24" height="24">
                            @bestpartth
                        </a>
                        <a href="https://www.facebook.com/bestpartth" target="_blank" class="flex gap-x-3 items-center  link"> 
                            <img src="../icons/facebook.svg" alt="" width="24" height="24">
                            bestpartth
                        </a>
                        <a href="https://www.youtube.com/@Bestpartth" target="_blank" class="flex gap-x-3 items-center  link">
                            <img src="../icons/youtube.svg" alt="" width="24" height="24">
                            Best Part Thailand
                        </a>
                    </div>
                </div>
              </div>
            </div>
        </footer>
        <div class="copyright">
          <p class="container py-3">
            Best Part Thailand © 2025 All Rights Reserved
          </p>
        </div>
        `;
  }
}

customElements.define("footer-component", Footer);
