<template>
  <div class="fixed w-full flex flex-row items-center p-4 bg-emerald-900">
    <!--image -->
    <div class="w-1/3 flex flex-row items-center">
      <!-- back arrow icon -->
      <router-link to="/"
        ><i class="hover:text-gray-800 fas fa-arrow-left mr-4 text-white"></i
      ></router-link>
      <img :src="city.link" class="w-12 h-12 rounded-full" />
    </div>
    <!-- INFO --->
    <div
      class="w-2/3 flex flex-col items-start justify-center md:items-end md:pr-4"
    >
      <!-- Title-->
      <p class="text-white text-xl">{{ city.name }}</p>
      <!-- last time checked message -->
      <p class="text-gray-400 text-sm">
        {{ new Date().toLocaleTimeString() }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["city"],
};
</script>
