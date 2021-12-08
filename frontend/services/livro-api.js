const URI = "http://localhost:3000/api/livros";

function APIlistarLivros(ok, error) {
    axios
        .get(URI)
        .then(response => ok(response.data))
        .catch(err => error(err));
}

function APIinserirLivro(livro, ok, error) {
    axios
        .post(URI, livro)
        .then(response => ok(response.data))
        .catch(err => error(err));
}