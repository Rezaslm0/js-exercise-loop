// input variables
let Array = [11,54,68,55,95];

let sortArray
let change 
// Function to Get  Array
// Return Sorted Array
function SortThisArray(change){

    for(let i = 0; i < Array.length -1; i++){
        for(let j = 0; j < Array.Lenght-1-i; j++){
            if(array[j] > array[j+1]){
                change = array[j];
                array[j] = array[j+1];
                array[j+1] = change;
            }
        }
    }
    return Array
}
// Print  the result
console.log(SortThisArray(Array));