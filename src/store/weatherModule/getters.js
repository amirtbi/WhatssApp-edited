import cities from "./_cityNames.js";
export default {
  dataForcast(state) {
    return state.dataContainer;
  },
  indexOfCities() {
    return cities.length;
  },
  chosenChat(state) {
    return state.selectedChat;
  },
};
