import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import WOW from 'wow.js' ;


var wow = new WOW().init();
console.log(wow);
class Wow_Animation  {
  constructor() {
    this.itemsToReveal = $('.wow');
    this.offsetPercentage = '50%';

    this.createWaypoints();
  }

  createWaypoints() {
    WOW.prototype.addBox = function(element){
        this.boxes.push(element);
    };

    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction =="down"){

          }
        },
        offset: that.offsetPercentage
      });
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction =="up"){
            var element = $(this);
            $(currentItem).css({
                'visibility' : 'hidden',
                'animation-name' : 'none'
            }).removeClass('animated');
            $(currentItem).removeAttr('style');
            new Wow().init();
  /*        var  x = $(currentItem)[0];
            console.log(wow);
            wow.addBox(x);*/

          }
        },
        offset: '110%'
      });
    });
  }/*End of create way point*/


}
export default Wow_Animation ;
