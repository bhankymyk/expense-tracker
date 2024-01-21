<template>

  <div class="container-fluid">

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid" >

        <div class="logos">
          <a class="navbar-brand">
             <p> <img alt="logo" src="./assets/EXPENSELY.png"> EXPENSELY</p>
          </a>
        </div>


        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav here">
            <a class="nav-link active" aria-current="page"><router-link to="/">Home |</router-link></a>
            <a class="nav-link" ><router-link to="/about">About |</router-link></a>
            <a class="nav-link" ><router-link to="/expensely">Expense Tracker |</router-link></a>
            <a class="nav-link" >Pricing</a>
            <!-- <a class="nav-link disabled" aria-disabled="true">Disabled</a> -->
          </div>
        </div>
      </div>
    </nav>
  </div>



  <!-- <nav>
  </nav> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
}
.logos{
  display: flex;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.here {
  margin-top: -20px;
}
</style>
