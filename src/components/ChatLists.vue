<template>
  <!-- image -->
  <div class="w-2/12" @click="selectHandler">
    <img class="w-12 h-12 rounded-full" :src="link" />
  </div>
  <article
    class="flex p-2 flex-col w-10/12 border-b-2 border-gray-200"
    @click="selectHandler"
  >
    <div class="flex flex-row justify-between mb-2">
      <!-- title -->
      <p class="font-bold font-sans text-xl">{{ name }}</p>
      <!-- time -->
      <p class="text-green-500">{{ time }}</p>
    </div>
    <!-- fake message -->
    <div class="flex flex-row justify-between">
      <p class="text-gray-600">{{ condition }}</p>
      <p
        class="text-sm text-center text-white h-5 w-5 bg-green-500 rounded-full"
      >
        {{ Math.ceil(Math.random(1, 10) * 10) }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  emits: ["selectCountryHandler"],
  props: ["id", "name", "link", "condition", "time", "selectedChat"],

  methods: {
    selectHandler() {
      // Set id
      const selectedChatInfo = {
        name: this.name,
        link: this.link,
        condition: this.condition,
        time: this.time,
      };

      this.$store.commit("weatherModule/setSelectedChat", selectedChatInfo);
      this.$router.push({
        path: `/messages/${this.id}`,
      });
    },
  },
};
</script>
