import React from 'react'
import Person from './Person'

import {
  createFragmentContainer,
  graphql
} from 'react-relay'


const ListPage = createFragmentContainer(
  ({ data }) => (
    <div className='w-100 flex justify-center'>
      <div className='w-100' style={{ maxWidth: 400 }}>
        {data.map(p => p.person || (
          <Person key={p.__id} person={p} />
        ))}
      </div>
    </div>
  ),
  graphql`
    fragment ListPageAllPersons on Person @relay(plural: true) {
      ...Person_person
    }
  `
)

export default ListPage 
