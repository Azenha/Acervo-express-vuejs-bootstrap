const tabela_livros = Vue.component('tabela-livros', {
  props: ['livros'],
  mounted() {
    APIlistarLivros((data) => this.livros = data);
  },
  template: `
    <div id="tabela" class="album py-5">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" v-if="livros.length > 0">
        <div class="col" v-for="livro of livros">
          <div class="card shadow-sm">
          <img v-bind:src="livro.capa" class="img-fluid">
            <div class="card-body">
              <p class="card-text">{{livro.titulo}}</p>
            </div>
          </div>
        </div>
      </div>
      <h4 v-else>Não há livros!</h4>
    </div>
  </div>
  `
})