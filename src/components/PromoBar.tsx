export default function PromoBar() {
  return (
    <div className="promo-bar">
      <div className="promo-desktop">
        <span>
          Concept demo • Conținut orientativ • Dezvoltat de sky.ro •{" "}
          <a href="mailto:dan.trifan@sky.ro">dan.trifan@sky.ro</a> •{" "}
          <a href="https://wa.me/40720088880" target="_blank" rel="noreferrer">
            +4 0720 088 880
          </a>
        </span>
        <a
          className="btn btn-promo"
          href="https://wa.me/40720088880"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>

      <div className="promo-mobile">
        <div className="promo-left">Concept demo</div>
        <div className="promo-right">
          Dezvoltat de sky.ro{" "}
          <a href="https://wa.me/40720088880" target="_blank" rel="noreferrer">
            +4 0720 088 880
          </a>
        </div>
      </div>
    </div>
  );
}
