const apiRick = {}

const url = 'https://rickandmortyapi.com/api'

apiRick.getInfo = async () => {
    try {
        const resp = await fetch(url+'/character')        
        if (!resp.ok) {
            throw new Error('Api is not responding')
        }
        const data = await resp.json()
        console.log(data)
        return data     

    } catch (error) {
        console.error(error)
        
    }
}

apiRick.getCharacterDetail= async(characterId)=>{
    try {
        const resp = await fetch(url+'/character/'+characterId)        
        if (!resp.ok) {
            throw new Error('Api is not responding')
        }
        const data = await resp.json()
        console.log(data)
        return data     

    } catch (error) {
        console.error(error)
        
    }
}

apiRick.getLocation = async () => {
  try {
    const resp = await fetch(url + '/location/');

    if (!resp.ok) {
      throw new Error('Api is not responding');
    }

    const data = await resp.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}

apiRick.getLocationDetails = async (idLocation) => {
  try {
    const resp = await fetch(url + '/location/'+idLocation);

    if (!resp.ok) {
      throw new Error('Api is not responding');
    }

    const data = await resp.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}


apiRick.getEpisode = async () => {
  try {
    const resp = await fetch(url + '/episode');

    if (!resp.ok) {
      throw new Error('Api is not responding');
    }

    const data = await resp.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}

apiRick.getEpisodeDetails = async (idEpisode) => {
  try {
    const resp = await fetch(url + '/episode/'+idEpisode);

    if (!resp.ok) {
      throw new Error('Api is not responding');
    }

    const data = await resp.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}
export default apiRick