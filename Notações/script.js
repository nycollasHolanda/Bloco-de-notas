$(document).ready(function () {
    adicionarALista();
    deletar();
});

function deletar() {
    var trashIcons = document.querySelectorAll(".fa.fa-trash");
    trashIcons.forEach(function (i) {
        i.addEventListener("click", function () {
            this.closest("li").remove();
        });
    });
}

function adicionarALista() {
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            var input = document.getElementById("addToDo");
            var texto = input.value.trim();
            if (texto === "") {
                event.preventDefault();
                input.placeholder = "Texto inválido!";
                input.style.borderColor = "red";
                input.style.backgroundColor = "pink"
            } else {
                var lista = document.querySelector("#Lista");
                var itemLista = document.createElement("li");
                var spanItem = document.createElement("span");
                var botaoDeDescarte = document.createElement("i");

                botaoDeDescarte.className = "fa fa-trash";

                spanItem.appendChild(botaoDeDescarte);
                itemLista.appendChild(spanItem);
                itemLista.appendChild(document.createTextNode(texto));
                lista.appendChild(itemLista);

                botaoDeDescarte.addEventListener("click", function () {
                    this.closest("li").remove();
                });

                input.value = "";
                input.placeholder = "";
                input.style.borderColor = "";
            }
        }
    });
}
