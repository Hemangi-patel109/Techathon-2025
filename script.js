let scroll=0;
let isScrollingdown=true;
let tween =gsap.to(".marquee-part",{
  xPercent:-100,
  repeat:-1,
  duration:5,
  ease:"linear",
})
.totalProgress(0.5)
let marquee=document.querySelector(".marquee-part")
marquee.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - marquee.offsetLeft;
  const walk = (x - startX) * 3;
  marquee.scrollLeft = scrollLeft - walk;
//skew maate
  let diff = marquee.scrollLeft - lastScrollLeft;
  let speed = diff * 0.40;
  marquee.style.transform = `skew(${speed}deg)`;
  lastScrollLeft = marquee.scrollLeft;
});

window.onscroll = () => {
  marquee.style.left = `${-window.scrollX}px`;
};
