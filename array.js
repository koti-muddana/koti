const stops = ['lb nagar','kothapet','dilsuknagar','malakpet','koti','abits','panjagutta','sr nagar']
		/*console.log(stops.length);
        stops.pop();
        stops.push('bharatnagar');
        stops[5]='nampally';
        console.log(stops[0]);
        console.log(stops[1]);
        console.log(stops[2]);
        console.log(stops[3]);
        console.log(stops[4]);
        console.log(stops[5]);
        console.log(stops[6]);
        console.log(stops[7]);
        console.log(stops[8]);*/
        stops.forEach(function(stops,index){
            const num = index + 1
            console.log(`${num}.${stops}`)
        })
       stops.forEach((stops,index) =>{
           const num = index + 1
           console.log(`${num}.${stops}`)

       });
       /*****forLoop*****/
       for(let count =0;count<stops.length;count++){
        console.log(stops[count]);
       }

