<template>
  <div>
    <m-header></m-header>
  <div class="background">
    <div class="a_propos">
     <h2>À PROPOS</h2>
      <div class="grid">
        <div class="logo"><svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 692.82 691.03"><defs></defs><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><polygon class="cls-1" points="684.33 0.44 400.52 0 683.87 287 684.33 0.44"/><rect class="cls-1" x="0.95" y="2.84" width="256.26" height="256.26" transform="translate(-0.32 0.31) rotate(-0.14)"/><polygon class="cls-1" points="404.49 405.05 177.4 405.6 461.95 688.77 692.82 686.23 688.49 461.13 403.94 177.95 404.49 405.05"/><polygon class="cls-1" points="3.38 691.03 287.13 687.68 0 404.53 3.38 691.03"/></g></g></svg></div>
        <div class="presentation"><p>En 2022, je serai diplômée du DUT MMI - Métiers du multimédia et de l'internet - que j'ai effectué à l'IUT de Belfort - Montbéliard. Au cours des 3 derniers semestres, j'ai effectué plusieurs réalisations en webdesign mais également en développement car c'est un domaine que j'apprécie tout autant. Étant une formation très diversifiée, le DUT MMI m’a permis d’acquérir des compétences dans plusieurs domaines.
          <br><br>Pour en savoir plus, n'hésitez pas à me contacter <router-link to="/contact">ici</router-link></p></div>
      </div>
  </div>
    <footer>
      <p>All creations seen are the property of Marine Beurier.</p>
    </footer>
  </div>
  </div>
</template>

<script>
import MHeader from '../components/m-header'

export default {
  name: 'App',
  components: {
    MHeader,
  },
}
</script>

<style scoped>

body {
  background-color: #151515;
}

.background {
  background-color: #151515;
  z-index: -2;
  height: 100%;
  width: 100%;
  position: absolute;
}

footer p {
  text-align: center;
  font-size: 30px;
  font-family: "Breadley Sans";
  padding: 10px 0;
  margin: 0;
}

.a_propos {
  padding: 45px 0 20px 0;
  background-color: #151515;
}

a {
  text-decoration: none;
  color: white;

  display: inline-block;
  position: relative;
}

 a:after {
  background: none repeat scroll 0 0 transparent;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
 a:hover:after {
  width: 100%;
  left: 0;
}

.presentation a:hover, .presentation a:focus {
  color: white;
  text-decoration: none;
}

h1, p {
  color: white;
}

h2 {
  color: white;
  text-align: center;
  font-family: "Bigilla";
  font-size: 130px;
  font-weight: 300;
  display: table;
  padding-bottom: 5px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
}

h2:after{
  content: "";
  position: absolute;
  width: 70%;
  height: 1px;
  bottom: 0;
  right: 1%;
  border-bottom: 4px solid #fff;
}

.grid {
  grid-template-columns: repeat(12, 1fr);
  width: 85%;
  margin:0 auto;
  grid-gap: 16px;
  display: grid;
}

.grid p {
  font-family: "Breadley Sans";
  font-size: 45px;
  margin: 0;
}

.logo {
  grid-column: 1;
  grid-row: 1;
}

.presentation {
  grid-column-start: 3;
  grid-column-end: 13;
  grid-row: 1;
}

.a_propos {
  min-height: 100%;
  margin-bottom: -50px;
}

.a_propos::after {
  content: '';
  display: block;
}

footer, .a_propos::after {
  height: 50px;
}

/*---------Responsive------*/

@media screen and (max-width: 3000px) {

  }
  @media screen and (max-width: 1600px) {

    .a_propos h2 {
      font-size: 80px;
    }
    .presentation p {
      font-size: 30px;
    }

    footer p {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1200px) {
    .a_propos h2 {
      font-size: 60px;
    }

    .presentation p {
      font-size: 25px;
    }

    footer p {
      font-size: 16px;
    }

  }

    @media screen and (max-width: 992px) {
      .logo {
        grid-column: 6;
        grid-row: 1;
      }

      .presentation {
        grid-column-start: 1;
        grid-column-end: 13;
        grid-row: 2;
        padding-top: 20px;
      }


      .grid {
        grid-template-columns: repeat(11, 1fr);
      }
    }

    @media screen and (max-width: 768px) {
      h2:after{
        border-bottom: 3px solid #fff;
      }

      footer p {
        font-size: 16px;
      }

    }

    @media screen and (max-width: 480px) {
      .a_propos h2 {
        font-size: 20px;
      }

      h2:after{
        border-bottom: 2px solid #fff;
      }

      .presentation p {
        font-size: 18px;
      }

      .logo {
        grid-column: 5;
        grid-row: 1;
      }

      .presentation  {
        grid-column-start: 1;
        grid-column-end: 10;
        grid-row: 2;
      }

      .grid {
        grid-template-columns: repeat(9, 1fr);
      }

      footer p {
        font-size: 12px;
      }
    }

@media screen and (max-height: 599px) {
}

@media screen and (min-height: 600px) {

}
</style>
