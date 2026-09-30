import "./receita.css";

async function buscarReceita(id) {

    const resposta = await fetch(
        `https://dummyjson.com/recipes/${id}`
    );

    if (!resposta.ok) {
        throw new Error("Receita não encontrada");
    }

    const receita = await resposta.json();

    return receita;
}

export default async function ReceitaDetalhes({ params }) {

    const { id } = await params;

    const receita = await buscarReceita(id);

    return (
        <main className="pagina-detalhes">

            <div className="detalhes-receita">

                <h1>{receita.name}</h1>

                <img
                    src={receita.image}
                    alt={receita.name}
                />

                <div className="informacoes">

                    <p>
                        <strong>Culinária:</strong>{" "}
                        {receita.cuisine}
                    </p>

                    <p>
                        <strong>Dificuldade:</strong>{" "}
                        {receita.difficulty}
                    </p>

                    <p>
                        <strong>Tempo de preparo:</strong>{" "}
                        {receita.prepTimeMinutes} minutos
                    </p>

                    <p>
                        <strong>Tempo de cozimento:</strong>{" "}
                        {receita.cookTimeMinutes} minutos
                    </p>

                    <p>
                        <strong>Porções:</strong>{" "}
                        {receita.servings}
                    </p>

                    <p>
                        <strong>Calorias por porção:</strong>{" "}
                        {receita.caloriesPerServing}
                    </p>

                </div>

                <section className="ingredientes">

                    <h2>Ingredientes</h2>

                    <ul>
                        {receita.ingredients.map((ingrediente, index) => (
                            <li key={index}>
                                {ingrediente}
                            </li>
                        ))}
                    </ul>

                </section>

                <section className="preparo">

                    <h2>Modo de preparo</h2>

                    <ol>
                        {receita.instructions.map((instrucao, index) => (
                            <li key={index}>
                                {instrucao}
                            </li>
                        ))}
                    </ol>

                </section>

            </div>

        </main>
    );
}