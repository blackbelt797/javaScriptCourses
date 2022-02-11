const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
 // console.log(event.currentTarget);
 //hide all tab panels

 tabPanels.forEach((panel) => {
  panel.hidden = true;
 });
 //mark all tabs as unslected

 tabButtons.forEach((tab) => {
  //tab.ariaSelected = false;
  tab.setAttribute('aria-selected', false);
 });
 //mark the click tab as selected

 event.currentTarget.setAttribute('aria-selected', true);
 //find the associated tab panel and show it

 const { id } = event.currentTarget;

 /*
 Method 1
 const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
 tabPanel.hidden = false;
 
 */

 //Method 2 - Find in the array of tabPanels

 const tabpanel = tabPanels.find((panel) => panel.getAttribute('aria-labelledby') === id);
 tabpanel.hidden = false;
}

tabButtons.forEach((button) => button.addEventListener('click', handleTabClick));
