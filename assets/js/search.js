---

---

var index = lunr(function () {
    this.field('title')
    this.field('path')
    this.field('content')
    this.ref('id')
});

{% assign count = 0 %}

var store = [];

{% for item in site.pages %}
    index.add({
        title: {{ item.title | jsonify }},
        path: "{{ item.url }}",
        content: {{ item.content | strip_html | jsonify }},
        id: {{ count }}
    })

    {% assign count = count | plus: 1 %}

    store.push({
      'title': {{item.title | jsonify}},
      'path': {{ item.url | jsonify }},
      'excerpt': {{ item.content | strip_html | truncatewords: 20 | jsonify }}
    })
{% endfor %}

$(document).ready(function() {
  $('<div id="results">')
    .prependTo('.main-content');

  $('input#search-term').click(function () {
    $(this).val('');
  });

  $('input#search-term').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = index.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
    
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><div class="result-body"><a href="'+store[ref].path+'" class="post-title">'+store[ref].title+'</a><p>'+store[ref].excerpt+'</p></div>';
      resultdiv.append(searchitem);
    }
  });
});
