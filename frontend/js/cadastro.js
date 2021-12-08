const rotas = [
    { path: '/cadastro', component: form_livros },
    { path: '/lista', component: tabela_livros },
];

const router = new VueRouter({
    routes: rotas
})

const app = new Vue({
    router,
    el: "main",
    created: function(){
        console.log("Iniciando..");
    }
})

// const app = new Vue({
//     el: "main",
//     data: {
//         novoLivro: {},
//         listaLivros: [],
//     },
//     methods: {
//         inserirLivro: function() {
//             APIinserirLivro(this.novoLivro, (livro) => {
//                 alert(`Livro ${livro.titulo} inserido com sucesso!`);
//                 this.refresh();
//                 this.novoLivro = {};
//             });
//         },    

//         refresh: function () {
//             APIlistarLivros((data) => {
//                 this.listaLivros = data
//             });
//         }
//     },
//     created: function() {
//         console.log("Iniciando ...");
//         this.refresh();
//     }
// })