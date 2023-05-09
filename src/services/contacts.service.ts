import { Injectable } from '@angular/core';
import { contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Tableau de contact
listeContacts: contact [] = [ 
  { 
    photo: "",
    id: 1,
    nom:"Premier",
    prenom: "contact1",
    adresse: "premiere adresse",
    telephone: "",
    client:true,
  },
  {
    photo: "",
    id: 2,
    nom:"Deuxième",
    prenom: "contact2",
    adresse: "deuxième adresse",
    telephone: "",
    client:true,
    
  },
  {
    photo: "",
    id: 3,
    nom:"Troisième",
    prenom: "contact3",
    adresse: "troisième adresse",
    telephone: "",
    client:true,
  },
  { 
    photo: "",
    id: 4,
    nom:"Quatrième",
    prenom: "contact4",
    adresse: "quatrième adresse",
    telephone: "",
    client:true,
  }

]
// fonction qui renvoie le tableau
listerContacts(): contact[]{
  return this.listeContacts;
}

}
