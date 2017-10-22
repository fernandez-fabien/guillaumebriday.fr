---
layout: default
title: Catégories
---
<h1 class="post-title">Catégories</h1>

<ul class="archives-list">
  {% for category in site.categories %}
    {% capture category_name %}{{ category | first }}{% endcapture %}

    <h3>{{ category_name }}</h3>

    {% for post in site.categories[category_name] %}
    <li>
      <time datetime="{{ post.date | time_tag }}">
        {% assign m = post.date | date: "%-m" %}
        {{ post.date | date: "%-d" }}
        {% case m %}
          {% when '1' %}janv.
          {% when '2' %}févr.
          {% when '3' %}mars
          {% when '4' %}avr.
          {% when '5' %}mai
          {% when '6' %}juin
          {% when '7' %}juill.
          {% when '8' %}août
          {% when '9' %}sept.
          {% when '10' %}oct.
          {% when '11' %}nov.
          {% when '12' %}déc.
        {% endcase %}
        {{ post.date | date: "%Y" }}
      </time>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
  {% endfor %}
</ul>
