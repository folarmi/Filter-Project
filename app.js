//Event Listeners
const buttons = document.getElementsByClassName("btn-2");
const navBar = document.getElementsByClassName('nav-bar');
const imageToShow = document.getElementsByClassName('btns')
const storeItems = document.getElementsByClassName('picture-card');



// Toggles Harmburger 
function myFunction(x) {
    x.classList.toggle("change");

    // Toggles menu
    var navBar = document.getElementById("nav-bar");
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
      } else {
        navBar.style.display = "block";
      }
}


// Changes HTMLCollection to array
const buttonArray = Array.from(buttons);
const store = Array.from(storeItems);




buttonArray.forEach((button)=> {
  button.addEventListener('click', (e) => {
      e.preventDefault()
      const filter = e.target.dataset.filter
      console.log(filter)
      store.forEach((item)=> {
          if (filter === 'all'){
              item.style.display = 'block'
          } else {
              if (item.classList.contains(filter)){
                  item.style.display = 'block'
              } else {
                  item.style.display = 'none'
              }
          }
      })
  })
})