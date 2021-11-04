// // // EXO BONUS
// let personnage = {
//     identite: {
//         nom: "Caliskan",
//         prenom: "Ayhan"
//     },
//     argent: 0,
//     lieu: "Maison",
//     humeur: "",
//     changeHumeur() {
//         let random = Math.trunc(Math.random() * 10) + 1
//         // console.log(random);
//         if (random % 2 == 0) {
//             this.humeur = "positif"
//         } else {
//             this.humeur = "negatif"
//         }
//     }
// }
// let personnage2 = {
//     identite: {
//         nom: "Caliskan",
//         prenom: "Ayhan"
//     },
//     argent: 0,
//     lieu: "Maison",
//     humeur: "",
//     changeHumeur() {
//         let random = Math.trunc(Math.random() * 10) + 1
//         // console.log(random);
//         if (random % 2 == 0) {
//             this.humeur = "positif"
//         } else {
//             this.humeur = "negatif"
//         }
//     }
// }

// const deplacer = (a, b) => {
//     a.lieu = b
// }


// const money = () => {
//     if (personnage.humeur == "positif") {
//         for (let i = 0; i < 8; i++) {
//             personnage.argent += 15
//             // personnage.argent = personnage.argent + 15
//             console.log(`${i+1} J'aime mon travail`);
//         }
//         // for (let i = 0; i <= 8; i+=2) {
//         // }
//     } else {
//         for (let i = 0; i < 8; i++) {
//             personnage.argent += 10
//             console.log(`${i+1} Je préfère mon lit`);
//         }
//         // for (let i = 0; i <= 8; i+=2) {
//         // }
//     }
// }

// // Récit
// personnage.changeHumeur()
// console.log(`L'humeur du personnage est: ${personnage.humeur}`);

// deplacer(personnage, `${personnage.identite.prenom} se deplace à son lieu de travail`)
// console.log(personnage.lieu);

// money()
// console.log(`${personnage.identite.prenom} est d'humeur ${personnage.humeur} ducoup il gagne :${personnage.argent} €`);

// deplacer('maison')
// console.log(personnage);


//CLASS
class LeegOfGeek {
    constructor(nom, pouvoir, degat) {
        this.nom = nom;
        this.pouvoir = pouvoir;
        this.degat = degat;
        this.sante = 10;
        
        ///
        this.isExecute = true;
        this.bonus = ["VieFull", "Dead", "Null"]

        /// méthode
        this.attaqueBasic = (a) => {
            a.sante -= this.degat
        };
        this.attaqueSpecial = (a) => {
            a.sante -= 35
            this.sante -= 15
        }
        this.autoSave = () => {
            if (this.isExecute) {
                this.sante += 35
                this.isExecute = false
                console.log(`${this.nom} a utilisé auto save. Par conséquent vous perdez le pouvoir d'utiliser le joker`);
            }else {
                console.log(`AutoSave non disponible pour ${this.nom}`)
            }
        }
        this.joker = (a) => {
            if (this.isExecute) {
                if (this.sante <= 15) {
                    let random = Math.trunc(Math.random() * 3)
                    switch (this.bonus[random]) {
                        case "VieFull":
                            this.sante = 100
                            console.log(`Bravo, ${this.nom} a acces à la vie full. Vous recupez la totalité de vos pouvoir`);
                            break;
                        case "Dead":
                            a.sante = 0
                            console.log(`Bravo, ${this.nom} a acces à Dead. Votre ennemie tombe à 0 points de vie`);
                            break;
                        default:
                            console.log(`La chance ne vous souri pas ${this.nom}, vous ne gagner rien`);
                            break;
                    }
                    this.isExecute = false

                } else {
                    console.log(`${this.nom} vous avez encore ${this.sante} point. Vous devez etre à 15point pour avoir acces`);
                }
            } else {
                console.log(`Joker non disponnible`);
            }
        }
    }
}


//instence = créeer d'objet

let ayhan = new LeegOfGeek('ayhan', 'Ocean', 15);
let elias = new LeegOfGeek('elias', 'Soleil', 15);

elias.joker(ayhan);
elias.autoSave();
console.log(elias);
// anderlecht.joker(molengeek);