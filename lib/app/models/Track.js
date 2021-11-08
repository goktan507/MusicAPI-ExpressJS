"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Track = /*#__PURE__*/function () {
  function Track(id, number, title, lyrics, video) {
    (0, _classCallCheck2["default"])(this, Track);
    (0, _defineProperty2["default"])(this, "id", -1);
    (0, _defineProperty2["default"])(this, "number", -1);
    (0, _defineProperty2["default"])(this, "title", "");
    (0, _defineProperty2["default"])(this, "lyrics", "");
    (0, _defineProperty2["default"])(this, "video", "");
    this.id = id;
    this.number = number;
    this.title = title;
    this.lyrics = lyrics;
    this.video = video;
  }

  (0, _createClass2["default"])(Track, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Number",
    get: function get() {
      return this.number;
    },
    set: function set(number) {
      this.number = number;
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
    key: "Lyrics",
    get: function get() {
      return this.lyrics;
    },
    set: function set(lyrics) {
      this.lyrics = lyrics;
    }
  }, {
    key: "Video",
    get: function get() {
      return this.video;
    },
    set: function set(video) {
      this.video = video;
    }
  }]);
  return Track;
}();

exports.Track = Track;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvVHJhY2sudHMiXSwibmFtZXMiOlsiVHJhY2siLCJpZCIsIm51bWJlciIsInRpdGxlIiwibHlyaWNzIiwidmlkZW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxLO0FBUVQsaUJBQVlDLEVBQVosRUFBd0JDLE1BQXhCLEVBQXdDQyxLQUF4QyxFQUF1REMsTUFBdkQsRUFBdUVDLEtBQXZFLEVBQXNGO0FBQUE7QUFBQSxpREFOakUsQ0FBQyxDQU1nRTtBQUFBLHFEQUw3RCxDQUFDLENBSzREO0FBQUEsb0RBSjlELEVBSThEO0FBQUEscURBSDdELEVBRzZEO0FBQUEsb0RBRjlELEVBRThEO0FBQ2xGLFNBQUtKLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNIOzs7O1NBRUQsZUFBaUI7QUFDYixhQUFPLEtBQUtKLEVBQVo7QUFDSCxLO1NBQ0QsYUFBT0EsRUFBUCxFQUFtQjtBQUNmLFdBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNIOzs7U0FFRCxlQUFxQjtBQUNqQixhQUFPLEtBQUtDLE1BQVo7QUFDSCxLO1NBQ0QsYUFBV0EsTUFBWCxFQUEyQjtBQUN2QixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7O1NBRUQsZUFBb0I7QUFDaEIsYUFBTyxLQUFLQyxLQUFaO0FBQ0gsSztTQUNELGFBQVVBLEtBQVYsRUFBeUI7QUFDckIsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7OztTQUVELGVBQXFCO0FBQ2pCLGFBQU8sS0FBS0MsTUFBWjtBQUNILEs7U0FDRCxhQUFXQSxNQUFYLEVBQTJCO0FBQ3ZCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7U0FFRCxlQUFvQjtBQUNoQixhQUFPLEtBQUtDLEtBQVo7QUFDSCxLO1NBQ0QsYUFBVUEsS0FBVixFQUF5QjtBQUNyQixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUcmFjayBcclxue1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIG51bWJlcjogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBseXJpY3M6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHZpZGVvOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG51bWJlcjogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBseXJpY3M6IHN0cmluZywgdmlkZW86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5seXJpY3MgPSBseXJpY3M7XHJcbiAgICAgICAgdGhpcy52aWRlbyA9IHZpZGVvO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgc2V0IElkKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IE51bWJlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlcjtcclxuICAgIH1cclxuICAgIHNldCBOdW1iZXIobnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH1cclxuICAgIHNldCBUaXRsZSh0aXRsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBMeXJpY3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5seXJpY3M7XHJcbiAgICB9XHJcbiAgICBzZXQgTHlyaWNzKGx5cmljczogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5seXJpY3MgPSBseXJpY3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFZpZGVvKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW87XHJcbiAgICB9XHJcbiAgICBzZXQgVmlkZW8odmlkZW86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudmlkZW8gPSB2aWRlbztcclxuICAgIH1cclxuXHJcbn0iXX0=