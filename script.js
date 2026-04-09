/* ==============================
   BRÛLÉE CAFÉ — JAVASCRIPT
   ============================== */

/* ---- Navbar scroll ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ---- Mobile menu ---- */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', closeMobile);

function closeMobile() {
  mobileMenu.classList.remove('open');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobile();
});

/* ---- Menu data ---- */
const menuData = {
  coffee: [
    {
      name: 'Signature Flat White',
      desc: 'Double ristretto, micro-foamed oat milk, subtle caramel undertone.',
      price: '$6.50',
      img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80',
      tags: ['hot']
    },
    {
      name: 'Cold Brew Tonic',
      desc: '18-hour cold brew poured over Fever-Tree tonic, orange zest.',
      price: '$7.00',
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
      tags: ['cold', 'new']
    },
    {
      name: 'Honey Lavender Latte',
      desc: 'Espresso, steamed oat milk, house-made lavender honey syrup.',
      price: '$7.50',
      img: 'https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=400&q=80',
      tags: ['hot', 'sweet']
    },
    {
      name: 'Nitro Cold Brew',
      desc: 'Smooth nitrogen-infused cold brew on tap. Silky, rich, no ice needed.',
      price: '$7.00',
      img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80',
      tags: ['cold']
    }
  ],
  food: [
    {
      name: 'Avocado Sourdough Toast',
      desc: 'House-baked sourdough, smashed avocado, chili flakes, poached egg, microgreens.',
      price: '$14',
      img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80',
      tags: ['veg']
    },
    {
      name: 'Smoked Salmon Bowl',
      desc: 'Beetroot-cured salmon, quinoa, cucumber ribbons, dill crème fraîche, lemon.',
      price: '$18',
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
      tags: []
    },
    {
      name: 'Shakshuka Brûlée',
      desc: 'Spiced tomato sauce, poached eggs, feta, toasted focaccia. Our signature dish.',
      price: '$15',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
      tags: ['veg', 'hot']
    },
    {
      name: 'Club Sandwich',
      desc: 'Sourdough, free-range chicken, crispy pancetta, truffle aioli, heirloom tomato.',
      price: '$16',
      img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80',
      tags: []
    }
  ],
  pastry: [
    {
      name: 'Almond Croissant',
      desc: 'Twice-baked with frangipane cream, flaked almonds, powdered sugar.',
      price: '$5.50',
      img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80',
      tags: ['sweet']
    },
    {
      name: 'Cardamom Danish',
      desc: 'Laminated pastry dough, cardamom custard, pearl sugar crust. Baked fresh daily.',
      price: '$5.00',
      img: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&q=80',
      tags: ['sweet', 'new']
    },
    {
      name: 'Banana Walnut Loaf',
      desc: 'Moist banana loaf with candied walnuts, served warm with cultured butter.',
      price: '$4.50',
      img: 'https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=400&q=80',
      tags: ['sweet', 'veg']
    },
    {
      name: 'Kouign-Amann',
      desc: 'Buttery, caramelized Breton pastry — crisp outside, pillowy soft inside.',
      price: '$6.00',
      img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&q=80',
      tags: ['sweet']
    }
  ],
  drinks: [
    {
      name: 'Watermelon Mint Cooler',
      desc: 'Fresh watermelon juice, torn mint, lime juice, pink Himalayan salt rim.',
      price: '$6.00',
      img: 'https://images.unsplash.com/photo-1560526860-1f0e56046c85?w=400&q=80',
      tags: ['cold', 'veg']
    },
    {
      name: 'Golden Turmeric Latte',
      desc: 'Steamed oat milk, turmeric, ginger, cinnamon, black pepper, raw honey.',
      price: '$6.50',
      img: 'https://images.unsplash.com/photo-1615485291143-96b5370a1eea?w=400&q=80',
      tags: ['hot', 'veg']
    },
    {
      name: 'Hibiscus Iced Tea',
      desc: 'House-brewed hibiscus tea, honey, lemon, dried rose petals. Naturally caffeine-free.',
      price: '$5.50',
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
      tags: ['cold', 'veg']
    },
    {
      name: 'Mango Lassi',
      desc: 'Alphonso mango purée, chilled yoghurt, cardamom, micro basil garnish.',
      price: '$6.50',
      img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80',
      tags: ['cold', 'sweet']
    }
  ]
};

