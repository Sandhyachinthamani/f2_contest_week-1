/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  let r=arr.map(function(v,i,a){
    if(v["profession"]==="developer"){
    console.log(v["name"]);}
  });
}

function PrintDeveloperbyForEach() {
  let r=arr.forEach(function(v,i,a){
    if(v["profession"]==="developer"){
    console.log(v["name"]);}
  });
}

function addData() {
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr)
}

function removeAdmin() {
  /* let r=arr.map(function(v,i,a){
    if(v["profession"]!=="admin"){
    console.log(v["name"]);}
  }); */
  let r=arr.filter(v=>(v["profession"]!=="admin"))
  console.log(r)
}

function concatenateArray() {
  let arr1 = [
    { id: 4, name: "johny", age: "28", profession: "developer" },
    { id: 5, name: "jacky", age: "30", profession: "developer" },
    { id: 6, name: "kareny", age: "29", profession: "admin" },
  ];
/* for(let x of arr1){
  arr.push(x);
}
 */
let arr=arr.concat(arr1)
console.log(arr)
}
