import $ from 'jquery';


class Top_Nav {
  constructor(id) {
 this.topnav = $(id)
 this.topnav__icon = $(id + ' .top-nav__icon');
 this.topnav__link = $(id + ' .top-nav__link');
 this.topnav__logo = $(id + ' .top-nav__logo');
 this.topnav__dropdown__item= $(id+ '  .dropdown__item');
 this.events();
  }

  events(){
this.topnav__icon.click(this.my_func.bind(this));

  } // -------End of Events
my_func(){
  this.topnav__icon.toggleClass('top-nav__icon__active');
  this.topnav.toggleClass('top-nav__icon__clicked')
  this.topnav__dropdown__item.toggleClass('change-item'); /* change background color of dropdown item*/
}


}//----- End of class

export default Top_Nav;