/* ---- Render menu ---- */
function renderMenu(cat) {
  const grid = document.getElementById('menuGrid');
  const items = menuData[cat] || [];

  grid.innerHTML = items.map((item, i) => `
    <div class="menu-card fade-up" style="animation-delay:${i * 0.08}s" onclick="addToOrder('${item.name}', '${item.price}')">
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="menu-card-body">
        <div class="menu-tags">
          ${item.tags.map(t => `<span class="mtag ${t}">${t}</span>`).join('')}
        </div>
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <div class="menu-card-footer">
          <span class="menu-price">${item.price}</span>
          <button class="btn-add" onclick="event.stopPropagation(); addToOrder('${item.name}', '${item.price}')">+ Add</button>
        </div>
      </div>
    </div>
  `).join('');

  // Trigger animation
  setTimeout(() => {
    grid.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  }, 30);
}

/* ---- Tab switching ---- */
const tabs = document.getElementById('menuTabs');
tabs.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.cat);
  });
});

// Initial render
renderMenu('coffee');

/* ---- Add to order toast ---- */
const orderList = [];

function addToOrder(name, price) {
  orderList.push({ name, price });
  showToast(`☕ ${name} added!`);
}

function showToast(msg) {
  const toast = document.getElementById('cartToast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ---- Scroll animations ---- */
const fadeEls = document.querySelectorAll('.about-img-stack, .about-text-col, .pillar, .special-card, .g-item, .testi-card');
fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

/* ---- Testimonial slider ---- */
const testiTrack = document.getElementById('testiTrack');
const testiDots  = document.getElementById('testiDots');
const testiCards = testiTrack ? Array.from(testiTrack.querySelectorAll('.testi-card')) : [];

if (testiCards.length) {
  testiCards.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      testiCards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    });
    testiDots.appendChild(dot);
  });

  testiTrack.addEventListener('scroll', () => {
    const idx = Math.round(testiTrack.scrollLeft / (testiCards[0].offsetWidth + 24));
    testiDots.querySelectorAll('span').forEach((d, i) => d.classList.toggle('active', i === idx));
  });

  let tIdx = 0;
  let autoSlideInterval = setInterval(() => {
    tIdx = (tIdx + 1) % testiCards.length;
    testiCards[tIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }, 4000);

  // Pause auto-slide on hover
  testiTrack.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  testiTrack.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
      tIdx = (tIdx + 1) % testiCards.length;
      testiCards[tIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }, 4000);
  });
}

/* ---- Date min ---- */
window.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('rDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
});

/* ---- Reservation submit ---- */
function handleReservation() {
  const first    = document.getElementById('rFirstName')?.value.trim();
  const last     = document.getElementById('rLastName')?.value.trim();
  const email    = document.getElementById('rEmail')?.value.trim();
  const date     = document.getElementById('rDate')?.value;
  const time     = document.getElementById('rTime')?.value;
  const party    = document.getElementById('rParty')?.value;
  const occasion = document.getElementById('rOccasion')?.value;

  if (!first || !last)               { notify('Please enter your full name.'); return; }
  if (!email || !/\S+@\S+\.\S+/.test(email)) { notify('Please enter a valid email address.'); return; }
  if (!date)                          { notify('Please select a date.'); return; }
  if (!time)                          { notify('Please select a preferred time.'); return; }

  const refCode = 'BRU-' + Math.random().toString(36).substring(2, 8).toUpperCase();
  const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  });

  document.getElementById('modalMsg').textContent =
    `See you soon, ${first}! Your table is all set.`;

  document.getElementById('modalDetails').innerHTML = `
    <strong>Confirmation #:</strong> ${refCode}<br>
    <strong>Name:</strong> ${first} ${last}<br>
    <strong>Date:</strong> ${formattedDate}<br>
    <strong>Time:</strong> ${time}<br>
    <strong>Party:</strong> ${party} ${parseInt(party) === 1 ? 'person' : 'people'}<br>
    <strong>Occasion:</strong> ${occasion || 'Regular visit'}<br>
    <strong>Confirmation sent to:</strong> ${email}
  `;

  document.getElementById('modalOverlay').classList.add('active');
  document.getElementById('reserveForm').reset();
}

/* ---- Close modal ---- */
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

document.getElementById('modalOverlay')?.addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ---- Alert helper ---- */
function notify(msg) {
  const el = document.createElement('div');
  el.textContent = msg;
  Object.assign(el.style, {
    position: 'fixed',
    top: '1.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#C4892A',
    color: '#FFF',
    padding: '.8rem 1.8rem',
    borderRadius: '40px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '.86rem',
    fontWeight: '500',
    zIndex: '4000',
    boxShadow: '0 8px 30px rgba(44,24,16,.3)',
    whiteSpace: 'nowrap',
    transition: 'opacity .3s'
  });
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 350); }, 2800);
}
