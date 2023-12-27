import Image from "next/image";
import Link from "next/link";

import styles from '@/styles/Card.module.css'

export default function Card({ pokemon }) {
  let pokemonId = pokemon.id
  if(pokemonId < 10){
    pokemonId = `0${pokemonId}`
  }
  if(pokemonId < 100){
    pokemonId = `0${pokemonId}`
  }
  return (
    <div className={styles.card}>
      <Image
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png
        `}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
    </div>
  );
}
