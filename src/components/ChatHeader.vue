<template>
  <!-- header --->
  <header class="flex flex-col bg-emerald-900 pb-0 p-2">
    <!--  title -->
    <div class="flex flex-row items-center justify-between">
      <h1 class="p-2 text-2xl text-white font-bold">WhatsApp</h1>
      <!-- Icons -->
      <div class="flex flex-row items-center justify-between mr-4">
        <span class="mr-4 material-icons text-2xl md:text-2xl text-white">
          search
        </span>
        <span
          @click="navigateHandler"
          class="mr-4 material-icons text-2xl md:text-2xl text-white"
        >
          chat
        </span>
        <span class="mr-4 material-icons text-2xl md:text-2xl text-white">
          more_vert
        </span>
      </div>
    </div>
    <!-- TABS-->
    <ul class="flex flex-row items-center justify-between w-full m-0 pb-0 p-2">
      <li class="text-center w-1/3 p-2 hover:border-b-2 hover:border-white">
        <router-link class="text-gray-400 hover:text-white text-xl" to="/calls"
          >Calls</router-link
        >
      </li>
      <li class="text-center w-1/3 p-2 hover:border-b-2 hover:border-white">
        <router-link
          class="text-gray-400 hover:text-white text-xl"
          to="/contacts"
          >Contacts</router-link
        >
      </li>
      <li class="text-center w-1/3 p-2 hover:border-b-2 hover:border-white">
        <router-link
          class="text-gray-400 hover:text-white text-xl"
          to="/messages"
          >Chats</router-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      tab: "",
    };
  },
  methods: {
    navigateHandler() {
      this.$router.push("/chat");
    },
    hoverTab(link) {
      this.tab = link;
    },
  },
  computed: {},
};
</script>

<style scoped></style>
