// El King Store — shared layout (header + footer + floating WA + tailwind config)
// Inject into any page by including: <script src="layout.js" data-active="new"></script>
// Place <main id="main"></main> wrapper for content; layout adds header/footer around body.

(function () {
  const cur = document.currentScript?.dataset.active || '';
  const links = [
    { href: 'index.html', label: 'الرئيسية', key: 'home' },
    { href: 'new.html', label: 'جديد', key: 'new' },
    { href: 'used.html', label: 'مستعمل', key: 'used' },
    { href: 'accessories.html', label: 'إكسسوارات', key: 'acc' },
    { href: 'index.html#brands', label: 'الماركات', key: 'brands' },
    { href: 'index.html#contact', label: 'تواصل', key: 'contact' },
  ];
  const wa = 'https://wa.me/201069907573';
  const waSvg = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 2.981 1.286 2.981.857 3.518.803.538-.054 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>';

  const headerHtml = `
<div class="bg-ink text-white text-[13px]">
  <div class="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4">
    <div class="flex items-center gap-6 text-white/80">
      <span class="hidden sm:inline-flex items-center gap-2"><svg class="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.39 4.84L20 7.84l-4 3.9.94 5.49L12 14.77l-4.94 2.46L8 11.74l-4-3.9 5.61-.99L12 2z"/></svg> تحديث أسعار يومي · الجملة والقطاعي</span>
      <span class="hidden md:inline">مفتوح طول الأسبوع · ١١ ص — ١٢ م</span>
    </div>
    <div class="flex items-center gap-4">
      <a href="tel:01069907573" class="hidden sm:inline-flex items-center gap-1.5 hover:text-gold transition"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.25 1.05z"/></svg><span style="font-family:Inter" dir="ltr">010 6990 7573</span></a>
      <span class="text-white/30">|</span><span class="text-white/60">EG</span><span class="text-white/60">·</span><span class="text-gold font-semibold">AR</span>
    </div>
  </div>
</div>
<header class="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-black/5">
  <div class="max-w-7xl mx-auto px-6 h-[78px] flex items-center justify-between gap-8">
    <a href="index.html" class="flex items-center gap-3">
      <img src="elking-logo.png" alt="El King Store" class="h-12 w-auto" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
      <div class="relative w-12 h-12 rounded-xl bg-ink hidden items-center justify-center" style="box-shadow:0 10px 30px -10px rgba(212,175,55,0.55)">
        <svg class="absolute -top-2 right-1/2 translate-x-1/2 w-5 h-3 text-gold" viewBox="0 0 20 12" fill="currentColor"><path d="M2 11h16l-1.5-7L13 7 10 1 7 7 3.5 4 2 11z"/></svg>
        <span style="font-family:Inter;font-weight:800" class="text-gold text-[22px] leading-none -mt-0.5">K</span>
      </div>
      <div class="leading-tight">
        <div class="font-extrabold text-[18px] tracking-tight">الكينج ستور</div>
        <div class="text-[11px] text-black/50 tracking-[0.18em]" style="font-family:Inter">EL KING STORE</div>
      </div>
    </a>
    <nav class="hidden lg:flex items-center gap-9 text-[15px] font-semibold text-black/75">
      ${links.map(l => `<a href="${l.href}" class="nav-link ${l.key === cur ? 'active text-ink' : ''}">${l.label}</a>`).join('')}
    </nav>
    <div class="flex items-center gap-3">
      <a href="tel:01069907573" class="hidden md:flex items-center gap-2 text-[14px] font-semibold text-black/80 hover:text-ink transition">
        <span class="w-9 h-9 rounded-full bg-cream border border-black/5 flex items-center justify-center"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.79a2 2 0 01-.45 1.95l-1.27 1.27a14 14 0 006.28 6.28l1.27-1.27a2 2 0 011.95-.45l2.79.7A2 2 0 0121 16.72V19a2 2 0 01-2 2A16 16 0 013 5z"/></svg></span>
        <span style="font-family:Inter" dir="ltr">010 6990 7573</span>
      </a>
      <a href="${wa}" class="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark transition px-5 py-2.5 rounded-full font-bold text-ink" style="box-shadow:0 10px 30px -10px rgba(212,175,55,0.55)">${waSvg} اطلب الآن</a>
    </div>
  </div>
</header>`;

  const footerHtml = `
<footer class="bg-black text-white/70 mt-24">
  <div class="max-w-7xl mx-auto px-6 pt-20 pb-10">
    <div class="grid lg:grid-cols-12 gap-12 mb-16">
      <div class="lg:col-span-4">
        <div class="flex items-center gap-3 mb-5">
          <img src="elking-logo.png" alt="" class="h-12 w-auto" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
          <div class="relative w-12 h-12 rounded-xl bg-white/5 border border-gold/30 hidden items-center justify-center"><svg class="absolute -top-2 right-1/2 translate-x-1/2 w-5 h-3 text-gold" viewBox="0 0 20 12" fill="currentColor"><path d="M2 11h16l-1.5-7L13 7 10 1 7 7 3.5 4 2 11z"/></svg><span style="font-family:Inter;font-weight:800" class="text-gold text-[24px] leading-none">K</span></div>
          <div class="leading-tight"><div class="font-extrabold text-white text-[19px]">الكينج ستور</div><div class="text-[11px] text-white/40 tracking-[0.18em]" style="font-family:Inter">EL KING STORE</div></div>
        </div>
        <p class="text-[15px] leading-relaxed text-white/55 max-w-sm mb-6">ليستة الموبايلات اليومية للتجار والأفراد — جملة وقطاعي، تحديث يومي، وكل الماركات تحت سقف واحد في ٦ أكتوبر.</p>
      </div>
      <div class="lg:col-span-2">
        <div class="text-white text-[14px] font-extrabold mb-5">روابط سريعة</div>
        <ul class="space-y-3 text-[14px]">
          <li><a href="index.html" class="hover:text-gold transition">الرئيسية</a></li>
          <li><a href="new.html" class="hover:text-gold transition">موبايلات جديدة</a></li>
          <li><a href="used.html" class="hover:text-gold transition">موبايلات مستعملة</a></li>
          <li><a href="accessories.html" class="hover:text-gold transition">إكسسوارات</a></li>
        </ul>
      </div>
      <div class="lg:col-span-3">
        <div class="text-white text-[14px] font-extrabold mb-5">العنوان</div>
        <p class="text-[14px] leading-relaxed mb-3">الحصري — مجمع الأمريكية<br/>برج ١ — بجوار باللبن<br/>٦ أكتوبر، الجيزة</p>
        <div class="text-[13px] text-white/45">مفتوح طول الأسبوع<br/>١١ ص — ١٢ م</div>
      </div>
      <div class="lg:col-span-3">
        <div class="text-white text-[14px] font-extrabold mb-5">للتواصل</div>
        <ul class="space-y-2.5 text-[14px]">
          <li><a href="tel:01111328433" class="hover:text-gold transition flex gap-2"><span class="text-white/40 text-[12px]">مبيعات ١</span><span style="font-family:Inter;font-weight:700" dir="ltr">011 1132 8433</span></a></li>
          <li><a href="tel:01017955559" class="hover:text-gold transition flex gap-2"><span class="text-white/40 text-[12px]">مبيعات ٢</span><span style="font-family:Inter;font-weight:700" dir="ltr">010 1795 5559</span></a></li>
          <li><a href="tel:01061851012" class="hover:text-gold transition flex gap-2"><span class="text-white/40 text-[12px]">مبيعات ٣</span><span style="font-family:Inter;font-weight:700" dir="ltr">010 6185 1012</span></a></li>
          <li><a href="${wa}" class="text-wagreen hover:brightness-125 flex gap-2"><span class="text-[12px]">واتساب</span><span style="font-family:Inter;font-weight:700" dir="ltr">010 6990 7573</span></a></li>
        </ul>
      </div>
    </div>
    <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(212,175,55,0.5),transparent)" class="w-full mb-8"></div>
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-white/40">
      <div>© ٢٠٢٦ الكينج ستور — جميع الحقوق محفوظة</div>
      <div class="flex items-center gap-6"><a href="#" class="hover:text-gold">سياسة الخصوصية</a><a href="#" class="hover:text-gold">الشروط والأحكام</a><span class="text-white/30 tracking-widest" style="font-family:Inter">EL KING · 6 OCTOBER · EGYPT</span></div>
    </div>
  </div>
</footer>
<a href="${wa}" class="fixed bottom-6 left-6 z-50 group">
  <div class="relative pulse-ring">
    <div class="w-16 h-16 rounded-full bg-wagreen flex items-center justify-center group-hover:scale-110 transition relative z-10" style="box-shadow:0 20px 40px -10px rgba(37,211,102,0.6)">
      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 2.981 1.286 2.981.857 3.518.803.538-.054 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
    </div>
  </div>
</a>`;

  document.addEventListener('DOMContentLoaded', () => {
    const headerSlot = document.getElementById('layout-header');
    const footerSlot = document.getElementById('layout-footer');
    if (headerSlot) headerSlot.outerHTML = headerHtml;
    if (footerSlot) footerSlot.outerHTML = footerHtml;
  });
})();
