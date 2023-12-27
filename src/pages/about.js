import Image from "next/image";

import styles from '@/styles/About.module.css'
import { useEffect } from "react";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>

      <p>
        Bem-vindo à nossa incrível jornada pelo universo Pokémon! Este projeto é
        dedicado a explorar e descobrir informações fascinantes sobre os Pokémon
        usando a PokeAPI.
      </p>

      <h2>Missão</h2>

      <p>
        Nossa missão é fornecer aos treinadores Pokémon uma plataforma
        interativa e informativa. Queremos celebrar a rica história, os tipos
        variados e os poderes únicos dessas criaturas extraordinárias.
      </p>

      <h2>O que Você Pode Encontrar Aqui?</h2>

      <ul>
        <li>
          <span>Pokédex:</span> Explore a lista de Pokémon
          com detalhes sobre cada um, incluindo suas habilidades, tipos e
          evoluções.
        </li>
        <li>
          <span>Curiosidades:</span> Descubra fatos interessantes e
          curiosidades sobre os Pokémon que você conhece e ama.
        </li>
        <li>
          <span>Tipos e Habilidades:</span> Aprofunde-se nos diferentes
          tipos de Pokémon e suas habilidades especiais.
        </li>
      </ul>

      <h2>Como Usar</h2>

      <p>
        Basta navegar pela nossa interface amigável para encontrar informações
        detalhadas sobre seus Pokémon favoritos. Seja você um treinador
        experiente ou um novato, há sempre algo novo para descobrir.
      </p>

      <p>
        Aproveite a jornada e boa sorte na sua busca para se tornar um Mestre
        Pokémon!
      </p>

      <p>
        <em>Gotta catch em all!</em>
      </p>

      <Image src='/images/charizard.png' width={300} height={300} alt="charizard"/>
    </div>
  );
}
