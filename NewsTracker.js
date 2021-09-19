var Remaining = document.querySelector(".Remaining");
async function Reused() {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=c4ec08024e0441a5a4db34ebd82cc8c5");
    var data = await response.json();
    console.log(data);
    if (data.status === "ok" && Array.isArray(data.articles)) {
        const UpdatedData = [];
       data.articles.map((output) => {
            if (output.url ===null || output.urlToImage ===null || output.title ===null || output.publishedAt ===null || output.author ===null || output.content === null) {
            }
            else {
                const ContentData = output.content;
                const SplitedData = ContentData.split("");
                let JoinedData = "";
                for (i = 0; i < 150; i++){
                    if (SplitedData[i]) {
                        JoinedData += SplitedData[i];
                    }
                    else {
                        break
                    }
                }
                output.content = JoinedData + "  .....readmore";
                UpdatedData.push(output);
            }
            
       })
        Remaining.innerHTML = UpdatedData.map((output) => {
           return (`<div class="JS_Output">
           <a class="hyperLink" href=${output.url}>
           <img class="img" src=${output.urlToImage} />
           <div class="title">${output.title} <span class="publishedAt">[${output.publishedAt}]</span></div>
            <div class="Matter">
            <div class="content">${output.content}</div>
            </div>
           </a>
           </div>`)
       })

    }
}
Reused();
