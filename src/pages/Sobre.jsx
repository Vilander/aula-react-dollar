function Sobre() {
    return (
        <>
            <section className="sobre-projeto">
                <h2 className="display-5 text-center titulo-secao">🧮 Sobre o Projeto</h2>
                <p className="descricao-projeto">
                    Este projeto foi criado para facilitar conversões rápidas e práticas: de dólar para real, de centímetros para metros e vice-versa.
                    Tudo isso em uma interface intuitiva, construída com <strong>React</strong>, utilizando <strong>componentes reutilizáveis</strong>,
                    <strong>rotas dinâmicas</strong> e <strong>validação de formulários</strong> com lógica condicional (if/else).
                </p>
            </section>

            <section className="sobre-desenvolvedor">
                <h2 className="display-5 text-center titulo-secao">👨‍💻 Sobre o Desenvolvedor</h2>
                <p className="descricao-desenvolvedor">
                    Olá! Sou estudante de <strong>Desenvolvimento Front-End</strong> no <strong>Senac Americana</strong>, apaixonado por transformar ideias em interfaces funcionais.
                    Minhas principais habilidades incluem <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> e <strong>React</strong>.
                    Este projeto é mais um passo na minha jornada de aprendizado e evolução como desenvolvedor.
                </p>
            </section>
        </>
    )
}

export default Sobre;