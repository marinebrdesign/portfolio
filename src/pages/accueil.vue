<template>
  <div>
    <m-header-a></m-header-a>
    <div class="background"></div>
    <div class="a_propos">
        <div class="grid">
          <div class="logo"><svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 692.82 691.03"><defs></defs><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><polygon class="cls-1" points="684.33 0.44 400.52 0 683.87 287 684.33 0.44"/><rect class="cls-1" x="0.95" y="2.84" width="256.26" height="256.26" transform="translate(-0.32 0.31) rotate(-0.14)"/><polygon class="cls-1" points="404.49 405.05 177.4 405.6 461.95 688.77 692.82 686.23 688.49 461.13 403.94 177.95 404.49 405.05"/><polygon class="cls-1" points="3.38 691.03 287.13 687.68 0 404.53 3.38 691.03"/></g></g></svg></div>
          <div class="titre"><h1>MARINE BEURIER</h1></div>
          <div class="presentation"><p>Bonjour, je m'appelle Marine Beurier, Je suis étudiante en webdesign et en graphisme. Retrouvez ici quelques une de mes réalisations.</p></div>
        </div>
        <div class="scroll-down-title">
          <h4>SCROLL DOWN</h4>
        </div>
        <a href="#slide" class="scroll-down">
          <div class="mouse">
            <span></span>
          </div>
        </a>
      </div>
    <div id="slide">
      <flickity  class="flickity" ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">
          <router-link to="/CSV">
            <div class="accueil">
              <h1>Association <br> CSV</h1>
              <img id="ordi" src="../img/csv/csv-ordi.png" alt="L'association CSV - Ordinateur" class="img-responsive" style=width:100%>
              <span>Refonte de site</span>
            </div>
          </router-link>
        </div>
        <div class="carousel-cell">
          <router-link to="/boss_lady_gaga">
            <div class="accueil">
              <h1>Boss - Lady <br>Gaga</h1>
              <img id="ordi" src="../img/boss_lady_gaga/lady_gaga_imac.png" alt="Boss Lady Gaga -  Imac" class="img-responsive" style=width:100%>
              <span>Intégration, design de site (48h)</span>
            </div>
          </router-link>
        </div>
        <div class="carousel-cell">
          <router-link to="/palais_guell">
            <div class="accueil">
              <h1>Palais <br> Güell</h1>
              <img id="ordi" src="../img/palais_guell/palais_guell_macbook.png" alt="Palais Güell - MAcBook" class="img-responsive" style=width:100%>
              <span>Maquette et dossier de communication</span>
            </div>
          </router-link>
        </div>
        <div class="carousel-cell">
          <router-link to="/logo">
            <div class="accueil">
              <h1>Monogramme<br>Logo</h1>
              <svg id="ordi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 692.82 691.03"><defs></defs><g id="Calque_2"><g id="Calque_1-2"><polygon class="cls-1" points="684.33 0.44 400.52 0 683.87 287 684.33 0.44"/><rect class="cls-1" x="0.95" y="2.84" width="256.26" height="256.26" transform="translate(-0.32 0.31) rotate(-0.14)"/><polygon class="cls-1" points="404.49 405.05 177.4 405.6 461.95 688.77 692.82 686.23 688.49 461.13 403.94 177.95 404.49 405.05"/><polygon class="cls-1" points="3.38 691.03 287.13 687.68 0 404.53 3.38 691.03"/></g></g></svg>
              <span>Création d'un monogramme et d'un logo</span>
            </div>
          </router-link>
        </div>
        <div class="carousel-cell">
          <router-link to="/norma_ludus">
            <div class="accueil">
              <h1>Norma <br> Ludus</h1>
              <img id="ordi" src="../img/norma_ludus/normaludus_ipad.png" alt="Norma Ludus - Ipad" class="img-responsive" style=width:90%>
              <span>Intégration, design de site</span>
            </div>
          </router-link>
        </div>

      </flickity>
    </div>
    <div class="cursor"></div>
  </div>
</template>

<script>
export default {
  name: "accueil",
  components: {
    Flickity,
    MHeaderA,
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 5,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        freeScroll: true,
        draggable: false,
        arrowShape: {
          x0: 10,
          x1: 60, y1: 50,
          x2: 60, y2: 35,
          x3: 25
        }
        // any options from Flickity can be used
      }
    }
  }
}

import Flickity from 'vue-flickity'
import MHeaderA from '../components/m-header_a'

</script>

<style scoped>

.background {
  background-color: #151515;
  position: absolute;
  z-index: -2;
  height: 100vh;
  width: 100vw;
}

svg#logo {
  fill: white;
}

.a_propos {
  padding-top: 300px;
  height: 100vh;
  background-color: #151515;
}

