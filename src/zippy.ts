import {Component, Input} from 'angular2/core';

@Component({
	selector: 'zippy',
	templateUrl: 'src/zippy.html'	
})

export class Zippy {
	@Input() title: string;
	
	visible: boolean = true;
	
	toggle() {
		this.visible = !this.visible;
	}
}