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

for (let infoTeam of team) {
    console.log(infoTeam.name);
    console.log(infoTeam.role);
    console.log(infoTeam.image);
}
