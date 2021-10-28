console.log("Hello world")

 const mssg =process.argv

 const arr=mssg[2]

 console.log(mssg[2])

 total=(arr)=>{
     var j=0;
     for(let i=0;i<arr.length;i++){
        j+=arr[i];
     }
     return j
 }

 console.log(total(arr));