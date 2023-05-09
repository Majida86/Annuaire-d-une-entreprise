import { Injectable } from '@angular/core';
import { contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Tableau de contact
listeContacts: contact [] = [ 
  { 
    photo: "https://picsum.photos/200/?random=1",
    id: 1,
    nom:"Premier",
    prenom: "contact1",
    adresse: "premiere adresse",
    telephone: "11 11 11 11",
    client:true,
  },
  {
    photo: "https://picsum.photos/200/?random=2",
    id: 2,
    nom:"Deuxième",
    prenom: "contact2",
    adresse: "deuxième adresse",
    telephone: "22 22 22 22",
    client:true,
    
  },
  {
    photo: "https://picsum.photos/200/?random=3",
    id: 3,
    nom:"Troisième",
    prenom: "contact3",
    adresse: "troisième adresse",
    telephone: "33 33 33 33",
    client: false,
  },
  { 
    photo: "https://picsum.photos/200/?random=4",
    id: 4,
    nom:"Quatrième",
    prenom: "contact4",
    adresse: "quatrième adresse",
    telephone: "44 44 44 44",
    client:true,
  }

]
// fonction qui renvoie le tableau
listerContacts(): contact[]{
  return this.listeContacts;
}

}
