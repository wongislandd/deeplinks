fetch("links.json")
  .then(response => response.json())
  .then(data => {
    let items = "";
    data.forEach(
        (item) => {
            items += '<li><a href="' + item.value + '">' +
            '<h3>' + item.key + '</h3>' +
            '</a></li>';
        }
    );
    document.getElementById("deeplinks").innerHTML = '<ul>' + items + '</ul>';
});