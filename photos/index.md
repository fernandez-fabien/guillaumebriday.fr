---
layout: default
title: "Photos"
---
<h1>Photos</h1>

{% assign images = site.photos | reverse %}

<div>
  {% for image in images %}
    {% assign path = image.name | prepend: 'gallery/' %}

    {% include image.html
                url = image.url
                img = path
                title = image.title
                alt = image.alt
                new_tab = 'false' %}
  {% endfor %}
</div>
