import React from 'react'
import { sortBy, groupBy } from 'lodash-es'
import { List } from 'native-base'

import data from '../../assets/pokemon'

import { PokedexFilter, ListItemDivider, PokemonListItem } from '../molecules'

enum Sort {
  Number,
  Name,
  Get,
  NoGet,
}

const PokemonList = () => {
  const [sort, setSort] = React.useState(Sort.Number)

  const numberSort = React.useCallback(() => ({ 全て: sortBy(data, 'no') }), [])

  const nameSort = React.useCallback(() => {
    return groupBy(sortBy(data, 'name'), pokemon => pokemon.name.charAt(0))
  }, [])

  const list = React.useMemo(() => {
    switch (sort) {
      case Sort.Number:
        return numberSort()
      case Sort.Name:
        return nameSort()
      default:
        numberSort()
    }
  }, [sort, numberSort, nameSort])

  return (
    <>
      <PokedexFilter sort={sort} setSort={setSort} Sort={Sort} />
      {list && (
        <List style={{ backgroundColor: '#e97a54' }}>
          {Object.keys(list).map((title, i) => (
            <React.Fragment key={i}>
              <ListItemDivider title={title} />
              {list[title].map(pokemon => (
                <PokemonListItem pokemon={pokemon} key={pokemon.no} />
              ))}
            </React.Fragment>
          ))}
        </List>
      )}
    </>
  )
}

export default PokemonList
