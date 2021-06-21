<template>
  
      

      <!-- <v-navigation-drawer class="menu" v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >

            <v-list-item>
              <router-link to="/">
              <v-list-item-icon>
                <v-icon>mdi-monitor-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Dashboard</v-list-item-title>
              </router-link>
            </v-list-item>

            <v-list-item>
              <router-link to="/clientes">
              <v-list-item-icon>
                <v-icon>mdi-account-search</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Clientes</v-list-item-title>
              </router-link>
            </v-list-item>

            <v-list-item>
              <router-link to="/estoque">
              <v-list-item-icon>
                <v-icon>mdi-archive</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Estoque</v-list-item-title>
              </router-link>
            </v-list-item>

            <v-list-item>
              <router-link to="/vendas">
              <v-list-item-icon>
                <v-icon>mdi-tag</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Vendas</v-list-item-title>
              </router-link>
            </v-list-item>

            <v-list-item>
              <router-link to="/produtos">
              <v-list-item-icon>
                <v-icon>mdi-hanger</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Produtos</v-list-item-title>
              </router-link>
            </v-list-item>

            <v-list-item>
              <router-link to="/relatorios">
              <v-list-item-icon>
                <v-icon>mdi-file-chart</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Relatórios</v-list-item-title>
              </router-link>
            </v-list-item>

          </v-list-item-group>

        </v-list>
      </v-navigation-drawer> -->
 
  <v-app>
   <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>

<style lang="scss">

.header{
  display: flex;
  justify-content: space-between;
  background: #FF449F;
  padding:10px;

  &__right{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white
  }
}

.menu{
  margin-top:60px;
}

</style>
