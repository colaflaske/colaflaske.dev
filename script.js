function sts() {
  const df = document.body.scrollHeight + 100;
  const ts = df / 5;
  if (window.scrollY < document.body.scrollHeight) {
    try {
      scr(ts);
    } catch {}
  }
}
function scr(sc) {
  window.scrollTo(0, sc);
  if (window.scrollY < document.body.scrollHeight) sts();
}

const cs = document.querySelectorAll('.contact_marker');
const u = document.getElementById('sttArrow');
const t = document.getElementById('__contact');
u.addEventListener(
  'click',
  function () {
    window.scrollTo(0, 0);
  },
  false
);
cs.forEach((c) => {
  c.addEventListener(
    'click',
    function () {
      sts();
    },
    false
  );
});
