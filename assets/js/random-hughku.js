---

---

{% assign count = 0 %}

var hk = [];

{% for item in site.data.yarn.menu %}
  {% if item.silent != true %}
    hk.push({
      'title': {{item.title | jsonify}},
      'path': {{ item.url | jsonify }},
      'excerpt': {{ item.content | strip_html | truncatewords: 20 | jsonify }}
    })
  {% endif %}

  {% assign count = count | plus: 1 %}
{% endfor %}

{% for item in site.data.sun.menu %}
  {% if item.silent != true %}
    hk.push({
      'title': {{item.title | jsonify}},
      'path': {{ item.url | jsonify }},
      'excerpt': {{ item.content | strip_html | truncatewords: 20 | jsonify }}
    })
  {% endif %}

  {% assign count = count | plus: 1 %}
{% endfor %}

{% for item in site.data.bucket.menu %}
  {% if item.silent != true %}
    hk.push({
      'title': {{item.title | jsonify}},
      'path': {{ item.url | jsonify }},
      'excerpt': {{ item.content | strip_html | truncatewords: 20 | jsonify }}
    })
  {% endif %}

  {% assign count = count | plus: 1 %}
{% endfor %}

function getRndInteger(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

var rnd = getRndInteger(1, hk.length)

$(document).ready(function() {
  var link = '<a href="' + hk[rnd].path + '">' + hk[rnd].title + '</a>'
  $('<div id="rand">')
    .html("hughku de jour: " + link)
    .appendTo('.random-hughku');
});
