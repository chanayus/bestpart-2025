class RegisterWarrantyForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div data-opened="false" id="warranty-register" class="modal">
      <form action="" class="modal-content">
        <button type="button" data-target="#warranty-register" class="close-modal-button">
          <img src="./icons/x.svg" alt="" class="w-full h-full object-contain" />
        </button>

        <h3 class="text-center max-md:text-2xl font-medium">ลงทะเบียนรับประกันสินค้า</h3>

        <section class="flex gap-5 max-lg:flex-col">
          <div class="field">
            <label for="">ชื่อ*</label>
            <input type="text" id="firstname" name="firstname" placeholder="กรุณากรอกชื่อ" required />
          </div>
          <div class="field">
            <label for="">นามสกุล</label>
            <input type="text" id="lastname" name="lastname" placeholder="กรุณากรอกนามสกุล" required />
          </div>
        </section>

        <section class="flex gap-5 max-lg:flex-col">
          <div class="field">
            <label for="">เบอร์โทรศัพท์*</label>
            <input type="tel" inputmode="numeric" id="phone" name="phone" placeholder="กรุณากรอกเบอร์โทรศัพท์" required />
          </div>
          <div class="field">
            <label for="">E-mail</label>
            <input type="email" id="email" name="email" placeholder="กรุณากรอก E-mail" required />
          </div>
        </section>

        <fieldset>
          <label>เลือกสินค้าหมวด Electronic*</label>
          <div class="grid lg:grid-cols-2 gap-x-6 gap-y-3 p-5 rounded-2xl border">
            <div class="radio-input">
              <input type="radio" name="electronic-category" checked  id="c-30" value="c-30" required />
              <label for="c-30">TPMS CONTIS C-30</label>
            </div>
            <div class="radio-input">
              <input type="radio" name="electronic-category" id="xtp-200" value="xtp-200"  />
              <label for="xtp-200">TPMS XTP-200 5 SENSOR</label>
            </div>
            <div class="radio-input">
              <input type="radio" name="electronic-category" id="xtp-sp820" value="xtp-sp820"  />
              <label for="xtp-sp820">OBD2 MORNITOR XTP-SP820</label>
            </div>
            <div class="radio-input">
              <input type="radio" name="electronic-category" id="tps800-2" value="tps800-2"  />
              <label for="tps800-2">SEBSOR TPS800-2</label>
            </div>
          </div>
        </fieldset>

        <section>
          <label for="">รูปภาพใบเสร็จ*</label>
          <div class="file-input">
            <div>
              <div class="placeholder"  data-placeholder="อัปโหลดรูปเลขที่ใบเสร็จ (ขนาดไม่เกิน 10.0 MB นามสกุล .JPG, .PDF)"></div>
              <button>
                <img src="./icons/upload.svg" width="16" height="16" alt="" />
                Browse
              </button>
            </div>
            <input type="file" id="receipt-file" name="receipt-file" required />
          </div>
        </section>

        <section>
          <div class="flex justify-between items-center gap-8 label">
            <label for="">Serial Number*</label>
            <a class="lg:text-sm text-xs underline text-right text-stone">วิธีดู Serial Number*(เฉพาะสินค้า TPMS CONTIC C-30)</a>
          </div>
          <div class="file-input">
            <div>
              <div class="placeholder" data-placeholder="อัปโหลดรูป Serial Number (ขนาดไม่เกิน 10.0 MB นามสกุล .JPG, .PDF)"></div>
              <button>
                <img src="./icons/upload.svg" width="16" height="16" alt="" />
                Browse
              </button>
            </div>
            <input type="file" id="serial-number-file" name="serial-number-file" required />
          </div>
        </section>

        <button type="submit" class="btn-primary mx-auto max-w-48 w-full">ลงทะเบียน</button>
      </form>
    </div>
    `;
  }
}

customElements.define("warranty-register-form", RegisterWarrantyForm);
