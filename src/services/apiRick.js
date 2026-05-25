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

apiRick.getCharacterDetail= async()=>{
    try {
        const resp = await fetch(url+'/character'/)        
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




export default apiRick