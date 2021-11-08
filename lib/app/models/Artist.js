"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Artist = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Artist = /*#__PURE__*/function () {
  function Artist(id, name) {
    (0, _classCallCheck2["default"])(this, Artist);
    (0, _defineProperty2["default"])(this, "id", -1);
    (0, _defineProperty2["default"])(this, "name", "");
    this.id = id;
    this.name = name;
  }

  (0, _createClass2["default"])(Artist, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }]);
  return Artist;
}();

exports.Artist = Artist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvQXJ0aXN0LnRzIl0sIm5hbWVzIjpbIkFydGlzdCIsImlkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLE07QUFLVCxrQkFBWUMsRUFBWixFQUF1QkMsSUFBdkIsRUFBbUM7QUFBQTtBQUFBLGlEQUhmLENBQUMsQ0FHYztBQUFBLG1EQUZiLEVBRWE7QUFDL0IsU0FBS0QsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7Ozs7U0FFRCxlQUFlO0FBQ1gsYUFBTyxLQUFLRCxFQUFaO0FBQ0gsSztTQUNELGFBQU9BLEVBQVAsRUFBaUI7QUFDYixXQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFDSDs7O1NBRUQsZUFBaUI7QUFDYixhQUFPLEtBQUtDLElBQVo7QUFDSCxLO1NBQ0QsYUFBU0EsSUFBVCxFQUFxQjtBQUNqQixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcnRpc3Rcclxue1xyXG4gICAgcHJpdmF0ZSBpZDpudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgbmFtZTpzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgbmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuICAgIHNldCBJZChpZDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTmFtZSgpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG4gICAgc2V0IE5hbWUobmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbn0iXX0=