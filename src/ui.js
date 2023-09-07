import { getData } from "./Weather";

const inputTextSearch = document.getElementById("input-text-search");
const inputSearchBtn = document.getElementById("input-search-btn");
const searchContainer = document.getElementById("search-container");

const searchBtnListener = () => {
    inputSearchBtn.addEventListener("click", () => {
        const inputContent = inputSearchBtn.value;
    
        if(inputContent !== "") {
            getData(inputContent);
        }
    });

};

const searchFocusListener = () => {
    
    inputTextSearch.addEventListener("focus", () => {
        searchContainer.classList.remove("no-outline");
        searchContainer.classList.add("white-outline");
    });

    inputTextSearch.addEventListener("blur", () => {
        searchContainer.classList.remove("white-outline");
        searchContainer.classList.add("no-outline");
    });
};




export { searchBtnListener, searchFocusListener };