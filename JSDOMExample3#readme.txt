Chapter 13 - Intro to JS Clientside
DOM - Adding Elements - Example 3
In this example we demonstrate how to insert three heading elements to the body section of a HTML page.

Each time we want to add a new element we need to first create it, then set its content and finally put it on the DOM tree.

Initially in the examples the textContent property has been used to set the text of the heading elements that are being created. Strictly speaking this is incorrect as text nodes should be used to represented text in a DOM tree.

This code has been modified so that the text for h2 and h4 are represented on text nodes (instead of as a textContent property)
