const {Worker} = require("bullmq");
require("dotenv").config();

const connection = {
    host : process.env.REDIS_HOST,
    port : process.env.REDIS_PORT,
    password : process.env.REDIS_PASS
};

const wait10 = () => {
    return new Promise((res , rej) => setTimeout(() => res() , 5*1000));
}

const worker = new Worker("Task-Queue" , async(job) => {
    
    try{

        console.log("Mssg : " , job.data);
        console.log("------------------");
        await wait10();
        console.log("proccessed");

    }catch(err){
        console.log(err);
    }

} ,{connection});
