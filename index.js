 const {parse} = require('csv-parse')
const fs = require('fs');
 

 
const store = [];
 

 fs.createReadStream('kapler_Data.csv').pipe(parse({Comment: '#', columns: true,
}))
   .on('data' ,(data)=>{
    store.push(data);
  })
  .on('error', (err)=>{
    console.log(err)
  })

  .on('end' ,( ) => {
    console.log(store);
    console.log('done');
  });