import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Skill  {
  constructor(ele) {
    this.borderAfter = $(ele +' .skill__sort__border-after');
    this.borderBefore = $(ele + ' .skill__sort__border-before');
    this.skill = 90;
    this.borderAfter_offset = 50;
    this.borderBefore_offset = 100;
    this.height =0 ;
    this.createWaypoints();
  }

  createWaypoints() {
    var that = this;
    this.borderAfter.each(function() {
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction =="down"){
            var id = setInterval(function(){
            if (that.height >= that.borderAfter_offset) {
                clearInterval(id);
              } else {
                if($(currentItem)[0].style.height == '24%'){
                  $(currentItem)[0].previousElementSibling.style.backgroundColor="#3a96d9";
                //  console.log($(currentItem)[0].previousSibling);
                }
                that.height++;
                $(currentItem)[0].style.height = that.height + '%';
                $(currentItem)[0].style.borderRightColor = '#3a96d9';
              //  $(currentItem)[0].innerHTML = that.width * 1  + '%';
              }
            }, 10);
          }/*End of if*/
        }, // End of handler
        offset: '25%'
      });
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction =="up"){
            that.height= 0 ;
            $(currentItem)[0].style.borderRightColor = 'transparent';
            $(currentItem)[0].style.height = '0%';
            $(currentItem)[0].previousElementSibling.style.backgroundColor="transparent";
          }
        },
        offset: '110%'
      });
    });/*End of each*/

//-------------------------- Repeat code for Before Elements -------------------
this.borderBefore.each(function() {
  let currentItem = this;
  new Waypoint({
    element: currentItem,
    handler: function(direction) {
      if (direction =="down"){
        var id = setInterval(function(){
        if (that.height >= that.borderBefore_offset) {
            clearInterval(id);
          } else {
            if($(currentItem)[0].style.height == '24%'){
              $(currentItem)[0].nextElementSibling.style.backgroundColor="#3a96d9";
            //  console.log($(currentItem)[0].previousSibling);
            }
            that.height++;
            $(currentItem)[0].style.height = that.height + '%';
            $(currentItem)[0].style.borderLeftColor = '#3a96d9';
          //  $(currentItem)[0].innerHTML = that.width * 1  + '%';
          }
        }, 10);
      }/*End of if*/
    }, // End of handler             /////////////////
    offset: '0%'
  });
  new Waypoint({
    element: currentItem,
    handler: function(direction) {
      if (direction =="up"){
        that.height= 0 ;
        $(currentItem)[0].style.borderLeftColor = 'transparent';
        $(currentItem)[0].style.height = '0%';
        $(currentItem)[0].nextElementSibling.style.backgroundColor="transparent";
      }
    },
    offset: '110%'
  });
});/*End of each*/              /////////////////////////


  }/*End of create way point*/


}
export default Skill ;
