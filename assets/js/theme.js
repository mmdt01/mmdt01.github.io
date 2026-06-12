// Theme toggle. The initial theme is set by an inline script in
// <head> (theme-init) to avoid a flash; this only handles the button.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function label(theme) {
    var t = btn.querySelector(".tt-label");
    var i = btn.querySelector("i");
    if (theme === "dark") {
      if (t) t.textContent = "light";
      if (i) i.className = "ti ti-sun";
      btn.setAttribute("aria-label", "Switch to light mode");
    } else {
      if (t) t.textContent = "dark";
      if (i) i.className = "ti ti-moon";
      btn.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  label(root.getAttribute("data-theme") || "light");

  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label(next);
  });
})();
