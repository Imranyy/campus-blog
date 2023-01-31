/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    try{
        // @ts-ignore
        // const url=`https://jsonplaceholder.typicode.com/users/${params.id}`
        // const response =await fetch(url);
        // const data= await response.json();

        // if(response.ok){
        //         return {data}
        // }else{
        //     return {
        //     error:`Status ${response.status}, Could not fetch!`
        //     }
        // }

        return {
            data:{
                    id:1,
                    title:'Rongo University on Fire',
                    image:'/img6.jpg',
                    author:"Imran Matano",
                    authorImage:'/img2.jpg',
                    body:`
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities.
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities.
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities.
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities.
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities.
                    `,
                }
        }

    }catch(error){
        return {
            // @ts-ignore
            error:`No Internet!`
        }
    }
}

