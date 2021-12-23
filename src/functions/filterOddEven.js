import React from 'react'

function filterOddEven() {
    return (
        <div>
            
        </div>
    )
}
export function filterEven(...arr) {
    const a = [];
    var count = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] % 2 === 0) {
            a[count++] = arr[i];
        }
    }
    return a.toString();
}
export function filterOdd(...arr) {
    const a = [];
    var count = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            a[count++] = arr[i];
        }
    }
    return a.toString();
}

export function generateRandomList(a) {
    if(typeof a === 'undefined') {
        const list = [];
        for(var i=0; i<7; i++) {
            list[i] = i+1;
        }
        return list;
    }else {
        const list = [];
        for(var i=0; i<a; i++) {
            list[i] = i+1;
        }
        return list;
    }
}
export default filterOddEven;