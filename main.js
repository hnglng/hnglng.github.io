(function () {
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function activeTheme() {
    return root.dataset.theme || (media.matches ? "dark" : "light");
  }

  function syncToggle() {
    if (!toggle) return;
    var isDark = activeTheme() === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = activeTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
      syncToggle();
    });

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", syncToggle);
    }

    syncToggle();
  }

  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
