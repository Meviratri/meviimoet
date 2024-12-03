document.getElementById("hostname").textContent = window.location.hostname;
fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ip-address").textContent = data.ip;
  });
document.getElementById("access-time").textContent = new Date().toLocaleString();
