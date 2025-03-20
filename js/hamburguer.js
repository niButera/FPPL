function Menu() {
    const topicos = document.getElementById("topicos");
    const body = document.body;

    // Verifica se a tela é pequena antes de alternar a classe
    if (window.innerWidth < 768) {
        if (topicos.classList.contains("show")) {
            topicos.classList.remove("show");
            body.classList.remove("menu-open");
        } else {
            topicos.classList.add("show");
            body.classList.add("menu-open");
        }
    }
}



