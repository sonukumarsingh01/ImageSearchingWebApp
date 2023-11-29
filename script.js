const accessKey = "ZXSM4lsvSVMJdsagu3Hi66k4y67Z3b24P3CdyrPAq48"
var keyword = "";
var page = 1;

var homebutton = document.querySelector(".home-button");
var servicebutton = document.querySelector(".service-button");
var contectbutton = document.querySelector(".contect-button");
var aboutbutton = document.querySelector(".about-button");

var midbody = document.querySelector(".mid-body")
var service = document.querySelector(".sevice")
var contect = document.querySelector(".contect")
var about = document.querySelector(".about")

homebutton.addEventListener("click",()=>{
    midbody.scrollIntoView({behavior:"smooth"})
})
servicebutton.addEventListener("click",()=>{
    service.scrollIntoView({behavior:"smooth"})
})
contectbutton.addEventListener("click",()=>{
    contect.scrollIntoView({behavior:"smooth"})
})
aboutbutton.addEventListener("click",()=>{
    about.scrollIntoView({behavior:"smooth"})
})

// top image querySelector
var topImage = document.querySelector(".top-image")
var topImagenextbtn = document.querySelector(".top-image-nextbtn");
var topImagebackbtn = document.querySelector(".top-image-backbtn");

// top image
async function rendomImageData() {
    const url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=30`;
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((pic) => {
        // console.log(pic.urls.small);
        const image = document.createElement("img");
        image.src = pic.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = pic.links.download;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        topImage.appendChild(imageLink);
    });
}
rendomImageData()


topImage.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    topImage.style.scrollBehavior = "smooth";
    topImage.scrollLeft += evt.deltaY;
});

topImagenextbtn.addEventListener("click", function () {
    topImage.style.scrollBehavior = "smooth";
    topImage.scrollLeft += 245;
})
topImagebackbtn.addEventListener("click", function () {
    topImage.style.scrollBehavior = "smooth";
    topImage.scrollLeft -= 245;
})



// search option querySelector
var searchOptionbox = document.querySelector(".search-option-box");
var searchOptionNextbtn = document.querySelector(".search-option-nextbtn");
var searchOptionBackbtn = document.querySelector(".search-option-backbtn");


// search-option
var ListItemName = ["Sky", "Tree", "Car", "Road", "Mountain", "Sun", "Dog", "Cow", "Pen", "Star", "Book", "Laptop", "Mobile", "Girl", "Sea", "Flower", "Glass", "House"];
ListItemName.forEach((name) => {
    var listName = name;
    console.log(name)
    var div = document.createElement("div");
    div.className = "option-input";
    div.innerHTML = listName;
    searchOptionbox.appendChild(div);
})
searchOptionbox.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    searchOptionbox.style.scrollBehavior = "smooth";
    searchOptionbox.scrollLeft += evt.deltaY;
});

searchOptionNextbtn.addEventListener("click", function () {
    searchOptionbox.style.scrollBehavior = "smooth";
    searchOptionbox.scrollLeft += 85;
})
searchOptionBackbtn.addEventListener("click", function () {
    searchOptionbox.style.scrollBehavior = "smooth";
    searchOptionbox.scrollLeft -= 85;
})


// rendomImage
var rendomImage = document.querySelector("#rendom-image");
var rendomImagecontainer = document.querySelector(".remdom-image-container")
async function letestImage() {
    const url = `https://api.unsplash.com/photos?page=${page}&per_page=28&order_by=popular&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    rendomImage.innerHTML = " ";
    data.forEach((pic) => {
        // console.log(pic.urls.small)

        const image = document.createElement("img");
        image.src = pic.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = pic.links.download;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        rendomImage.appendChild(imageLink);
        rendomImagecontainer.style.display = "block"
        console.log("rendom call")
    });
}
letestImage()

var rendomImagebeforebtn = document.querySelector("#rendom-image-beforebnt")
var rendomImagenextbtn = document.querySelector("#rendom-image-nextbnt")
var rendomImagepagenumber = document.querySelector(".rendom-image-page-number")

function rendomImagebeforebtnshowhide() {
    if (page < 2) {
        rendomImagebeforebtn.style.display = "none"
    }
    else {
        rendomImagebeforebtn.style.display = "block"
    }
}
rendomImagebeforebtnshowhide()
function rendomImagepagenumberupdate() {
    rendomImagepagenumber.innerHTML = page
}
rendomImagepagenumberupdate()


rendomImagebeforebtn.addEventListener("click", () => {
    page -= 1;
    letestImage()
    service.scrollIntoView({ behavior: "instant" });
    rendomImagepagenumberupdate()
    rendomImagebeforebtnshowhide()
})

rendomImagenextbtn.addEventListener("click", () => {
    page += 1;
    letestImage()
    service.scrollIntoView({ behavior: "instant" });
    rendomImagepagenumberupdate()
    rendomImagebeforebtnshowhide()
})

var searchBox = document.querySelector(".search-box")
var searchimage = document.querySelector("#search-image")
var searchimagecontainer = document.querySelector(".search-image-container")
async function searchresult() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=28`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    searchimage.innerHTML = " "
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.download;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchimage.appendChild(imageLink);
        rendomImagecontainer.style.display = "none"
        searchimagecontainer.style.display = "block"
    })
}

var searchForm = document.querySelector(".search")

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (searchBox.value === "") {

    } else {
        searchresult();
        service.scrollIntoView({ behavior: "instant" })
    }
})

async function optionsearchresult() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=28`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    searchimage.innerHTML = " "
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.download;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchimage.appendChild(imageLink);
        rendomImagecontainer.style.display = "none"
        searchimagecontainer.style.display = "block"
        console.log("search call")
    })
}
var optionInput = document.querySelectorAll(".option-input")
optionInput.forEach((input) => {
    input.addEventListener("click", () => {
        page=1;
        searchImagepagenumberupdate()
        searchImagebeforebtnshowhide()
        var inputinnerhtml = input.innerHTML;
        searchBox.value = inputinnerhtml;
        optionsearchresult();
        service.scrollIntoView({ behavior: "instant" });
    })
})

var searchImagebeforebtn = document.querySelector("#search-image-beforebnt")
var searchImagenextbtn = document.querySelector("#search-image-nextbtn")
var searchImagepagenumber = document.querySelector(".search-image-page-number")

function searchImagebeforebtnshowhide() {
    if (page < 2) {
        searchImagebeforebtn.style.display = "none"
    }
    else {
        searchImagebeforebtn.style.display = "block"
    }
}
searchImagebeforebtnshowhide()
function searchImagepagenumberupdate() {
    searchImagepagenumber.innerHTML = page
}
searchImagepagenumberupdate()


searchImagebeforebtn.addEventListener("click", () => {
    page -= 1;
    searchresult()
    service.scrollIntoView({ behavior: "instant" });
    searchImagepagenumberupdate()
    searchImagebeforebtnshowhide()
})

searchImagenextbtn.addEventListener("click", () => {
    page += 1;
    searchresult()
    service.scrollIntoView({ behavior: "instant" });
    searchImagepagenumberupdate()
    searchImagebeforebtnshowhide()
})