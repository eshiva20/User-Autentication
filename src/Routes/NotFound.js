import React from 'react'
import { useParams } from 'react-router-dom'

const NotFound = () => {
    const params=useParams()
  return (
    <div>
      <h1>{params.pagename} Page NotFound</h1>
    </div>
  )
}

export default NotFound
