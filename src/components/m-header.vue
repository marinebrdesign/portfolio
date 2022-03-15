<template>
  <nav>
    <header>
      <ul>
        <li><router-link to="/a-propos">À PROPOS</router-link></li>
        <li><router-link to="/">PROJETS</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>
    </header>
  </nav>
</template>

<style scoped>
li {
  list-style: none;
  padding: 0 4%;
}

a {
  color: white;
  text-decoration: none;
  font-family: karla;
  font-weight: 800;
  font-size: 30px;
  display: inline-block;
  position: relative;
}

a:after {
  background: none repeat scroll 0 0 transparent;
  content: "";
  display: block;
  height: 3px;
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

nav {
  background-color: transparent;
  position: absolute;
  height: 45px;
  width: 100%;
  top: 0;
  z-index: 1;
}

ul {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 20px 0;
}

a:hover, a:focus {
  color: white;
  text-decoration: none;
}


/*---------Responsive------*/

@media screen and (max-width: 3000px) {
}
@media screen and (max-width: 1600px) {
  a {
    font-size: 20px;
  }
}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {
  a {
    font-size: 16px;
  }
}

@media screen and (max-width: 480px) {
  a {
    font-size: 14px;
  }
}

</style>
