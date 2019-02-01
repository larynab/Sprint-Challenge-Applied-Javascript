class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    // this.tabElement;
    this.tabElement = tabElement;
    // Get the `data-tab` value from this.tabElement and store it here
    // this.tabData = ; 
    this.tabData = document.querySelector(`.tabs[data-tab='${tabElement.dataset.tab}']`);
    
    //Plan B
    this.cardElement = document.querySelector(`.card[data-tab='${tabElement.dataset.tab}']`);
    
    //Plan A
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    // Check to see if this.tabData is equal to 'all'
    /* if(this.tabData === document.querySelector(`.tabs[data-tab='${tabElement.all}']`)) {
      // If `all` is true, select all cards regardless of their data attribute values
       this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
       this.cards = document.querySelector(`.card[data-tab='${tabElement.dataset.tab}']`);
    }
    */

    //Plan A
    // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
     //this.cards = Array.from(this.cards).map(cards => new TabCard(cards));
    
   
   //Plan B Pass in a card object to the TabCard class. 
   this.card = new TabCard(this.cardElement);

   // Add a click event that invokes this.selectTab
    // this.tabElement.addEventListener();
    tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab(){

    // Select all elements with the .tab class on them
    // const tabs = document.querySelectorAll();
       let tabs = document.querySelectorAll('.tabs');
    // Iterate through the NodeList removing the .active-tab class from each element
    // tabs.forEach()
       Array.from(tabs).forEach(tabs => {tabs.classList.remove('active-tab')});
    // Select all of the elements with the .card class on them
    // const cards = ;
        const cards = document.querySelectorAll('.card');
    // Iterate through the NodeList setting the display style each one to 'none'
    // cards.forEach()
        Array.from(cards).forEach(cards => cards.style.display = "none");
    // Add a class of ".active-tab" to this.tabElement
    // this.tabElement;
        this.tabElement.classList.add('active-tab');
    
    //Plan A
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    //this.cards.forEach(card => card.selectCard());
     
    //Plan B 
   this.card.selectCard();
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
     
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement;
    this.cardElement.style.display = "flex";
    //Array.from(cardElement).forEach(cardElement => cardElement.style.display = "flex");
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab');
tabs.forEach( tabElement => new TabLink(tabElement));