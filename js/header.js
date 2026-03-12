const headerContainer = document.querySelector('header')

export const header = () => {
    if(!headerContainer){
        return;
    }

    const headerTemplate = () => {
        return `
       <header class="container__header">
            
      <div class="header__inner">
        <a class="nav__item hidden__mobil" href="https://mediacollege.dk/" target="_blank"> <img class="nav__img" src="../images/logo-media-college-denmark-color.svg" alt="Nav_logo"></a>

        <div class="mobile__menu__icon" id="burger__menu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <nav class="nav__links" id="nav__links">
          <a class="nav__item" href="https://mediacollege.dk/#grundforloeb" target="_blank">Grundforløb 1</a>
          <a class="nav__item" href="https://mediacollege.dk/#web" target="_blank">Webudvikler</a>
          <a class="nav__item" href="https://mediacollege.dk/#ansoeg" target="_blank">Ansøg nu</a>
        </nav>
      </div>
    </header>
        `
    }

    headerContainer.insertAdjacentHTML('beforeend', headerTemplate())



    // variabler oprettes - pakker html elementer ned, så de kan bruges i koden
const hamburgerBtn = document.querySelector("#burger__menu");
const navLinks = document.querySelector("#nav__links");

// addEventlistener lytter efter 'click' på hamburger. (Opretter en anonym function)
hamburgerBtn.addEventListener("click", () => {
  // Når der klikkes, får det menuen til at åbne (og lukke igen ved nyt klik)
  navLinks.classList.toggle("active"); // tilføjer eller fjerner 'active' class på menuen
  hamburgerBtn.classList.toggle("toggle"); // får stregerne til at skifte til et kryds
});

// addEventlistener lytter efter 'click' på baggrunden.
navLinks.addEventListener("click", () => {
  // når der klikkes, lukker menuen
  navLinks.classList.remove("active"); 
  hamburgerBtn.classList.remove("toggle"); // får krydset til at skifte tilbage til streger
});



}
