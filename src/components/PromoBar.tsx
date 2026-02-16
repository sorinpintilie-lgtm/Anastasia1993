export default function PromoBar() {
  return (
    <div className="promo-bar w-full bg-[#F2B94B] text-[#1F2933] border-b border-[rgba(0,0,0,0.1)] text-[15px] leading-[1.2] font-normal flex items-center justify-center">
      
      {/* Desktop Content */}
      <div className="promo-desktop hidden md:flex justify-between items-center w-full max-w-[1240px] px-5 h-full mx-auto">
        <span>
          Concept demo • Conținut orientativ • Dezvoltat de sky.ro •{' '}
          <a href="mailto:dan.trifan@sky.ro" className="text-[#2F80ED] no-underline hover:underline">
            dan.trifan@sky.ro
          </a>{' '}
          •{' '}
          <a href="tel:+40720088880" className="text-[#2F80ED] no-underline hover:underline">
            +4 0720 088 880
          </a>
        </span>
        <a
          className="btn-promo bg-[#2F80ED] text-white px-[14px] py-[8px] rounded-lg no-underline font-normal text-[15px] transition-opacity duration-200 hover:opacity-80 focus:opacity-80"
          href="https://wa.me/40720088880"
        >
          WhatsApp
        </a>
      </div>

      {/* Mobile Content */}
      <div className="promo-mobile flex md:hidden justify-between items-center w-full px-[10px] h-full text-[12px]">
        <div className="promo-left flex-shrink truncate overflow-hidden whitespace-nowrap">
          Concept demo
        </div>
        <div className="promo-center flex-shrink-0 mx-2">
          Dezvoltat de sky.ro
        </div>
        <div className="promo-right flex-shrink-0">
          <a href="tel:+40720088880" className="text-[#2F80ED] no-underline font-medium">
            +4 0720 088 880
          </a>
        </div>
      </div>
    </div>
  );
}
