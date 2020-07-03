// Add your functions here
function map(array, funCall){
    let newArr = []
    array.forEach(e => {
        newArr.push(funCall(e))
    })
    return newArr;
}

function reduce(array, funCall , start){
    let newArr = (start) ? start : array[0]
    let i = (start) ? 0 : 1

    for (; i < array.length; i++ ){
        newArr = funCall (array[i], newArr)
    }
    return newArr;
} 