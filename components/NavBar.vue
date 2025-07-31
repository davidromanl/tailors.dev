<template>
  <div>
    <div
      class=" fixed w-full z-20 backdrop-blur bg-black/10 py-4 px-10 flex justify-between font-cal"
    > 
    <div class="flex justify-between w-full max-w-6xl mx-auto">

        
        <h2 class="text-white font-black text-4xl font-paris">
        Tailors<span class="text-indigo-600">Dev</span>
      </h2>
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/"
          class="text-white font-bold hover:text-indigo-500"
          >Inicio</NuxtLink
        >
        <NuxtLink
          to="/"
          class="text-white font-bold hover:text-indigo-500 "
          >Nosotros</NuxtLink
        >

        <NuxtLink
          to="/"
          class="text-white font-bold hover:text-indigo-500 "
          >Proyectos</NuxtLink
        >

        <NuxtLink
        to="/"
        class="text-white font-bold px-4 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700"
        >Contacto</NuxtLink
        >
    </div>
      </div>
    </div>
  </div>
</template>