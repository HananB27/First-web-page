document.getElementById("profilnaslika").classList.add("profilnal");

function bjeziustranu() {
  if (document.getElementById("profilnaslika").classList.contains("profilnar")) {
      document.getElementById("profilnaslika").classList.add("profilnal");
      document.getElementById("profilnaslika").classList.remove("profilnar");
  } else {
      document.getElementById("profilnaslika").classList.add("profilnar");
      document.getElementById("profilnaslika").classList.remove("profilnal");
  }
}
// credits to mux