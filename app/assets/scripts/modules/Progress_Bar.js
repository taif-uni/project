import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Progress_Bar  {
  constructor(ele,percent) {
    this.itemsToReveal = $(ele + ' .myBar');
    this.skill = percent;
    this.offsetPercentage = '100%';
    this.width =0;
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
            var id = setInterval(function(){
            if (that.width >= that.skill) {
                clearInterval(id);
              } else {
                that.width++;
                $(currentItem)[0].style.width = that.width + '%';
                $(currentItem)[0].innerHTML = that.width * 1  + '%';
              }
            }, 10);
          }/*End of if*/
        }, // End of handler
        offset: that.offsetPercentage
      });
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction =="up"){
            that.width= 0 ;
          }
        },
        offset: '110%'
      });
    });
  }/*End of create way point*/


}
export default Progress_Bar ;

/*
<div class="myProgress">
   <div class="myBar">10%</div>
</div>

*/
