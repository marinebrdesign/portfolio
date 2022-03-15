<template>
<div class="slider">
  <button @click="prev" TYPE="button" class="btn btn-left">
    <svg class="icone" xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85">
      <g id="Groupe_14" transform="translate(-1658.548 -1857)">
        <g id="Rectangle_17" transform="translate(1658.548 1857)" fill="none" stroke="#fff" stroke-width="5">
          <rect width="85" height="85" stroke="none"/>
          <rect x="2.5" y="2.5" width="80" height="80" fill="none"/>
        </g>
        <line id="Ligne_14" x1="23.814" y1="23.814" transform="translate(1700.472 1911.633) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="5"/>
        <line id="Ligne_13" y1="23.814" x2="24.515" transform="translate(1724.987 1911.633) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="5"/>
      </g>
    </svg>
  </button>
  <div class="container-slides" :style="{transform: `translateX(${index}px)`, transition: `${transition}`}">
    <router-link to="/CSV">
      <div class="accueil" id="csv">
        <h1>Association <br> CSV</h1>
        <img id="ordi" src="../img/csv/csv-ordi.png" alt="L'association CSV - Ordinateur" class="img-responsive" style=width:100%>
        <span>Refonte de site</span>
      </div>
    </router-link>
    <router-link to="/boss_lady_gaga">
    <div class="accueil" id="lady_gaga">
      <h1>Boss - Lady <br>Gaga</h1>
      <img id="ordi" src="../img/boss_lady_gaga/lady_gaga_imac.png" alt="Boss Lady Gaga -  Imac" class="img-responsive" style=width:100%>
      <span>Intégration, design de site (48h)</span>
    </div>
    </router-link>
  </div>
  <button @click="next" TYPE="button" class="btn btn-right">
    <svg class="icone"  xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84">
      <g id="Groupe_15" transform="translate(1742.098 1940.977) rotate(180)">
        <g id="Rectangle_16" transform="translate(1742.098 1940.977) rotate(-180)" fill="none" stroke="#fff" stroke-width="5">
          <rect width="84" height="84" stroke="none"/>
          <rect x="2.5" y="2.5" width="79" height="79" fill="none"/>
        </g>
        <line id="Ligne_13" y1="23.403" x2="24.092" transform="translate(1723.833 1910.69) rotate(-180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="5"/>
        <line id="Ligne_14" x1="23.403" y1="23.403" transform="translate(1699.742 1910.69) rotate(-180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="5"/>
      </g>
    </svg>
  </button>
</div>
</template>

<script>
export default {
  name: "slider",
  data: function () {
    return {
      index: 0,
      transition: "transform 0.2s ease"
    }
  },
  methods: {
    next() {
      if(this.index === -1500) {
        this.transition = "none";
        this.index = 0;
      } else {
        this.index -= 500;
        this.transition = "transform 0.2s ease";
      }
    },
    prev() {
      if(this.index === 0){
        this.transition = "none";
        this.index = -1500;
      } else {
        this.transition = "transform 0.2s ease";
        this.index +=500;
      }
    }
  }
}
</script>

<style scoped>
.slider {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.container-slides {
  display: flex;
}

#csv, #lady_gaga{
  width: 100%;
  height:100vh;
}

.btn {
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  position: absolute;
  z-index: 1000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  justify-items: center;
}

.icone {
  width: 15px;
}

.btn-left {
  top: 50px;
  left: 5px;
  transform: translateY(-50%);
}

.btn-right {
  top: 50px;
  right: 5px;
  transform: translateY(-50%);
}


h1 {
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
  margin:0 auto 20vh auto;
  display: grid;
  grid-gap: 16px;
  padding-top: 15vh;
  grid-template-rows: 530px;
  background-color: #BED3C3;
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
}

#ordi {
  grid-column-start: 6;
  grid-column-end: 13;
  grid-row: 1;
  z-index: 0;
}


</style>
