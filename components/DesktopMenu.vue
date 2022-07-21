<template>
  <div>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center">

      <NuxtLink to="/" class="logo me-auto">
        <img src="../assets/img/logo-white.png" alt="logo">
      </NuxtLink>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><NuxtLink to="/" class="nav-link active">Home</NuxtLink></li>
            <li class=""><NuxtLink to="/Services" class="nav-link" href="#">Nos Services</NuxtLink>

            </li>
            <li><NuxtLink to="/Realisations" class="nav-link ">Nos Realisations</NuxtLink></li>
            <li><NuxtLink to="/Realisations" class="nav-link ">A Propos</NuxtLink></li>
<!--            <li class="dropdown"><a class="nav-link" href="#"><span>Fr</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><NuxtLink class="nav-link" to="#">En</NuxtLink></li>
              </ul>
            </li>-->
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

        <NuxtLink to="/contact" class="get-started-btn">Demander un devis</NuxtLink>
      </div>
    </header>
    <!-- End Header -->
  </div>
</template>

<script>

export default {
  name: "DesktopMenu"
}
</script>

<style scoped>
header {
  background: var(--primary);
}
  .navbar ul li a:hover::before{
    content: "";
    position: absolute;
    display: inline-block;
    width: calc(100% - 2rem);
    height: 4px;
    border-radius: 2px;
    background: white;
    bottom: 3px ;
  }
.navbar ul li a:hover {
  transition: all 1s;
}
</style>
