/* select2 v.4.0.13 */
!(function () {
  var n;
  jQuery &&
    jQuery.fn &&
    jQuery.fn.select2 &&
    jQuery.fn.select2.amd &&
    (n = jQuery.fn.select2.amd),
    n.define("select2/i18n/ru", [], function () {
      function n(n, e, r, u) {
        return (n % 10 < 5 && 0 < n % 10 && n % 100 < 5) || 20 < n % 100
          ? 1 < n % 10
            ? r
            : e
          : u;
      }
      return {
        errorLoading: function () {
          return "Невозможно загрузить результаты";
        },
        inputTooLong: function (e) {
          var r = e.input.length - e.maximum,
            u = "Пожалуйста, введите на " + r + " символ";
          return (u += n(r, "", "a", "ов")) + " меньше";
        },
        inputTooShort: function (e) {
          var r = e.minimum - e.input.length;
          return (
            "Пожалуйста, введите ещё хотя бы " +
            r +
            " символ" +
            n(r, "", "a", "ов")
          );
        },
        loadingMore: function () {
          return "Загрузка данных…";
        },
        maximumSelected: function (e) {
          return (
            "Вы можете выбрать не более " +
            e.maximum +
            " элемент" +
            n(e.maximum, "", "a", "ов")
          );
        },
        noResults: function () {
          return "Совпадений не найдено";
        },
        searching: function () {
          return "Поиск…";
        },
        removeAllItems: function () {
          return "Удалить все элементы";
        },
      };
    }),
    n.define,
    n.require;
})();
var select2SearchPlaceholder = "Поиск";