.a_propos h1, .a_propos p {
  color: white;
}

.a_propos h1 {
  color: white;
  text-align: center;
  font-family: "Bigilla";
  font-size: 150px;
  margin: 107px auto;
}

.titre {
  grid-column-start: 3;
  grid-column-end: 13;
  grid-row: 1;
}

.titre h1 {
  margin: 0;
  display: flex;
  justify-content: flex-start
}

.grid {
  grid-template-columns: repeat(12, 1fr);
  width: 85%;
  margin:0 auto;
  grid-gap: 16px;
  display: grid;
  grid-template-rows: 400px;
}

.presentation {
  grid-column-start: 3;
  grid-column-end: 13;
  grid-row: 1;
  display: flex;
  align-items: flex-end;
}

.presentation p {
  font-family: "Breadley Sans";
  font-size: 40px;
  margin: 0;
  padding: 30px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%239B9B9BFF' stroke-width='5' stroke-dasharray='400' stroke-dashoffset='900' stroke-linecap='square'/%3e%3c/svg%3e");
}

.logo {
  grid-row: 1;
  display: flex;
  align-items: flex-end;
}

.scroll-down {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
}

.mouse {
  width: 2.5rem;
  height: 5rem;
  border: 2px solid white;
  border-radius: 2rem;
  margin-bottom: .5rem;
  display: flex;
  animation: color 1.5s linear infinite;
}

.mouse span {
  width: 0.5rem;
  height: 0.5rem;
  background-color: white;
  display: block;
  border-radius: 50%;
  margin: 15px auto;
  animation: move-wheel 1.5s linear infinite;
}

@keyframes move-wheel {
  0% {
    background-color: white;
    transform: translateY(-1rem);
  }

  100% {
    background-color: #767676;
    transform: translateY(2rem);
  }
}

@keyframes color {
  0% {
   border-color: white;
  }

  100% {
    border-color: #767676;

  }
}

.scroll-down-title {
  padding-bottom: 25px;
}

.scroll-down-title h4 {
  color: white;
  text-align: center;
  font-family: Karla;
  font-weight: normal;
  font-size: 12px;
  margin: 30px auto 0 auto;
  animation: space 2s linear infinite;
}

@keyframes space {
  0% {
    letter-spacing: normal;
    opacity: 1;
  }

  100% {
    letter-spacing: 10px;
    opacity: 0;
  }
}
/*---------Responsive------*/

