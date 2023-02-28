let form = document.querySelector(".form")   //getting the form , form mein hi input hai
let p = document.querySelector(".shinchan")  //getting the tag where we want to show "contact you soon"
// console.log(p);



form.addEventListener("submit", (e) => {
    e.preventDefault()

    let now = new Date()
    let number = {
        number: form.addnumber.value,  //form upar wala form hai, aur addnumber name hai input mein , aur number: ye fire store se aaaya hai
        created_at: firebase.firestore.Timestamp.fromDate(now) 
    }
    form.reset()   //reset the input value after the enter

    db.collection('numbers').add(number).then(() => {
        // console.log("Number is Added", data);
        let dataaa = `We Will Contact You Soon!!!`
        // console.log(dataaa);
        p.innerHTML = dataaa
    }).catch((err) => {
        console.log("something went wrong", err.message);
    })
})














