What is jsx,
How jsx works and
What is really done behind the scene after writing jsx

React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.

React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. This has several benefits. It lets you use the full programmatic power of JavaScript within HTML, and helps to keep your code readable. For the most part, JSX is similar to the HTML that you have already learned

Because JSX is a syntactic extension of JavaScript, you can actually write JavaScript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: { 'this is treated as JavaScript code' }

However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process

JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.


Example of simple JSX

const JSX = <h1>
Hello JSX!
</h1>;


Example of a Complex JSX where  JSX can represent more complex HTML as well.

Nested JSX it must return a single element this one parent element would wrap all of the other levels of nested elements.

const JSX =
<div>
<h1>Nested JSX</h1>
<p>This is our example</p>
<ul>
<li>paragraph</li>
<li>paragraph</li>
<li>paragraph</li>
</ul>
</div>