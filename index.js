document.addEventListener("DOMContentLoaded", () => {
  const url = document.getElementById("url");
  const desktop = document.getElementById("desktop");
  const mobile = document.getElementById("mobile");

  if (url) {
    // Verifica que el elemento existe
    url.addEventListener("change", (e) => {
      desktop.setAttribute("src", url.value);
      mobile.setAttribute("src", url.value);
      console.log("src set");
    });
  }
});
