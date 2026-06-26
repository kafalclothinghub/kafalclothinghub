// Category Filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const category = this.getAttribute('data-category');
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Show/hide categories
    document.querySelectorAll('.category-container').forEach(container => {
      if(category === 'all') {
        container.style.display = 'block';
      } else {
        container.style.display = container.getAttribute('data-category') === category ? 'block' : 'none';
      }
    });
  });
});

// 3D View Button
document.querySelectorAll('.view-3d-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    alert('3D viewer will open for this product!\nNote: Add .glb model files to your images folder to enable 3D viewing.');
  });
});

// Add to Cart
document.querySelectorAll('.btn-small').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const productCard = this.closest('.product-card') || this.closest('.featured-card');
    const productName = productCard.querySelector('h3, h4').textContent;
    const price = productCard.querySelector('.price')?.textContent || 'N/A';
    
    alert(`${productName} added to cart!\nPrice: ${price}`);
  });
});

// Animated Particle Effect (Optional - Hero Section Enhancement)
function createParticles() {
  const container = document.getElementById('particles');
  if(!container) return;
  
  for(let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 4 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = 'rgba(255, 179, 0, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
    container.appendChild(particle);
  }
}

// CSS for particle animation
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
    50% { transform: translate(${Math.random() * 50 - 25}px, -30px) rotate(180deg); opacity: 1; }
  }
`;
document.head.appendChild(style);

createParticles();

// Smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if(href !== '#') {
      e.preventDefault();
      const element = document.querySelector(href);
      if(element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Product Price Sorting (Optional Feature)
function sortByPrice(order) {
  const productCards = Array.from(document.querySelectorAll('.product-card'));
  const container = document.querySelector('.product-grid');
  
  productCards.sort((a, b) => {
    const priceA = parseInt(a.getAttribute('data-price')) || 0;
    const priceB = parseInt(b.getAttribute('data-price')) || 0;
    return order === 'asc' ? priceA - priceB : priceB - priceA;
  });
  
  productCards.forEach(card => container.appendChild(card));
}

// Dynamic hover effects for product cards
document.querySelectorAll('.product-card, .featured-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.animation = 'none';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.animation = '';
  });
});

console.log('Kafal Clothing Hub - Website Active ✓');
