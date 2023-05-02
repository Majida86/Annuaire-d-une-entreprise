import { Injectable } from '@angular/core';
import { contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

tabContact: contact [] = [ 
  {
    id: 1,
    nom:"Premier",
    prenom: "contact1",
    adresse: "premiere adresse",
    photo: "",
  },
  {
    id: 2,
    nom:"Deuxième",
    prenom: "contact2",
    adresse: "deuxième adresse",
    photo: "",
  },
  {
    id: 3,
    nom:"Troisième",
    prenom: "contact3",
    adresse: "troisième adresse",
    photo: "",
  },
  {
    id: 4,
    nom:"Quatrième",
    prenom: "contact4",
    adresse: "quatrième adresse",
    photo: "",
  }

]
listeDeContact(){
  contact;
}

}
