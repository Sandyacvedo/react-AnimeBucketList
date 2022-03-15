import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
  const [state, setState] = useState({
      data: [],
      loading: true
  })
  // //El useEffect es un hook el que usaremos para realizar una accion al cargar el component, este recibo dos parametros
  // // 1 - Fallback function
  // // 2 - array de dependencias, si este esta vacio solo se ejecutara una vez
  // nota este no recibe un async function
    useEffect ( () => {
        getGifs( category )
            .then(imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    })
            })
    }, [category])


  return state; // { data: [], loading: true }
}
