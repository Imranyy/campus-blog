/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    try{
        // const url=`https://jsonplaceholder.typicode.com/users`
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
            data:[
                {
                    id:1,
                    title:'Rongo University on Fire',
                    image:'/img1.jpg',
                    body:`
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    
                    `,
                },
                {
                    id:2,
                    title:'Rongo University on Fire',
                    image:'/img2.jpg',
                    body:`
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    
                    `,
                },
                {
                    id:3,
                    title:'Rongo University on Fire',
                    image:'/img6.jpg',
                    body:`
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    
                    `,
                }
            ]
        }
    }catch(error){
        return {
            // @ts-ignore
            error:`No Internet!`
        }
    }
}