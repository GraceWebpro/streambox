export const flyToCart = (event) => {
    const card = event.currentTarget.closest(".menu-card");
    if (!card) return;
  
    const img = card.querySelector("img");
    if (!img) return;
  
    const cartIcon = document.querySelector("#cart-icon");
    if (!cartIcon) return;
  
    const clone = img.cloneNode(true);
    const rect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();
  
    clone.style.position = "fixed";
    clone.style.left = rect.left + "px";
    clone.style.top = rect.top + "px";
    clone.style.width = "80px";
    clone.style.zIndex = 9999;
    clone.style.transition = "all 0.7s ease-in-out";
  
    document.body.appendChild(clone);
  
    setTimeout(() => {
      clone.style.left = cartRect.left + "px";
      clone.style.top = cartRect.top + "px";
      clone.style.opacity = 0.2;
      clone.style.transform = "scale(0.3)";
    }, 10);
  
    setTimeout(() => clone.remove(), 700);
  };