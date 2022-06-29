// alert("check")
const output = document.getElementById("output");

const check = (event) => {
    event.preventDefault();
    console.log("check")
}
const starArr = [...document.getElementsByClassName("starRating")]

console.log(starArr)

const starRating=(star)=>{
    star.map(i => {

        i.addEventListener("click", () => {
            // console.log(i.checked)
            console.log(i.value);
            console.log(star.findIndex(j => j === i))
            const strIndx = star.findIndex(j => j === i)
            for (let j = 0; j <= strIndx; j++) {

                star[j].checked = true
                star[j].className = "starChecked"

            }

            console.log(star)


            for (let j = strIndx + 1; j < star.length; j++) {
                star[j].checked = false
                star[j].className = "starRating"
            }
            output.style.display = "block"

            output.textContent="Thanks for  rating us "+i.value
            // if()

        })

    })
}

starRating(starArr)