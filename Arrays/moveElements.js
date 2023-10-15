function moveElement(nums, position, offset) {
    let newCopy, copy;
    val = position + offset;
    if (val < nums.length) {
        copy = nums.slice();
        removed = copy.splice(val,1)[0]
        removed1 = copy.splice(position, 1)[0]
        copy.splice(val, 0, removed1)
        newCopy = copy.splice(position, 0, removed)
    } 
    else {
        console.error('offsett is undefined')
    }
    return copy;
}

console.log(moveElement([1,2,3,4,5], 1, 7))