// function submitForm(){
//     var name = document.getElementById('name').value
//     var email = document.getElementById('email').value
//     var password = document.getElementById('password').value




//     console.log(name);
//     console.log(email);
//     console.log(password);


// }


// function learnMore() {
//     var remainText = "sit amet consectetur adipisicing elit. Magni et harum, aperiam qui cum cumque voluptas earum delectus quasi assumenda architecto, fugiat fuga perspiciatis perferendis nisi, mollitia accusamus iste vel sit amet consectetur adipisicing elit. Magni et harum, aperiam qui cum cumque voluptas earum delectus quasi assumenda architecto, fugiat fuga perspiciatis perferendis nisi, mollitia accusamus iste vel."
//     var textArea = document.getElementById('text')
//     textArea.value += remainText

// }

// function learnLess(){
//     var remainText = "sit amet consectetur adipisicing elit. Magni et harum, aperiam qui cum cumque voluptas earum delectus quasi assumenda architecto, fugiat fuga perspiciatis perferendis nisi, mollitia accusamus iste vel sit amet consectetur adipisicing elit. Magni et harum, aperiam qui cum cumque voluptas earum delectus quasi assumenda architecto, fugiat fuga perspiciatis perferendis nisi, mollitia accusamus iste vel."
//     var textArea = document.getElementById('text')
//    textArea.value = textArea.value.replace(remainText , '')
// }


// var tabRow = document.createElement("tr")
// var tabData = document.createElement("td")
// tabRow.appendChild(tabData)
// var text = document.createTextNode('aqsa')
// tabData.appendChild(text)

function deleteRow() {
    document.getElementById("aq").remove()

}

function editRow() {
    var oldValue = document.getElementById("name")
    var newValue = oldValue.textContent

    var updatedValue = prompt('Edit the name', newValue)
    oldValue.textContent = updatedValue

}

function deleteRowhr() {
    document.getElementById("hira").remove()

}
function editRowhr() {
    var oldValue = document.getElementById("hr")
    var newValue = oldValue.textContent

    var updatedValue = prompt('Edit the name', newValue)
    oldValue.textContent = updatedValue

}
function deleteRowiq() {
    document.getElementById("iq").remove()

}
function editRowiq() {
    var oldValue = document.getElementById("iqra")
    var newValue = oldValue.textContent

    var updatedValue = prompt('Edit the name', newValue)
    oldValue.textContent = updatedValue

}