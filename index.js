console.log("this is my indexjs file");
//edc3cc1f81554a8b923475ca7c2035d0
//ilntialise the news parameters
let source = "the-times-of-india";
let apiKey = "edc3cc1f81554a8b923475ca7c2035d0";
//grab the news container
let newsAccordion = document.getElementById("newsAccordion");
//create and AJAX get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);
//what to do when the response is ready
xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";

    articles.forEach(function (element, index) {
      let news = `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                      <strong>Breaking News ${index + 1}  </strong>  : ${
        element["title"]
      }
                    </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                    <div class="accordion-body">
                       ${element["content"]}. <a target="_blank" href="${
        element["url"]
      }"> Read more here </a>
                    </div>
                    </div>
                </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("some eroor occured");
  }
};
xhr.send();
