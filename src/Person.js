import React from 'react'
import {
    createFragmentContainer,
      graphql
} from 'react-relay'

class Person extends React.Component {

  render () {
    return (
      <div className='pa3 bg-black-05 ma3'>
        <div
          className='w-100'
          style={{
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />
        <div className='pt3'>
          {this.props.person.id}&nbsp;
          {this.props.person.name}&nbsp;
          {this.props.person.blog}&nbsp;
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(Person, graphql`
  fragment Person_person on Person {
    id
    name
    blog
  }
`)
