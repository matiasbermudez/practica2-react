
const fetchApp = async (option) =>{
    const response = await fetch(`https://api.attackontitanapi.com/${option}` )
    const result = await response.json()
    return result
}


export default fetchApp