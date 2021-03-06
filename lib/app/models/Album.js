"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Album = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Album = /*#__PURE__*/function () {
  function Album(id, title, artist, description, year, image, tracks) {
    (0, _classCallCheck2["default"])(this, Album);
    (0, _defineProperty2["default"])(this, "id", -1);
    (0, _defineProperty2["default"])(this, "title", "");
    (0, _defineProperty2["default"])(this, "artist", "");
    (0, _defineProperty2["default"])(this, "description", "");
    (0, _defineProperty2["default"])(this, "year", -1);
    (0, _defineProperty2["default"])(this, "image", "");
    (0, _defineProperty2["default"])(this, "tracks", []);
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.description = description;
    this.year = year;
    this.image = image;
    this.tracks = tracks;
  }

  (0, _createClass2["default"])(Album, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Title",
    get: function get() {
      return this.title;
    },
    set: function set(title) {
      this.title = title;
    }
  }, {
    key: "Artist",
    get: function get() {
      return this.artist;
    },
    set: function set(artist) {
      this.artist = artist;
    }
  }, {
    key: "Description",
    get: function get() {
      return this.description;
    },
    set: function set(description) {
      this.description = description;
    }
  }, {
    key: "Year",
    get: function get() {
      return this.year;
    },
    set: function set(year) {
      this.year = year;
    }
  }, {
    key: "Image",
    get: function get() {
      return this.image;
    }
  }, {
    key: "Image_Name",
    set: function set(image) {
      this.image = image;
    }
  }, {
    key: "Tracks",
    get: function get() {
      return this.tracks;
    },
    set: function set(tracks) {
      this.tracks = tracks;
    }
  }]);
  return Album;
}();

exports.Album = Album;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvQWxidW0udHMiXSwibmFtZXMiOlsiQWxidW0iLCJpZCIsInRpdGxlIiwiYXJ0aXN0IiwiZGVzY3JpcHRpb24iLCJ5ZWFyIiwiaW1hZ2UiLCJ0cmFja3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUNhQSxLO0FBVVQsaUJBQVlDLEVBQVosRUFBdUJDLEtBQXZCLEVBQXFDQyxNQUFyQyxFQUFvREMsV0FBcEQsRUFBd0VDLElBQXhFLEVBQXFGQyxLQUFyRixFQUFpR0MsTUFBakcsRUFBZ0g7QUFBQTtBQUFBLGlEQVI1RixDQUFDLENBUTJGO0FBQUEsb0RBUHpGLEVBT3lGO0FBQUEscURBTnhGLEVBTXdGO0FBQUEsMERBTG5GLEVBS21GO0FBQUEsbURBSjFGLENBQUMsQ0FJeUY7QUFBQSxvREFINUYsRUFHNEY7QUFBQSxxREFGdkYsRUFFdUY7QUFDNUcsU0FBS04sRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7OztTQUVELGVBQWU7QUFDWCxhQUFPLEtBQUtOLEVBQVo7QUFDSCxLO1NBQ0QsYUFBT0EsRUFBUCxFQUFpQjtBQUNiLFdBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNIOzs7U0FFRCxlQUFrQjtBQUNkLGFBQU8sS0FBS0MsS0FBWjtBQUNILEs7U0FDRCxhQUFVQSxLQUFWLEVBQXVCO0FBQ25CLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNIOzs7U0FFRCxlQUFtQjtBQUNmLGFBQU8sS0FBS0MsTUFBWjtBQUNILEs7U0FDRCxhQUFXQSxNQUFYLEVBQXlCO0FBQ3JCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7U0FFRCxlQUF3QjtBQUNwQixhQUFPLEtBQUtDLFdBQVo7QUFDSCxLO1NBQ0QsYUFBZ0JBLFdBQWhCLEVBQW1DO0FBQy9CLFdBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0g7OztTQUVELGVBQWlCO0FBQ2IsYUFBTyxLQUFLQyxJQUFaO0FBQ0gsSztTQUNELGFBQVNBLElBQVQsRUFBcUI7QUFDakIsV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7OztTQUVELGVBQWU7QUFDWCxhQUFPLEtBQUtDLEtBQVo7QUFDSDs7O1NBQ0QsYUFBZUEsS0FBZixFQUF5QjtBQUNyQixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7O1NBRUQsZUFBb0I7QUFDaEIsYUFBTyxLQUFLQyxNQUFaO0FBQ0gsSztTQUNELGFBQVdBLE1BQVgsRUFBMEI7QUFDdEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFjayB9IGZyb20gXCIuL1RyYWNrXCI7XHJcbmV4cG9ydCBjbGFzcyBBbGJ1bVxyXG57XHJcbiAgICBwcml2YXRlIGlkOm51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSB0aXRsZTpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBhcnRpc3Q6c3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgZGVzY3JpcHRpb246c3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgeWVhcjpudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgaW1hZ2U6YW55ID0gXCJcIjtcclxuICAgIHByaXZhdGUgdHJhY2tzOlRyYWNrW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXIsIHRpdGxlOnN0cmluZywgYXJ0aXN0OnN0cmluZywgZGVzY3JpcHRpb246c3RyaW5nLCB5ZWFyOm51bWJlciwgaW1hZ2U6IGFueSwgdHJhY2tzOlRyYWNrW10pe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5hcnRpc3QgPSBhcnRpc3Q7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMudHJhY2tzID0gdHJhY2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuICAgIHNldCBJZChpZDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVGl0bGUoKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcbiAgICBzZXQgVGl0bGUodGl0bGU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEFydGlzdCgpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnRpc3Q7XHJcbiAgICB9XHJcbiAgICBzZXQgQXJ0aXN0KGFydGlzdDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuYXJ0aXN0ID0gYXJ0aXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBEZXNjcmlwdGlvbigpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIHNldCBEZXNjcmlwdGlvbihkZXNjcmlwdGlvbjpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgWWVhcigpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy55ZWFyO1xyXG4gICAgfVxyXG4gICAgc2V0IFllYXIoeWVhcjpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEltYWdlKCk6YW55e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xyXG4gICAgfVxyXG4gICAgc2V0IEltYWdlX05hbWUoaW1hZ2U6YW55KXtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFRyYWNrcygpOlRyYWNrW117XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tzO1xyXG4gICAgfVxyXG4gICAgc2V0IFRyYWNrcyh0cmFja3M6VHJhY2tbXSl7XHJcbiAgICAgICAgdGhpcy50cmFja3MgPSB0cmFja3M7XHJcbiAgICB9XHJcbn0iXX0=