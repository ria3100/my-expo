import React from 'react'
import { Picker, Form } from 'native-base'

// enum Sort {
//   Number,
//   Name,
//   Get,
//   NoGet,
// }

type Props = {
  sort: any
  setSort: any
  Sort: any
}
const PokedexFilter = ({ sort, setSort, Sort }: Props) => {
  return (
    <Form>
      <Picker
        note
        mode="dropdown"
        style={{ width: 120 }}
        selectedValue={sort}
        onValueChange={val => setSort(val)}
      >
        <Picker.Item label="番号順" value={Sort.Number} />
        <Picker.Item label="五十音順" value={Sort.Name} />
      </Picker>
    </Form>
  )
}

export default PokedexFilter
