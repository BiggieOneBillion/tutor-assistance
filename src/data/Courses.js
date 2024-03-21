export const webCourseData = [
  {
    section: "HTML",
    description:
      "HTML: Standard markup language for creating web pages and applications.",
    link: "html-section",
  },
  {
    section: "CSS3",
    description:
      "CSS3: Style sheets for web design, enabling advanced layout and aesthetics.",
    link: "css-section",
  },
  {
    section: "JavaScript",
    description:
      "JavaScript: Versatile scripting language for web development, enabling dynamic interactions.",
    link: "javascript-section",
  },
  {
    section: "DOM Manipulation",
    description:
      "DOM manipulation: Is the process of dynamically modifying the structure, content, or style of a web page's Document Object Model (DOM) using JavaScript. ",
    link: "dom-section",
  },
];

export const jsCourse = [
  {
    lessonName: "Variables",
    video_url: "https://www.youtube.com/embed/6n4AV5k-7wE?si=aIHnHhC112g7hf-N",
    assignment: [
      {
        questions: "What are variables?",
        answer: "D",
        options: [
          "Storage units in a computer",
          "value placeholders .",
          "Empty containers that store info",
          "There are temporary storage that hold a value that would be used later on in the program ",
        ],
      },
      {
        questions: "What is the syntax for writing a variable?",
        answer: "B",
        options: [
          "variableName = value",
          "variableType variableName = value",
          "variableType = variableName + value",
          "variableType = variableName",
        ],
      },
      {
        questions: "What is the difference between let and const?",
        answer: "C",
        options: [
          "'let' variable cannot be reassigned but 'const' variable can be reassigned ",
          "'let' is the plural of 'const'",
          "'let' can be reassigned and 'const' cannot be reassigned",
          "'let' is the same as 'const'",
        ],
      },
      // "What are variables?",
      // "What is the syntax for writing a variable?",
      // "What is the difference between var, let and const?",
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Glossary/Variable",
      w3school: "https://www.w3schools.com/js/js_variables.asp",
      jsInfo: "https://javascript.info/variables",
    },
  },
  {
    lessonName: "Data Types",
    video_url: "https://www.youtube.com/embed/UmSpfdxu3ro?si=Dkj7n_u4KlsJuHJd",
    assignment: [
      {
        questions: "What are data types?",
        answer: "A",
        options: [
          "They are types of data that can be stored and manipulated in a programming language",
          "Types of data in life",
          "Data categories in a computer",
          "They are types of info that can be stored and manipulated in a programming language",
        ],
      },
      {
        questions: "How many data types do we have in javascript?",
        answer: "C",
        options: ["5", "8", "10", "7"],
      },
      {
        questions: "What data type can store multiple values?",
        answer: "C",
        options: ["Strings", "Booleans", "Arrays", "Symbols"],
      },
      {
        questions: "What is an object?",
        answer: "C",
        options: [
          "Objects are key-value pair",
          "They are collections of characters",
          "They are list or collection of values",
          "Objects can properties can be gotten with square brackets and index",
        ],
      },
      // "What are data types?",
      // "How many data types do we have in javascript?",
      // "What data type can store multiple values?",
      // "What is an object?",
    ],
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
      w3school: "https://www.w3schools.com/js/js_datatypes.asp",
      jsInfo: "https://javascript.info/types",
    },
  },
  {
    lessonName: "Operators",
    video_url: "https://www.youtube.com/embed/iqd6KKjB7gc?si=LPW8LOoNu0Q9glu-",
    assignment: [
      {
        questions: "What are operators?",
        answer: "B",
        options: [
          "Operators are used to carry out operations ",
          "They are symbols that perform operations on operands (variables or values) to produce a result.",
          "They are values that represent operations",
          "They always return boolean",
        ],
      },
      {
        questions: "Which of these is not a logical operator?",
        answer: "C",
        options: ["&&", "||", "!&", "!"],
      },
      {
        questions: "What is the return type of a logical operator?",
        answer: "C",
        options: ["Boolean", "String", "Numbers", "None of the above"],
      },
      // "What are logical operators?",
      // "Explain what 'and', 'or' and 'not' logical operators are with examples?",
    ],
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND",
      w3school: "https://www.w3schools.com/js/js_operators.asp",
      jsInfo: "https://javascript.info/logical-operators",
    },
  },
  {
    lessonName: "If, If/Else Statement",
    video_url: "https://www.youtube.com/embed/IsG4Xd6LlsM?si=X1o_Y6nDzqTYYNZU",
    assignment: [
      {
        questions: "What is the correct syntax for if statement?",
        answer: "A",
        options: [
          "if (condition) { code block }",
          "if (code block) { condition } ",
          "if { code block }",
          "if (condition, code block)",
        ],
      },
      {
        questions: "The conditions in an if statement returns what data type",
        answer: "A",
        options: ["Boolean", "String", "Expression", "Number"],
      },
      {
        questions: "What is the purpose of an if statement?",
        answer: "A",
        options: [
          "To execute a block of code if a specified condition is true",
          "To execute a block of code if a specified condition is false",
          "To execute a block of code regardless of any condition",
          "To execute a block of code repeatedly",
        ],
      },
      {
        questions:
          "What is the difference between an if statement and an if/else statement?",
        answer: "C",
        options: [
          "An if statement is used for single condition, while an if/else statement is used for multiple conditions",
          "An if statement always executes the block of code, while an if/else statement may execute a different block of code based on the condition",
          "An if statement may execute a block of code based on a condition, while an if/else statement provides an alternative block of code to execute if the condition is false",
          "There is no difference between an if statement and an if/else statement",
        ],
      },
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Glossary/Control_flow",
      w3school: "https://www.w3schools.com/js/js_if_else.asp",
      jsInfo: "https://javascript.info/ifelse",
    },
  },
  {
    lessonName: "Switch Case Statement",
    video_url: "https://www.youtube.com/embed/gB4Y7VLNfFk?si=_yEFklZb8rFy2tDD",
    assignment: [
      {
        questions: "What is the purpose of a switch case statement?",
        answer: "A",
        options: [
          "To execute different blocks of code based on different conditions",
          "To execute the same block of code for multiple conditions",
          "To execute a block of code if a specified condition is true",
          "To execute a block of code regardless of any condition",
        ],
      },
      {
        questions:
          "Which of the following is not a valid JavaScript data type for switch case expressions?",
        answer: "D",
        options: ["String", "Number", "Boolean", "Array"],
      },
      {
        questions:
          "What happens if no case matches the switch expression in a switch case statement?",
        answer: "B",
        options: [
          "The default case is executed",
          "Nothing happens, and the code continues to execute after the switch statement",
          "An error is thrown",
          "The switch statement terminates abruptly",
        ],
      },
      {
        questions:
          "Which keyword is used to define the default case in a switch case statement?",
        answer: "C",
        options: ["break", "case", "default", "continue"],
      },
      {
        questions:
          "What is the purpose of the break statement in a switch case statement?",
        answer: "A",
        options: [
          "To exit the switch case statement and prevent fall-through",
          "To continue executing the next case without evaluating the condition",
          "To execute a block of code if a specified condition is true",
          "To execute a block of code regardless of any condition",
        ],
      },
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Glossary/Control_flow",
      w3school: "https://www.w3schools.com/js/js_switch.asp",
      jsInfo: "https://javascript.info/switch",
    },
  },
  {
    lessonName: "Loops",
    video_url: "https://www.youtube.com/embed/rTDAAhUgJZM?si=agW6-8j8qtxCruV8",
    assignment: [
      {
        questions: "What are Loops and what are dey used for?",
        answer: "B",
        options: [
          "They are control structures that allow you to repeat a block of code multiple times",
          "They are used to store and manipulate data in memory",
          "They are programming languages designed for beginners",
          "They are graphical user interfaces for software applications",
        ],
      },
      {
        questions:
          "What is the differnce between for loop, while loop and do while loop?",
        answer: "C",
        options: [
          "They perform the same task but have different syntax",
          "They are used to execute code based on conditions",
          "The loop condition are evaluated the same way",
          "They are different types of logical operators",
        ],
      },
      // "What are Loops and what are dey used for?",
      // "What is the differnce between for loop, while loop and do while loop?",
    ],
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
      w3school: "https://www.w3schools.com/js/js_loop_for.asp",
      jsInfo: "https://javascript.info/while-for",
    },
  },
  {
    lessonName: "Functions",
    video_url: "https://www.youtube.com/embed/HFaxylC7bUc?si=S1bOoN90FyKiHlxg",
    assignment: [
      {
        questions: "What are functions?",
        answer: "A",
        options: [
          "self-contained blocks of code that perform a specific task or a set of tasks.",
          "They are set of instructions.",
          "They are unreuseable blocks of code.",
          "They self-contained blocks that do not perform any task",
        ],
      },
      {
        questions: "What is the syntax for writing a function?",
        answer: "A",
        options: [
          "function functionName(){}",
          "function {}functionName()",
          "(){} function",
          "{function()}",
        ],
      },
      {
        questions: "Explain what a return keyword is?",
        answer: "C",
        options: [
          "The 'return' keyword in a function is used to specify the value that the function should return",
          "The 'return' keyword in a function is used to specify the value that the function should not return",
          "The return keyword is used to continue execution of the code in a function",
          "None of the above",
        ],
      },
      // "What are functions",
      // "What is the syntax for writing a function",
      // "Explain what a return keyword is ?",
    ],
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
      w3school: "https://www.w3schools.com/js/js_functions.asp",
      jsInfo: "https://javascript.info/function-basics",
    },
  },
  {
    lessonName: "Further Resources",
    video_url: "https://www.youtube.com/embed/8dWL3wF_OMw?si=1wFfP5XFUoPP4uV9",
    Resources: {
      mdnLink: "https://developer.mozilla.org",
      w3school: "https://www.w3schools.com/js",
      jsInfo: "https://javascript.info",
    },
  },
];

