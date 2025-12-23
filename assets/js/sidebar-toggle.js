// sidebar-toggle.js
(function () {
  function initSidebarToggle() {
    // Event delegation: sidebar sonradan yüklense bile çalışır
    document.addEventListener("click", function (e) {
      const toggle = e.target.closest("#layout-menu .menu-link.menu-toggle");
      if (!toggle) return;

      e.preventDefault();

      const li = toggle.closest(".menu-item");
      if (!li) return;

      // Sadece alt menüsü olan toggle'larda çalışsın
      const sub = li.querySelector(":scope > .menu-sub");
      if (!sub) return;

      // Accordion (tek açık kalsın)
      document.querySelectorAll("#layout-menu .menu-item.open").forEach((x) => {
        if (x !== li) x.classList.remove("open");
      });

      li.classList.toggle("open");
    });
  }

  // DOM hazır olunca bağla
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSidebarToggle);
  } else {
    initSidebarToggle();
  }
})();
