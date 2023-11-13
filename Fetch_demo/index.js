function handlegetdata() {

    console.log("inside func");
    let data = fetch("https://jsonplaceholder.typicode.com/posts");
    data.then(res => {
        console.log("res value", res)
       return res.json();
    }).then(result => {console.log(result)})
    
}

//  async function handlegetdata() {

//     // console.log("inside func");
//     let data =  await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data2 = await fetch("https://jsonplaceholder.typicode.com/users");
//     // let result =  await data.json();
//     // const result2 = await data2.json();
//     // console.log(result);
//     // console.log("Users data", result2);

//     Promise.all([data, data2]).then(res => Promise.all(res.map(r=> r.json()))
//       ).then(res => {console.log(res)});
    
// }