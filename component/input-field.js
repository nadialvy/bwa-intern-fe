class InputField extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const label = this.getAttribute("label") || "Label";
    const type = this.getAttribute("type") || "text";
    const placeholder = this.getAttribute("placeholder") || "";
    const id = this.getAttribute("id") || "";
    const icon = this.getAttribute("icon") || "";

    this.innerHTML = `
      <div class="mb-4">
        <label for="${id}" class="block text-sm font-medium text-gray-700">${label}</label>
        <div class="relative">
          <input
            type="${type}"
            id="${id}"
            class="w-full p-2 pl-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#2F6A62] focus:outline-none"
            placeholder="${placeholder}"
            required
          />
          ${
            icon
              ? `<span class="absolute inset-y-0 left-0 flex items-center pl-3">
                      <img src="${icon}" alt="${label} icon" />
                    </span>`
              : ""
          }
        </div>
      </div>
    `;
  }
}

customElements.define("input-field", InputField);
