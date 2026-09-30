import CardReceita from "../../components/CardReceitas/CardReceita.jsx";
import "./receitas.css";

async function buscarReceitas() {

    const resposta = await fetch("https://dummyjson.com/recipes");

    if (!resposta.ok) {
        throw new Error("Erro ao buscar receitas");
    }

    const dados = await resposta.json();

    return dados.recipes;
}

export default async function Receitas() {

    const receitas = await buscarReceitas();

    return (
        <main className="pagina-receitas">

            <h1>Receitas</h1>

            <div className="lista-receitas">

                {receitas.map((receita) => (
                    <CardReceita
                        key={receita.id}
                        receita={receita}
                    />
                ))}

            </div>

        </main>
    );
}