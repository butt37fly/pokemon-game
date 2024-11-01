import pokemonApi from "@/api/pokemonApi"

/**
 * Obtiene un arreglo con el id de cada pokémon disponible
 *
 * @returns { Array }
 */
const getPokemons = () => {
  const limit = 600 // # de pokémons disponibles en la API
  const data = Array.from(Array(limit))

  return data.map((x, i) => i + 1)
}

/**
 * Obtiene el nombre de cada pokémon en `options` según su id
 *
 * @param { Array } options
 * @returns { Array }
 */
const getPokemonNames = async ([a, b, c, d]) => {
  const promises = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ]

  const [resA, resB, resC, resD] = await Promise.all(promises)

  return [
    { name: resA.data.name, id: resA.data.id },
    { name: resB.data.name, id: resB.data.id },
    { name: resC.data.name, id: resC.data.id },
    { name: resD.data.name, id: resD.data.id },
  ]
}

/**
 * Obtiene la información de cuatro pokémons al azar
 *
 * @returns { Promise }
 */
const getPokemonOptions = async () => {
  const data = getPokemons()
  const mixedData = data.sort(() => Math.random() - 0.5)

  return await getPokemonNames(mixedData.splice(0, 4))
}

export default getPokemonOptions
