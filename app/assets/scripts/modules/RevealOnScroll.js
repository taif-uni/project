import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
    this.events();
  }
  events()
  {
    $(document).scroll(this.my_func.bind(this));
  }
  my_func(){
   
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction=='down'){
            $(currentItem).addClass("reveal-item--is-visible");
            }
        },
        offset: that.offsetPercentage
      });
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction=='up'){
            $(currentItem).removeClass("reveal-item--is-visible");
          }
        },
        offset: "115%"
      });


    });
  }
}

export default RevealOnScroll;
