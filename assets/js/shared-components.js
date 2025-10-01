// Simple shared components for RLTC website
document.addEventListener('DOMContentLoaded', function() {
  // Simple header HTML
  const headerHTML = `
    <header class="shared-header">
      <a href="/" class="shared-logo">
        <img src="assets/img/rltc.png" alt="Rainy Lake Trading Co." class="shared-logo-img">
        <div class="shared-logo-text">
          <h1>Rainy Lake Trading Co.</h1>
          <p>Northwestern Ontario Business Collective</p>
        </div>
      </a>
      <nav class="shared-nav">
        <a href="/about.html" class="shared-nav-link">About Riley</a>
        <a href="/pine-stone.html" class="shared-nav-link">Pine & Stone Stays</a>
        <a href="https://order.penaltyboxcanteen.com" target="_blank" class="shared-nav-link">Penalty Box Canteen</a>
      </nav>
    </header>
  `;

  // Simple footer HTML
  const footerHTML = `
    <footer class="shared-footer">
      <div class="shared-footer-content">
        <p><a href="/">Rainy Lake Trading Co.</a> • <a href="/pine-stone.html">Pine & Stone Stays</a> • <a href="/about.html">About Riley</a> • <a href="https://order.penaltyboxcanteen.com" target="_blank">Penalty Box Canteen</a></p>
        <small>Fort Frances, Northwestern Ontario business collective • Serving the Rainy River District with northern pride and entrepreneurial spirit since 2024</small>
      </div>
    </footer>
  `;

  // Replace header placeholder
  const headerPlaceholder = document.getElementById('shared-header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = headerHTML;
  }

  // Replace footer placeholder
  const footerPlaceholder = document.getElementById('shared-footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = footerHTML;
  }
});
