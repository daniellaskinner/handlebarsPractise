var people = {
    bananas: [
        {firstName: "Billy", lastName: "Bigtime"},
        {firstName: "Bruce", lastName: "Wayne"},
        {firstName: "Peter", lastName: "Parker"},
        {firstName: "Fred", lastName: "Fredtime"}
    ]
}

fetch('hand.hbs')
    .then((data)=>{
        return data.text()
    })
    .then((data)=>{
        let hbsTemplate = Handlebars.compile(data)

        var html = hbsTemplate(people)
        document.querySelector('body').innerHTML = html
    })