export const domCourse = [
  {
    lessonName: "What is DOM",
    video_url: "https://www.youtube.com/embed/WfC63i5LZXA?si=Su2KlXx-1a51WO2U",
    assignment: [
      {
        questions: "What does DOM stand for?",
        answer: "B",
        options: [
          "Document Oriented Model",
          "Document Object Model",
          "Data Object Module",
          "Dynamic Operation Mechanism",
        ],
      },
      {
        questions: "What is the DOM?",
        answer: "A",
        options: [
          "A programming interface for web documents that represents the page so that programs can change the document structure, style, and content.",
          "A style sheet language used for describing the presentation of a document written in a markup language.",
          "A programming language commonly used for client-side scripting.",
          "A server-side runtime environment for executing JavaScript code.",
        ],
      },
      {
        questions: "Which of the following is true about the DOM?",
        answer: "C",
        options: [
          "It only represents the structure of an HTML document.",
          "It is specific to server-side scripting languages.",
          "It provides a structured representation of the document as a tree-like model where each node corresponds to a part of the document.",
          "It can only be manipulated using server-side code.",
        ],
      },
      {
        questions: "What is the root node of the DOM tree?",
        answer: "D",
        options: ["body", "html", "head", "document"],
      },
      {
        questions:
          "Which of the following methods is used to access an element in the DOM by its ID?",
        answer: "B",
        options: [
          "querySelector",
          "getElementById",
          "getElementsByClassName",
          "getElementsByTagName",
        ],
      },
    ],
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
      w3school: "https://www.w3schools.com/js/js_variables.asp",
      jsInfo: "https://javascript.info/variables",
    },
  },
  {
    lessonName: "Accessing and modifying the DOM",
    video_url: "https://www.youtube.com/embed/6_3dy4nBf5Y?si=pkv4dNcMMeRS32US",
    assignment: [
      {
        questions: "What does DOM manipulation refer to?",
        answer: "B",
        options: [
          "Styling web pages using CSS",
          "Accessing and modifying the structure, style, and content of web documents using scripting languages like JavaScript",
          "Interacting with databases on the server-side",
          "Handling user inputs in web forms",
        ],
      },
      {
        questions:
          "Which method is used to access an element in the DOM by its ID?",
        answer: "A",
        options: [
          "getElementById",
          "querySelector",
          "getElementsByClassName",
          "getElementsByTagName",
        ],
      },
      {
        questions:
          "Which property is used to change the text content of an HTML element?",
        answer: "C",
        options: ["innerHTML", "textContent", "innerText", "innerText"],
      },
      {
        questions:
          "How can you change the style of an element using JavaScript?",
        answer: "D",
        options: [
          "Using the innerHTML property",
          "Using the textContent property",
          "Using the appendChild method",
          "Using the style property",
        ],
      },
      {
        questions: "Which method is used to create a new HTML element?",
        answer: "B",
        options: [
          "createElement",
          "appendChild",
          "removeChild",
          "setAttribute",
        ],
      },
    ],
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
      w3school: "https://www.w3schools.com/js/js_datatypes.asp",
      jsInfo: "https://javascript.info/types",
    },
  },
  {
    lessonName: "Changing Style and Atrribute Dynamically",
    video_url: "https://www.youtube.com/embed/6nnprxBiVgA?si=S2ikz_uh6swU5nhN",
    assignment: [
      {
        questions: "What does changing styles dynamically in the DOM refer to?",
        answer: "B",
        options: [
          "Changing the structure of HTML elements",
          "Modifying the appearance of HTML elements using CSS properties through JavaScript",
          "Manipulating data stored in a database",
          "Handling user interactions in web forms",
        ],
      },
      {
        questions:
          "Which property is used to change the CSS style of an HTML element using JavaScript?",
        answer: "C",
        options: ["class", "innerHTML", "style", "textContent"],
      },
      {
        questions:
          "Which method is used to set an attribute value for an HTML element using JavaScript?",
        answer: "A",
        options: [
          "setAttribute",
          "getAttribute",
          "removeAttribute",
          "replaceChild",
        ],
      },
      {
        questions:
          "How can you add a CSS class to an HTML element using JavaScript?",
        answer: "D",
        options: [
          "Using the setAttribute method",
          "Using the getAttribute method",
          "Using the removeAttribute method",
          "Using the classList property",
        ],
      },
      {
        questions:
          "Which property is used to access the value of an attribute of an HTML element using JavaScript?",
        answer: "B",
        options: [
          "classList",
          "getAttribute",
          "setAttribute",
          "removeAttribute",
        ],
      },
    ],
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND",
      w3school: "https://www.w3schools.com/js/js_operators.asp",
      jsInfo: "https://javascript.info/logical-operators",
    },
  },
  {
    lessonName: "Collecting Form Data Using Javascript",
    video_url: "https://www.youtube.com/embed/PQs8mwWmP6E?si=WjMjBX4D9w0apNYS",
    assignment: [
      {
        questions: "What does collecting form data using JavaScript involve?",
        answer: "B",
        options: [
          "Styling web forms using CSS",
          "Retrieving and processing user input from HTML forms using JavaScript",
          "Interacting with databases on the server-side",
          "Handling user interactions in web forms",
        ],
      },
      {
        questions:
          "Which method is used to access the value of an input element in a form?",
        answer: "A",
        options: ["value", "innerText", "textContent", "innerHTML"],
      },
      {
        questions:
          "How can you retrieve the value of a selected option in a dropdown list?",
        answer: "C",
        options: [
          "Using the value property of the dropdown list",
          "Using the textContent property of the dropdown list",
          "Using the value property of the selected option",
          "Using the innerHTML property of the selected option",
        ],
      },
      {
        questions: "Which event is triggered when a form is submitted?",
        answer: "D",
        options: ["click", "mouseover", "keydown", "submit"],
      },
      {
        questions:
          "Which property is used to access the form data in JavaScript after submission?",
        answer: "B",
        options: ["formValue", "formData", "formContent", "formInput"],
      },
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Glossary/Control_flow",
      w3school: "https://www.w3schools.com/js/js_if_else.asp",
      jsInfo: "https://javascript.info/ifelse",
    },
  },
  {
    lessonName: "Events And Event Handlers",
    video_url: "https://www.youtube.com/embed/OTNYOdoy7B8?si=vNMZvMKL8FRXMYUk",
    assignment: [
      {
        questions: "What are events in JavaScript?",
        answer: "A",
        options: [
          "Actions that occur as a result of user interaction or system events, such as mouse clicks, key presses, or page loading",
          "Variables used to store data temporarily during program execution",
          "Functions that execute specific tasks based on conditional statements",
          "Elements used to structure and organize content in HTML documents",
        ],
      },
      {
        questions:
          "Which of the following is not an example of an event in JavaScript?",
        answer: "D",
        options: ["click", "mouseover", "keydown", "get"],
      },
      {
        questions: "What is an event handler?",
        answer: "B",
        options: [
          "A function that executes specific tasks based on conditional statements",
          "A function that specifies what should happen in response to an event",
          "A variable used to store data temporarily during program execution",
          "An element used to structure and organize content in HTML documents",
        ],
      },
      {
        questions:
          "How do you attach an event handler to an HTML element using JavaScript?",
        answer: "C",
        options: [
          "Using the addEventListener method",
          "Using the setAttribute method",
          "Using inline event attributes",
          "Using the onclick property",
        ],
      },
      {
        questions:
          "Which property is used to access information about the event that occurred?",
        answer: "D",
        options: ["target", "value", "innerHTML", "event"],
      },
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Glossary/Control_flow",
      w3school: "https://www.w3schools.com/js/js_switch.asp",
      jsInfo: "https://javascript.info/switch",
    },
  },
  {
    lessonName: "Event handling: addEventListner()",
    video_url: "https://www.youtube.com/embed/J-JYrVoOT5E?si=vx9tlNx3VZuqiz0A",
    assignment: [
      {
        questions: "What does the addEventListener() method do in JavaScript?",
        answer: "B",
        options: [
          "Adds a new element to the DOM",
          "Attaches an event handler to an HTML element",
          "Removes an event listener from an HTML element",
          "Updates the CSS styles of an HTML element",
        ],
      },
      {
        questions:
          "Which syntax is used to attach an event listener to an HTML element using addEventListener()?",
        answer: "C",
        options: [
          "element.attachEvent('event', functionName)",
          "element.on('event', functionName)",
          "element.addEventListener('event', functionName)",
          "element.listen('event', functionName)",
        ],
      },
      {
        questions:
          "Which parameter of addEventListener() specifies the function to be executed when the event occurs?",
        answer: "D",
        options: ["target", "event", "listener", "callback"],
      },
      {
        questions:
          "What is the default behavior of addEventListener() when attaching multiple event listeners to the same element?",
        answer: "A",
        options: [
          "All event listeners are executed in the order they were added",
          "All event listeners are executed sequentially, starting from the last added listener",
          "Only the last added event listener is executed",
          "An error is thrown if multiple event listeners are attached",
        ],
      },
      {
        questions:
          "Which method is used to remove an event listener added with addEventListener()?",
        answer: "B",
        options: [
          "element.removeEvent('event', functionName)",
          "element.removeEventListener('event', functionName)",
          "element.remove('event', functionName)",
          "element.unbind('event', functionName)",
        ],
      },
    ],
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
      w3school: "https://www.w3schools.com/js/js_loop_for.asp",
      jsInfo: "https://javascript.info/while-for",
    },
  },
  {
    lessonName: "Additional Resources",
    video_url: "https://www.youtube.com/embed/BW9hwouJqkA?si=mvtCkq7ZgCY-Sarg",
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
      w3school: "https://www.w3schools.com/js/js_functions.asp",
      jsInfo: "https://javascript.info/function-basics",
    },
  },
  {
    lessonName: "Further Resources",
    video_url:
      "https://www.youtube.com/embed/videoseries?si=0c7hJE18Yxz3pjDt&amp;list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V",
    Resources: {
      mdnLink: "https://developer.mozilla.org",
      w3school: "https://www.w3schools.com/js",
      jsInfo: "https://javascript.info",
    },
  },
];

