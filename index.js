const colors = ['red', 'green', 'yellow', 'brown', 'blue', 'purple', 'orange']
document.querySelector("input").addEventListener("keydown", event =>{
    if(event.key === 'Enter'){
        for(let i=0; i<120; i++) {
            const drop = document.createElement("div")
            drop.innerHTML = event.target.value
            drop.className = "drop"
            drop.style.left = window.innerWidth*(Math.random())
            +'px'
            drop.style.animationDelay = i/100+"s"
            const index = Math.floor(Math.random()*colors.length)
            drop.style.color = colors[index]
            if(event.target.value === ''){
                drop.classList.add("noimage")
            }
            document.querySelector(".rain").appendChild(drop)
        
        }
        event.target.remove()
    }


})
