import React from 'react'
import Customwrapper from './Customwrapper'
import { Data } from './Data'

export default function Fetchspi() {
  return (
    <React.Fragment>
        <Customwrapper>
{Data.map(item => (
        <ul key={item.id}>
          <li>{item.name}</li>
        </ul>
      ))}

        </Customwrapper>

    </React.Fragment>
  )
}
