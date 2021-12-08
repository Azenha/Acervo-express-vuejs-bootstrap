const form_livros = Vue.component('form-livros', {
    data: function () {
        return {
            livro: {}
        }
    },
    methods: {
        cadastrar: function () {
            APIinserirLivro(this.livro, (prod) => {
                this.livro = {};
            });
        }
    },
    template: `
    <form>
    <div id="formulario">
        <label for="titulo" class="form-label">Título: </label>
        <input id="titulo" class="form-control" v-model="livro.titulo"> <br />
        <label for="capa" class="form-label">Capa: </label>
        <input type="text" class="form-control" id="capa" v-model="livro.capa"> <br />
        <button class="btn btn-primary" @click="cadastrar">Salvar</button> <br />
    </div>
    </form>
    `
})