import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { IndexComponent } from '../app/index/index.component';
import { ContactComponent } from '../app/contact/contact.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'contact', component: ContactComponent }
];

@NgModule({
	declarations: [
		IndexComponent,
		ContactComponent
	],

	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
