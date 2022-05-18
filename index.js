    
function getRandomShow(){
    fetch("https://api.simkl.com/search/random?service=simkl")
    .then((response) => response.json())
    .then((result) => {
        console.log(result); 
    })
}
    
getRandomShow(); 