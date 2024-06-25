// masala1
// {
//     let numbers = [-5, 3, 5, -2];
//     {
//       let result = [];
//       numbers.forEach((son) => (son > 0 ? result.push(son) : console.log("")));
//       console.log(result);
//     }
//     {
//         let result  = numbers.filter((son) => son > 0)
//         console.log( result );
//     }
// }

// massala2
// {
//     const reverseString = (word) => {
//         return word
//                    .split("")
//                    .reverse()
//                    .join("")
//     }
//     console.log( reverseString("Salom"));
//     console.log( reverseString("Aziz"));
// }

// masala3
//     {
//     const reverseString = (word) => {
//         return word.toString()
//                    .split("")
//                    .reverse()
//                    .join("")
//     }
//     console.log( reverseString(123));
//     console.log( reverseString(987654321));
// }

// masala4
// {
//     let numbers = [true, false, false, true];
//     {
//       let result = [];
//       numbers.forEach((son) => (son !== true ? result.push(son) : console.log("")));
//       console.log(result);
//     }
//     {
//         let result  = numbers.filter((son) => son == false)
//         console.log( result );
//     }
// }

// masala5
// {
//   {
//     let numbers = [5, 4, 5, 2];
//     let result = [];
//     {
//       numbers.forEach((son) => son % 2 == 0 ? result.push(son) : console.log(""));
//       console.log(result);
//     }
//   }

// {
//     function yegindi(array){
//      let sum = 0
//      for(let i = 0, len = array.length; i < len; i++){
//         if(array[i] % 2 === 0){
//             sum += array[i]
//         }
//      }
//      return sum
//     }
//     console.log(yegindi([3, 2, 2, 4, ]));
// }
// }

// masala6
// {
//     // {
//     //       let numbers = [5, 2, 3];
//     //       {
//     //         let result = [];
//     //         for (let i = 0, len = numbers.length; i < len; i++) {
//     //           result.push(numbers[i] ** 2);
//     //         }
//     //         console.log(result);
//     //       }
//     //       {
//     //         let result = [];
//     //         for (let value of numbers) {
//     //           result.push(value ** 2);
//     //         }
//     //         console.log(result);
//     //       }
//     // }
//   {
//     function daraja(array) {
//         return array.map(son => son ** 2);
//     }
//     console.log(daraja([5, 2, 3]));
//   }
// }

// masala7
// {
//   {
//     let sum = [];
//     function son(n) {
//       for (let i = 1; i <= n; i++) {
//         sum.push(i);
//       }
//       return sum;
//     }
//     console.log(son(5));
//   }
// }

// masala8
// {
//     function numbers(a, b) {
//         let result = [];
//         for (let i = a; i < b; i++) {
//             if (i % 2 === 0) {
//                 result.push(i);
//             }
//         }
//         return result;
//     }
//     console.log(numbers(2, 9));

// }

// masala9
// {
//     function boshHarf(name) {
//         return name
//                     .charAt(0)
//                     .toUpperCase()
//                      + name.slice(1);
//     }
//     console.log(boshHarf("laylo"));
// }

// masala10
// {
//     function repeatString(str, n) {
//         return str.repeat(n).trim();
//     }
//     console.log(repeatString("Assalomu Alaykum ", 3));
// }

// masala11
// {
//   {
//     function teskariSon(array) {
//         return array.reverse();
//     }
//     console.log(teskariSon([1, 2, 3])); 
//   }
// }


// masala12
// {
//     function tartibSon(array) {
//         return array.sort((a, b) => a - b);
//     }
//     console.log(tartibSon([2, 1, 13, 4]));
    
// }