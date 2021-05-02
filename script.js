window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// let panelContainers = document.getElementsByClassName("panel")
// let panelContainersArray = []
//
// let nav
//
// let panel = null
// let currInterval = -1
// let yCoord
//
// const keyPressedHandler = (buttonCode) => {
//     console.log(buttonCode)
//     const num1KeyCode = 49
//     panel = panelContainersArray[buttonCode - num1KeyCode]
//     yCoord = panel.getBoundingClientRect().top
//
//     // if there currently an interval set remove it
//     if (currInterval!=-1){
//         clearInterval(currInterval)
//         currInterval = -1
//     }
//
//     if (yCoord > 0){ // is the panel is not at the top
//         currInterval = setInterval(() => {
//             // console.log(panel.getBoundingClientRect().top)/
//             if (panel.getBoundingClientRect().top>=0) {
//                 if (panel.getBoundingClientRect().top<10) {
//                     window.scrollBy(0,panel.getBoundingClientRect().top)
//                     clearInterval(currInterval)
//                     currInterval = -1
//                 }
//                 window.scrollBy(0,10)
//             } else {
//                 clearInterval(currInterval)
//                 currInterval = -1
//             }
//         })
//     } else if(yCoord < 0){
//         currInterval = setInterval(() => {
//             // console.log(panel.getBoundingClientRect().top)
//             if (panel.getBoundingClientRect().top<=0) {
//                 if (panel.getBoundingClientRect().top>-10) {
//                     window.scrollBy(0,panel.getBoundingClientRect().top)
//                     clearInterval(currInterval)
//                     currInterval = -1
//                 }
//                 window.scrollBy(0,-10)
//             } else {
//                 clearInterval(currInterval)
//                 currInterval = -1
//             }
//         })
//         // console.log("panel is above")
//     }
//     // panel.scrollIntoView()
// }
//
// document.addEventListener("keypress",(e) => keyPressedHandler(e.keyCode))
//
// Object.keys(panelContainers).forEach(panelContainerKey => {
//     console.log(window.innerHeight)
//     let panel = panelContainers[panelContainerKey]
//     panel.style.height = window.innerHeight+"px"
//     panelContainersArray.push(panel)
// })
//
// // event listeners for nav items
// const panelOneNav = document.getElementById("1")
// const panelTwoNav = document.getElementById("2")
// const panelThreeNav = document.getElementById("3")
// const panelFourNav = document.getElementById("4")
//
// // panel one arg is 49 panel 6 arg is 54
// panelOneNav.addEventListener("click",() => keyPressedHandler(49))
// panelTwoNav.addEventListener("click",() => keyPressedHandler(50))
// panelThreeNav.addEventListener("click",() => keyPressedHandler(51))
// panelFourNav.addEventListener("click",() => keyPressedHandler(52))
