
  document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([19.0760, 72.8777], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([19.0760, 72.8777]).addTo(map);

    setTimeout(() => {
      map.invalidateSize();
    }, 500);
  });
