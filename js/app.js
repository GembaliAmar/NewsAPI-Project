const sportsApiUrl =`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1b6ed861e77146779f6c79cfe9f67603`;

window
    .fetch(sportsApiUrl)
    .then(data => {
        data
        .json()
        .then(sportsnews => {
            //console.log(sportsnews);
            let sportsData = sportsnews.articles;
            
            let output = '';
            for(let sports of sportsData){
                output += `
                    <h1 class="h1Title"><a href="${sports.url}" target blank>${sports.title}></a></h1>

                    <p>${sports.description}</p>

                    <img src="${sports.urlToImage}"/>

                    <p>${sports.publishedAt}</p>
                `;
            }
            document.getElementById("left").innerHTML = output;
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err));

    //Time javascript here
    setInterval(() => {
        var time = new Date().toLocaleTimeString();
        document.getElementById("time").innerHTML = time;
    }, 1000);   


    const entertainmentApiUrl =`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1b6ed861e77146779f6c79cfe9f67603`;

    window
    .fetch(entertainmentApiUrl)
    .then(data => {
        data
        .json()
        .then(entertainmentnews => {
            //console.log(entertainmentnews);
            let entertainmentData = entertainmentnews.articles;
            
            let output = '';
            for(let entertainment of entertainmentData){
                output += `
                    <h1 class="h1Title"><a href="${entertainment.url}" target blank>${entertainment.title}></a></h1>

                    <p>${entertainment.description}</p>

                    <img src="${entertainment.urlToImage}"/>

                    <p>${entertainment.publishedAt}</p>
                `;
            }
            document.getElementById("right").innerHTML = output;
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err));

    const topheadlinesApiUrl =`https://newsapi.org/v2/top-headlines?country=us&apiKey=1b6ed861e77146779f6c79cfe9f67603`;

    window
    .fetch(topheadlinesApiUrl)
    .then(data => {
        data
        .json()
        .then(topheadlinesnews => {
            //console.log(entertainmentnews);
            let topheadlinesData = topheadlinesnews.articles;
            
            let output = '';
            for(let topheadlines of topheadlinesData){
                output += `
                    <h1 class="h1Title"><a href="${topheadlines.url}" target blank>${topheadlines.title}></a></h1>

                    <p>${topheadlines.description}</p>

                    <img src="${topheadlines.urlToImage}"/>

                    <p>${topheadlines.publishedAt}</p>
                `;
            }
            document.getElementById("middle").innerHTML = output;
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err));