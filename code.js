
var title = document.querySelectorAll(".gig-card-layout div .gig-wrapper .text-display-7");
var rating = document.querySelectorAll(".gig-rating span");
var count_rating = rating.length
var count_title = title.length
var count_value = 0;
console.log(`Total Title = ${count_title}`)
console.log(`Total Rating = ${count_rating}`)

for (let i = 0; i < count_rating; i++) {
    if (rating[i].innerText == "(1k+)") {
        console.log(`${title[i].innerText}   (Rating = ${rating[i].innerText})`)
        count_value++
    }

}

console.log(`Totle Found = ${count_value}`)