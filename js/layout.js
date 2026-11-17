/* ==========================================================================
   Alhabib Travels — Shared Multi-Page Layout Chrome (Header, Nav, Footer,
   Modals & Mobile Drawer) · Pure Vanilla JavaScript
   ========================================================================== */

(function () {
  "use strict";

  const activePage = document.body.getAttribute("data-page") || "home";

  const navItems = [
    { id: "home", label: "Home", mobileLabel: "Home", href: "index.html" },
    { id: "north", label: "North", mobileLabel: "North Zone", href: "north.html" },
    { id: "south", label: "South", mobileLabel: "South Zone", href: "south.html" },
    { id: "east", label: "East", mobileLabel: "East Zone", href: "east.html" },
    { id: "west", label: "West", mobileLabel: "West Zone", href: "west.html" },
    { id: "offbeat", label: "Off-Beat", mobileLabel: "Off-Beat Kashmir", href: "offbeat.html" },
    { id: "packages", label: "Packages", mobileLabel: "Packages & Itineraries", href: "packages.html" },
    { id: "about", label: "About Us", mobileLabel: "About Us & Team", href: "about.html" },
    { id: "contact", label: "Contact", mobileLabel: "Contact Us", href: "contact.html" }
  ];

  const topShell = document.getElementById("site-top-shell");
  if (topShell) {
    topShell.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>

      <!-- Sticky Navigation Header -->
      <header class="site-header" id="site-header">
        <div class="container site-header__inner">
          <a href="index.html" class="brand" id="brand-home-link" aria-label="Alhabib Travels Home">
            <img src="assets/images/logo.png" alt="Alhabib Travels Compass Logo" class="brand__logo" width="44" height="40" />
            <div class="brand__text">
              <span class="brand__name">Alhabib Travels</span>
              <span class="brand__tag">Since 1997 · Srinagar &amp; Delhi</span>
            </div>
          </a>

          <nav class="primary-nav" aria-label="Primary Navigation">
            ${navItems
              .map(
                (item) =>
                  `<a href="${item.href}" class="primary-nav__link${
                    item.id === activePage ? " is-active" : ""
                  }"${item.id === activePage ? ' aria-current="page"' : ""} id="nav-link-${item.id}">${item.label}</a>`
              )
              .join("")}
          </nav>

          <div class="header-actions">
            <button type="button" class="search-trigger" id="open-search-btn" aria-label="Search destinations and itineraries">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span>Search</span>
              <kbd>⌘K</kbd>
            </button>
            <a href="contact.html" class="btn btn--primary btn--sm" id="header-plan-btn">Plan a Trip</a>
            <button type="button" class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-nav-drawer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 7h16M4 12h16M4 17h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    `;
  }

  // Optional Zone Sub-navigation Mount (used on North, South, East, West & Off-Beat pages)
  const zoneSubnavMount = document.getElementById("zone-subnav-mount");
  if (zoneSubnavMount) {
    const zoneLinks = [
      { id: "north", label: "N · North Zone", href: "north.html" },
      { id: "south", label: "S · South Zone", href: "south.html" },
      { id: "east", label: "E · East Zone", href: "east.html" },
      { id: "west", label: "W · West Zone", href: "west.html" },
      { id: "offbeat", label: "Off-Beat Kashmir", href: "offbeat.html" }
    ];

    zoneSubnavMount.innerHTML = `
      <nav class="zone-subnav" aria-label="Regional Zone Switcher">
        <div class="container zone-subnav__inner">
          <div class="zone-pill-row">
            ${zoneLinks
              .map(
                (z) =>
                  `<a href="${z.href}" class="zone-pill-link${
                    z.id === activePage ? " is-active" : ""
                  }"${z.id === activePage ? ' aria-current="page"' : ""} id="subnav-${z.id}">${z.label}</a>`
              )
              .join("")}
          </div>
          <a href="packages.html#itineraries" class="link-action" id="subnav-all-itineraries">
            All Regional Itineraries →
          </a>
        </div>
      </nav>
    `;
  }

  const bottomShell = document.getElementById("site-bottom-shell");
  if (bottomShell) {
    bottomShell.innerHTML = `
      <!-- Site Footer -->
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <a href="index.html" class="brand" style="margin-bottom:1rem;">
                <img src="assets/images/logo.png" alt="Alhabib Travels" class="brand__logo" width="44" height="40" />
                <div class="brand__text">
                  <span class="brand__name" style="color:#fff;">Alhabib Travels</span>
                  <span class="brand__tag" style="color:var(--accent-gold-light);">Dignified · Honest · Truthful</span>
                </div>
              </a>
              <p style="font-size:0.88rem; color:var(--text-on-dark-muted); max-width:36ch;">
                Serving travelers since 1997 (originally founded as YIR Holidays) with personalized leisure, trekking, women-centric, and luxury holidays across Kashmir and India.
              </p>
              <div class="social-row">
                <a href="https://www.facebook.com/ALHABIBTRAVELZ/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook" id="social-facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://twitter.com/ALHABIBTRAVEL" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter / X" id="social-twitter">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.instagram.com/alhabibtravels/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram" id="social-instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
                </a>
                <a href="https://www.tripadvisor.com/Attraction_Review-g297623-d23589960-Reviews-ALHABIB_TRAVELS-Srinagar_Srinagar_District_Kashmir_Jammu_and_Kashmir.html" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="TripAdvisor" id="social-tripadvisor" title="TripAdvisor Reviews">
                  ★
                </a>
              </div>
            </div>

            <div>
              <h4 class="footer-col__title">Explore India</h4>
              <ul class="footer-links">
                <li><a href="north.html">North Zone (Kashmir, Ladakh, Rajasthan)</a></li>
                <li><a href="south.html">South Zone (Kerala, Goa, Mumbai)</a></li>
                <li><a href="east.html">East Zone (West Bengal, Bihar, Jharkhand)</a></li>
                <li><a href="west.html">West Zone (Udaipur, Gujarat, Chhattisgarh)</a></li>
                <li><a href="offbeat.html">Off-Beat &amp; Untouched Kashmir</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col__title">Packages &amp; Company</h4>
              <ul class="footer-links">
                <li><a href="packages.html#trekking">Kashmir Trekking Packages</a></li>
                <li><a href="packages.html#women">Exclusive Women-Only Trip (₹9,500)</a></li>
                <li><a href="packages.html#luxury">Luxury Bespoke Packages</a></li>
                <li><a href="packages.html#itineraries">All Regional Itineraries</a></li>
                <li><a href="about.html">About Us &amp; Team</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col__title">Direct Reach</h4>
              <ul class="footer-links">
                <li><a href="tel:+919971782785">+91-9971782785</a> / <a href="tel:+919797128794">+91-9797128794</a></li>
                <li><a href="tel:01942473470">0194-2473470</a> / <a href="tel:01942503034">0194-2503034</a></li>
                <li><a href="mailto:sales@alhabibtravels.com">sales@alhabibtravels.com</a></li>
                <li><a href="mailto:alhabibtravelskashmir@gmail.com">alhabibtravelskashmir@gmail.com</a></li>
                <li><a href="contact.html" style="color:var(--accent-gold-light); font-weight:600;">Srinagar &amp; New Delhi Offices →</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div>Copyright © Alhabib Travels · All Rights Reserved.</div>
            <div class="footer-legal">
              <button type="button" data-open-policy="privacy" id="footer-privacy-btn">Privacy &amp; Return Policy</button>
              <span aria-hidden="true">|</span>
              <button type="button" data-open-policy="terms" id="footer-terms-btn">Terms &amp; Conditions</button>
            </div>
          </div>
        </div>
      </footer>

      <!-- Floating Call / Concierge Pill -->
      <a href="tel:+919797128794" class="floating-concierge" id="floating-call-btn" aria-label="Call Alhabib Travels Sales Desk">
        <span>☎</span>
        <span class="floating-concierge__label-desktop">Talk to Kashmir Desk: +91-9797128794</span>
        <span class="floating-concierge__label-mobile">Call Desk</span>
      </a>

      <!-- Shared Backdrop -->
      <div class="backdrop" id="global-backdrop"></div>

      <!-- Slide-Over Detail Drawer -->
      <aside class="detail-drawer" id="detail-drawer" aria-hidden="true" aria-label="Details and Itinerary">
        <div class="detail-drawer__header">
          <span class="eyebrow" id="drawer-eyebrow" style="margin-bottom:0;">Details</span>
          <button type="button" class="detail-drawer__close" id="drawer-close-btn" aria-label="Close drawer">✕</button>
        </div>
        <div class="detail-drawer__body" id="drawer-body"></div>
      </aside>

      <!-- Global Instant Search Modal -->
      <div class="search-modal" id="search-modal" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Quick Search">
        <div class="search-modal__bar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            type="search"
            id="global-search-input"
            class="search-modal__input"
            placeholder="Search pages, destinations, treks, or itineraries (e.g. Gulmarg, Pangong, Munnar, Gurez)..."
          />
          <button type="button" class="btn btn--outline btn--sm" id="close-search-btn">Esc</button>
        </div>
        <div class="search-modal__results" id="global-search-results"></div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <aside class="mobile-nav-drawer" id="mobile-nav-drawer" aria-label="Mobile Navigation">
        <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:0.75rem; border-bottom:1px solid var(--border-subtle);">
          <div class="brand" style="gap:0.55rem;">
            <img src="assets/images/logo.png" alt="" class="brand__logo" width="34" height="31" />
            <span class="brand__name" style="font-size:1.2rem;">Alhabib Travels</span>
          </div>
          <button type="button" class="detail-drawer__close" id="mobile-nav-close-btn" aria-label="Close navigation">✕</button>
        </div>

        <nav class="mobile-nav-links" aria-label="All Pages">
          ${navItems
            .map(
              (item) =>
                `<a href="${item.href}" class="${item.id === activePage ? "is-active" : ""}"${
                  item.id === activePage ? ' aria-current="page"' : ""
                }>
                  <span>${item.mobileLabel}</span>
                  <span aria-hidden="true" style="font-family:var(--font-sans); font-size:0.85rem; opacity:0.65;">→</span>
                </a>`
            )
            .join("")}
        </nav>

        <div style="margin-top:auto; padding-top:1rem; border-top:1px solid var(--border-subtle); display:grid; gap:0.65rem;">
          <a href="contact.html" class="btn btn--primary" style="width:100%;">Send a Travel Inquiry</a>
          <div style="font-size:0.82rem; color:var(--text-muted); display:grid; gap:0.25rem;">
            <a href="tel:+919971782785">☎ +91-9971782785</a>
            <a href="mailto:sales@alhabibtravels.com">✉ sales@alhabibtravels.com</a>
          </div>
        </div>
      </aside>
    `;
  }
})();
