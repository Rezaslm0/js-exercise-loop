// input the Number(s)
function shape(shape){
const star = '*'
    for (let i = 0; i <= shape; i++) {
        let result = "";
        for (let j = 0; j <= i; j++) {
          result += star;
        }
        console.log(result);
    } 
    for(let i = shape-1; i > 0; i--){
        let result = "";
        for (let j = 0; j < i; j++) {
          result += star;
        }
        console.log(result);
      
    }
}
shape(8)