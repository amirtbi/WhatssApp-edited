<template>
  <div class="flex flex-col">
    <!-- header --->
    <chat-header></chat-header>
  </div>
  <!-- sections -->
  <section class="m-4 flex flex-row items-center">
    <chatLists
      v-for="city in filteredCities"
      :selectedChat="city"
      :key="city.title"
      :id="city.title"
      :name="city.title"
      :link="city.link"
      :condition="city.description"
      :time="city.lastTimesttamped"
      @selectHanlder="selectCountryHandler"
    ></chatLists>
  </section>
</template>
<script>
import cities from "../store/weatherModule/_cityNames.js";
import ChatHeader from "../components/ChatHeader.vue";
import ChatLists from "../components/ChatLists.vue";
export default {
  components: {
    ChatHeader,
    ChatLists,
  },
  data() {
    return {
      searchedCity: "",
      messages: null,
      count: 0,
      values: [],
      properties: [],
      cityIsClicked: false,
      mode: "large",
      width: window.innerWidth,
    };
  },
  //Computed
  computed: {
    weatherData() {
      return this.$store.getters["weatherModule/dataForcast"];
    },
    filteredCities() {
      if (this.searchedCity === "") {
        return this.$store.getters["weatherModule/dataForcast"];
      } else {
        const cities = this.$store.getters["weatherModule/dataForcast"];
        const foundCities = cities.filter((city) => {
          return city.title.toLowerCase().includes(this.searchedCity);
        });
        return foundCities;
      }
    },
  },
  methods: {
    async updateWeather() {
      try {
        // Get length of cities array
        const citiesNumbers =
          this.$store.getters["weatherModule/indexOfCities"];
        console.log("cities", citiesNumbers);
        for (let i = 0; i < citiesNumbers; i++) {
          await this.$store.dispatch(
            "weatherModule/addWeatherData",
            cities[i].name
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    displayResult() {
      const enteredValue = this.$refs.search.value;
      // Make firstletter large
      const firstLetter = enteredValue
        .split("")
        .splice(0, 1)
        .join("")
        .toUpperCase();
      // Concate the first letter to rest of words
      const updatedWord =
        firstLetter +
        enteredValue.split("").slice(1, enteredValue.length).join("");
      // Display chat
      this.selectCountryHandler(updatedWord);
    },
    updateSearch(event) {
      this.searchedCity = event.target.value;
    },
    async selectCountryHandler(cityId) {
      this.cityIsClicked = true;
      // Get number of property
      console.log("clicked ", cityId);
      const cityData = await this.$store.getters["weatherModule/dataForcast"];

      const foundCity = cityData.find((city) => {
        return city.title === cityId;
      });
      let count = 0;
      for (let properties in foundCity) {
        count += 1;
      }
      this.messages = foundCity;
      this.properties = Object.keys(foundCity);
      this.values = Object.values(foundCity);
      console.log("Found city", this.properties);
    },
  },
  created() {
    console.log("hi");
    this.updateWeather();
    // console.log(this.$store.getters["weatherModule/dataForcast"]);
  },
};
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
</style>
