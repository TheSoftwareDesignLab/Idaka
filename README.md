# Purpose
The major goal of Idaka is to facilitate access to good ML practices for SE, helping to avoid pitfalls and challenges that hinder
the achievement of good performance of ML-enabled systems. Unlike current approaches, Idaka provide the basis of a model that retrieves practices based on the user's query, so the users dont need to know or use predefined vocabulary to search for relevant practices. 

# Video

<p align="center">
<iframe width="500" height="282" src="https://www.youtube.com/embed/cEb-AhIPxnM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

# Idaka workflow overview
<p>Three main features are proposed for the user to search according to their needs.
For the main one, Idaka presents a query based search, it uses 2 possible methodologies.
First, using a classic IR strategy in which documents relevant to a query are retrieved from a corpus based on a similarity metric.
Second, using <a href="https://crfm.stanford.edu/2023/03/13/alpaca.html">Alpaca</a> as generative language model.</p>
<p>The second and third proposal uses the relations between stages, tasks, and practices
as a basis. For the second one, Idaka offers a filter for the user to search practices
by related tasks. The users can select one or more tasks they are interested in, and
the platform will show the corresponding practices.</p>
<p>Finally, as a third way to search, the platform presents a visual way to follow the
taxonomy of these mentioned relations. The users can select one of the stages, which
takes them to their description and the list of related tasks. By clicking on one of the
7 tasks, it shows the associated practices. </p>
<img src="/assets/imgs/workflow.pdf" alt="workflow">


    
---
Hosted on GitHub Pages - Theme by [orderedlist](https://github.com/orderedlist)
