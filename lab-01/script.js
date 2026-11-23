const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function start() {
  await wait(2500);
  splash.classList.add('fade-out');
  await wait(600);
  splash.hidden = true;
  document.querySelector('main').hidden = false;
}
start();

document.querySelectorAll('.btn').forEach(btn => {
  btn.onclick = () => alert('Цей розділ ще в розробці');
});