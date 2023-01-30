/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    try{
        const url=`https://jsonplaceholder.typicode.com/users`
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