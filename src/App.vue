<template>
  <v-app id="inspire">
    <SideBar></SideBar>
    <Header></Header>
    <v-content>
      <v-container fluid fill-height>
          <router-view></router-view>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>


import Header from "./components/Layout/Header";
import SideBar from "./components/Layout/SideBar";
import Footer from "./components/Layout/Footer";
export default {
  name: 'app',
  components: {Footer, SideBar, Header},
}
</script>
