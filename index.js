let btn = document.getElementById("btn")
async function userData(){
    const response = await fetch("https://randomuser.me/api/")
    let p = document.getElementById("write")
    try{
        const data = await response.json()
        let i = data.results[0].name
        p.innerText = i.title + " " + i.first + " " + i.last
        console.log(data.results , i)
    }
    catch(err)
    {
        console.log(err)
    }
}
btn.addEventListener("click" , async () =>{
    userData()
})