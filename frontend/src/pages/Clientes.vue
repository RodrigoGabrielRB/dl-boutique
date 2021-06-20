<template>
  <div>
    <input type="text" placeholder="nome" v-model="cliente.nome"><br>
    <input type="text" placeholder="whatsapp" v-model="cliente.whatsapp"><br>
    <input type="text" placeholder="email" v-model="cliente.email"><br>
    <input type="text" placeholder="cep" v-model="cliente.cep"><br>
    <input type="text" placeholder="endereco" v-model="cliente.endereco"><br>
    <input type="text" placeholder="numero" v-model="cliente.numero"><br>
    <input type="text" placeholder="instagram" v-model="cliente.instagram"><br>
    <button @click="cadastrar">Cadastrar</button>
    <button @click="limpar">Limpar</button>

    <div>
      <ul>
        <li v-for="(item, index) in clientes" :key="index">{{item.nome}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
data: () => ({
  cliente: {
    nome: null,
    whatsapp: null,
    email: null,
    cep: null,
    endereco: null,
    numero: null,
    instagram: null 
  },
  clientes: []
}),
methods: {
  cadastrar(){
    this.clientes.push({...this.cliente})
  },
  limpar(){
    this.cliente.nome = null
    this.cliente.whatsapp = null
    this.cliente.email = null
    this.cliente.cep = null
    this.cliente.endereco = null
    this.cliente.numero = null
    this.cliente.instagram = null
  }
}
}
</script>

<style>

</style>