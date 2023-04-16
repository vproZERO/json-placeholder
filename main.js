
const box = document.querySelector(".box");
const btnBox = document.querySelector(".btn__box")

const fetchurl = ["posts", "comments", "albums", "photos", "todos", "users"];

const url = "https://jsonplaceholder.typicode.com/";

const renderBtn = () => {
    btnBox.innerHTML= fetchurl.map((i) => `<button id="${i}">${i}</button>`).join("")
}
renderBtn()

const renderPost = (el) => {
    box.innerHTML = el.map((item) =>
     `
        <li>
                <p>${item.id}</p>
                <h1>${item.title}</h1>
                <p>${item.body}</p>
        </li>
     `
     ).join("");
}
const renderComments = (el) => {
    box.innerHTML = el.map((item) =>
     `
       <li>
            <p>${item.id}</p>
            <h2>${item.name}</h2>
            <p>${item.email}</p>
            <p>${item.body}</p>
       </li>
     `
     ).join("");
}
const renderAlbums = (el) => {
    box.innerHTML = el.map((item) =>
     `
        <li>
            <p>${item.id}</p>
            <h2>${item.title}</h2>
        </li>
     `
     ).join("");
}
const renderPhotos = (el) => {
    box.innerHTML = el.map((item) =>
     `
        <li>
            <p>${item.id}</p>
            <h2>${item.title}</h2>
            <p>${item.url}</p>
            <p>${item.thumbnailUrl}</p>
        </li>
     `
     ).join("");
}
const renderTodos = (el) => {
    box.innerHTML = el.map((item) =>
     `
     <li>
        <p>${item.id}</p>
        <h2>${item.title}</h2>
        <p>${item.completed}</p>
     </li>
        
     `
     ).join("");
}
const renderUsers = (el) => {
    box.innerHTML = el.map((item) =>
     `
     <li>
        <p>${item.id}</p>
        <h2>${item.name}</h2>
        <h3>${item.username}</h3>
        <p>${item.email}</p>
        <p>${item.address}</p>
        <p>${item.address.street}</p>
        <p>${item.address.suite}</p>
        <p>${item.address.city}</p>
        <p>${item.address.zipcode}</p>
        <p>${item.address.geo}</p>
        <p>${item.address.geo.lat}</p>
        <p>${item.address.geo.lng}</p>
     </li>
        
     `
     ).join("");
}



btnBox.addEventListener("click" , (e) => {
    box.innerHTML = "";
    const id=e.target.id
    if(id=='posts'){
        console.log('salom');
        post(id)
    }else if(id == 'comments'){
        console.log('alik');
        comments(id)
    }else if(id == 'albums'){
        console.log('ddddddd');
        albums(id)
    }else if(id == 'photos'){
        console.log('gggggggg');
        photos(id)
    }else if(id == 'todos'){
        console.log('defjwuifew');
        todos(id)
    }else if(id == 'users'){
        console.log('dsj');
        users(id)
    }
})

const post = async (a) => {
    try {
        const res = await fetch(url + a)
        const data = await res.json()
        renderPost(data)
    } catch (error) {
        console.log(error);
    }

}
const comments = async (a) => {
    try {
        const res = await fetch(url + a)
        const data = await res.json()
        renderComments(data)
    } catch (error) {
        console.log(error);
    }

}
const albums = async (a) => {
    try {
        const res = await fetch(url + a)
        const data = await res.json()
        renderAlbums(data)
    } catch (error) {
        console.log(error);
    }

}
const photos = async (a) => {
    try {
        const res = await fetch(url + a)
        const data = await res.json()
        renderPhotos(data)
    } catch (error) {
        console.log(error);
    }

}
const todos = async (a) => {
    try {
        const res = await fetch(url + a)
        const data = await res.json()
        renderTodos(data)
    } catch (error) {
        console.log(error);
    }

}
const users = async (a) => {
    try {
        const res = await fetch(url + a)
        const data = await res.json()
        renderUsers(data)
    } catch (error) {
        console.log(error);
    }

}



















