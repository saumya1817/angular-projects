import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { TabContentComponent } from '../tab-content/tab-content.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss'],
})
export class TabContainerComponent {

  // This retrieves the ViewContainerRef of the <ng-container> so you can:
  //    Dynamically create components and insert them into this container.
  //    Manage components' lifecycle (e.g., destroying them when a tab is removed).

  // @ViewChild - It provides a way to get a reference to a child element, directive, or component.
  // The read option specifies what Angular should retrieve when querying the DOM element or directive.
  // ViewContainerRef is a class provided by Angular that represents a container where you can dynamically create and manipulate components.
  // By using read: ViewContainerRef, you are explicitly telling Angular to retrieve the ViewContainerRef associated with the <ng-container>.
  // The container property is a class member where the result of the @ViewChild query is stored.
  // It is typed as ViewContainerRef to allow interaction with Angular's API for creating and managing components.
  // The ! (non-null assertion operator) tells TypeScript that the value will definitely be assigned (by Angular) before it is accessed, 
  //      even though it might not be initialized at the time of writing the code.
  @ViewChild('tabContainer', { read: ViewContainerRef }) container !: ViewContainerRef;

  tabs: { title: string, componentRef? : any}[] = [];

  activeTab: number = 0;

  //The ComponentFactoryResolver is an Angular service that is used to create instances of components dynamically at runtime. 
  // It provides methods to resolve a ComponentFactory for a given component type. 
  // A ComponentFactory is a class that encapsulates the logic required to create and configure a component.
  constructor(private resolver: ComponentFactoryResolver,
              private cdRef: ChangeDetectorRef
  ) {}

  addTab(){
    const title = `Tab ${this.tabs.length + 1}`;
    // The resolveComponentFactory method of ComponentFactoryResolver is used to create a ComponentFactory for the specified component (TabContentComponent in this case).
    // The factory variable holds the ComponentFactory for TabContentComponent.
    const factory = this.resolver.resolveComponentFactory(TabContentComponent);

    // The createComponent method of ViewContainerRef uses the factory to:
    // Instantiate the component (TabContentComponent).
    // Insert its host view into the container (in this case, this.container).
    // componentRef is a reference to the newly created component.
    const componentRef = this.container.createComponent(factory);

    // Access the component instance to set properties
    componentRef.instance.title = title;
    this.tabs.push( {title, componentRef});
    this.activateTab(this.tabs.length - 1);
  }

  // It updates the currently active tab and ensures only the active tab's content is visible.
  activateTab(index: number){
    this.activeTab = index;
    // Loop through all the tabs
    this.tabs.forEach((tab,i) => {
      // True If Tab Component is generated
      if(tab.componentRef){
        // Hide the inactive tab
        // (i != index) -> means currentTab != activeTab
        tab.componentRef.instance.hidden = (i != index);
        // To detect the changes in component
        this.cdRef.detectChanges();
      }
    });
  }

  removeTab(index: number, event: MouseEvent) {
    event.stopPropagation(); // Prevent triggering tab activation
    // Destroy current tab component reference
    const tab = this.tabs[index];
    if (tab.componentRef) {
      tab.componentRef.destroy();
    }
    this.tabs.splice(index, 1);
    if (this.activeTab >= this.tabs.length) {
      this.activeTab = this.tabs.length - 1; // Adjust active tab
    }
    // Calling function to show active tab content
    this.activateTab(this.activeTab);
  }

}
