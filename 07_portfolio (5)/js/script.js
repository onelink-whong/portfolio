// nav 하위의 a의 href 값 취득
const links = gsap.utils.toArray
  ('nav ul li a');
// link.classList.remove('active');
// link.classList.add('active');

links.forEach((link) => {
  let ele = document.querySelector(link.getAttribute('href'));
  let linkST = ScrollTrigger.create({
    trigger: ele,
    start: 'top top',
  })

  // nav의 부드러운 스크롤
  link.addEventListener('click', (e) => {
    console.log("이벤트객체", e);
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: 'auto' }) 
  })

})

function setActive(link){
  links.forEach((el) => {el.classList.remove('active')})
  link.classList.add('active');
}

