 //1_no
 let arr1 = [5, 10, 8, 15, 9, 27, 55];
 function yangiMassiv(arr) {
    let result = arr.filter(num => num > 10);
     return result;
 }
 console.log(yangiMassiv(arr1));

 //no_2
 let arr2 = [1, 2, 3, 4, 5, 6]
 function kubi(arr2) {
    let result = arr2.map(num => Math.pow(num,3));
    return result;
 }
 console.log(kubi(arr2));


 //no_3

 let arr3 = [5, 10, 8, 15, 9, 27, 55];
 function karrali(arr3) {
    for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 3 == 0 && arr3[i] % 5 == 0) {
       return true;
    }
 }
    return false;
 }
 console.log(karrali(arr3));


 //no_4

 let arr4 = [5, 10, 8, 15, 9, 27, 55];
 function kattasiniTopuvchi(arr4) {
    let saralash = arr4.sort((a, b) => b - a);
    return saralash.slice(0,3);
 }
 console.log(kattasiniTopuvchi(arr4));


 //no_5
 let arr5 = [5, 4, 3, 2, 1 ]
 function teskariTartibda(arr5) {
    return arr5.reverse();
 }
 console.log(teskariTartibda(arr5));