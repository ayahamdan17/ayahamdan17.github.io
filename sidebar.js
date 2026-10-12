document.write(`

  <!-- ── Desktop sidebar ── -->
  <aside class="sidebar">
    <a href="/index.html" class="sidebar-title">aya hamdan</a>

    <nav class="sidenav">

      <!-- Personal -->
      <div class="nav-item">
        <button class="nav-btn" onclick="toggleDropdown(this)">Personal</button>
        <div class="dropdown-panel">
          <a href="/film-algue.html">Mossy</a>
          <a href="/film-terreux.html">Earthy</a>
          <a href="/film-fruite.html">Fruity</a>
          <a href="/film-marin.html">Briny</a>
          <a href="/film-fume.html">Smoked</a>
          <a href="/film-bleeux.html">Wheaty</a>
          <a href="/film-pineux.html">Piney</a>
          <a href="/film-sale.html">Salty</a>
          <a href="/film-piquant.html">Hot</a>
          <a href="/film-gluant.html">Glutinous</a>
          <a href="/film-herbeux.html">Herby</a>
          <a href="/film-doux.html">Mild</a>
          <a href="/film-floral.html">Floral</a>
        </div>
      </div>

      <!-- Commercial -->
      <div class="nav-item">
        <button class="nav-btn" onclick="toggleDropdown(this)">Commercial</button>
        <div class="dropdown-panel">
          <a href="/tangley1.html">Interior [Dorset Villa, 1]</a>
          <a href="/tangley2.html">Interior [Dorset Villa, 2]</a>
          <a href="/pondhouse.html">Interior [Clapton House]</a>
          <a href="/roksanda1.html">Boutique [Roksanda, 1]</a>
          <a href="/roksanda2.html">Boutique [Roksanda, 2]</a>
          <a href="/bb1.html">Gallery [Béton Brut, 1]</a>
          <a href="/bb2.html">Gallery [Béton Brut, 2]</a>
        </div>
      </div>

      <!-- Info (replaces Freetime; no sub-links needed) -->
      <div class="nav-item">
        <a class="nav-link" href="/info.html">Info</a>
      </div>

    </nav>
  </aside>


  <!-- ── Mobile fixed top bar ── -->
  <div class="mobile-header">
    <a href="/index.html" class="mobile-header-title">aya hamdan</a>
    <button class="hamburger" id="hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>


  <!-- ── Mobile overlay menu ── -->
  <div class="mobile-menu" id="mobileMenu">

    <!-- Panel 1 -->
    <div class="menu-panel" id="panel1">
      <button class="panel1-item" onclick="openPanel2('Personal', 'personal')">Personal</button>
      <button class="panel1-item" onclick="openPanel2('Commercial', 'commercial')">Commercial</button>
      <a href="/info.html" class="panel1-info" onclick="closeMobileMenu()">Info</a>
    </div>

    <!-- Panel 2 (overlaid on top) -->
    <div class="menu-panel" id="panel2">
      <button class="panel2-back" onclick="closePanel2()">← Back</button>
      <div class="panel2-title" id="panel2Title"></div>
      <div class="panel2-links" id="panel2Links"></div>
    </div>

  </div>



  <script>
    /* ── Desktop sidebar dropdowns ── */
    function toggleDropdown(btn) {
      const panel  = btn.nextElementSibling;
      const isOpen = panel.classList.contains('open');
      const nav    = btn.closest('.sidenav');
      nav.querySelectorAll('.dropdown-panel.open').forEach(p => p.classList.remove('open'));
      nav.querySelectorAll('.nav-btn.open').forEach(b => b.classList.remove('open'));
      if (!isOpen) {
        panel.classList.add('open');
        btn.classList.add('open');
      }
    }

    /* ── Mobile menu ── */
    function toggleMobileMenu() {
      const menu   = document.getElementById('mobileMenu');
      const burger = document.getElementById('hamburger');
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        burger.classList.remove('open');
        closePanel2();
      } else {
        menu.classList.add('open');
        burger.classList.add('open');
      }
    }

    function closeMobileMenu() {
      document.getElementById('mobileMenu').classList.remove('open');
      document.getElementById('hamburger').classList.remove('open');
      closePanel2();
    }

    /* Panel 2: overlay on top of panel 1 */
    const subLinks = {
      personal: [
        ['Mossy',     '/film-algue.html'],
        ['Earthy',    '/film-terreux.html'],
        ['Fruity',    '/film-fruite.html'],
        ['Briny',     '/film-marin.html'],
        ['Smoked',    '/film-fume.html'],
        ['Wheaty',    '/film-bleeux.html'],
        ['Piney',     '/film-pineux.html'],
        ['Salty',     '/film-sale.html'],
        ['Hot',       '/film-piquant.html'],
        ['Glutinous', '/film-gluant.html'],
        ['Herby',     '/film-herbeux.html'],
        ['Mild',      '/film-doux.html'],
        ['Floral',    '/film-floral.html'],
      ],

      commercial: [
        ['Interior [Dorset Villa, 1]', '/tangley1.html'],
        ['Interior [Dorset Villa, 2]', '/tangley2.html'],
        ['Interior [Clapton House]',   '/pondhouse.html'],
        ['Boutique [Roksanda, 1]',             '/roksanda1.html'],
        ['Boutique [Roksanda, 2]',             '/roksanda2.html'],
        ['Gallery [Béton Brut, 1]',             '/bb1.html'],
        ['Gallery [Béton Brut, 2]',             '/bb2.html'],
      ],
    };

    function openPanel2(label, key) {
      document.getElementById('panel2Title').textContent = label;
      document.getElementById('panel2Links').innerHTML = subLinks[key]
        .map(([text, href]) => '<a href="' + href + '" onclick="closeMobileMenu()">' + text + '</a>')
        .join('');
      document.getElementById('panel2').classList.add('visible');
    }

    function closePanel2() {
      document.getElementById('panel2').classList.remove('visible');
    }

    /* ── Reset mobile state when resizing to desktop ── */
    const MOBILE_BP = 768;
    function resetMobileIfDesktop() {
      if (window.innerWidth > MOBILE_BP) {
        document.getElementById('mobileMenu').classList.remove('open');
        document.getElementById('hamburger').classList.remove('open');
        closePanel2();
      }
    }
    window.addEventListener('resize', resetMobileIfDesktop);
  </script>

`);