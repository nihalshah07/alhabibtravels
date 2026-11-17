/* ==========================================================================
   Alhabib Travels — Multi-Page Interactive Application Controller
   Pure Vanilla ES6 JavaScript · Mobile & Desktop Ready
   ========================================================================== */

(function () {
  "use strict";

  const DATA = window.ALHABIB_DATA;
  if (!DATA) return;

  let showAllTours = false;

  // Shared DOM Elements (injected by js/layout.js)
  const header = document.getElementById("site-header");
  const backdrop = document.getElementById("global-backdrop");
  const detailDrawer = document.getElementById("detail-drawer");
  const drawerEyebrow = document.getElementById("drawer-eyebrow");
  const drawerBody = document.getElementById("drawer-body");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");

  const searchModal = document.getElementById("search-modal");
  const searchModalInput = document.getElementById("global-search-input");
  const searchModalResults = document.getElementById("global-search-results");

  const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNavCloseBtn = document.getElementById("mobile-nav-close-btn");

  // Page-Specific DOM Elements
  const destinationGrid = document.getElementById("destination-grid");
  const zonePlacesBreakdown = document.getElementById("zone-places-breakdown");
  const trekGrid = document.getElementById("trek-grid");
  const trekGearList = document.getElementById("trek-gear-list");
  const trekHealthList = document.getElementById("trek-health-list");
  const offbeatGrid = document.getElementById("offbeat-grid");
  const gurezStepsGrid = document.getElementById("gurez-steps-grid");

  const tourSearchInput = document.getElementById("tour-search-input");
  const tourZoneSelect = document.getElementById("tour-zone-select");
  const tourDaysSelect = document.getElementById("tour-days-select");
  const tourResetBtn = document.getElementById("tour-reset-btn");
  const tourTableBody = document.getElementById("tour-table-body");
  const tourCountText = document.getElementById("tour-count-text");
  const tourToggleAllBtn = document.getElementById("tour-toggle-all-btn");

  const valuesContent = document.getElementById("values-content");
  const reviewsTrack = document.getElementById("reviews-track");

  const inquiryForm = document.getElementById("inquiry-form");
  const inquiryPackageSelect = document.getElementById("inquiry-package");
  const inquiryMessage = document.getElementById("inquiry-message");
  const charCounter = document.getElementById("message-char-counter");
  const inquiryFeedback = document.getElementById("inquiry-feedback");
  const whatsappDirectBtn = document.getElementById("whatsapp-direct-btn");

  /* ------------------------------------------------------------------------
     1. Sticky Header Scroll Shadow
     ------------------------------------------------------------------------ */
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  /* ------------------------------------------------------------------------
     2. Opening N / S / E / W Cardinal Gateway Transition (Home Page)
     ------------------------------------------------------------------------ */
  const cardinalGateway = document.getElementById("cardinal-gateway");
  function playCardinalSlideIn() {
    if (!cardinalGateway) return;
    cardinalGateway.classList.add("is-resetting");
    void cardinalGateway.offsetWidth;
    cardinalGateway.classList.remove("is-resetting");
  }

  document.getElementById("replay-cardinal-btn")?.addEventListener("click", playCardinalSlideIn);

  /* ------------------------------------------------------------------------
     3. Home Hero Quick Trip Finder -> Multi-Page Router
     ------------------------------------------------------------------------ */
  const heroFinderForm = document.getElementById("hero-quick-finder");
  if (heroFinderForm) {
    heroFinderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const category = document.getElementById("finder-destination")?.value || "North";
      const duration = document.getElementById("finder-duration")?.value || "all";

      if (category === "trekking") {
        window.location.href = "packages.html#trekking";
        return;
      }
      if (category === "women") {
        window.location.href = "packages.html#women";
        return;
      }
      if (category === "luxury") {
        window.location.href = "packages.html#luxury";
        return;
      }
      if (category === "offbeat") {
        window.location.href = "offbeat.html";
        return;
      }

      const zonePageMap = {
        North: "north.html",
        South: "south.html",
        East: "east.html",
        West: "west.html"
      };

      if (zonePageMap[category]) {
        const params = duration !== "all" ? `?days=${encodeURIComponent(duration)}#zone-tours` : "";
        window.location.href = `${zonePageMap[category]}${params}`;
        return;
      }

      if (category === "Jammu & Kashmir" || category === "Ladakh") {
        const qs = new URLSearchParams();
        qs.set("q", category);
        if (duration !== "all") qs.set("days", duration);
        window.location.href = `north.html?${qs.toString()}#zone-tours`;
        return;
      }

      const qs = new URLSearchParams();
      qs.set("zone", category);
      if (duration !== "all") qs.set("days", duration);
      window.location.href = `packages.html?${qs.toString()}#itineraries`;
    });
  }

  /* ------------------------------------------------------------------------
     4. Dedicated Zone Pages (North, South, East, West)
     ------------------------------------------------------------------------ */
  function renderZonePageContent() {
    if (!destinationGrid) return;
    const zoneKey = destinationGrid.getAttribute("data-zone-key");
    const zone = DATA.zones[zoneKey];
    if (!zone) return;

    destinationGrid.innerHTML = zone.destinations
      .map(
        (dest) => `
        <article class="dest-card">
          <div class="dest-card__media">
            <img src="${dest.image}" alt="${dest.name} travel destination" class="dest-card__img" loading="lazy" />
            <span class="dest-card__codes">${dest.durationLabel}</span>
          </div>
          <div class="dest-card__body">
            <h3 class="dest-card__title">${dest.name}</h3>
            <p class="dest-card__excerpt">${dest.excerpt}</p>
            <div class="dest-card__spots">
              ${dest.places.map((p) => `<span class="spot-chip">${p.name}</span>`).join("")}
            </div>
            <div class="dest-card__footer">
              <button type="button" class="link-action" data-open-dest="${dest.id}" data-dest-zone="${zoneKey}" id="btn-dest-${dest.id}">
                Full Guide &amp; Routes
                <span aria-hidden="true">→</span>
              </button>
              <button type="button" class="btn btn--outline btn--sm" data-enquire-item="${dest.name} Holiday (${dest.durationLabel})">
                Enquire
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    if (zonePlacesBreakdown) {
      zonePlacesBreakdown.innerHTML = zone.destinations
        .map(
          (dest) => `
          <article class="editorial-panel" id="guide-${dest.id}">
            <span class="eyebrow" style="margin-bottom:0.35rem;">${dest.durationLabel}</span>
            <h3 class="editorial-panel__title">${dest.name} — Key Places</h3>
            <p style="font-size:0.89rem; color:var(--text-secondary); margin-bottom:1.1rem;">${dest.overview}</p>
            <ul class="check-list">
              ${dest.places
                .map(
                  (p) => `
                <li>
                  <span class="check-list__bullet">✦</span>
                  <div><strong>${p.name}:</strong> ${p.detail}</div>
                </li>
              `
                )
                .join("")}
            </ul>
          </article>
        `
        )
        .join("");
    }
  }

  /* ------------------------------------------------------------------------
     5. Signature Packages Page (Trekking, Women-Only, Luxury)
     ------------------------------------------------------------------------ */
  function renderTreksAndGuidelines() {
    if (trekGrid) {
      trekGrid.innerHTML = DATA.treks
        .map(
          (trek) => `
          <article class="trek-card">
            <div class="trek-card__media">
              <img src="${trek.image}" alt="${trek.name}" loading="lazy" />
              <span class="trek-card__season">Best Time: ${trek.season}</span>
            </div>
            <div class="trek-card__body">
              <div class="trek-card__meta-row">
                <span>${trek.duration}</span>
                <span>•</span>
                <span>${trek.distance}</span>
                <span>•</span>
                <span>${trek.difficulty}</span>
              </div>
              <h3 class="trek-card__title">${trek.name}</h3>
              <p class="trek-card__summary">${trek.summary}</p>
              <div class="trek-card__bottom">
                <div class="price-block">
                  <span class="price-block__label">${trek.priceNote}</span>
                  <span class="price-block__amount">${trek.price}</span>
                </div>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                  <button type="button" class="btn btn--outline btn--sm" data-open-trek="${trek.id}" id="btn-trek-${trek.id}">
                    Full Itinerary
                  </button>
                  <button type="button" class="btn btn--primary btn--sm" data-enquire-item="${trek.name} (${trek.price})">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </article>
        `
        )
        .join("");
    }

    if (trekGearList) {
      trekGearList.innerHTML = DATA.trekRequirements.gear
        .map((g) => `<li><span class="check-list__bullet">✓</span><span>${g}</span></li>`)
        .join("");
    }

    if (trekHealthList) {
      trekHealthList.innerHTML = DATA.trekRequirements.health
        .map((h) => `<li><span class="check-list__bullet">•</span><span>${h}</span></li>`)
        .join("");
    }
  }

  function activatePackageTab(targetKey) {
    const tabs = document.querySelectorAll("[data-pkg-tab]");
    const panels = document.querySelectorAll("[data-pkg-panel]");
    if (!tabs.length || !panels.length) return;

    tabs.forEach((t) => {
      const isMatch = t.getAttribute("data-pkg-tab") === targetKey;
      t.classList.toggle("is-active", isMatch);
      t.setAttribute("aria-selected", String(isMatch));
    });

    panels.forEach((p) => {
      p.classList.toggle("is-active", p.getAttribute("data-pkg-panel") === targetKey);
    });
  }

  document.querySelectorAll("[data-pkg-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-pkg-tab");
      activatePackageTab(target);
      if (history.replaceState) {
        history.replaceState(null, "", `#${target}`);
      }
    });
  });

  function syncPackageTabFromHash() {
    const hash = (window.location.hash || "").replace("#", "").toLowerCase();
    if (["trekking", "women", "luxury"].includes(hash)) {
      activatePackageTab(hash);
    }
  }
  window.addEventListener("hashchange", syncPackageTabFromHash);

  /* ------------------------------------------------------------------------
     6. Off-Beat & Untouched Kashmir Page
     ------------------------------------------------------------------------ */
  function renderOffbeat(filterKey) {
    if (!offbeatGrid) return;
    const items =
      filterKey === "all"
        ? DATA.offbeatPlaces
        : DATA.offbeatPlaces.filter((item) => item.category === filterKey);

    offbeatGrid.innerHTML = items
      .map(
        (item) => `
        <article class="offbeat-card">
          <div class="offbeat-card__media">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            <span class="offbeat-card__region">${item.region}</span>
          </div>
          <div class="offbeat-card__body">
            <h3 class="offbeat-card__title">${item.name}</h3>
            <p class="offbeat-card__desc">${item.description}</p>
            <div class="offbeat-card__spots">
              ${item.spots.map((s) => `<span class="offbeat-spot-tag">${s}</span>`).join("")}
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; padding-top:0.75rem; border-top:1px solid var(--border-on-dark);">
              ${
                item.itinerary
                  ? `<button type="button" class="link-action" style="color:var(--accent-gold-light);" data-open-offbeat="${item.id}">View 5-Day Gurez Plan →</button>`
                  : `<span style="font-size:0.78rem; color:var(--text-on-dark-muted);">Custom Private Excursion</span>`
              }
              <button type="button" class="btn btn--outline-light btn--sm" data-enquire-item="Off-Beat Kashmir: ${item.name}">
                Plan Visit
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join("");
  }

  document.querySelectorAll("[data-offbeat-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-offbeat-filter]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderOffbeat(btn.getAttribute("data-offbeat-filter"));
    });
  });

  function renderGurezSteps() {
    if (!gurezStepsGrid) return;
    const gurez = DATA.offbeatPlaces.find((o) => o.id === "gurez");
    if (!gurez || !gurez.itinerary) return;
    gurezStepsGrid.innerHTML = gurez.itinerary
      .map(
        (step) => `
        <div class="step-card">
          <span class="step-card__day">${step.day}</span>
          <h3 class="step-card__title">${step.title}</h3>
          <p class="step-card__desc">${step.detail}</p>
        </div>
      `
      )
      .join("");
  }

  /* ------------------------------------------------------------------------
     7. Regional Itinerary Explorer (Zone Pages + Packages Page — By Name!)
     ------------------------------------------------------------------------ */
  function initTourFiltersFromQuery() {
    if (!tourTableBody) return;
    const params = new URLSearchParams(window.location.search);
    const qParam = params.get("q");
    const zoneParam = params.get("zone");
    const daysParam = params.get("days");

    if (qParam && tourSearchInput) tourSearchInput.value = qParam;
    if (zoneParam && tourZoneSelect) tourZoneSelect.value = zoneParam;
    if (daysParam && tourDaysSelect) tourDaysSelect.value = daysParam;
  }

  function getFilteredTours() {
    if (!tourTableBody) return [];
    const fixedZone = tourTableBody.getAttribute("data-fixed-zone");
    const q = (tourSearchInput?.value || "").trim().toLowerCase();
    const z = fixedZone || tourZoneSelect?.value || "all";
    const d = tourDaysSelect?.value || "all";

    return DATA.itineraries.filter((t) => {
      const matchQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.region.toLowerCase().includes(q) ||
        t.pickup.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q);
      const matchZone = z === "all" || t.zone === z || t.region === z;
      const matchDays =
        d === "all" ||
        (d === "3-4" && (t.days.startsWith("03") || t.days.startsWith("04"))) ||
        (d === "5" && t.days.startsWith("05")) ||
        (d === "6+" && (t.days.startsWith("06") || t.days.startsWith("07") || t.days.startsWith("08")));
      return matchQuery && matchZone && matchDays;
    });
  }

  function renderTourTable() {
    if (!tourTableBody) return;
    const fixedZone = tourTableBody.getAttribute("data-fixed-zone");
    const filtered = getFilteredTours();
    const isFiltering =
      Boolean(fixedZone) ||
      (tourSearchInput?.value || "").trim() !== "" ||
      (tourZoneSelect && tourZoneSelect.value !== "all") ||
      (tourDaysSelect && tourDaysSelect.value !== "all");

    const visible = showAllTours || isFiltering ? filtered : filtered.slice(0, 12);

    if (filtered.length === 0) {
      tourTableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding:2.25rem; color:var(--text-muted);">
            No preset itinerary matched your filter. Click <strong>Reset</strong> or request a custom route!
          </td>
        </tr>
      `;
    } else {
      tourTableBody.innerHTML = visible
        .map(
          (t) => `
          <tr>
            <td data-label="Tour"><strong style="font-family:var(--font-display); font-size:1.12rem; color:var(--text-primary);">${t.name}</strong></td>
            <td data-label="Destination"><strong>${t.region}</strong> <span style="font-size:0.76rem; color:var(--text-muted);">· ${t.zone} Zone</span></td>
            <td data-label="Duration" style="white-space:nowrap; font-weight:600;">${t.days}</td>
            <td data-label="Pickup / Drop">${t.pickup} → ${t.drop}</td>
            <td data-label="Route" class="tour-td-summary">${t.summary}</td>
            <td class="tour-td-action">
              <button type="button" class="btn btn--outline btn--sm" data-enquire-item="${t.name} (${t.region} · ${t.days})">
                Enquire
              </button>
            </td>
          </tr>
        `
        )
        .join("");
    }

    if (tourCountText) {
      tourCountText.textContent = `Showing ${visible.length} of ${filtered.length} curated itineraries`;
    }

    if (tourToggleAllBtn) {
      if (filtered.length <= 12 || isFiltering) {
        tourToggleAllBtn.style.display = "none";
      } else {
        tourToggleAllBtn.style.display = "inline-flex";
        tourToggleAllBtn.textContent = showAllTours
          ? "Show Compact List (12)"
          : `View All ${filtered.length} Itineraries`;
      }
    }
  }

  [tourSearchInput, tourZoneSelect, tourDaysSelect].forEach((el) => {
    if (el) el.addEventListener("input", renderTourTable);
  });

  tourResetBtn?.addEventListener("click", () => {
    if (tourSearchInput) tourSearchInput.value = "";
    if (tourZoneSelect) tourZoneSelect.value = "all";
    if (tourDaysSelect) tourDaysSelect.value = "all";
    showAllTours = false;
    renderTourTable();
  });

  tourToggleAllBtn?.addEventListener("click", () => {
    showAllTours = !showAllTours;
    renderTourTable();
  });

  /* ------------------------------------------------------------------------
     8. About Us Values Tabs & Verified Reviews Carousel
     ------------------------------------------------------------------------ */
  function renderValuesTab(key) {
    const data = DATA.valuesTabs[key];
    if (!data || !valuesContent) return;
    valuesContent.innerHTML = `
      <h3 style="font-family:var(--font-display); font-size:1.65rem; margin-bottom:0.75rem;">${data.title}</h3>
      ${data.paragraphs.map((p) => `<p>${p}</p>`).join("")}
    `;
  }

  document.querySelectorAll("[data-values-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-values-tab]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderValuesTab(btn.getAttribute("data-values-tab"));
    });
  });

  function renderReviews() {
    if (!reviewsTrack) return;
    reviewsTrack.innerHTML = DATA.reviews
      .map(
        (r) => `
        <article class="review-card">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.65rem;">
              <div class="review-card__stars" aria-label="5 out of 5 stars">★★★★★</div>
              <span class="review-verified">Verified Google Review</span>
            </div>
            <p class="review-card__text">“${r.text}”</p>
          </div>
          <div class="review-card__author">
            <div style="display:flex; align-items:center; gap:0.7rem;">
              <div class="review-avatar" aria-hidden="true">${r.initials}</div>
              <div>
                <div class="review-card__name">${r.name}</div>
                <div class="review-card__date">${r.date}</div>
              </div>
            </div>
          </div>
        </article>
      `
      )
      .join("");
  }

  const prevReviewBtn = document.getElementById("reviews-prev-btn");
  const nextReviewBtn = document.getElementById("reviews-next-btn");
  if (prevReviewBtn && nextReviewBtn && reviewsTrack) {
    prevReviewBtn.addEventListener("click", () => {
      reviewsTrack.scrollBy({ left: -340, behavior: "smooth" });
    });
    nextReviewBtn.addEventListener("click", () => {
      reviewsTrack.scrollBy({ left: 340, behavior: "smooth" });
    });
  }

  /* ------------------------------------------------------------------------
     9. Slide-Over Detail Drawers (Destinations, Treks, Women Trip, Policies)
     ------------------------------------------------------------------------ */
  function openDrawer(eyebrowText, htmlContent) {
    if (!detailDrawer || !drawerBody || !drawerEyebrow || !backdrop) return;
    searchModal?.classList.remove("is-open");
    searchModal?.setAttribute("aria-hidden", "true");
    mobileNavDrawer?.classList.remove("is-open");
    mobileMenuBtn?.setAttribute("aria-expanded", "false");

    drawerEyebrow.textContent = eyebrowText;
    drawerBody.innerHTML = htmlContent;
    detailDrawer.classList.add("is-open");
    backdrop.classList.add("is-open");
    detailDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    drawerCloseBtn?.focus();
  }

  function closeAllModals() {
    detailDrawer?.classList.remove("is-open");
    detailDrawer?.setAttribute("aria-hidden", "true");
    searchModal?.classList.remove("is-open");
    searchModal?.setAttribute("aria-hidden", "true");
    mobileNavDrawer?.classList.remove("is-open");
    mobileMenuBtn?.setAttribute("aria-expanded", "false");
    backdrop?.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  drawerCloseBtn?.addEventListener("click", closeAllModals);
  backdrop?.addEventListener("click", closeAllModals);

  function openDestinationDrawer(zoneKey, destId) {
    const zone = DATA.zones[zoneKey];
    if (!zone) return;
    const dest = zone.destinations.find((d) => d.id === destId);
    if (!dest) return;

    const tours = DATA.itineraries.filter((t) => t.region === dest.regionKey);

    openDrawer(
      `${dest.zone} · Destination Guide`,
      `
      <img src="${dest.image}" alt="${dest.name}" class="detail-drawer__hero-img" />
      <h2 style="font-family:var(--font-display); font-size:clamp(1.75rem, 4vw, 2.2rem); line-height:1.1; margin-bottom:0.75rem;">${dest.name}</h2>
      <p style="color:var(--text-secondary); font-size:0.94rem; margin-bottom:1.5rem;">${dest.overview}</p>

      <h3 style="font-family:var(--font-display); font-size:1.45rem; margin-bottom:0.75rem;">Places You Can Visit</h3>
      <div class="drawer-day-list">
        ${dest.places
          .map(
            (p) => `
          <div class="drawer-day">
            <div class="drawer-day__title">${p.name}</div>
            <p class="drawer-day__desc">${p.detail}</p>
          </div>
        `
          )
          .join("")}
      </div>

      <h3 style="font-family:var(--font-display); font-size:1.45rem; margin-top:1.75rem; margin-bottom:0.75rem;">Curated ${dest.name} Itineraries</h3>
      <div class="drawer-day-list">
        ${tours
          .map(
            (t) => `
          <div class="drawer-day" style="display:flex; justify-content:space-between; align-items:center; gap:1rem; flex-wrap:wrap;">
            <div style="flex:1; min-width:200px;">
              <span class="drawer-day__tag">${t.days} · ${t.pickup} → ${t.drop}</span>
              <div class="drawer-day__title">${t.name}</div>
              <p class="drawer-day__desc">${t.summary}</p>
            </div>
            <button type="button" class="btn btn--primary btn--sm" data-enquire-item="${t.name} (${dest.name} · ${t.days})">
              Enquire
            </button>
          </div>
        `
          )
          .join("")}
      </div>
      `
    );
  }

  function openTrekDrawer(trekId) {
    const trek = DATA.treks.find((t) => t.id === trekId);
    if (!trek) return;

    openDrawer(
      `Kashmir Trekking Expedition · ${trek.season}`,
      `
      <img src="${trek.image}" alt="${trek.name}" class="detail-drawer__hero-img" />
      <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:0.75rem; margin-bottom:0.75rem;">
        <h2 style="font-family:var(--font-display); font-size:clamp(1.75rem, 4vw, 2.15rem); line-height:1.1;">${trek.name}</h2>
        <div style="font-family:var(--font-display); font-size:1.75rem; font-weight:700; color:var(--accent-walnut);">${trek.price} <span style="font-family:var(--font-sans); font-size:0.76rem; color:var(--text-muted); font-weight:500;">/ person (incl. taxes)</span></div>
      </div>
      <p style="font-size:0.83rem; font-weight:600; color:var(--text-muted); margin-bottom:1rem;">
        ${trek.duration} &nbsp;•&nbsp; ${trek.distance} &nbsp;•&nbsp; Difficulty: ${trek.difficulty}
      </p>
      <p style="color:var(--text-secondary); font-size:0.93rem; margin-bottom:1.4rem;">${trek.summary}</p>

      <button type="button" class="btn btn--primary" style="width:100%; margin-bottom:1.65rem;" data-enquire-item="${trek.name} (${trek.duration} · ${trek.price})">
        Reserve / Enquire ${trek.name}
      </button>

      <h3 style="font-family:var(--font-display); font-size:1.45rem; margin-bottom:0.75rem;">Day-by-Day Trail Itinerary</h3>
      <div class="drawer-day-list">
        ${trek.itinerary
          .map(
            (d) => `
          <div class="drawer-day">
            <span class="drawer-day__tag">${d.day}</span>
            <div class="drawer-day__title">${d.title}</div>
            <p class="drawer-day__desc">${d.detail}</p>
          </div>
        `
          )
          .join("")}
      </div>

      <h3 style="font-family:var(--font-display); font-size:1.4rem; margin-top:1.5rem; margin-bottom:0.6rem;">What's Included</h3>
      <ul style="display:grid; gap:0.45rem; font-size:0.88rem; color:var(--text-secondary); margin-bottom:1.5rem;">
        ${trek.included.map((inc) => `<li>✓ ${inc}</li>`).join("")}
      </ul>

      <h3 style="font-family:var(--font-display); font-size:1.4rem; margin-bottom:0.6rem;">Essential Gear &amp; Health Guidelines</h3>
      <div class="drawer-day" style="margin-bottom:0.85rem;">
        <span class="drawer-day__tag">Essential Trekking Gear</span>
        <ul style="display:grid; gap:0.35rem; font-size:0.85rem; color:var(--text-secondary); margin-top:0.4rem;">
          ${DATA.trekRequirements.gear.map((g) => `<li>• ${g}</li>`).join("")}
        </ul>
      </div>
      <div class="drawer-day">
        <span class="drawer-day__tag">Health &amp; Fitness Readiness</span>
        <ul style="display:grid; gap:0.35rem; font-size:0.85rem; color:var(--text-secondary); margin-top:0.4rem;">
          ${DATA.trekRequirements.health.map((h) => `<li>• ${h}</li>`).join("")}
        </ul>
      </div>
      `
    );
  }

  function openWomenPackageDrawer() {
    const wp = DATA.womenPackage;
    openDrawer(
      `Signature Package · ${wp.duration}`,
      `
      <img src="assets/images/kashmir-shikara.jpg" alt="${wp.title}" class="detail-drawer__hero-img" />
      <h2 style="font-family:var(--font-display); font-size:clamp(1.75rem, 4vw, 2.1rem); line-height:1.1; margin-bottom:0.4rem;">${wp.title}</h2>
      <p style="font-size:1rem; margin-bottom:1.25rem;">
        <span style="text-decoration:line-through; color:var(--text-muted); margin-right:0.4rem;">${wp.strikePrice}</span>
        <strong style="font-family:var(--font-display); font-size:1.85rem; color:var(--accent-terracotta);">${wp.price}</strong>
        <span style="font-size:0.85rem; color:var(--text-muted);">${wp.unit} (${wp.duration})</span>
      </p>

      <button type="button" class="btn btn--primary" style="width:100%; margin-bottom:1.65rem;" data-enquire-item="All-Women Kashmir Package (04N/05D · ₹9,500)">
        Book All-Women Kashmir Trip
      </button>

      <h3 style="font-family:var(--font-display); font-size:1.45rem; margin-bottom:0.75rem;">Detailed Day-Wise Itinerary</h3>
      <div class="drawer-day-list">
        ${wp.itinerary
          .map(
            (d) => `
          <div class="drawer-day">
            <span class="drawer-day__tag">${d.day}</span>
            <div class="drawer-day__title">${d.title}</div>
            <p class="drawer-day__desc">${d.detail}</p>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="drawer-two-col">
        <div class="drawer-day">
          <span class="drawer-day__tag">Inclusions</span>
          <ul style="display:grid; gap:0.35rem; font-size:0.84rem; color:var(--text-secondary); margin-top:0.4rem;">
            ${wp.inclusions.map((i) => `<li>✓ ${i}</li>`).join("")}
          </ul>
        </div>
        <div class="drawer-day">
          <span class="drawer-day__tag" style="color:var(--accent-terracotta);">Exclusions</span>
          <ul style="display:grid; gap:0.35rem; font-size:0.84rem; color:var(--text-secondary); margin-top:0.4rem;">
            ${wp.exclusions.map((x) => `<li>– ${x}</li>`).join("")}
          </ul>
        </div>
      </div>
      `
    );
  }

  function openOffbeatDrawer(id) {
    const item = DATA.offbeatPlaces.find((o) => o.id === id);
    if (!item || !item.itinerary) return;
    openDrawer(
      `Off-Beat Kashmir · ${item.region}`,
      `
      <img src="${item.image}" alt="${item.name}" class="detail-drawer__hero-img" />
      <h2 style="font-family:var(--font-display); font-size:clamp(1.75rem, 4vw, 2.1rem); margin-bottom:0.5rem;">${item.name} — 5-Day Itinerary</h2>
      <p style="color:var(--text-secondary); font-size:0.94rem; margin-bottom:1.4rem;">${item.description}</p>
      <div class="drawer-day-list">
        ${item.itinerary
          .map(
            (d) => `
          <div class="drawer-day">
            <span class="drawer-day__tag">${d.day}</span>
            <div class="drawer-day__title">${d.title}</div>
            <p class="drawer-day__desc">${d.detail}</p>
          </div>
        `
          )
          .join("")}
      </div>
      <button type="button" class="btn btn--primary" style="width:100%; margin-top:1rem;" data-enquire-item="Gurez Valley 5-Day Itinerary (Dawar & Tulail)">
        Enquire Gurez 5-Day Tour
      </button>
      `
    );
  }

  function openPolicyDrawer(policyKey) {
    const pol = DATA.policies[policyKey];
    if (!pol) return;
    openDrawer(
      pol.updated,
      `
      <h2 style="font-family:var(--font-display); font-size:clamp(1.75rem, 4vw, 2.15rem); margin-bottom:1.25rem;">${pol.title}</h2>
      <div class="drawer-day-list">
        ${pol.sections
          .map(
            (s) => `
          <div class="drawer-day">
            <div class="drawer-day__title">${s.heading}</div>
            <p class="drawer-day__desc">${s.body}</p>
          </div>
        `
          )
          .join("")}
      </div>
      `
    );
  }

  /* ------------------------------------------------------------------------
     10. Cross-Page Enquire Routing & Contact Form Pre-fill
     ------------------------------------------------------------------------ */
  function updateCharCount() {
    if (!inquiryMessage || !charCounter) return;
    charCounter.textContent = `${inquiryMessage.value.length} / 300`;
  }
  inquiryMessage?.addEventListener("input", updateCharCount);

  function prefillInquiryOnCurrentPage(itemLabel, shouldScroll) {
    if (!inquiryPackageSelect) return;
    const exists = Array.from(inquiryPackageSelect.options).some((o) => o.value === itemLabel);
    if (!exists) {
      const opt = document.createElement("option");
      opt.value = itemLabel;
      opt.textContent = itemLabel;
      inquiryPackageSelect.prepend(opt);
    }
    inquiryPackageSelect.value = itemLabel;

    if (inquiryMessage && !inquiryMessage.value.trim()) {
      inquiryMessage.value = `Hi Alhabib Travels, I would like itinerary & pricing details for ${itemLabel}.`;
      updateCharCount();
    }

    if (shouldScroll) {
      const formTarget = document.getElementById("inquiry-card-section") || inquiryForm;
      formTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        document.getElementById("inquiry-name")?.focus();
      }, 420);
    }
  }

  function handleEnquireAction(itemLabel) {
    closeAllModals();
    if (inquiryForm && inquiryPackageSelect) {
      prefillInquiryOnCurrentPage(itemLabel, true);
    } else {
      window.location.href = `contact.html?package=${encodeURIComponent(itemLabel)}#inquiry-card-section`;
    }
  }

  // Auto-populate contact form if ?package=... is in URL
  if (inquiryForm && inquiryPackageSelect) {
    const params = new URLSearchParams(window.location.search);
    const pkgParam = params.get("package");
    if (pkgParam) {
      prefillInquiryOnCurrentPage(pkgParam, false);
    }
  }

  document.addEventListener("click", (e) => {
    const destBtn = e.target.closest("[data-open-dest]");
    if (destBtn) {
      openDestinationDrawer(
        destBtn.getAttribute("data-dest-zone"),
        destBtn.getAttribute("data-open-dest")
      );
      return;
    }

    const trekBtn = e.target.closest("[data-open-trek]");
    if (trekBtn) {
      openTrekDrawer(trekBtn.getAttribute("data-open-trek"));
      return;
    }

    const womenBtn = e.target.closest("[data-open-women]");
    if (womenBtn) {
      openWomenPackageDrawer();
      return;
    }

    const offbeatBtn = e.target.closest("[data-open-offbeat]");
    if (offbeatBtn) {
      openOffbeatDrawer(offbeatBtn.getAttribute("data-open-offbeat"));
      return;
    }

    const policyBtn = e.target.closest("[data-open-policy]");
    if (policyBtn) {
      openPolicyDrawer(policyBtn.getAttribute("data-open-policy"));
      return;
    }

    const enquireBtn = e.target.closest("[data-enquire-item]");
    if (enquireBtn) {
      handleEnquireAction(enquireBtn.getAttribute("data-enquire-item"));
    }
  });

  /* ------------------------------------------------------------------------
     11. Global Instant Search Modal (Cmd/Ctrl + K across all 9 pages)
     ------------------------------------------------------------------------ */
  const searchIndex = [
    { type: "Page", title: "Home — Explore India by Direction", sub: "Opening N/S/E/W gateway, Kashmir hero & reviews", action: () => (window.location.href = "index.html") },
    { type: "Page", title: "North Zone — Kashmir, Ladakh & Rajasthan", sub: "Himalayan valleys, high passes & royal forts", action: () => (window.location.href = "north.html") },
    { type: "Page", title: "South Zone — Kerala, Goa & Mumbai", sub: "Backwaters, coastal beaches & tea hills", action: () => (window.location.href = "south.html") },
    { type: "Page", title: "East Zone — West Bengal, Bihar & Jharkhand", sub: "Darjeeling tea gardens, Bodh Gaya & waterfalls", action: () => (window.location.href = "east.html") },
    { type: "Page", title: "West Zone — Udaipur, Gujarat & Chhattisgarh", sub: "Rann of Kutch, royal lakes & Chitrakote Falls", action: () => (window.location.href = "west.html") },
    { type: "Page", title: "Off-Beat & Untouched Kashmir", sub: "Gurez, Chattergul, Astan Marg, Kokernag, Sinthan Top & Aharbal", action: () => (window.location.href = "offbeat.html") },
    { type: "Page", title: "Signature Packages & Regional Itineraries", sub: "Trekking, ₹9,500 Women-Only trip, Luxury & All-India Tours", action: () => (window.location.href = "packages.html") },
    { type: "Page", title: "About Alhabib Travels & Team", sub: "1997 YIR Holidays heritage, leadership & 7-member team", action: () => (window.location.href = "about.html") },
    { type: "Page", title: "Contact Us — Srinagar & New Delhi Desks", sub: "Addresses, direct phone numbers & travel inquiry form", action: () => (window.location.href = "contact.html") }
  ];

  Object.entries(DATA.zones).forEach(([zKey, zVal]) => {
    zVal.destinations.forEach((d) => {
      searchIndex.push({
        type: zVal.name,
        title: d.name,
        sub: d.places.map((p) => p.name).join(", "),
        action: () => openDestinationDrawer(zKey, d.id)
      });
    });
  });

  DATA.treks.forEach((t) => {
    searchIndex.push({
      type: `Trek · ${t.price}`,
      title: t.name,
      sub: `${t.duration} · ${t.distance}`,
      action: () => openTrekDrawer(t.id)
    });
  });

  searchIndex.push({
    type: "Women-Only · ₹9,500",
    title: DATA.womenPackage.title,
    sub: "04 Nights / 05 Days Srinagar, Gulmarg, Pahalgam & Houseboat",
    action: () => openWomenPackageDrawer()
  });

  DATA.offbeatPlaces.forEach((o) => {
    searchIndex.push({
      type: "Off-Beat Kashmir",
      title: o.name,
      sub: o.spots.join(", "),
      action: () => {
        if (o.itinerary) {
          openOffbeatDrawer(o.id);
        } else {
          window.location.href = "offbeat.html";
        }
      }
    });
  });

  DATA.itineraries.forEach((tc) => {
    searchIndex.push({
      type: `${tc.region} · ${tc.days}`,
      title: tc.name,
      sub: tc.summary,
      action: () => handleEnquireAction(`${tc.name} (${tc.region} · ${tc.days})`)
    });
  });

  function openSearchModal() {
    if (!searchModal || !backdrop || !searchModalInput) return;
    detailDrawer?.classList.remove("is-open");
    mobileNavDrawer?.classList.remove("is-open");
    searchModal.classList.add("is-open");
    backdrop.classList.add("is-open");
    searchModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    searchModalInput.value = "";
    renderSearchResults("");
    setTimeout(() => searchModalInput.focus(), 50);
  }

  function renderSearchResults(query) {
    if (!searchModalResults) return;
    const q = query.trim().toLowerCase();
    const matches = q
      ? searchIndex.filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.sub.toLowerCase().includes(q) ||
            item.type.toLowerCase().includes(q)
        )
      : searchIndex.slice(0, 12);

    if (matches.length === 0) {
      searchModalResults.innerHTML = `<div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">No matching pages, destinations, or itineraries found.</div>`;
      return;
    }

    searchModalResults.innerHTML = matches
      .slice(0, 15)
      .map(
        (m, idx) => `
        <button type="button" class="search-result-item" data-search-idx="${idx}">
          <div style="min-width:0;">
            <div style="font-weight:600; font-size:0.9rem;">${m.title}</div>
            <div style="font-size:0.77rem; color:var(--text-muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${m.sub}</div>
          </div>
          <span class="spot-chip" style="flex-shrink:0;">${m.type}</span>
        </button>
      `
      )
      .join("");

    searchModalResults.querySelectorAll("[data-search-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = matches[Number(btn.getAttribute("data-search-idx"))];
        if (item) item.action();
      });
    });
  }

  document.getElementById("open-search-btn")?.addEventListener("click", openSearchModal);
  document.getElementById("close-search-btn")?.addEventListener("click", closeAllModals);
  searchModalInput?.addEventListener("input", (e) => renderSearchResults(e.target.value));

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearchModal();
    } else if (e.key === "Escape") {
      closeAllModals();
    }
  });

  /* ------------------------------------------------------------------------
     12. Mobile Hamburger Navigation Drawer
     ------------------------------------------------------------------------ */
  mobileMenuBtn?.addEventListener("click", () => {
    if (!mobileNavDrawer || !backdrop) return;
    mobileNavDrawer.classList.add("is-open");
    backdrop.classList.add("is-open");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  });

  mobileNavCloseBtn?.addEventListener("click", closeAllModals);
  mobileNavDrawer?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeAllModals);
  });

  /* ------------------------------------------------------------------------
     13. Contact Inquiry Form Submission & WhatsApp Dispatch
     ------------------------------------------------------------------------ */
  function buildInquirySummary() {
    const name = document.getElementById("inquiry-name")?.value.trim() || "";
    const email = document.getElementById("inquiry-email")?.value.trim() || "";
    const phone = document.getElementById("inquiry-phone")?.value.trim() || "";
    const pkg = inquiryPackageSelect?.value || "Custom Tour Inquiry";
    const msg = inquiryMessage?.value.trim() || "";
    return { name, email, phone, pkg, msg };
  }

  inquiryForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const { name, email, phone, pkg, msg } = buildInquirySummary();
    if (!name || !email || !inquiryFeedback) return;

    const subject = encodeURIComponent(`Travel Inquiry: ${pkg} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nSelected Package / Tour: ${pkg}\n\nMessage:\n${msg || "Please share itinerary and pricing details."}`
    );

    inquiryFeedback.innerHTML = `
      Thank you, <strong>${name}</strong>! Your inquiry for <strong>${pkg}</strong> is ready.
      Our Srinagar &amp; New Delhi travel desk responds promptly—you can also
      <a href="mailto:sales@alhabibtravels.com?subject=${subject}&body=${body}" style="text-decoration:underline; font-weight:700;">open directly in your Email client</a>
      or call <a href="tel:+919971782785" style="text-decoration:underline; font-weight:700;">+91-9971782785</a>.
    `;
    inquiryFeedback.classList.add("is-visible");
  });

  whatsappDirectBtn?.addEventListener("click", () => {
    const { name, phone, pkg, msg } = buildInquirySummary();
    const text = encodeURIComponent(
      `Hello Alhabib Travels!${name ? ` My name is ${name}.` : ""} I'm interested in: ${pkg}.${phone ? ` Phone: ${phone}.` : ""} ${msg}`
    );
    window.open(`https://wa.me/919971782785?text=${text}`, "_blank", "noopener");
  });

  /* ------------------------------------------------------------------------
     Initialize Active Page Sections
     ------------------------------------------------------------------------ */
  renderZonePageContent();
  renderTreksAndGuidelines();
  syncPackageTabFromHash();
  renderOffbeat("all");
  renderGurezSteps();
  initTourFiltersFromQuery();
  renderTourTable();
  renderValuesTab("philosophy");
  renderReviews();
})();
