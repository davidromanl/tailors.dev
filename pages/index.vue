<script setup lang="ts">
import Aplicaciones from '../components/Aplicaciones.vue';

</script>

<template>
  <div>
    <div class="bg-gradient-to-br from-[#01111d] via-indigo-700 to-black  pt-10 text-white flex  h-full md:h-screen  pb-32">
      <div class="bg-black/60 absolute inset-0 mb-1 md:mb-0"></div>
      <div class="absolute inset-0 bg-[url('/img/geometry.png')] opacity-30 z-0"></div>
      <div class="z-10 text-center max-w-3xl mx-auto  mt-5 px-10 md:px-0">
        <h2 class="text-white font-black text-5xl mt-10">
          Tailors<span class="text-indigo-600">Dev</span>
        </h2>
        <h1 class="text-5xl md:text-6xl mb-4 font-black mt-28 md:mt-20">
          Construimos Software <br />
          a tu Medida.
        </h1>

        <p class="text-xl md:text-2xl mb-4">
          En
          <span class="font-black text-indigo-600">TailorsDev</span> diseñamos y
          desarrollamos <br class="hidden md:block" />
          soluciones digitales para tu negocio.
        </p>

        <div class="flex gap-4 justify-center pt-2">

          <a href="https://wa.me/3155963884" target="_blank" class="bg-indigo-800 hover:scale-105 duration-300 ease-out px-4 text-xl font-bold py-3 rounded-xl">
            ¡ Contáctanos !
          </a>
        </div>
      </div>

    <!--   <div class="absolute right-8 gap-3 flex  bottom-6 z-20">
        <a href="https://wa.me/" class="hover:scale-105 duration-200 ease-in fill-indigo-900" target="_blank">
          <IconsWhatsapp class="w-8" />
        </a>
        <a href="https://www.facebook.com/" class="hover:scale-105 duration-200 ease-in fill-indigo-900"
          target="_blank">
          <IconsFacebook class="w-8" />
        </a>
        <a href="https://www.instagram.com/" class="hover:scale-105 duration-200 ease-in fill-indigo-900"
          target="_blank">
          <IconsInstagram class="w-8" />
        </a>
        <a href="https://www.linkedin.com/" class="hover:scale-105 duration-200 ease-in fill-indigo-900"
          target="_blank">
          <IconsLinkedin class="w-8" />
        </a> 
      </div>-->

      <svg xmlns="http://www.w3.org/2000/svg" class="absolute -bottom-20 hidden md:block" viewBox="0 0 1440 320">
        <path fill="white" fill-opacity="1"
          d="M0,128L120,149.3C240,171,480,213,720,197.3C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
        </path>
      </svg>
    </div>
    <div class="bg-white h-screen">
      <Aplicaciones />
    </div>

   
  </div>
</template>
