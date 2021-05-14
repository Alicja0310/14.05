for(let i = 1; i < 7; i++) {
    const grid = document.getElementById('grid')
    const newDiv = document.createElement('div')
    const h3 = document.createElement('h3')
    h3.innerText = "Książka" + " " + i
    const p = document.createElement('p')
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis modi neque, sequi aperiam debitis amet consequatur earum dolores expedita voluptas eaque laboriosam, obcaecati delectus sint odio qui sunt, tempore necessitatibus quas nemo? Rem dignissimos itaque eos omnis, inventore id!"
    const button = document.createElement('button')
    button.innerText = "EDYTUJ"
    const newButton = document.createElement('button')
    newButton.innerText = "USUŃ"
    newDiv.setAttribute('class', 'new-div')
    h3.setAttribute('class', 'tytul')
    p.setAttribute('class', 'par')
    button.setAttribute('class', 'btn1')
    newButton.setAttribute('class', 'btn2')
    newDiv.appendChild(h3)
    newDiv.appendChild(p)
    newDiv.appendChild(button)
    newDiv.appendChild(newButton)
    grid.appendChild(newDiv)
}
