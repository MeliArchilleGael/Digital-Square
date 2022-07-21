<template>
  <!-- ======= Footer ======= -->
  <div>
    <hr class="top-hr">
    <footer id="footer" class="pt-5">
      <div class="container py-10">
        <div class="row">
          <div class="col-md-2">
            <img src="../assets/img/logo.png" alt="">
          </div>
          <div class="col-md-7">
            <div class="d-flex flex-wrap justify-content-around">
              <div class="text-center">
                <p class="px-3 font-bold text-uppercase" style="color: var(--primary); font-size: 15px">Nos Services</p>
                <div>
                  Developement web <br> Developement Mobil <br> Marketing Digital
                </div>
              </div>
              <div class="text-center">
                <p class="px-3 font-bold text-uppercase" style="color: var(--primary); font-size: 15px">Nos
                  Réalisations</p>
                <div>
                  Site Web <br> Application Mobile <br> Motion Design <br>Graphic Design
                </div>
              </div>
              <div class="text-center">
                <p class="px-3 font-bold text-uppercase" style="color: var(--primary); font-size: 15px">A Propos</p>
                <div>
                  Qui Sommes nous ? <br> Pourquoi nous? <br> Motion Design <br>Graphic Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-bottom pt-11 items-center">
        <div class="d-flex justify-content-end">
          <div class="bg-black w-25 contact-info py-5 px-4 mr-5">
            <div class="text-center text-white">
              <p><i class="bi bi-house px-2"></i>Carrefour Emia, Yaoundé-CMR</p>
              <p><i class="bi bi-house px-2"></i>Carrefour Emia, Yaoundé-CMR</p>
              <p><i class="bi bi-house px-2"></i>Carrefour Emia, Yaoundé-CMR</p>

              <button class="get-started-btn">
                NOUS CONTACTER
              </button>
            </div>
          </div>
        </div>
        <div class="container">

          <p class="py-5 text-bottom">
            Conditions de confidentialité : fact that a reader will be distracted by the readable content of a page
            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
            desktop publishing
          </p>

          <div class="d-flex justify-content-between">
            <p>COPYRIGHT © DIGITAL SQUARE 2022</p>
            <p>TOUS DROITS RESERVES</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <!-- End Footer -->
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.top-hr {
  transform: skewY(-1deg);
  border: 2px solid var(--primary);
}

.contact-info {
  margin-top: -150px;
  border-radius: 30px;
}

.bg-bottom {
  background: url("../assets/img/bg-footer.png") no-repeat center top;
}

.text-bottom {
  font-size: 12px;
}
</style>
