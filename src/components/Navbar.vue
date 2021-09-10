<template>
<nav class="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" href="#" to="/">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link active" aria-current="page" href="#" to="/">Home</router-link>
        <router-link class="nav-link" href="#" to="/features">Features</router-link>
        <router-link class="nav-link" href="#" to="/about">About</router-link>
      </div>
    </div>
  </div>
</nav>
</template>