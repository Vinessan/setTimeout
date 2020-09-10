let time = 10;

function clear(page) {
    clearInterval(page)
    document.getElementById("btn").remove()
    alert("Time Exceeded!")
}

const page = setInterval(() => {
    document.querySelector("b").innerHTML = time
    time--

    if(time == -1) clear(page)
}, 1000)

document.getElementById("btn").addEventListener("click", () => {
    const group = document.form.radio
    let i = 0

    for (i = 0; i < group.length; i++) {
        if(group[i].checked) {
            if(group[i].value == "10") alert("Resposta Correta!")
            else alert ("Resposta Incorreta!")

            clearInterval(page)
            document.getElementById("btn").remove()
        }
    }
})