import { Component, OnInit } from '@angular/core';
import { contact } from '../../models/contact.model';
import { ContactService } from '../../services/contacts.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
contacts!: contact [];

constructor(private service: ContactService) {}
ngOnInit() : void {

  this.contacts = this.service.listerContacts();
}


}
