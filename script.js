/*to animate and spin cube on scroll*/
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

/*all of the code below maps the icons to their respective side of the cube*/
let currentInterval = null

const navButtons = document.getElementsByClassName("navBtn")

for (let i=0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", () => scrollFunction(i) )
}

const scrollFunction = (btn) => {
  const targetPosition = (document.body.scrollHeight/navButtons.length)*btn

  console.log(window.pageYOffset)

  if (currentInterval != null){
    clearInterval(currentInterval)
    currentInterval = null
  }

  currentInterval = setInterval(() => {
    const currentScrollPosition = window.pageYOffset
    if (targetPosition > currentScrollPosition) {
      if (targetPosition - currentScrollPosition < 10) {
        window.scrollBy(0, targetPosition - currentScrollPosition)
        clearInterval(currentInterval)
        currentInterval = null
      } else {
        window.scrollBy(0,10)
      }
    } else {
      if (currentScrollPosition - targetPosition < 10) {
        window.scrollBy(0, currentScrollPosition - targetPosition)
        clearInterval(currentInterval)
        currentInterval = null
      }
      window.scrollBy(0,-10)
    }
  })
}