export const cssCourse = [
  {
    lessonName: "Colors and Backgrounds",
    video_url: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    assignment: [
      {
        questions: "What property is used to change the color of text in CSS?",
        answer: "B",
        options: ["background-color", "color", "text-color", "font-color"],
      },
      {
        questions: "What is the hexadecimal value for the color red in CSS?",
        answer: "C",
        options: ["#ff0000", "#00ff00", "#0000ff", "#ffffff"],
      },
      {
        questions: "What property is used to add a background image in CSS?",
        answer: "A",
        options: [
          "background-image",
          "background-color",
          "background-size",
          "background-position",
        ],
      },
      {
        questions:
          "What property is used to create a linear gradient background in CSS?",
        answer: "B",
        options: [
          "radial-gradient",
          "linear-gradient",
          "background-image",
          "background-color",
        ],
      },
      {
        questions:
          "Which CSS property is used to specify the opacity of an element's background?",
        answer: "D",
        options: [
          "background-opacity",
          "opacity",
          "visibility",
          "background-color",
        ],
      },
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value",
      w3school: "https://www.w3schools.com/css/css_colors.asp",
      jsInfo: "https://css-tricks.com/almanac/properties/c/color/",
    },
  },
  {
    lessonName: "Typography",
    video_url: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    assignment: [
      {
        questions: "Which property is used to set the font size in CSS?",
        answer: "D",
        options: ["font-family", "font-weight", "font-style", "font-size"],
      },
      {
        questions: "Which property is used to make text bold in CSS?",
        answer: "A",
        options: [
          "font-weight",
          "font-style",
          "text-decoration",
          "text-transform",
        ],
      },
      {
        questions:
          "What property is used to change the spacing between letters in CSS?",
        answer: "C",
        options: [
          "line-height",
          "text-align",
          "letter-spacing",
          "word-spacing",
        ],
      },
      {
        questions: "What property is used to align text vertically in CSS?",
        answer: "B",
        options: [
          "text-align",
          "vertical-align",
          "line-height",
          "text-transform",
        ],
      },
      {
        questions:
          "What CSS property is used to control the spacing between lines of text?",
        answer: "A",
        options: [
          "line-height",
          "letter-spacing",
          "word-spacing",
          "text-align",
        ],
      },
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/font",
      w3school: "https://www.w3schools.com/css/css_text.asp",
      jsInfo: "https://css-tricks.com/almanac/properties/f/font/",
    },
  },
  {
    lessonName: "Layouts",
    video_url: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    assignment: [
      {
        questions:
          "What CSS property is used for controlling the layout of multiple elements?",
        answer: "C",
        options: ["float", "position", "display", "flexbox"],
      },
      {
        questions: "What CSS property is used for creating rounded corners?",
        answer: "D",
        options: [
          "border-radius",
          "border-style",
          "border-width",
          "border-color",
        ],
      },
      {
        questions:
          "What CSS property is used for specifying the distance between the borders of an element?",
        answer: "B",
        options: ["margin", "padding", "border-spacing", "spacing"],
      },
      {
        questions: "What does the 'box-sizing' property in CSS control?",
        answer: "A",
        options: [
          "How the total width and height of an element is calculated",
          "The size of the box's border",
          "The size of the box's padding",
          "The content inside the box",
        ],
      },
      {
        questions:
          "Which value of the 'display' property makes an element behave like an inline-block element?",
        answer: "C",
        options: ["block", "inline", "inline-block", "flex"],
      },
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/Layout",
      w3school: "https://www.w3schools.com/css/css_layout.asp",
      jsInfo: "https://css-tricks.com/almanac/properties/l/layout/",
    },
  },
  {
    lessonName: "Flexbox",
    video_url: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    assignment: [
      {
        questions: "What is the main axis and cross axis in flexbox?",
        answer: "A",
        options: [
          "Main axis runs along the primary direction of layout, and cross axis runs perpendicular to it",
          "Main axis runs perpendicular to the primary direction of layout, and cross axis runs along it",
          "Both axes run along the primary direction of layout",
          "Both axes run perpendicular to the primary direction of layout",
        ],
      },
      {
        questions:
          "Which property is used to align flex items along the main axis?",
        answer: "C",
        options: [
          "align-items",
          "justify-items",
          "justify-content",
          "align-content",
        ],
      },
      {
        questions:
          "Which property is used to determine the size of a flex item relative to its container?",
        answer: "D",
        options: ["flex-grow", "flex-shrink", "flex-basis", "flex"],
      },
      {
        questions: "What does the 'align-self' property in flexbox do?",
        answer: "B",
        options: [
          "Aligns the flex container along the main axis",
          "Allows individual flex items to override the 'align-items' property",
          "Determines the size of the flex items",
          "Specifies the order of the flex items",
        ],
      },
      {
        questions:
          "What is the default value of the 'flex-direction' property in flexbox?",
        answer: "C",
        options: ["row", "column", "row-reverse", "column-reverse"],
      },
    ],
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout",
      w3school: "https://www.w3schools.com/css/css3_flexbox.asp",
      jsInfo: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    },
  },
  {
    lessonName: "Grid Layout",
    video_url: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    assignment: [
      {
        questions: "What are the two primary components of CSS Grid Layout?",
        answer: "B",
        options: [
          "Rows and Columns",
          "Grid Container and Grid Items",
          "Header and Footer",
          "Margins and Paddings",
        ],
      },
      {
        questions:
          "Which CSS property is used to define the size of grid tracks?",
        answer: "A",
        options: [
          "grid-template-columns and grid-template-rows",
          "grid-auto-columns and grid-auto-rows",
          "grid-column and grid-row",
          "grid-gap",
        ],
      },
      {
        questions: "What does the 'grid-gap' property in CSS Grid Layout do?",
        answer: "C",
        options: [
          "Defines the size of the gap between flex items",
          "Determines the alignment of flex items",
          "Specifies the size of the gap between grid rows and columns",
          "Controls the distribution of space between flex items",
        ],
      },
      {
        questions:
          "Which value of the 'justify-items' property in CSS Grid Layout aligns grid items along the block axis?",
        answer: "B",
        options: ["start", "center", "end", "stretch"],
      },
      {
        questions:
          "What is the default behavior of grid items when the 'grid-template-columns' property is used in CSS Grid Layout?",
        answer: "D",
        options: [
          "Grid items span multiple rows",
          "Grid items span multiple columns",
          "Grid items are positioned absolutely",
          "Grid items are placed in each column, starting from the first",
        ],
      },
    ],
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
      w3school: "https://www.w3schools.com/css/css_grid.asp",
      jsInfo: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    },
  },
  {
    lessonName: "Responsive Design",
    video_url: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    assignment: [
      {
        questions: "What is the purpose of media queries in CSS?",
        answer: "A",
        options: [
          "To apply styles based on the characteristics of the device or viewport",
          "To create animations in CSS",
          "To define variables for use in CSS",
          "To generate random colors in CSS",
        ],
      },
      {
        questions:
          "Which meta tag is used to ensure proper rendering and scaling on mobile devices?",
        answer: "C",
        options: [
          "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
          "<meta name='responsive' content='true'>",
          "<meta name='mobile-rendering' content='scale-to-fit'>",
          "<meta name='zoom' content='1.0'>",
        ],
      },
      {
        questions:
          "What CSS property is used to make a website's layout adapt to different screen sizes?",
        answer: "B",
        options: ["display", "flexbox", "float", "position"],
      },
      {
        questions:
          "What unit is commonly used for setting font sizes in responsive design?",
        answer: "D",
        options: ["px", "em", "%", "rem"],
      },
      {
        questions:
          "What CSS property is used to hide elements on smaller screens?",
        answer: "A",
        options: [
          "display: none;",
          "visibility: hidden;",
          "opacity: 0;",
          "position: absolute; left: -9999px;",
        ],
      },
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries",
      w3school: "https://www.w3schools.com/css/css_rwd_intro.asp",
      jsInfo:
        "https://css-tricks.com/snippets/css/media-queries-for-standard-devices/",
    },
  },
  {
    lessonName: "Transitions",
    video_url: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    assignment: [
      {
        questions:
          "What CSS property is used to specify the duration of a transition effect?",
        answer: "B",
        options: [
          "transition-timing",
          "transition-duration",
          "transition-delay",
          "transition-property",
        ],
      },
      {
        questions:
          "What does the 'ease' value for the 'transition-timing-function' property do?",
        answer: "C",
        options: [
          "Creates a linear transition effect",
          "Creates a fast transition effect",
          "Creates an easing transition effect",
          "Creates a slow transition effect",
        ],
      },
      {
        questions: "What CSS property is used to trigger a transition?",
        answer: "D",
        options: [
          "transition-duration",
          "transition-property",
          "transition-timing-function",
          "hover",
        ],
      },
      {
        questions:
          "In a transition effect, what does the 'transition-property' property specify?",
        answer: "A",
        options: [
          "The CSS property to which the transition is applied",
          "The duration of the transition effect",
          "The timing function of the transition",
          "The property being transitioned to",
        ],
      },
      {
        questions:
          "What is the default value for the 'transition-timing-function' property?",
        answer: "B",
        options: ["ease-in", "ease", "linear", "ease-out"],
      },
    ],
    Resources: {
      mdnLink:
        "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions",
      w3school: "https://www.w3schools.com/css/css3_transitions.asp",
      jsInfo: "https://css-tricks.com/almanac/properties/t/transition/",
    },
  },
  {
    lessonName: "Animations",
    video_url: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    assignment: [
      {
        questions: "Which CSS property is used to define keyframes for animations?",
        answer: "C",
        options: [
          "@keyframes",
          "@animation",
          "@animate",
          "@frame",
        ],
      },
      {
        questions: "What does the 'animation-duration' property specify?",
        answer: "A",
        options: [
          "The length of time it takes for an animation to complete one cycle",
          "The delay before an animation starts",
          "The number of times an animation should repeat",
          "The rate of change of the animation's speed",
        ],
      },
      {
        questions: "What CSS property is used to specify the number of times an animation should repeat?",
        answer: "B",
        options: [
          "animation-count",
          "animation-iteration-count",
          "animation-repeat",
          "animation-loop",
        ],
      },
      {
        questions: "Which value of the 'animation-timing-function' property creates a linear animation?",
        answer: "A",
        options: [
          "linear",
          "ease",
          "ease-in",
          "ease-out",
        ],
      },
      {
        questions: "What CSS property is used to delay the start of an animation?",
        answer: "C",
        options: [
          "animation-delay",
          "animation-start",
          "animation-pause",
          "animation-play",
        ],
      },
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations",
      w3school: "https://www.w3schools.com/css/css3_animations.asp",
      jsInfo: "https://css-tricks.com/snippets/css/keyframe-animation-syntax/",
    },
  },
  {
    lessonName: "Transforms",
    video_url: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    assignment: [
      {
        questions: "Which CSS property is used to apply 2D or 3D transformations to an element?",
        answer: "B",
        options: [
          "transform-style",
          "transform",
          "transition",
          "translate",
        ],
      },
      {
        questions: "What does the 'rotate' function do in CSS transforms?",
        answer: "C",
        options: [
          "Skews an element along the x-axis",
          "Skews an element along the y-axis",
          "Rotates an element clockwise around a fixed point",
          "Rotates an element counterclockwise around a fixed point",
        ],
      },
      {
        questions: "Which CSS function is used to scale an element in CSS transforms?",
        answer: "D",
        options: [
          "scaleX",
          "scaleY",
          "skew",
          "scale",
        ],
      },
      {
        questions: "What CSS property is used to move an element from its current position?",
        answer: "A",
        options: [
          "translate",
          "move",
          "position",
          "shift",
        ],
      },
      {
        questions: "What does the 'perspective' property do in CSS transforms?",
        answer: "B",
        options: [
          "Applies a shadow effect to an element",
          "Determines the distance between the z=0 plane and the viewer",
          "Rotates an element along its z-axis",
          "Stretches or compresses an element along its x-axis",
        ],
      },
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms",
      w3school: "https://www.w3schools.com/css/css3_2dtransforms.asp",
      jsInfo: "https://css-tricks.com/almanac/properties/t/transform/",
    },
  },
  {
    lessonName: "Box Model",
    video_url: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    assignment: [
      {
        questions: "What components make up the CSS box model?",
        answer: "B",
        options: [
          "Content, Border, Padding, Margin",
          "Content, Padding, Border, Margin",
          "Content, Margin, Border, Padding",
          "Margin, Padding, Border, Content",
        ],
      },
      {
        questions: "What CSS property is used to set the space between an element's content and its border?",
        answer: "D",
        options: [
          "margin",
          "padding",
          "border-spacing",
          "spacing",
        ],
      },
      {
        questions: "Which box model property can be set to 'box-sizing: border-box;' to include padding and border in an element's total width and height?",
        answer: "A",
        options: [
          "width",
          "height",
          "margin",
          "padding",
        ],
      },
      {
        questions: "What does the 'margin: auto;' property value do?",
        answer: "C",
        options: [
          "Centers the element vertically",
          "Adds equal margins on all sides of the element",
          "Centers the element horizontally",
          "Expands the element to fill the available space",
        ],
      },
      {
        questions: "Which CSS property is used to set the width of an element?",
        answer: "B",
        options: [
          "size",
          "width",
          "length",
          "dimension",
        ],
      },
    ],
    Resources: {
      mdnLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",
      w3school: "https://www.w3schools.com/css/css_boxmodel.asp",
      jsInfo: "https://css-tricks.com/the-css-box-model/",
    },
  },
];
