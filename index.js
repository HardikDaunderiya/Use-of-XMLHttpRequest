const api = new XMLHttpRequest();
const reqURL = "https://api.github.com/users/hardikdaunderiya";
api.open("GET", reqURL);
let IMG;
let follow;
const imgCard = (url) => {
  //
  const main = document.querySelector(".main");
  const img = document.createElement("img");
  img.className = "img";
  img.src = url;
  img.style.height = "100px";
  img.style.width = "100px";
  main.appendChild(img);
};
const followCard = (f) => {
  const main = document.querySelector(".main");
  const follow = document.createElement("div");
  follow.className = "followers";
  follow.innerHTML = f;
  follow.style.height = "50px";
  follow.style.height = "50px";
  main.appendChild(follow);
};
api.onreadystatechange = () => {
  if (api.readyState === 4 && api.status === 200) {
    const data = JSON.parse(api.responseText);
    follow = data?.followers;
    IMG = data?.avatar_url;
    imgCard(IMG);
    followCard(follow);
  }
};
api.send();
