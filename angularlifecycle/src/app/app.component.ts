import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // render the text and templateURL is changed to template
  template: `<h2>Life Cycle of Angular JS</h2> 
                <p *ngIf="initialized">
                1.	Creation(Birth of angular cycle):<br>
                <span>a.	constructor()—used to initialise and its dependency.</span><br>
                <br>
                2.	Initialization:<br>
                <span>a.	ngOnChanges()—called when the component’s input property changes, it provides information about change properties.</span><br>
                <span>b.	ngOnInit()—called once after the first ngOnChanges call, used for initialising the component, making API calls and performing other setup tasks.</span><br>
                <br>
                3.	Content Projection:<br>
                <span>a.	ngContentInit()—called after the content children(projected content) are initialized.</span><br>
                <br>
                4.	View Initialization:<br>
                <span>a.	ngAfterContentInit()—called after the content children are initialized and available in the content view.</span><br>
                <br>
                5.	View Update:<br>
                <span>a.	ngAfterViewInit()—called after the components views and child views are initialized, used for performing additional set of tasks that require access to the component’s view.</span><br>
                <br>
                6.	Runtime:<br>
                <span>a.	ngDoCheck()—called during every change detection cycle, used to perform custom change detection and react to changes in the component state.</span><br>
                <br>
                7.	Destroy(Death of angular cycle):<br>
                <span>a.	ngOnDestroy()—called when component is about to be destroyed, used to unsubscribe from subscriptions.</span><br>
                </p>`,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{ // updated: implements OnInit
  // updated code start
  initialized:boolean=false;
  constructor(){
    console.log("Constructor called")
  }
  ngOnInit(): void {
    this.initialized=true;
    console.log("Component Initialized")
  }
  // updated code ends
  title = 'angularjscoursera';
}