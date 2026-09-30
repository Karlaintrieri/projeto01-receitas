import Link from "next/link";
import "./CardReceita.css";

export default function CardReceita({ receita }) {
    return (
        <div className="card-receita">

            <img
                src={receita.image}
                alt={receita.name}
            />

            <div className="conteudo-card-receita">

                <h2>{receita.name}</h2>

                <Link href={`/receitas/${receita.id}`}>
                    Saiba mais
                </Link>

            </div>

        </div>
    );
}