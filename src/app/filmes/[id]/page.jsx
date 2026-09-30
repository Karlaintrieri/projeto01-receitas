"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import dados from "@/dados.json"

export default function Filme(){
    const params = useParams();
    const [filme, setFilme] = useState();

    useEffect(() => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    }, [])

    return(
        <main>
            <h1></h1>
        </main>
    )
}