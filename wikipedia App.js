let inputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendsearch(results) {
    let {
        link,
        title,
        description
    } = results;
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.classList.add("result-title");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    resultItemEl.appendChild(titleEl);

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    let lineBreakEl = document.createElement("br");
    resultItemEl.appendChild(lineBreakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

    searchResultsEl.appendChild(resultItemEl);

}










function displayResults(searchResults) {
    spinnerEl.classList.add("d-none");

    for (let results of searchResults) {
        createAndAppendsearch(results);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {

        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";

        let inputValue = inputEl.value;
        let options = {
            method: "GET"
        }

        let url = "https://apis.ccbp.in/wiki-search?search=" + inputValue;
        fetch(url, options)

            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                displayResults(search_results);
            });

    }
}









inputEl.addEventListener("keydown", searchWikipedia);