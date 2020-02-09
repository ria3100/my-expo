// import React from 'react'

import data from '../assets/pokemon'

import firebase from '../lib/firebase/config'

const db = firebase.firestore()

export const usePokedex = () => {
  // TODO: 開発用
  const storeList = () => {
    for (const pokemon of data) {
      db.collection('pokedex')
        .doc(pokemon.no + '')
        .set(pokemon)
        .then(docRef => {
          console.log('Document written with ID: ', docRef.id)
        })
    }
  }

  const fetchList = async () => {
    const snapShot = await db.collection('pokedex').get()
    return snapShot.docs.map(doc => doc.data())
  }

  const findPokemon = async () => {
    const querySnapshot = await db
      .collection('pokedex')
      .where('no', '<', 10)
      .get()
    querySnapshot.forEach(postDoc => {
      console.log(postDoc.id, ' => ', JSON.stringify(postDoc.data()))
    })
  }

  return { storeList, fetchList, findPokemon }
}
