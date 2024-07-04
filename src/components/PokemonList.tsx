"use client";
import React from "react";
import { Pokemon } from "../types/pokemon";
import Link from "next/link";
import Image from "next/image";

const PokemonList: React.FC = () => {
  const [pokemonsData, setPokemonsData] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemonsData(data);
    };
    fetchInitialData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-6 gap-6 w-4/5 max-w-screen-lg my-0 mx-auto">
        {pokemonsData.map((pokemon) => (
          <div
            key={pokemon.id}
            className="w-36 p-5 border border-solid border-blue-600 rounded-md bg-white"
          >
            <Link href={`pokemon/${pokemon.id}`} className="">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.korean_name}
                width={96}
                height={96}
              />
              <div>{pokemon.korean_name}</div>
              <div>도감번호: {pokemon.id}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonList;