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











</details
