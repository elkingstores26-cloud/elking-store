// El King Store — shared product card renderer
//
// Discount handling: a product can carry an `originalPrice` (the "before" price). When that's
// present and bigger than `price`, we display the original crossed-out, the new price highlighted,
// and a red percentage badge ("خصم 18٪") so the saving is obvious from the listing.
window.elkingPriceNum = function (v) {
  return parseFloat(String(v || '').replace(/[^\d.]/g, '')) || 0;
};
window.elkingDiscountPct = function (price, originalPrice) {
  const a = window.elkingPriceNum(originalPrice);
  const b = window.elkingPriceNum(price);
  if (!a || !b || a <= b) return 0;
  return Math.round(((a - b) / a) * 100);
};

window.renderProductCard = function(p) {
  const tagText = p.cat === 'used' ? 'مستعمل' : (p.cat === 'acc' ? 'إكسسوار' : 'جديد');
  const tagColor = p.cat === 'used' ? 'bg-ink text-gold' : 'bg-gold text-ink';
  const badge = p.battery ? `بطارية ${p.battery}` : '';
  const pct = window.elkingDiscountPct(p.price, p.originalPrice);
  const hasDiscount = pct > 0;
  return `
  <a href="product.html?id=${p.id}" class="product-card bg-white rounded-3xl border border-black/5 overflow-hidden flex flex-col group cursor-pointer">
    <div class="relative aspect-[4/3] bg-cream overflow-hidden">
      <img class="product-img w-full h-full object-cover" src="${p.img}" alt="${p.name}" loading="lazy" />
      <span class="absolute top-4 right-4 ${tagColor} text-[11px] font-extrabold px-3 py-1 rounded-full tracking-wide">${tagText}</span>
      ${hasDiscount ? `<span class="absolute top-4 left-4 bg-red-600 text-white text-[12px] font-extrabold px-3 py-1 rounded-full shadow-lg">خصم ${pct}٪</span>` : (badge ? `<span class="absolute top-4 left-4 bg-white/95 text-ink text-[11px] font-bold px-3 py-1 rounded-full">${badge}</span>` : '')}
      <button onclick="event.preventDefault();event.stopPropagation()" class="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-ink hover:text-gold transition">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/></svg>
      </button>
    </div>
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-center justify-between mb-2">
        <span class="text-[11px] font-extrabold text-gold-dark tracking-widest uppercase" style="font-family:Inter,sans-serif">${p.brand}</span>
        <div class="flex gap-0.5">${'<svg class="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.39 4.84L20 7.84l-4 3.9.94 5.49L12 14.77l-4.94 2.46L8 11.74l-4-3.9 5.61-.99L12 2z"/></svg>'.repeat(5)}</div>
      </div>
      <h3 class="font-extrabold text-[19px] mb-1 tracking-tight">${p.name}</h3>
      <p class="text-black/55 text-[13px] mb-5 flex items-center gap-1.5">
        ${p.colorHex ? `<span class="inline-block w-3 h-3 rounded-full border border-black/15 shrink-0" style="background:${p.colorHex}"></span>` : ''}
        <span>${[p.storage, p.color].filter(Boolean).join(' · ')}</span>
      </p>
      <div class="flex items-end justify-between mt-auto pt-5 border-t border-black/5">
        <div>
          <div class="text-[11px] text-black/40 mb-0.5">السعر</div>
          ${hasDiscount ? `<div class="flex items-baseline gap-2 flex-wrap">
            <span class="text-[13px] text-black/35 line-through" style="font-family:Inter,sans-serif">${p.originalPrice}</span>
            <span class="text-3xl font-black text-red-600">${p.price}</span>
            <span class="text-[12px] font-bold text-black/55">ج.م</span>
          </div>` : `<div class="flex items-baseline gap-1">
            <span class="text-3xl font-black text-ink">${p.price}</span>
            <span class="text-[12px] font-bold text-black/55">ج.م</span>
          </div>`}
        </div>
        <span role="button" onclick="event.preventDefault();event.stopPropagation();window.open('https://wa.me/201017955559?text=' + encodeURIComponent('عايز ${p.name.replace(/'/g,"")}'),'_blank')" class="cursor-pointer inline-flex items-center gap-1.5 bg-wagreen hover:bg-[#1ea855] text-white font-bold px-4 py-2.5 rounded-full text-[13px] transition">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 2.981 1.286 2.981.857 3.518.803.538-.054 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
          اطلب
        </span>
      </div>
    </div>
  </a>`;
};
