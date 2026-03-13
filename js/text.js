const runRowMarkup = `
  <a class="run-row_link" href="https://mediacollege.dk/#web" target="_blank" rel="noopener noreferrer">
    <div class="glide-wrapper">
      <div class="glide-track">
        <span class="glide-item">webudvikler</span>
        <span class="glide-item">-</span>
        <span class="glide-item">ANSØG <span class="run-row__nu">NU</span></span>
        <span class="glide-item">-</span>
        <span class="glide-item">webudvikler</span>
        <span class="glide-item">-</span>
        <span class="glide-item">ANSØG <span class="run-row__nu">NU</span></span>
        <span class="glide-item">-</span>
        <span class="glide-item">webudvikler</span>
        <span class="glide-item">-</span>
        <span class="glide-item">ANSØG <span class="run-row__nu">NU</span></span>
        <span class="glide-item">-</span>
        <span class="glide-item">webudvikler</span>
        <span class="glide-item">-</span>
        <span class="glide-item">ANSØG <span class="run-row__nu">NU</span></span>
        <span class="glide-item">-</span>
      </div>
    </div>
  </a>
`;

function renderRunRows() {
  const runRows = document.querySelectorAll(".run-row");

  runRows.forEach((runRow) => {
    if (runRow.dataset.rendered === "true") {
      return;
    }

    runRow.innerHTML = runRowMarkup;
    runRow.dataset.rendered = "true";
  });
}

export function initRunRow() {
  renderRunRows();

  const tracks = document.querySelectorAll(".glide-track");

  tracks.forEach((track) => {
    if (track.dataset.loopReady === "true") {
      return;
    }

    const items = Array.from(track.children);

    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });

    track.dataset.loopReady = "true";
  });
}