@media screen and (max-width: 3000px) {
  .scroll-down-title {
    display: none;
  }

  .accueil h1 {
    color: white;
    text-align: left;
    font-family: Montserrat;
    font-weight: 800;
    font-size: 150px;
    padding: 107px 0 0 0;
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row: 1;
    z-index: 1;
    display: flex;
  }

  .accueil {
    grid-template-columns: repeat(12, 1fr);
    width: 85%;
    margin:0 auto;
    display: grid;
    grid-gap: 16px;
    padding-top: 15vh;
    grid-template-rows: 530px;
    height: 100vh;
  }

  .accueil span {
    font-family: "Breadley Sans";
    font-size: 40px;
    margin: 0;
    color: white;
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row: 1;
    display: flex;
    align-items: flex-end;
    margin-bottom: 15px;
    z-index: 1;
  }

  #ordi {
    grid-column-start: 6;
    grid-column-end: 13;
    grid-row: 1;
    z-index: 0;
  }

  .carousel-cell:nth-of-type(4) svg#ordi{
    stroke: #7c7777;
    fill: #7c7777;
    grid-column-start: 8;
    grid-column-end: 13;
    grid-row: 1;
    z-index: 0;
    width: 80%;
    height: 100%;
  }

}
@media screen and (max-width: 1600px) {
  .a_propos h1 {
    font-size: 110px;
  }
  .presentation p {
    font-size: 30px;
  }

  .grid {
    grid-template-rows: 320px;
  }

  .a_propos {
    padding-top: 248px;
  }

  .scroll-down {
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .mouse {
    width: 2rem;
    height: 4rem;
    border: 2px solid white;
    border-radius: 2rem;
    margin-bottom: 0.5rem;
    display: flex;
    animation: color 1.5s linear infinite;
  }

  .mouse span {
    width: 0.4rem;
    height: 0.4rem;
    background-color: white;
    display: block;
    border-radius: 50%;
    margin: 12px auto;
    animation: move-wheel 1.5s linear infinite;
  }

  @keyframes move-wheel {
    0% {
      background-color: white;
      transform: translateY(-1rem);
    }

    100% {
      background-color: #767676;
      transform: translateY(1.5rem);
    }
  }
}

@media screen and (max-width: 1500px) {
  .a_propos {
    padding-top: 208px;
  }

  .presentation p {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%239B9B9BFF' stroke-width='4' stroke-dasharray='300' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  }
}

@media screen and (max-width: 1490px) {
  .accueil h1 {
    font-size: 100px;
  }

  .accueil span {
    font-size: 35px;
  }

  .accueil {
    grid-template-rows: 400px;
  }
}

@media screen and (max-width: 1350px) {
  .accueil h1 {
    font-size: 100px;
  }

  .accueil span {
    font-size: 35px;
  }

  .accueil {
    grid-template-rows: 400px;
  }
}

@media screen and (max-width: 1200px) {
  .a_propos h1 {
    font-size: 90px;
  }

  .presentation p {
    font-size: 25px;
  }

  .grid {
    grid-template-rows: 260px;
  }

  .a_propos {
    padding-top: 171px;
  }
}

@media screen and (max-width: 992px) {
  .logo {
    grid-column: 6;
    grid-row: 2;
  }

  .titre h1 {
    margin: 0;
    display: flex;
    justify-content: center
  }

  .titre {
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row: 1;
  }

  .presentation {
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row: 3;
    display: flex;
    align-items: flex-end;
    margin-top: 45px
  }

  .grid {
    grid-template-rows: auto;
    grid-template-columns: repeat(11, 1fr);
  }

  .a_propos {
    padding-top: 95px;
  }

  .presentation p {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%239B9B9BFF' stroke-width='4' stroke-dasharray='200' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  }

  .accueil h1 {
    font-size: 80px;
    padding: 70px 0 0 0;
  }

  .accueil {
    padding-top: 25vh;
    grid-template-rows: 310px;
  }

  .accueil span {
    font-size: 30px;
  }
}

@media screen and (max-width: 768px) {
  h2:after{
    border-bottom: 3px solid #fff;
  }

  .presentation p {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%239B9B9BFF' stroke-width='4' stroke-dasharray='150' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  }

  .a_propos {
    padding-top: 70px;
  }

  .accueil h1 {
    font-size: 80px;
    padding: 50px 0 0 0;
  }

  #ordi {
    grid-row: 2;
  }

  .accueil span {
    font-size: 25px;
  }

  .accueil {
    padding-top: 20vh;
    grid-template-rows: 275px;
  }

  .carousel-cell:nth-of-type(4) svg#ordi{
    grid-row: 2;
  }
}

@media screen and (max-width: 600px) {

  .presentation p {
    font-size: 20px;
  }

  a.scroll-down {
    display: none;
  }

  .scroll-down-title {
    display: flex;
  }
}

@media screen and (max-width: 540px) {
  .accueil h1 {
    font-size: 45px;
    padding: 30px 0 0 0;
  }

  #ordi {
    grid-row: 2;
  }

  .accueil span {
    font-size: 20px;
  }

  .accueil {
    grid-template-rows: 200px;
  }
}

@media screen and (max-width: 480px) {
  .a_propos h1 {
    font-size: 40px;
  }

  h2:after{
    border-bottom: 2px solid #fff;
  }

  .presentation p {
    font-size: 18px;
  }

  .logo {
    grid-column: 5;
    grid-row: 2;
  }

  .grid {
    grid-template-columns: repeat(9, 1fr);
  }

  .titre {
    grid-column-start: 1;
    grid-column-end: 11;
    grid-row: 1;
  }

  .presentation {
    grid-column-start: 1;
    grid-column-end: 11;
    grid-row: 3;
    display: flex;
    align-items: flex-end;
    margin-top: 45px
  }

  .presentation p {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%239B9B9BFF' stroke-width='4' stroke-dasharray='125' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  }
}


@media screen and (max-width: 410px) {
  .accueil h1 {
    font-size: 40px;
    padding: 30px 0 0 0;
  }

  #ordi {
    grid-row: 2;
  }

  .accueil span {
    font-size: 20px;
  }

  .accueil {
    grid-template-rows: 200px;
  }
}

@media screen and (min-height: 500px) and (max-height: 620px) {
  .a_propos {
    padding-top: 70px;
  }

}

/*slider*/
#slide {
  width: 100vw;
}
.carousel-cell {
  width: 100%;
  height: 100vh;
}

.carousel-cell:first-of-type {
  background-color: #BED3C3;
}

.carousel-cell:nth-of-type(2) {
  background-color: #151515;
}

.carousel-cell:nth-of-type(3) {
  background-color: #e9ab73;
}

.carousel-cell:nth-of-type(4) {
  background-color: #151515;
}

.carousel-cell:nth-of-type(5) {
  background-color: #E15C78;
}

.carousel-cell a:hover, .carousel-cell a:focus {
  color: white;
  text-decoration: none;
}
</style>
