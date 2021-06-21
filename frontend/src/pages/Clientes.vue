<template>
  <div class="wrapper">
    <h1 class="title">Cadastrar Cliente</h1>
    <v-expansion-panels v-model="panel" multiple class="painel">
      <v-expansion-panel>
        <v-expansion-panel-header
          >Informe os dados</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <v-row class="container">
          <div class="container__filter">
            <v-text-field
              outlined
              label="Nome"
              type="text"
              v-model="cliente.nome"
            />
          </div>
          <div class="container__filter">
            <v-text-field
              outlined
              type="text"
              placeholder="whatsapp"
              v-model="cliente.whatsapp"
            />
          </div>
          <div class="container__filter">
            <v-text-field
              outlined
              type="text"
              placeholder="cpf"
              v-model="cliente.cpf"
            />
          </div>
          <div class="container__filter">
            <v-text-field
              outlined
              type="text"
              placeholder="email"
              v-model="cliente.email"
            />
          </div>
          <div class="container__filter">
            <v-text-field
              outlined
              type="text"
              placeholder="cep"
              v-model="cliente.cep"
            />
          </div>
          <div class="container__filter">
            <v-text-field
              outlined
              type="text"
              placeholder="endereco"
              v-model="cliente.endereco"
            />
          </div>
          <div class="container__filter">
            <v-text-field
              outlined
              type="text"
              placeholder="numero"
              v-model="cliente.numero"
            />
          </div>
          <div class="container__filter">
            <v-text-field
              outlined
              type="text"
              placeholder="instagram"
              v-model="cliente.instagram"
            />
          </div>
          </v-row>
          <v-btn
          @click="cadastrar"
            color="#FF449F"
            depressed
            rounded
            dark
          >Cadastrar</v-btn>
          <v-btn
          @click="cadastrar"
            color="#FF449F"
            depressed
            rounded
            outlined
          >Limpar</v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <div>
      <ul>
        <li v-for="(item, index) in clientes" :key="index">{{ item.nome }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    panel: [0],
    cliente: {
      nome: null,
      whatsapp: null,
      email: null,
      cpf: null,
      cep: null,
      endereco: null,
      numero: null,
      instagram: null,
    },
    clientes: [],
  }),
  methods: {
    cadastrar() {
      this.clientes.push({ ...this.cliente });
    },
    limpar() {
      this.cliente.nome = null;
      this.cliente.whatsapp = null;
      this.cliente.email = null;
      this.cliente.cep = null;
      this.cliente.endereco = null;
      this.cliente.numero = null;
      this.cliente.instagram = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper{
  background: #fdfaf4;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 20px 40px;
}
.title{
  color: #FF449F;
  font-size: 1.6em !important;
  margin: 20px auto 20px auto;
}
.painel {
}

.container{
  
  &__filter{
    height: 56px;
    margin-bottom: 15px;
    margin-right: 15px;
    width: calc(25% - 15px);
    min-width: 262px;
  }
}
</style>
