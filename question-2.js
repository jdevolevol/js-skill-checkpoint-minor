// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const newUsers = [];
let longName = [];
async function usersData() {
    try{ 
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        for(let index in data){
            newUsers.push(data[index].name);
        }
        //console.log(newUsers)
        longName = newUsers.filter(name=>(name.length>17));
        console.log (longName);
         
    }catch(err){
        console.log(err);
    }
}

//const longName = newUsers.filter(name=>(name.length>17))


usersData();
