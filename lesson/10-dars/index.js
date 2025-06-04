// let parent ={
//     id:1 ,
//     name:"Eshmat",
//     age: 60,
//     child:{
//         id:2,
//         name:"Gulmat",
//         age: 30, 
//     }

// }
// let newobj = structuredClone(parent)
// newobj.child.age = 40

// console.log(newobj);
// console.log(parent);

let parent ={
    id:1 ,
    name:"Eshmat",
    age: 60,
    child:{
        id:2,
        name:"Gulmat",
        age: 30, 
    }

}
for ( key in parent){
    newobj[ley] = parent[key]
}
newobj.child.age = 40

console.log(newobj);
console.log(parent);

