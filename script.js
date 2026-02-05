const container = document.getElementById("cardscontainer");
const template = document.getElementById("template-card");

const socialCards = [
    {
        title: "Instagram",
        image: "./images/instagram.jpg",
        link: "https://www.instagram.com/yourusername"
    },
    {
        title: "Facebook",
        image: "./images/facebook.jpg",
        link: "https://www.facebook.com/yourpage"
    }
];

socialCards.forEach(item => {
    const clone = template.content.cloneNode(true);

    clone.querySelector("h3").innerText = item.title;
    clone.querySelector("img").src = item.image;
    clone.querySelector(".card-link").href = item.link;

    container.appendChild(clone);
});
