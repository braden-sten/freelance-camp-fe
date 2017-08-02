import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
    {
    	title: "My First Doc",
    	description: 'fdsafdfad',
    	file_url: 'http://google.com',
    	updated_at: '07/31/17',
    	image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'
    },
    {
    	title: "My Second Doc",
    	description: 'fdsafdfad',
    	file_url: 'http://google.com',
    	updated_at: '07/31/17',
    	image_url: 'http://www.java-studios.com/wp-content/uploads/2016/07/freelancing.jpg'
    },
    {
    	title: "My Last Doc",
    	description: 'fdsafdfad',
    	file_url: 'http://google.com',
    	updated_at: '07/31/17',
    	image_url: 'https://membermouse.com/wp-content/uploads/2016/09/Freelancer-Liability-Featured.png'
    }
	]
}