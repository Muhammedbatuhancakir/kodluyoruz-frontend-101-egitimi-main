let users = ["lorem", "ipsum", "dolor", "claier"]

const userListDOM = document.querySelector("#userList")

for(index=0; index < users.length; index++){
    const liDOM = document.createElement("li")
    liDOM.innerHTML = users[index]
    userListDOM.append(liDOM)
}