/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * @module EMOJI TRANSLATE
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
var _emojiTranslate = (function () {
  function init() {
    var smileys = {
      "<3": "❤",
      "</3": "💔",
      ":)": "😊",
      "(:": "😊",
      ":-)": "😊",
      "C:": "😄",
      "c:": "😄",
      ":D": "😄",
      ":-D": "😄",
      ";)": "😉",
      ";-)": "😉",
      "):": "😞",
      ":(": "😞",
      ":-(": "😞",
      ":'(": "😢",
      "=)": "😃",
      "=-)": "😃",
      ":*": "💋",
      ":-*": "💋",
      "8)": "😎",
      ":\\\\": "😕",
      ":-\\\\": "😕",
      ":/": "😕",
      ":-/": "😕",
      ":|": "😐",
      ":-|": "😐",
      ":o": "😮",
      ":-o": "😮",
      ">:(": "😠",
      ">:-(": "😠",
      ":p": "😛",
      ":-p": "😛",
      ":P": "😛",
      ":-P": "😛",
      ":b": "😛",
      ":-b": "😛",
      ";p": "😜",
      ";-p": "😜",
      ";b": "😜",
      ";-b": "😜",
      ";P": "😜",
      ";-P": "😜",
      ":o)": "🐵",
      "D:": "😧"
    };
    function translate(str) {
      Object.keys(smileys).map(function (item) {
        if (str.indexOf(item) > -1) str = str.replace(item, smileys[item]);
      });
      return str;
    }
    return { translate: translate }
  }
  var instance;
  return {
    getInstance: function () {
      instance || (instance = init());
      return instance;
    }
  }
})();
