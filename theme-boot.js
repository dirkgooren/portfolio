// Applies the saved theme before the page paints, so dark-mode visits never start light.
try {
  var savedTheme = localStorage.getItem('dg-theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
} catch (e) {}
