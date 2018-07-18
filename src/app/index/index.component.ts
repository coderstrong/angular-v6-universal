import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { 
    title.setTitle('angular universal seo, Index home page');
    meta.addTags([
      { name: 'author', content: 'https://github.com/coderstrong' },
      { name: 'keywords', content: 'Universal, Angular 6' },
      { name: 'description', content: 'Index home page, enjoy it!' }
    ]);
  }

  ngOnInit() {
  }

}
