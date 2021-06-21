<template>
  <div class="wrapper">
    <h1 class="title">Cadastrar Produto</h1>
    <v-expansion-panels v-model="panel" multiple class="painel">
      <v-expansion-panel>
        <v-expansion-panel-header>Informe os dados</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row class="container">
            <div class="container__filter">
              <v-text-field
                outlined
                label="Código"
                type="text"
                v-model="produto.codigo"
              />
            </div>
            <div class="container__filter">
              <v-text-field
                outlined
                label="Nome Produto"
                type="text"
                v-model="produto.nome"
              />
            </div>
            <div class="container__filter">
              <v-text-field
                outlined
                label="Preço Custo"
                type="text"
                v-model="produto.precoCusto"
              />
            </div>
            <div class="container__filter">
              <v-text-field
                outlined
                type="text"
                label="Preço Venda"
                v-model="produto.precoVenda"
              />
            </div>
            <div class="container__filter">
              <v-text-field
                outlined
                type="text"
                label="Coleção"
                v-model="produto.colecao"
              />
            </div>
            <div class="container__filter">
               <v-file-input
                v-model="produto.fotoProduto"
                label="Fotos do Produto"
                outlined
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-camera"
                multiple
                chips
                @click:clear="handlerClearUploadFoto"
                @change="handlerUploadFoto"
              ></v-file-input>
            </div>
          </v-row>
          <v-row class="container">
            <img v-for="(foto, index) in arrayUrlFotos" :key="index" :src="foto">
          </v-row>
          <v-row class="container">
            <div>
              Tamanho
              <button>Gerenciar tamanhos</button>
            </div>

            <div>
              Gerenciar Cores
              {{produto.tamanho}}
              <div class="colors">
                

          <div class="remove" v-for="(item, index) in produto.cores" :key="index" @click="handlerClickColor(item, index)" :style="{'background-color': item.hex}">
          </div>
                
                <div class="addColor" @click="addColor">
                  +
                </div>
              </div>
              {{colorAtual}}
              <v-color-picker
                class="ma-2"
                elevation="3"
                mode="hexa"
                v-model="colorAtual"
                v-show="showColorPicker"
                @input="handlerInputColor"
              ></v-color-picker>
            </div>
          </v-row>
          <v-btn @click="cadastrar" color="#FF449F" depressed rounded dark
            >Cadastrar</v-btn
          >
          <v-btn @click="cadastrar" color="#FF449F" depressed rounded outlined
            >Limpar</v-btn
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <div>
      <ul>
        <li v-for="(item, index) in clientes" :key="index">{{ item.nome }}</li>
      </ul>
    </div>
    <v-content>
			<v-container fluid>
				<v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
					<img :src="imageUrl" height="150" v-if="imageUrl"/>
					<v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
					<input
						type="file"
						style="display: none"
						ref="image"
						accept="image/*"
						@change="onFilePicked"
					>
				</v-flex>
				<v-dialog v-model="dialog" max-width="290">
					<v-card>
						<v-card-title class="headline">Hello World!</v-card-title>
						<v-card-text>Image Upload Script in VUE JS
							<hr>Yubaraj Shrestha
							<br>http://yubarajshrestha.com.np/</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-container>
		</v-content>

  </div>
</template>

<script>
export default {
  data: () => ({
     title: "Image Upload",
        dialog: false,
		imageName: '',
		imageUrl: '',
		imageFile: ''


    ,
    arrayUrlFotos: [],
    panel: [0],
    hover: false,
    listaFotos: null,
    pickColorAtual: null,
    colorAtual:{ "alpha": 1, "hex": "#E73232", "hexa": "#E73232FF", "hsla": { "h": 0, "s": 0.7918731417244795, "l": 0.5515555555555556, "a": 1 }, "hsva": { "h": 0, "s": 0.7833333333333333, "v": 0.9066666666666666, "a": 1 }, "hue": 0, "rgba": { "r": 231, "g": 50, "b": 50, "a": 1 } },
    showColorPicker: false,
    swatches: [
        ['#FF0000'],
        ['#FFFF00'],
        ['#00FF00'],
        ['#00FFFF'],
        ['#0000FF'],
      ],
    produto: {
      codigo: null,
      nome: null,
      precoCusto: null,
      precoVenda: null,
      colecao: null,
      fotoProduto: null,
      tamanho: {},
      cores: [],
      descricao: null,
    },
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
    pickFile () {
            this.$refs.image.click ()
        },
		
		onFilePicked (e) {
			const files = e.target.files
      console.log(files)
			if(files[0] !== undefined) {
				this.imageName = files[0].name
				if(this.imageName.lastIndexOf('.') <= 0) {
					return
				}
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
					this.imageUrl = fr.result
					this.imageFile = files[0] // this is an image file that can be sent to server...
				})
			} else {
				this.imageName = ''
				this.imageFile = ''
				this.imageUrl = ''
			}
		}

    ,
    handlerClearUploadFoto(){
      this.arrayUrlFotos = []
    },
    handlerUploadFoto(e){
      e.map( item => {
       
        this.arrayUrlFotos.push(URL.createObjectURL(item))
      })
    },
    handlerInputColor(e){
      this.produto.cores[this.pickColorAtual] = e;
    },
    handlerClickColor(item, index){
      console.log(index)
      this.showColorPicker = true
      this.colorAtual = item
      this.pickColorAtual = index
    },
    addColor(){
      this.produto.cores.push({...this.colorAtual})
      this.pickColorAtual = this.produto.cores.length - 1
    },
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
.wrapper {
  background: #fdfaf4;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 20px 40px;
}
.title {
  color: #ff449f;
  font-size: 1.6em !important;
  margin: 20px auto 20px auto;
}
.painel {
}

.container {
  &__filter {
    height: 56px;
    margin-bottom: 15px;
    margin-right: 15px;
    width: calc(25% - 15px);
    min-width: 262px;
  }
}

.colors{
  display: flex;
}

.colors div{
  padding: 0px 13px;
  color: #ff449f;
  font-size:1.8em;
  width: 45px;
  height: 45px;
  border-radius:50%;
  user-select:none;
  cursor: pointer;
}

.colors .addColor{
  padding: 0px 13px;
  color: #ff449f;
  font-size:1.8em;
  width: 45px;
  height: 45px;
  border-radius:50%;
  border: 1px dashed #ff449f;
  user-select:none;
  cursor: pointer;
}
</style>
