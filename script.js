// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in animation on scroll
const fadeSections = document.querySelectorAll('.fade-section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeSections.forEach((section) => observer.observe(section));

// WhatsApp order handler
const orderForm = document.getElementById('order-form');
const phoneNumber = '212612345678';

orderForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const product = document.getElementById('product').value;
  const quantity = document.getElementById('quantity').value || '1';
  const comment = document.getElementById('comment').value.trim() || 'N/A';

  if (!name || !phone || !product) {
    alert('Merci de renseigner votre nom, téléphone et produit.');
    return;
  }

  const message = `Commande de ${product} x${quantity} par ${name}. Téléphone: ${phone}. Commentaire: ${comment}`;
  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;

  window.open(waUrl, '_blank');
});
