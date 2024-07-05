import React from "react";
import { fetchPokemonData } from "@/apis/pokemon";
import Image from "next/image";
import Link from "next/link";

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemon = await fetchPokemonData(params.id);

  const heightInMeter = parseInt(pokemon.height) / 10;
  const weightInMeter = parseInt(pokemon.weight) / 10;

  console.log(pokemon);

  return (
    <div className="text-center w-3/6 max-w-[40rem] my-0 mx-auto leading-[250%]">
      <div className="detail-header text-3xl font-semibold">
        <p>{pokemon.korean_name}</p>
        <p>No. {pokemon.id}</p>
      </div>
      <div className="detail-body my-0 mx-auto">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
          width={96}
          height={96}
          className="inline"
        />
        <p className="font-semibold">이름: {pokemon.korean_name}</p>
        <p>
          키: {heightInMeter} m 무게: {weightInMeter} kg
        </p>
        <p>
          <span>타입: </span>
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className="ml-1 py-1 px-4 rounded-md bg-blue-500 text-sm text-white"
            >
              {type.type.korean_name}
            </span>
          ))}
        </p>
        <p>
          특성:{" "}
          {pokemon.abilities.map((ability, index) => (
            <span key={index}>{ability.ability.korean_name}</span>
          ))}
        </p>
        <p>기술:</p>
        <p className="text-sm leading-[200%]">
          {pokemon.moves.map((move) => move.move.korean_name).join(" ")}
        </p>
        <Link href={"/"} className="">
          <button className="mt-4 py-2 px-6 rounded-md bg-blue-800 text-white">
            뒤로 가기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
