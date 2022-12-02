const array = [-1,-2,3];
let maxNum = 0;
let previous = 0;
if(array.length == 0){
    console.log(0)
}else{
    
for(i=0;i<array.length;i++){

    previous +=  array[i];

    if(maxNum<previous){
        maxNum = previous;
        console.log(maxNum);
    } if(previous = 0  ){ 
        console.log(0)

    }
}
}
      
       
        

        // const max = array.reduce((maxNum,previous)=>{
        //     return Math.max(maxNum,previous);
        // })
        // max;
        // console.log("maximum value",max);

        



