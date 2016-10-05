###How to install?
1. Add script tag into your html file:
```html
<script src="aMenu.js"></script>
```

2. Initialize plugin:
```javascript
$('.a-menu').aMenu({
    includeMargin: false,
    itemTag: 'li'
});
```

###Avaliable options
- `includeMargin: true` - margin parameter for `outerWidth`
- `itemTag: 'li'` - items to search in selected node