// Sh  <header class="shared-hea  <footer class="shared-footer">
    <div class="shared-footer-content">
      <p><a href="/">Rainy Lake Trading Co.</a> • <a href="/stays">Pine & Stone Stays</a> • <a href="/about">About Riley</a> • <a href="https://order.penaltyboxcanteen.com" target="_blank">Penalty Box Canteen</a></p>
      <small>Fort Frances, Northwestern Ontario business collective • Serving the Rainy River District with northern pride and entrepreneurial spirit since 2024</small>
    </div>
  </footer>`
    <a href="/" class="shared-logo">
      <img src="assets/img/{{LOGO_IMG}}" alt="{{LOGO_ALT}}" class="shared-logo-img">
      <div class="shared-logo-text">
        <h1>{{LOGO_TITLE}}</h1>
        <p>{{LOGO_SUBTITLE}}</p>
      </div>
    </a>
    <nav class="shared-nav">
      {{NAV_LINKS}}
    </nav>
  </header>`nts JavaScript
// This file manages the header and footer content across all pages

// Shared Header HTML
const sharedHeaderHTML = `
  <header class="shared-header">
    <a href="index.html" class="shared-logo">
      <img src="assets/img/{{LOGO_IMG}}" alt="{{LOGO_ALT}}" class="shared-logo-img">
      <div class="shared-logo-text">
        <h1>{{LOGO_TITLE}}</h1>
        <p>{{LOGO_SUBTITLE}}</p>
      </div>
    </a>
    <nav class="shared-nav">
      {{NAV_LINKS}}
    </nav>
  </header>
`;

// Shared Footer HTML
const sharedFooterHTML = `
  <footer class="shared-footer">
    <div class="shared-footer-content">
      <p><a href="index.html">Rainy Lake Trading Co.</a> • <a href="pine-stone.html">Pine & Stone Stays</a> • <a href="about.html">About Riley</a> • <a href="https://order.penaltyboxcanteen.com" target="_blank">Penalty Box Canteen</a></p>
      <small>Fort Frances, Northwestern Ontario business collective • Serving the Rainy River District with northern pride and entrepreneurial spirit since 2024</small>
    </div>
  </footer>
`;

// Page-specific configurations
const pageConfigs = {
  '/': {
    logoImg: 'rltc.png',
    logoAlt: 'Rainy Lake Trading Co.',
    logoTitle: 'Rainy Lake Trading Co.',
    logoSubtitle: 'Northwestern Ontario Business Collective',
    navLinks: `
      <a href="/about" class="shared-nav-link">About Riley</a>
      <a href="https://pineandstonestays.ca" class="shared-nav-link">Pine & Stone Stays</a>
      <a href="https://order.penaltyboxcanteen.com" target="_blank" class="shared-nav-link">Penalty Box Canteen</a>
    `
  },
  'index.html': {
    logoImg: 'rltc.png',
    logoAlt: 'Rainy Lake Trading Co.',
    logoTitle: 'Rainy Lake Trading Co.',
    logoSubtitle: 'Northwestern Ontario Business Collective',
    navLinks: `
      <a href="/about" class="shared-nav-link">About Riley</a>
      <a href="https://pineandstonestays.ca" class="shared-nav-link">Pine & Stone Stays</a>
      <a href="https://order.penaltyboxcanteen.com" target="_blank" class="shared-nav-link">Penalty Box Canteen</a>
    `
  },
  '/stays': {
    logoImg: 'pass.png',
    logoAlt: 'Pine & Stone Stays',
    logoTitle: 'Pine & Stone Stays',
    logoSubtitle: 'Northwestern Ontario Short-Term Rental',
    navLinks: `
      <a href="/" class="shared-nav-link back-link">← Rainy Lake Trading Co.</a>
      <a href="/about" class="shared-nav-link">About Riley</a>
      <a href="https://pineandstonestays.ca" class="shared-nav-link">Visit Pine & Stone Site</a>
      <a href="https://order.penaltyboxcanteen.com" target="_blank" class="shared-nav-link">Penalty Box Canteen</a>
    `
  },
  'pine-stone.html': {
    logoImg: 'pass.png',
    logoAlt: 'Pine & Stone Stays',
    logoTitle: 'Pine & Stone Stays',
    logoSubtitle: 'Northwestern Ontario Short-Term Rental',
    navLinks: `
      <a href="/" class="shared-nav-link back-link">← Rainy Lake Trading Co.</a>
      <a href="/about" class="shared-nav-link">About Riley</a>
      <a href="https://pineandstonestays.ca" class="shared-nav-link">Visit Pine & Stone Site</a>
      <a href="https://order.penaltyboxcanteen.com" target="_blank" class="shared-nav-link">Penalty Box Canteen</a>
    `
  },
  '/about': {
    logoImg: 'rltc.png',
    logoAlt: 'Rainy Lake Trading Co.',
    logoTitle: 'Rainy Lake Trading Co.',
    logoSubtitle: 'Meet Riley Pollard',
    navLinks: `
      <a href="/" class="shared-nav-link">← Home</a>
      <a href="https://pineandstonestays.ca" class="shared-nav-link">Pine & Stone Stays</a>
      <a href="https://order.penaltyboxcanteen.com" target="_blank" class="shared-nav-link">Penalty Box Canteen</a>
    `
  },
  'about.html': {
    logoImg: 'rltc.png',
    logoAlt: 'Rainy Lake Trading Co.',
    logoTitle: 'Rainy Lake Trading Co.',
    logoSubtitle: 'Meet Riley Pollard',
    navLinks: `
      <a href="/" class="shared-nav-link">← Home</a>
      <a href="https://pineandstonestays.ca" class="shared-nav-link">Pine & Stone Stays</a>
      <a href="https://order.penaltyboxcanteen.com" target="_blank" class="shared-nav-link">Penalty Box Canteen</a>
    `
  }
};

