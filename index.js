const colors = ['red', 'green', 'yellow', 'brown', 'blue', 'purple', 'orange']
document.querySelector("input").addEventListener("keydown", e =>{
    if(e.key === 'Enter'){
        for(let i=0; i<120; i++) {
            const drop = document.createElement("div")
            drop.innerHTML = e.target.value
            drop.className = "drop"
            drop.style.left = window.innerWidth*(Math.random())
            +'px'
            drop.style.animationDelay = i/100+"s"
            const index = Math.floor(Math.random()*colors.length)
            drop.style.color = colors[index]
            document.querySelector(".rain").appendChild(drop)
        
            
        }
        e.target.remove()
    }


})
