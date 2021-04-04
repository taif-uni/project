import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".top-nav");
    this.nav__link = $('.top-nav .top-nav__link');
    this.nav__dropdown__toggle = $('.top-nav .dropdown__toggle');
    this.nav__dropdown__content = $('.top-nav .dropdown__content');
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".top-nav a");
    this.scrollUp = $('.scroll-up');
    this.home = $('#home');
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.load(function() {
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll({
      offset:-66,
      easing: 'swing',
      speed: 'auto',
      autoCoefficient: 1.5
    });

    this.scrollUp.on('click', function() {
      $.smoothScroll({
        scrollTarget: '#findme',
        easing: 'swing',
        speed: 'auto',
        autoCoefficient: 1.5

      });
      return false;
    });
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
          that.nav__link.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass("site-header--dark");
          that.nav__link.removeClass('site-header--dark');
        }
      }

    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            that.nav__dropdown__toggle.removeClass('is-current-link');
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            that.nav__dropdown__toggle.removeClass('is-current-link');
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
