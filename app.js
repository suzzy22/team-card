
let membersDetails=[{
    image:"img/IMG-20220608-WA0039.jpg",
    names:"Austine Tonoyam",
    age:22,
    BestFood:"Spaghetti",
    BestMovie:"Inglorious Berstards",
    Complexion:"Dark sinned",
    ThingsLearnt:["HTML", "CSS", "Bootstrap", "JavaScript"],
    track:"Frontend Beginner",

},
{
    image:"img/IMG-20220608-WA0000.jpg",
    names:"Igah Abiyeh",
    age:21,
    BestFood:"Ewa Ago and Bread",
    BestMovie:"Halo",
    Complexion:"Dark sinned",
    ThingsLearnt:["HTML", "CSS", "Bootstrap", "JavaScript"],
    track:"Frontend Beginner",  
},
{
    image:"img/sue (2).jpg",
    names:"Susan Chepkosgei",
    age:22,
    BestFood:"Pilau and Chicken",
    BestMovie:"The Darkest Mind",
    Complexion:"Dark sinned",
    ThingsLearnt:["HTML", "CSS", "Bootstrap", "JavaScript"],
    track:"Frontend Beginner",
},
{
    image:"img/IMG-20220608-WA0005.jpg",
    names:"Susan Mwende",
    age:21,
    BestFood:"Chips and Chicken",
    BestMovie:"The Lengend",
    Complexion:"Dark sinned",
    ThingsLearnt:["HTML", "CSS", "Bootstrap", "JavaScript"],
    track:"Frontend Beginner",
},
{
    image:"img/IMG-20220608-WA0003.jpg",
    names:"Amos Thibault BIKARI",
    age:23,
    BestFood:"Uburobe and Ndagara",
    BestMovie:"Suits",
    Complexion:"Dark sinned",
    ThingsLearnt:"HTML, CSS, Bootstrap, JavaScript",
    track:"Frontend Beginner",
},
{
    image:"img/IMG-20220608-WA0001.jpg",
    names:"Aladesuru Oriyomi",
    age:23,
    BestFood:"Pounded Yam and Okro",
    BestMovie:"Ata the moment, charmed",
    Complexion:"Dark sinned",
    ThingsLearnt:"HTML, CSS, Bootstrap, JavaScript",
    track:"Frontend Beginner",
},
{
    image:"img/IMG-20220608-WA0035.jpg",
    names:"Izima Obisike",
    age:22,
    BestFood:"Eba and Egusi Soup",
    BestMovie:"House MD",
    Complexion:"Fair",
    ThingsLearnt:"HTML, CSS, Bootstrap, JavaScript",
    track:"Frontend Beginner",
},
{
    image:"img/oyindamola.jpg",
    names:"Oyindamola Ogunkunle",
    age:24,
    BestFood:"Amala with Abula",
    BestMovie:"Nil",
    Complexion:"Dark",
    ThingsLearnt:"HTML, CSS, Bootstrap, JavaScript",
    track:"Frontend Beginner",
}
]

let card="";


for(let i = 0; i < membersDetails.length; i++){
    const members = membersDetails[i];
      card += `<div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card mb-5 bg-white">
                        <div class="card" style="width: 18rem;">
                           <img src="${members.image}" class="card-img-top container mt-5" alt="${members.names}" height="285px">
                           <div class="card-body">
                              <h5 class="card-title text-center">${members.names}</h5>
                      
                           </div>
                           <ul class="list-group list-group-flush">
                       
                           <li class="list-group-item">${members.BestFood}</li>
                           <li class="list-group-item">${members.BestMovie}</li>
                           <li class="list-group-item">${members.Complexion}</li>
                           <li class="list-group-item">${members.age}</li>
                           <li class="list-group-item">${members.ThingsLearnt}</li>
                           <li class="list-group-item">${members.track}</li>
                           </ul>
                           <div class="card-body">
                            <button class="btn btn-primary" onclick="myName(${i})">click Me</button>
                           </div>
                        </div>
                    </div>
                </div>`;
                document.querySelector(".row").innerHTML=card;
                }
                function myName(i) {
                    alert(membersDetails[i].names);
                }
