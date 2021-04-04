import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Fly_Word  {
  constructor() {
    this.itemsToReveal = $('.fly-word');
    this.offsetPercentage = '50%';
    this.createWaypoints();
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction =="down"){
          currentItem.style.opacity="1";
          $(currentItem).addClass('fly-word__restore');

          }
        },
        offset: that.offsetPercentage
      });
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction =="up"){
          currentItem.style.opacity="1";
          $(currentItem).removeClass('fly-word__restore');

          }
        },
        offset: '100%'
      });
    });
  }/*End of create way point*/


}
export default Fly_Word ;

/*
<h1 class="about-me__title fly-word" >
  <span>A</span>
  <span>b</span>
  <span>o</span>
  <span>u</span>
  <span>t</span>
  <span>&nbsp;</span>
  <span>M</span>
  <span>e</span>
</h1>

*/
