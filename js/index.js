var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

var projects = [
    ["/projects/dinkes-jatim-cakjatim.html",
        'Dinkes Jatim - Cakjatim',
        'Dinkes Jatim', 2021,
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eveniet dolor dicta aliquid nihil veritatis tenetur cupiditate neque illo soluta, animi repellat, commodi distinctio dolorum quae dolore in ipsa ipsum doloribus illum mollitia delectus! Saepe odit aspernatur, maxime molestiae praesentium laborum sed, voluptatibus ab odio ad rem aut nisi ipsa aliquam in doloribus quidem deleniti consectetur voluptatem? Voluptatibus, voluptas consequuntur excepturi facere harum quis, similique soluta in distinctio ea quae aperiam fugiat iure ipsum aliquid. Hic quam, distinctio quod earum recusandae, dicta accusantium optio laudantium reiciendis temporibus eum voluptates non quibusdam dignissimos ab veniam commodi at perspiciatis quae adipisci provident?',
        'media/projects/dinkes-jatim-cakjatim.png'],
    ["/projects/singkatin.html",
        'Singkat.in',
        'Personal', 2021,
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eveniet dolor dicta aliquid nihil veritatis tenetur cupiditate neque illo soluta, animi repellat, commodi distinctio dolorum quae dolore in ipsa ipsum doloribus illum mollitia delectus! Saepe odit aspernatur, maxime molestiae praesentium laborum sed, voluptatibus ab odio ad rem aut nisi ipsa aliquam in doloribus quidem deleniti consectetur voluptatem? Voluptatibus, voluptas consequuntur excepturi facere harum quis, similique soluta in distinctio ea quae aperiam fugiat iure ipsum aliquid. Hic quam, distinctio quod earum recusandae, dicta accusantium optio laudantium reiciendis temporibus eum voluptates non quibusdam dignissimos ab veniam commodi at perspiciatis quae adipisci provident?',
        'media/projects/singkatin.png'],
    ["/projects/hubhall.html",
        'HubHall - Minimal Blog for thousands stories',
        'Personal', 2021,
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eveniet dolor dicta aliquid nihil veritatis tenetur cupiditate neque illo soluta, animi repellat, commodi distinctio dolorum quae dolore in ipsa ipsum doloribus illum mollitia delectus! Saepe odit aspernatur, maxime molestiae praesentium laborum sed, voluptatibus ab odio ad rem aut nisi ipsa aliquam in doloribus quidem deleniti consectetur voluptatem? Voluptatibus, voluptas consequuntur excepturi facere harum quis, similique soluta in distinctio ea quae aperiam fugiat iure ipsum aliquid. Hic quam, distinctio quod earum recusandae, dicta accusantium optio laudantium reiciendis temporibus eum voluptates non quibusdam dignissimos ab veniam commodi at perspiciatis quae adipisci provident?',
        'media/projects/hubhall.png'],
]
  
var data0 = projects.reduce((ac, ele) => {
  
    ac += `<div class="row mt-40 projects">
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 order-last order-md-last order-lg-first">
            <a href="` + baseUrl + `${ele[0]}" class="font-weight-bolder h1 text-dark project-title ">${ele[1]}</a>
            <p class="divider"></p>
            <h5 class="font-weight-bolder">${ele[2]}</h5>
            <p class="font-weight-bold">${ele[3]}</p>

            
        </div>
        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 order-first order-lg-first img-hover-zoom--zoom-n-rotate">
            <a href='` + baseUrl + `${ele[0]}'>
            <img class="img-thumbnail-projects mb-8" src="${ele[5]}" alt="">
            </a>
        </div>
    </div>
    `

    return ac;
  
  }, '')
document.getElementById("projects").innerHTML = data0;

var element = document.getElementById("indexNav");
  element.classList.add("active");