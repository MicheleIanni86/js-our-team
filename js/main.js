const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

/*- Carico Array dei membri del team
- Prendo le tre informazioni sui membri
- Stampo le tre informazioni in console log
- Richiamo un Id dell'HTML dove stampare a schermo le informazioni
- Sostituisco l'informazione: Foto con una immagine vera
- Strutturo il mio HTML con style e card*/

const cardContainer = document.getElementById('cardInfo');

// CICLO 
for (let infoTeam of team) {
    const nameHTML = `
    <div class="col">
    <div class="card">
      <img src="./img/${infoTeam.image}" class="card-img-top imgSize" alt="...">
      <div class="card-body">
        <h5 class="card-title">${infoTeam.name}</h5>
        <p class="card-text">${infoTeam.role}</p>
      </div>
    </div>
  </div>`;
    console.log(infoTeam.name);
    console.log(infoTeam.role);
    console.log(infoTeam.image);

    cardContainer.innerHTML += nameHTML;
};
