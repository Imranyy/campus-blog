/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    try{
        // @ts-ignore
        const url=`https://jsonplaceholder.typicode.com/users/${params.id}`
        const response =await fetch(url);
        const data= await response.json();

        if(response.ok){
                return {data}
        }else{
            return {
            error:`Status ${response.status}, Could not fetch!`
            }
        }
    }catch(error){
        return {
            // @ts-ignore
            error:`No Internet!`
        }
    }
}

