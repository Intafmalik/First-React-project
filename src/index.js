import React from 'react'
import ReactDOM from 'react-dom'
import Cards from './Cards'
import Sdata from './Sdata'




ReactDOM.render(
  <>

    <h2 className='heading_style'>list of newly released series and movies</h2>

    {Sdata.map((variable) => {

      return (
        <Cards
          sname={variable.sname}
          imgsrc={variable.imgsrc}
          title={variable.title}
          links={variable.links}
        />)
    })}
  </>,
  document.getElementById("root")

)