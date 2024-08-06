# Leethub study
<br>

<details>
  
<summary>pop/shift/slice/splice</summary>

### 1) pop()
  #### remove the LAST element
  ```javascript
    let array = [100, 200, 300, 400 ,500];
    
    console.log(array.pop());  // 500 - last
    console.log(array);  // [ 100, 200, 300, 400 ]
  ```
<br>

### 2) shift()
  #### remove the FIRST element
  ```javascript
    let array = [100, 200, 300, 400 ,500];
    
    console.log(array.shift());  // 100 - first
    console.log(array);  // [ 200, 300, 400, 500 ]
  ```
  <br>
  
### 3) slice()
  #### the original array doesn't change, return a new array/string
  ```javascript
    array.slice(begin, end);
  ```
```javascript
  let array = [100, 200, 300, 400, 500];
  let newArray = array.slice(-3); // [300, 400, 500]
```
```javascript
  let array = [100, 200, 300, 400, 500];
  let newArray = array.slice(3); // [ 400, 500 ]
```
```javascript
  let array = [100, 200, 300, 400, 500];
  let newArray = array.slice(1, 4); // [ 200, 300, 400 ]
```
```javascript
  let array = [100, 200, 300, 400, 500];
  let newArray = array.slice(2, -1); // [ 300, 400 ]
```
<br>


### 4) splice()
  #### edit the original array
```javascript
  array.splice(startIndex, deleteCount, item1, item2, ...);
```
<br>

```javascript
  let array = [0, 1, 2, 3];
  let newArray = array.splice(0, 2); // [2, 3]
```
```javascript
  let array = [0, 1, 2, 3];
  let newArray = array.splice(0, 1, 100); // [100, 1, 2, 3]
```
</details>

<details>
  
<summary>BigInt/Number</summary>

#### ⭐️ JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number

## Number
```javascript
  var num0 = 999999999999999; // 15 digits -> 999999999999999
  var num1 = 9999999999999999; // 16 digits -> 1000000000000000 *rounded up*
```
<br>

## BigInt
```javascript
  var num2 = 9999999999999999n;
  var num3 = BigInt("9999999999999999");
```
<br>

</details>

<details>

  <summary>sort/reverse</summary>

### 1) sort()
#### non-decreasing order
```javascript
.sort((a,b)=>(a-b));
```
<br>

#### decreasing order
```javascript
.sort((a,b)=>(b-a));
```
<br>

### 2) reverse


  
</details>

<details>
<summary>Set</summary>

||Set|Array|
|------|---|---|
|duplicate| X | O |
|order of data| X | O |
<br>

```javascript
const set = new Set(); // Set(0) {size: 0}
```
### ⭐️ add()
```javascript
set.add(1); // Set(1) {1}
set.add("A"); // Set(2) {1, 'A'}
set.add(true); // Set(3) {1, 'A', true}
set.add(1).add("A").add(true); // Set(3) {1, 'A', true}
```
### ⭐️ delete()
```javascript
set.delete(1); // true
set.delete(2); // false
```
### ⭐️ clear()
```javascript
set.clear()
```
### ⭐️ has()
```javascript
if (set.has("A")) {
  console.log("A exists"); // A는 세트에 존재합니다.
}
```
### ⭐️ size()
```javascript
console.log(set.size); // 2
```
### ⭐️ for loop
```javascript
// 1
for (const i of set) {
  console.log(set);
}

// 2
set.forEach((num) => console.log(num));
```
### ⭐️ Array -> Set
```javascript
const array = [1, 2, 2, 3, 3, 3];
const set = new Set(array); // Set(3) {1, 2, 3}
```
### ⭐️ Set -> Array
```javascript
const array = [...set]; // [1, 2, 3]
//or
const array = Array.from(set);
```
### ⭐️ union / intersection / difference
```javascript
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

// union
const union = new Set([...set1, ...set2]);
console.log([...union]); // [1, 2, 3, 4, 5, 6, 7, 8]

// intersection
const intersection = new Set([...set1].filter((value) => set2.has(value)));
console.log([...intersection]); // [4, 5]

// differenct
const difference = new Set([...set1].filter((value) => !set2.has(value)));
console.log([...difference]); // [1, 2, 3]
```
</details>

<details>
  <summary>switching position</summary>
  
```javascript
[nums[low], nums[high]] = [nums[high], nums[low]];
```
  
</details>





