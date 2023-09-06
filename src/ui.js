import { getData } from "./Weather";

const inputTextSearch = document.getElementById("input-text-search");
const inputSearchBtn = document.getElementById("input-search-btn");


const searchBtnListener = () => {
    inputSearchBtn.addEventListener("click", () => {
        const inputContent = inputSearchBtn.value;
    
        if(inputContent !== "") {
            getData(inputContent);
        }
    });

};




export default searchBtnListener;