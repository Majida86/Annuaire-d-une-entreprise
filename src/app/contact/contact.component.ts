import { Component, Input } from '@angular/core';
import { contact } from 'src/models/contact.model';
import { ContactService } from 'src/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input('detail-contact')
  contact!: contact;

    
  }

 


