function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data={msg:"Data successfully fetched!"}
    
     //simulating success
            resolve(data);
        },2000)
    })
}

//using asuch/await to consume the asychronous fn

async function fetchdataAsync(){
    try{
        console.log("fetching data...")
        
        const result=await fetchdata();
        console.log(result.msg);
    }
    catch(error){
        console.log(error.msg)
    }
}
fetchdataAsync();