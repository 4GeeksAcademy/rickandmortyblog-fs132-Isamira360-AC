const apiRick = {}

const url = 'https://rickandmortyapi.com/api'


apiRick.getContact = async () => {

    const resp = await fetch(url)
    if (!resp.ok) throw new Error('Api is not responding')
    const data = await resp.json()
    return (data)

    try {

    } catch (error) {

        console.log(error)

    }

}
export default apiRick