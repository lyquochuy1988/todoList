// we add span in here
var listItem = document.querySelectorAll('li')
for (var i = 0; i < listItem.length; i++) {
    var spanItem = document.createElement('span') // span
    var textItem = document.createTextNode('x') // x
    spanItem.appendChild(textItem) // <span>x</span>
    spanItem.className = 'close' // <span class="close">x</span>
    listItem[i].appendChild(spanItem)
        // add class checked when users choose 
    listItem[i].onclick = function() {
        this.classList.toggle('checked')
    }
}

// click close icon will hide list item
var spanClose = document.querySelectorAll('.close')
for (var i = 0; i < spanClose.length; i++) {
    spanClose[i].onclick = function() {
        // we will hide li 
        var parentList = this.parentElement
        parentList.style.display = 'none'
    }
}

// add new list when click button add 


var add = document.querySelector('.add')
var myInput = document.querySelector('.myInput')
var myUl = document.querySelector('.listItem')
add.onclick = function() {
        var newList = document.createElement('li') // add li
        myUl.appendChild(newList) // <ul><li></li></ul>
        var newText = document.createTextNode(myInput.value)
        newList.appendChild(newText) // <li>aaa or bbb</li>
            // add span and close icon 
        var spanItem = document.createElement('span') // span
        var textItem = document.createTextNode('x') // x
        spanItem.appendChild(textItem) // <span>x</span>
        spanItem.className = 'close' // <span class="close">x</span>
        newList.appendChild(spanItem)

        // add checked class
        newList.onclick = function() {
            this.classList.toggle('checked')
        }

        // hide li
        spanItem.onclick = function() {
            // we will hide li 
            var parentList = this.parentElement
            parentList.style.display = 'none'
        }
    }
    // console.log(add)