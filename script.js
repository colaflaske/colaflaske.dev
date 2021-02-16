function sts() {
  const df = document.body.scrollHeight + 120;
  const ts = df / 5;
  if (window.scrollY < document.body.scrollHeight) {
    try {
      window.scrollTo(0, document.body.scrollHeight);
    } catch (error) {}
  }
}

const cs = document.querySelectorAll('.contact_marker');
const u = document.getElementById('sttArrow');
const t = document.getElementById('__contact');
u.addEventListener(
  'click',
  function () {
    window.scrollTo(0, 1);
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
