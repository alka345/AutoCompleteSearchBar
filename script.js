let availableKeywords = ['html', 'css', 'Easy tutorial', 'Web desin tutorial'];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
    let result = [];
    // // creates array named results
    // it will store all the filtered keywords that we have in availableKeywords.It will get filtered acc to the input box
    let input = inputBox.value;
    // store the value that is avvailble in the input box
    if (input.length) {//if input has some value
        // then it will store filtered data in result
        result = availableKeywords.filter((keyword) =>
        //convert key to lower case and input to lower case.
        {
            return keyword.toLowerCase().includes(input.toLowerCase()
            )
        });
        //it will filter the original array, which is the available keywords//which keywords are similiar to the input that we are writing
        //this keyword will get each ele one by one which is there in my array
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML='';

    }
}
function display(result) {//this result is an array that contains some search keywords
    const content = result.map((list) => {
        return "<li onclick = selectInput(this)>" + list + "</li>";//to add li tag in all search terms for that in result we add map.This map will get each data from the array and then it will add the li add the start and at the end and then it will return and the return value will be stored in this content.
    });
//above function/maps gives a new array/ result as an array to display it as string add join and replace , by ''
    resultsBox.innerHTML = "<ul>" + content.join('') +"</ul>"
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML='';
//to hide unnneccesary keywords after click
}
//to hide horizontal line that is appearing when there is no suggestion.





