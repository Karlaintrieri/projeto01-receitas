"use client";
import { useEffect, useState } from "react";
import dados from "@/dados.json"

export default function Filmes(){
    const [filmes, setFilmes] = useState([]);
    useEffect( () => {
        setFilmes(dados);
    }, []);

    return(
        <main>
            <h1>Listagem de todos os filmes</h1>
            {filmes.length > 0 &&
            <div className="container-filmes">
                {filmes.map(f => {
                    return(
                        <div key={f.id} className="wrap-filme">
                            <img src={f.imagem} alt="" />
                            <h3>{f.titulo}</h3>
                            <a href= {`/filmes/${f.id}`}>Saiba mais...</a>
                        </div>
                    )
                })}
            </div>
            }
        </main>
    )
}