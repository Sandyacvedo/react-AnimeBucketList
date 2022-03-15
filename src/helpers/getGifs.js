import axios from 'axios';

export const getGifs = async ( category ) => {

    let gifs = [];
    //encoudeURI es para limpiar nuestro argumento de busqueda
  const url =  `https://api.jikan.moe/v4/top/anime?page=2`; 
  await axios.get( url )
    .then(res => {

      const { data } = res.data

      //desestructurar funcion para solo obtenes campos que nos interesan
       gifs = data.map(img => {
        return {
          'id' :  img.mal_id,
          'tittle' : img.title,
          'url' : img.images.webp.large_image_url
        }
      })
    //   console.log(
    //       'gifs -->', gifs
    //   );
      
    })
    .catch( err => {
        console.log('Error --> ',err);
    })

    return gifs
}