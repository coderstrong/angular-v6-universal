import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	constructor(private title: Title, private meta: Meta) {
		title.setTitle('angular universal seo, contact to me');
		meta.addTags([
			{ name: 'author', content: 'https://github.com/coderstrong' },
			{ name: 'keywords', content: 'contact to me' },
			{ name: 'description', content: 'contact to me, enjoy it!' }
		]);
	}

	ngOnInit() {
	}

}
