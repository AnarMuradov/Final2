import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {_id} = useParams()
  const [api, setApi] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/${_id}`) 
    .then((res)=>res.json())
    .then(data=>setApi(data))
  }, [_id])
  return (
    <div>
        {api.name}
    </div>
  )
}

export default Detail