;+function() {
    $.fn.aMenu = function(userSettings) {
        var settings = $.extend({
            includeMargin: true,
            itemTag: 'li'
        }, userSettings);

        var menu = $(this),
            menuItems = menu.find(settings.itemTag),
            menuItemsWidth = 0,
            popup = $('<ul>'),
            separateIndex = 0,
            includeMargin = settings.includeMargin;
        menuItems.append(popup);

        for (var i = 0; i < menuItems.length; ++i) {
            menuItemsWidth += menuItems.eq(i).outerWidth(includeMargin);
        }

        function addToPopup() {
            ++separateIndex;
            var toPopup = menuItems.eq(-separateIndex - 1);
            menuItemsWidth -= toPopup.outerWidth(includeMargin);
            popup.append(toPopup.detach());
        }

        function getFromPopup() {
            var fromPopup = popup.find('li').last();
            var fromPopupWidth = fromPopup.outerWidth(includeMargin);
            if (menu.outerWidth(includeMargin) > menuItemsWidth + fromPopupWidth) {
                --separateIndex;
                menuItemsWidth += fromPopupWidth;
                menuItems.last().before(fromPopup.detach());
            }
        }

        function firstMoveToPopup() {
            if (menuItemsWidth > menu.outerWidth(includeMargin)) {
                addToPopup();
                firstMoveToPopup();
            }
        }
        firstMoveToPopup();

        $(window).resize(function () {
            menuItemsWidth > menu.outerWidth(includeMargin) ? addToPopup() : getFromPopup();
        });
    };
}();