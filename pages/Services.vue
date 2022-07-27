<template>
  <div>
    <div class="pt-3 text-uppercase text-center text-white nos-services">
      <p class="mt-11 py-2 bg-black">Nos services</p>
    </div>
    <p class="text-center kepolu-text py-5 text-primary" style="font-size: 45px">
      Développement Web <br> Full Stack
    </p>

    <div class="container">
      <div class="row align-items-center">

        <div class="col-md-6 col-12">
          <p class="font-bold">Pourquoi considérer le développement web full stack pour votre projet ?</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as
            opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum'
            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
            by
            accident, sometimes on purpose (injected humour and the like).
          </p>
          <div class="d-flex justify-content-around">
            <NuxtLink to="/contact" class="get-started-btn scrollto">Discutez de votre project</NuxtLink>
            <NuxtLink to="/contact" class="get-started-btn scrollto">Voir plus <i class="bi bi-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <img src="../assets/img/web-dev.png" alt="">
        </div>
      </div>
    </div>

    <p class="text-center kepolu-text text-primary py-5" style="font-size: 45px">
      Développement d'applications <br> Mobiles
    </p>

    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <p class="font-bold">Pourquoi considérer le développement web full stack pour votre projet ?</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as
            opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum'
            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
            by
            accident, sometimes on purpose (injected humour and the like).
          </p>
          <div class="d-flex justify-content-around">
            <NuxtLink to="/contact" class="get-started-btn scrollto">Discutez de votre project</NuxtLink>
            <NuxtLink to="/contact" class="get-started-btn scrollto">Voir plus <i class="bi bi-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <img src="../assets/img/mobil-dev.png" alt="">
        </div>
      </div>
    </div>

    <p class="text-center kepolu-text text-primary py-5" style="font-size: 45px">
      Marketing <br> Digital
    </p>

    <div class="container">
      <div class="row justify-content-center">
        <img class="w-50 p-3 " src="../assets/img/Market.png" alt="">
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <p class="font-bold">Pourquoi considérer le développement web full stack pour votre projet ?</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as
            opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum'
            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
            by
            accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
        <div class="col-md-4">
          <NuxtLink to="/contact" class="get-started-btn my-2 ">Discutez de votre project</NuxtLink>
          <NuxtLink to="/contact" class="get-started-btn">Voir plus <i class="bi bi-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ServicesPage',

  mounted() {

  },
}

</script>

<style scoped>
.nos-services {
  border-top: 2px solid var(--primary);
  background: var(--primary);
  font-size: 30px;
}
#header{
  background-color: var(--primary)
}
</style>
