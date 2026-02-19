import React from 'react'
import MadeGoal from './MadeGoal';

export default function New_comp({name}) {
     const istrue=name
     if(!istrue){
          return <MadeGoal/>;
    }else{
        return 0;
    }

  return (
    <div>New_comp :{name}</div>
    

  )
}
