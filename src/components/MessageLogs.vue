<template>
  <section
    class="h-screen bg-repeat pt-20"
    :style="{
      backgroundImage: `url(${require('../assets/whatsapp_background.png')} )`,
    }"
  >
    <article v-for="msg in properties" :key="msg" class="p-3 flex flex-col">
      <div class="flex flex-row justify-start w-full mb-4">
        <div class="flex flex-col rounded bg-white w-2/3">
          <!-- header message -->
          <span class="text-blue-600 font-bold p-2 m-0">{{ chats.name }}</span>

          <div class="flex flex-row justify-between p-2">
            <p class="font-bold pb-2 m-0">{{ msg.toUpperCase() }}</p>
            <span class="text-gray-400">{{ chats.time }}</span>
          </div>
        </div>
      </div>
      <div class="flex flex-row w-full justify-end">
        <div class="flex flex-col rounded bg-white w-2/3">
          <span class="text-blue-600 font-bold p-2 m-0">{{ chats.name }}</span>
        </div>
        <div class="bg-white flex flex-row p-2 w-2/3 justify-between">
          <p class="mr-2 font-bold pb-2 m-0">
            {{ msg === "link" ? "link..." : chats[msg] }}
          </p>
          <span class="text-gray-400">{{ chats.time }}</span>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: ["chats"],
  data() {
    return {
      values: [],
      properties: [],
      msgArray: [],
    };
  },

  created() {
    console.log("cahts", this.chats);
    this.properties = Object.keys(this.chats);
    this.values = Object.values(this.chats);
    console.log(this.properties);
  },

  //   mounted() {
  //     this.values = Object.keys(this.charts);
  //     this.properties = Object.values(this.charts);
  //     this.msgArray.push(this.chats);
  //   },
};
</script>

<style scoped>
section {
  height: 100%;
}
</style>
