import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class MovingBorder  {
  constructor() {
    this.itemsToReveal = $('.moving-border');
    this.offsetPercentage = '50%';
    this.wait();
  }
   wait(){
    setTimeout(this.createWaypoints.bind(this),'1000'); /* Wait first 2 seconds*//*Remove this if the item isn't at the top of page after loading*/
    setTimeout(function(){
      $(this.itemsToReveal[0].firstElementChild).fadeTo(800,0);
      $(this.itemsToReveal[0].lastElementChild).fadeTo(800,0);

    }.bind(this),'3000'); /*wait 2s for first Timeout, then 1s for each animation to complete*/
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      var after=  this.firstElementChild;
      var before = this.lastElementChild;
      new Waypoint({
        element: currentItem,
        handler: function(that) {
        after.style.animationDuration='1s';
        after.style.animationFillMode='forwards';
        after.style.animationName='expand-right';
        before.style.animationDuration='1s';
        before.style.animationFillMode='forwards';
        before.style.animationName='expand-left';
        before.style.animationDelay='1s';
        },
        offset: that.offsetPercentage
      });
    });
  }/*End of create way point*/


}
export default MovingBorder ;
/*
<span class="moving-border">
    <span class="moving-border__after"></span>
     Welcome
    <span class="moving-border__before"></span>
</span>

*/
