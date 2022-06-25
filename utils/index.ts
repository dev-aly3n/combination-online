// export const subsetSum = (numbers, target, partial) => {
//   var s, n, remaining;

//   partial = partial || [];

//   // sum partial
//   s = partial.reduce(function (a, b) {
//     return a + b;
//   }, 0);

//   // check if the partial sum is equals to target
//   if (s === target) {
//     console.log("find " + partial.join("+") + " = " + target);
//   }

//   if (s >= target) {
//     return; // if we reach the number why bother to continue
//   }

//   for (var i = 0; i < numbers.length; i++) {
//     n = numbers[i];
//     remaining = numbers.slice(i + 1);
//     subsetSum(remaining, target, partial.concat([n]));
//   }
// };

// export  function combinationSum(arr, sum) {
//     let ans = new Array();
//     let temp = new Array();

//     // first do hashing since hashset does not always
//     // sort
//     //  removing the duplicates using HashSet and
//     // Sorting the arrayList

//     let set = new Set([...arr]);
//     arr = [...set];
//     arr.sort();
//     console.log(arr)

//     findNumbers(ans, arr, sum, 0, temp);
//     return ans;
//   }
//   function findNumbers(ans, arr, sum, index, temp) {
//     if (sum == 0) {
//       // pushing deep copy of list to ans

//       ans.push([...temp]);
//       return;
//     }

//     for (let i = index; i < arr.length; i++) {
//       temp.push(arr[i]);
//       findNumbers(ans, arr, sum - arr[i], i + 1, temp);
//       // removing element from list (backtracking)
//       temp.splice(temp.indexOf(arr[i]), 1);
//     }
//   }


  function combinationsWithLimit(Asource, limit) {
    var combos = [];
    var temp = [];

    const picker = function (arr, holder, collect, level) {
        if (holder.length) {
            collect.push(holder);
        }
        if (level <= limit) {
            for (let i = 0; i < arr.length; i++) {
                var arrcopy = arr.slice(0, arr.length);
                var elem = arrcopy.splice(i, 1);
                if (arrcopy.length > 0) {
                    picker(arrcopy, holder.concat(elem), collect,level+1);
                } else {
                    collect.push(holder.concat(elem));
                }
            }
        }
    }

    picker(Asource, temp, combos, 0);

    return combos;
}

export function sumOfWhatever(numbers, sum, limit) {
    var combos = combinationsWithLimit(numbers, limit);
    return combos.filter(c => c.reduce((partialSum, a) => partialSum + a, 0) === sum)
}