// Function to get current page name
function getCurrentPageName() {
  const path = window.location.pathname;
  
  console.log('Current path:', path); // Debug logging
  
  // Handle clean URLs
  if (path === '/' || path === '/index' || path === '') {
    return '/';
  } else if (path === '/stays') {
    return '/stays';
  } else if (path === '/about') {
    return '/about';
  }
  
  // Handle .html files (fallback for direct access)
  const pageName = path.split('/').pop() || '/';
  if (pageName === 'index.html') {
    return '/';
  } else if (pageName === 'about.html') {
    return '/about';
  } else if (pageName === 'pine-stone.html') {
    return '/stays';
  }
  
  return pageName === '' ? '/' : pageName;
}

// Function to load shared components
function loadSharedComponents() {
  console.log('Loading shared components...'); // Debug logging
  
  const currentPage = getCurrentPageName();
  console.log('Detected page:', currentPage); // Debug logging
  
  const config = pageConfigs[currentPage] || pageConfigs['/'];
  console.log('Using config:', config); // Debug logging
  
  // Replace placeholders in header HTML
  let headerHTML = sharedHeaderHTML
    .replace('{{LOGO_IMG}}', config.logoImg)
    .replace('{{LOGO_ALT}}', config.logoAlt)
    .replace('{{LOGO_TITLE}}', config.logoTitle)
    .replace('{{LOGO_SUBTITLE}}', config.logoSubtitle)
    .replace('{{NAV_LINKS}}', config.navLinks);
  
  // Find and replace header placeholder
  const headerPlaceholder = document.getElementById('shared-header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = headerHTML;
    console.log('Header loaded successfully'); // Debug logging
  } else {
    console.error('Header placeholder not found'); // Debug logging
  }
  
  // Find and replace footer placeholder
  const footerPlaceholder = document.getElementById('shared-footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = sharedFooterHTML;
    console.log('Footer loaded successfully'); // Debug logging
  } else {
    console.error('Footer placeholder not found'); // Debug logging
  }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing shared components...'); // Debug logging
  loadSharedComponents();
});

// Fallback: also try loading after a short delay in case DOMContentLoaded already fired
setTimeout(function() {
  if (!document.getElementById('shared-header-placeholder')) {
    console.log('Fallback loading shared components...'); // Debug logging
    loadSharedComponents();
  }
}, 100);
