<template>
  <!-- header --->

  <message-header :city="selectedChat"></message-header>

  <!-- messages -->
  <message-logs :chats="selectedChat"></message-logs>
</template>

<script>
import MessageHeader from "../components/MessageHeader.vue";
import MessageLogs from "../components/MessageLogs.vue";
export default {
  props: ["id"],
  components: {
    MessageHeader,
    MessageLogs,
  },
  data() {
    return {
      info: [],
    };
  },
  computed: {
    selectedChat() {
      return this.$store.getters["weatherModule/chosenChat"];
    },
  },
  mounted() {
    console.log("data bind ", this.$store.getters["weatherModule/chosenChat"]);
    console.log(this.id);
  },
};
</script>

<style scoped>
.fade-enter-to {
  transform: translateX(-100px);
}
.fade-enter-active {
  transition: all 0.5s ease-in;
}
.fade-enter-to {
  transform: translateX(0);
}
</style>
