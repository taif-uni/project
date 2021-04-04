import $ from 'jquery';
//---------------------------------------Class----------------------------------
class Dropdown  {
  constructor(id) {
    this.dropdown=$(id);
    this.document= $(document);
    this.dropdown__content = $(id +' .dropdown__content');
    this.dropdown__toggle = $(id +' .dropdown__toggle');
    this.dropdown__icon = $(id +' .dropdown__icon');
    this.icon_down_class = 'fa-angle-down';       // the icon for down arrow you can choose the one you like
    this.icon_up_class = 'fa-angle-up';           // the icon for up arrow
    this.currentTarget ;

    this.events();
  }

events(){
this.dropdown.click(this.my_func.bind(this));
this.document.click(this.close_opening_menus.bind(this));

}
//-------------------------------My Function -----------------------------------
close_opening_menus(that) {
  if(( $(that.target)[0] != this.dropdown__toggle[0]) && (this.dropdown__content[0].style.display='block') && ($(that.target)[0] != this.dropdown__icon[0]))
    {
       this.currentTarget = that.target;
       this.my_func();
  }
}

//---------------------------my funct ----------------------------------------
my_func(that){
  //  if(( $(this.currentTarget)[0] == this.dropdown__toggle[0]) || ($(this.currentTarget)[0] == this.dropdown__icon[0])){
        if(this.dropdown__content[0].style.display=='none' ||  this.dropdown__content[0].style.display=='' ){

        this.dropdown__content[0].style.display='block';
        this.dropdown__icon.first().addClass(this.icon_up_class);
        this.dropdown__icon.first().removeClass(this.icon_down_class);

        }
        else {
          this.dropdown__content[0].style.display='none';
          this.dropdown__icon.first().addClass(this.icon_down_class);
          this.dropdown__icon.first().removeClass(this.icon_up_class);
          }

  //  }// End of first if
  }
}//------------------------------------End of class ----------------------------

//------------------------------------Export the class--------------------------

export default Dropdown;
//----------------------------------Template-------------------------------------------------------
