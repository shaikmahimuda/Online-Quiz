const quizType = sessionStorage.getItem("selectedQuiz");
let container=document.getElementById("container");
let question=document.getElementById("question");
let options=document.getElementById("options");
let z=document.getElementById("sq");
let sr=document.getElementById("sr");
const quiz ={html:[
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language", "High Tech Modern Language"], answer: 1 },
  { question: "Which tag is used to create a hyperlink in HTML?", options: ["<link>", "<href>", "<hyper>", "<a>"], answer: 4 },
  { question: "Which HTML tag is used to display an image?", options: ["<image>", "<src>", "<pic>", "<img>"], answer: 4 },
  { question: "Which attribute is used with <img> to specify the image source?", options: ["path", "link", "src", "href"], answer: 3 },
  { question: "What is the correct HTML element for inserting a line break?", options: ["<line>", "<br>", "<lb>", "<break>"], answer: 2 },
  { question: "Which tag is used to define a table row?", options: ["<tr>", "<td>", "<table>", "<th>"], answer: 1 },
  { question: "Which tag is used to define a list item?", options: ["<li>", "<ol>", "<ul>", "<item>"], answer: 1 },
  { question: "Which tag is used to define a form in HTML?", options: ["<form>", "<input>", "<submit>", "<fieldset>"], answer: 1 },
  { question: "Which input type is used to create a password field?", options: ["secure", "text", "password", "hidden"], answer: 3 },
  { question: "Which tag is used to define a heading in HTML?", options: ["<title>", "<header>", "<h1>", "<head>"], answer: 3 },
  { question: "Which tag is used to embed JavaScript in HTML?", options: ["<js>", "<code>", "<script>", "<javascript>"], answer: 3 },
  { question: "What does the 'action' attribute in a form specify?", options: ["The URL to send form data", "The name of the form", "The method of form submission", "The type of form"], answer: 1 },
  { question: "Which tag is used to define a dropdown list?", options: ["<dropdown>", "<option>", "<list>", "<select>"], answer: 4 },
  { question: "Which tag is used to define metadata about an HTML document?", options: ["<info>", "<data>", "<head>", "<meta>"], answer: 4 },
  { question: "Which tag is used to define a division or section in HTML?", options: ["<section>", "<span>", "<div>", "<article>"], answer: 3 },
  { question: "Which HTML5 tag is used to play video files?", options: ["<media>", "<movie>", "<video>", "<play>"], answer: 3 },
  { question: "Which tag is used to define inline styles?", options: ["<style>", "style attribute", "<link>", "<css>"], answer: 2 },
  { question: "Which tag is used to create a responsive layout in HTML5?", options: ["<section>", "<div> with CSS Flexbox/Grid", "<grid>", "<container>"], answer: 2 },
  { question: "Which attribute is used to open a link in a new tab?", options: ["target='self'", "target='blank'", "open='new'", "new='true'"], answer: 2 },
  { question: "Which tag is used to define a semantic footer in HTML5?", options: ["<footer>", "<bottom>", "<foot>", "<end>"], answer: 1 }
],
css:[
  { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Creative Style Syntax", "Cascading Style Sheets", "Colorful Style Sheets"], answer: 3 },
  { question: "Which HTML tag is used to link an external CSS file?", options: ["<style>", "<css>", "<link>", "<script>"], answer: 3 },
  { question: "Which property is used to change the text color in CSS?", options: ["font-color", "text-color", "color", "foreground"], answer: 3 },
  { question: "How do you apply a class selector in CSS?", options: [".classname", "#classname", "classname", "*classname"], answer: 1 },
  { question: "Which property controls the size of text?", options: ["font-style", "text-size", "font-size", "size"], answer: 3 },
  { question: "What is the default position value in CSS?", options: ["absolute", "relative", "static", "fixed"], answer: 3 },
  { question: "Which property is used to make text bold?", options: ["font-weight", "text-style", "bold", "font-bold"], answer: 1 },
  { question: "How do you center a block element horizontally?", options: ["text-align: center", "margin: auto", "align: center", "padding: center"], answer: 2 },
  { question: "Which unit is relative to the parent element's font size?", options: ["px", "em", "%", "rem"], answer: 2 },
  { question: "Which property sets the background color?", options: ["bg-color", "background", "background-color", "color"], answer: 3 },
  { question: "What does the z-index property control?", options: ["Zoom level", "Stacking order", "Font size", "Opacity"], answer: 2 },
  { question: "Which selector targets all <p> elements inside a <div>?", options: ["div + p", "div > p", "div p", "p div"], answer: 3 },
  { question: "How do you make a website responsive?", options: ["Use tables", "Use media queries", "Use inline styles", "Use fixed widths"], answer: 2 },
  { question: "Which property adds space inside an element?", options: ["margin", "padding", "border", "spacing"], answer: 2 },
  { question: "Which property adds space outside an element?", options: ["padding", "margin", "border", "outline"], answer: 2 },
  { question: "Which value makes an element invisible but still takes space?", options: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"], answer: 2 },
  { question: "Which property is used to create a flex container?", options: ["display: block", "display: inline", "display: flex", "position: flex"], answer: 3 },
  { question: "Which shorthand property sets margin on all sides?", options: ["margin-all", "margin", "margin-set", "margin-box"], answer: 2 },
  { question: "Which property is used to round the corners of a box?", options: ["corner-radius", "border-style", "border-radius", "box-radius"], answer: 3 },
  { question: "Which pseudo-class targets the first child of an element?", options: [":first", ":first-child", "::first-child", ":child-first"], answer: 2 }
],
js:[
  { question: "What does JavaScript primarily run on?", options: ["Server", "Browser", "Compiler", "Database"], answer: 2 },
  { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "int", "let", "define"], answer: 1 },
  { question: "Which method is used to print messages to the console?", options: ["print()", "log()", "console.log()", "echo()"], answer: 3 },
  { question: "What is the correct syntax to create a function?", options: ["function = myFunc()", "function myFunc()", "create function myFunc()", "def myFunc()"], answer: 2 },
  { question: "Which symbol is used for single-line comments?", options: ["/*", "//", "#", "<!--"], answer: 2 },
  { question: "Which data type is NOT primitive in JavaScript?", options: ["String", "Number", "Object", "Boolean"], answer: 3 },
  { question: "What does '===' check in JavaScript?", options: ["Value only", "Type only", "Value and type", "Reference"], answer: 3 },
  { question: "Which method converts a string to an integer?", options: ["parseInt()", "toInt()", "Number()", "convert()"], answer: 1 },
  { question: "How do you access the first element of an array?", options: ["array.first", "array[0]", "array(0)", "array{0}"], answer: 2 },
  { question: "Which keyword is used to define a constant?", options: ["let", "var", "const", "static"], answer: 3 },
  { question: "What is the output of typeof null?", options: ["null", "object", "undefined", "string"], answer: 2 },
  { question: "Which loop is best for iterating over arrays?", options: ["for", "while", "do-while", "forEach"], answer: 4 },
  { question: "Which object handles timing functions like setTimeout?", options: ["Date", "Timer", "Window", "Clock"], answer: 3 },
  { question: "How do you write an arrow function?", options: ["function => {}", "() => {}", "=> function()", "function() =>"], answer: 2 },
  { question: "Which method adds an item to the end of an array?", options: ["push()", "append()", "add()", "insert()"], answer: 1 },
  { question: "Which method removes the last item from an array?", options: ["pop()", "shift()", "splice()", "remove()"], answer: 1 },
  { question: "Which keyword is used to handle errors?", options: ["catch", "try", "throw", "finally"], answer: 2 },
  { question: "Which method checks if a value is NaN?", options: ["isNaN()", "checkNaN()", "NaN()", "typeof NaN"], answer: 1 },
  { question: "Which operator is used to assign a value?", options: ["==", "=", "=>", ":"], answer: 2 },
  { question: "Which method converts JSON string to object?", options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toJSON()"], answer: 1 }
],
ar:[
  { question: "What is the value of 15 + 27?", options: ["42", "32", "52", "40"], answer: 1 },
  { question: "What is 144 ÷ 12?", options: ["10", "12", "14", "16"], answer: 2 },
  { question: "What is the square of 9?", options: ["81", "18", "27", "72"], answer: 1 },
  { question: "What is 25% of 200?", options: ["25", "50", "75", "100"], answer: 2 },
  { question: "What is the result of 7 × 8?", options: ["56", "48", "64", "58"], answer: 1 },
  { question: "What is the cube of 3?", options: ["9", "27", "18", "81"], answer: 2 },
  { question: "What is 100 – 45?", options: ["65", "55", "45", "60"], answer: 2 },
  { question: "What is the average of 10, 20, 30?", options: ["20", "25", "15", "30"], answer: 1 },
  { question: "What is 60% of 150?", options: ["90", "60", "75", "85"], answer: 1 },
  { question: "What is the value of 2² + 3²?", options: ["13", "12", "10", "14"], answer: 1 },
  { question: "What is the remainder when 29 is divided by 5?", options: ["4", "3", "2", "1"], answer: 1 },
  { question: "What is the next number in the series: 2, 4, 8, 16, ?", options: ["18", "24", "32", "20"], answer: 3 },
  { question: "What is the value of √49?", options: ["5", "6", "7", "8"], answer: 3 },
  { question: "What is 0.5 × 0.2?", options: ["0.1", "0.01", "0.02", "0.001"], answer: 1 },
  { question: "What is the sum of first 5 natural numbers?", options: ["10", "15", "20", "25"], answer: 2 },
  { question: "What is the value of 3 × (4 + 5)?", options: ["27", "32", "21", "36"], answer: 3 },
  { question: "What is the value of 100 ÷ 4?", options: ["20", "25", "30", "40"], answer: 2 },
  { question: "What is the value of 2³?", options: ["6", "8", "4", "10"], answer: 2 },
  { question: "What is the value of 5² – 3²?", options: ["16", "18", "20", "22"], answer: 1 },
  { question: "What is the value of 11 × 11?", options: ["121", "111", "101", "131"], answer: 1 }
],
re:[
  { question: "Which number comes next in the series: 2, 4, 8, 16, ?", options: ["18", "24", "32", "20"], answer: 3 },
  { question: "If ALL PENS are BOOKS and SOME BOOKS are TOYS, then are ALL PENS TOYS?", options: ["Yes", "No", "Can't be determined", "None of these"], answer: 3 },
  { question: "Find the odd one out: Apple, Banana, Carrot, Mango", options: ["Apple", "Banana", "Carrot", "Mango"], answer: 3 },
  { question: "If A = 1, B = 2, ..., Z = 26, what is the value of 'CAT'?", options: ["24", "27", "30", "41"], answer: 4 },
  { question: "Which word cannot be formed from 'INFORMATION'?", options: ["TRAIN", "FORM", "NATION", "MOTION"], answer: 1 },
  { question: "What comes next: AZ, BY, CX, DW, ?", options: ["EV", "EU", "EZ", "EX"], answer: 4 },
  { question: "If 1=5, 2=25, 3=325, 4=4325, then 5=?", options: ["54325", "5", "25", "None"], answer: 1 },
  { question: "Which number is missing: 3, 6, 18, 72, ?", options: ["144", "216", "288", "360"], answer: 2 },
  { question: "Which shape has the most sides?", options: ["Triangle", "Hexagon", "Pentagon", "Octagon"], answer: 4 },
  { question: "If 'EARTH' is coded as 'HTRAE', how is 'WORLD' coded?", options: ["DLROW", "DROWL", "LROWD", "WOLRD"], answer: 1 },
  { question: "Which number is odd one out: 121, 144, 169, 225", options: ["121", "144", "169", "225"], answer: 2 },
  { question: "If TOM is taller than JIM and JIM is taller than BOB, who is shortest?", options: ["TOM", "JIM", "BOB", "Can't say"], answer: 3 },
  { question: "Which direction is opposite to North-East?", options: ["South-East", "South-West", "North-West", "West"], answer: 2 },
  { question: "Which number completes the pattern: 2, 3, 5, 7, 11, ?", options: ["13", "14", "15", "17"], answer: 1 },
  { question: "If MONDAY is coded as 513246, what is the code for DAY?", options: ["465", "641", "346", "264"], answer: 4 },
  { question: "Which one is different: Circle, Square, Triangle, Sphere", options: ["Circle", "Square", "Triangle", "Sphere"], answer: 4 },
  { question: "If 5 + 3 = 28, 9 + 1 = 810, then 7 + 2 = ?", options: ["79", "72", "29", "None"], answer: 1 },
  { question: "Which number is a perfect square: 36, 45, 50, 60", options: ["36", "45", "50", "60"], answer: 1 },
  { question: "If 'FLOWER' is coded as 'GMPXFS', what is 'PLANT'?", options: ["QMBOU", "QMBNU", "QMBNT", "QMBOT"], answer: 3 },
  { question: "Which number fits: 1, 4, 9, 16, ?", options: ["20", "25", "24", "36"], answer: 2 }

],
ve:[
  { question: "Choose the correct synonym for 'Abundant'", options: ["Scarce", "Plentiful", "Rare", "Limited"], answer: 2 },
  { question: "Choose the antonym for 'Optimistic'", options: ["Hopeful", "Positive", "Pessimistic", "Cheerful"], answer: 3 },
  { question: "Identify the correctly spelled word", options: ["Recieve", "Receive", "Receeve", "Receve"], answer: 2 },
  { question: "Choose the word that best completes the sentence: He is known for his ___ behavior.", options: ["Rude", "Polite", "Aggressive", "Lazy"], answer: 2 },
  { question: "Select the correct meaning of the idiom: 'Break the ice'", options: ["Start a fight", "Make people feel comfortable", "Fall through ice", "End a conversation"], answer: 2 },
  { question: "Choose the correct synonym for 'Eloquent'", options: ["Silent", "Fluent", "Clumsy", "Unclear"], answer: 2 },
  { question: "Choose the antonym for 'Transparent'", options: ["Clear", "Opaque", "Visible", "Bright"], answer: 2 },
  { question: "Identify the part of speech of the word 'Quickly'", options: ["Noun", "Adjective", "Adverb", "Verb"], answer: 3 },
  { question: "Choose the correct preposition: He is good ___ mathematics.", options: ["in", "at", "on", "with"], answer: 2 },
  { question: "Select the correct sentence", options: ["She go to school daily.", "She goes to school daily.", "She going to school daily.", "She gone to school daily."], answer: 2 },
  { question: "Choose the correct synonym for 'Brief'", options: ["Short", "Long", "Detailed", "Slow"], answer: 1 },
  { question: "Choose the antonym for 'Generous'", options: ["Kind", "Selfish", "Helpful", "Gentle"], answer: 2 },
  { question: "Identify the correctly spelled word", options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"], answer: 3 },
  { question: "Choose the word that best completes the sentence: The manager was ___ with the results.", options: ["Satisfied", "Satisfy", "Satisfying", "Satisfies"], answer: 1 },
  { question: "Select the correct meaning of the idiom: 'Hit the sack'", options: ["Go to sleep", "Start working", "Get angry", "Eat dinner"], answer: 1 },
  { question: "Choose the correct synonym for 'Candid'", options: ["Secretive", "Honest", "Shy", "Reserved"], answer: 2 },
  { question: "Choose the antonym for 'Flexible'", options: ["Rigid", "Soft", "Bendable", "Loose"], answer: 1 },
  { question: "Identify the part of speech of the word 'Beauty'", options: ["Verb", "Adjective", "Noun", "Adverb"], answer: 3 },
  { question: "Choose the correct preposition: She is interested ___ music.", options: ["in", "on", "at", "with"], answer: 1 },
  { question: "Select the correct sentence", options: ["He don't like coffee.", "He doesn't likes coffee.", "He doesn't like coffee.", "He not like coffee."], answer: 3 }

],
os:[
  { question: "Which of the following is an example of an operating system?", options: ["Microsoft Word", "Linux", "Oracle", "Google Chrome"], answer: 2 },
  { question: "What is the main function of an operating system?", options: ["Data storage", "Application development", "Resource management", "Web browsing"], answer: 3 },
  { question: "Which of the following is not a type of operating system?", options: ["Batch", "Time-sharing", "Compiler", "Real-time"], answer: 3 },
  { question: "Which component of the OS manages memory?", options: ["File system", "Kernel", "Shell", "Scheduler"], answer: 2 },
  { question: "Which scheduling algorithm gives the shortest average waiting time?", options: ["FCFS", "SJF", "Round Robin", "Priority"], answer: 2 },
  { question: "Which of the following is a non-preemptive scheduling algorithm?", options: ["Round Robin", "SJF", "FCFS", "Priority"], answer: 3 },
  { question: "What is a process?", options: ["A program in execution", "A compiled code", "An error", "A memory block"], answer: 1 },
  { question: "Which system call is used to create a new process?", options: ["exec()", "fork()", "exit()", "wait()"], answer: 2 },
  { question: "What is thrashing in OS?", options: ["High CPU usage", "Excessive swapping", "Low memory", "Disk failure"], answer: 2 },
  { question: "Which of the following is used for inter-process communication?", options: ["Semaphore", "Thread", "Cache", "Stack"], answer: 1 },
  { question: "Which of the following is not a valid memory management technique?", options: ["Paging", "Segmentation", "Swapping", "Compiling"], answer: 4 },
  { question: "What is the role of the scheduler?", options: ["Manage files", "Allocate CPU", "Handle I/O", "Compile code"], answer: 2 },
  { question: "Which of the following is a deadlock prevention method?", options: ["Circular wait", "Hold and wait", "Mutual exclusion", "Resource ordering"], answer: 4 },
  { question: "Which of the following is true about virtual memory?", options: ["It increases RAM", "It uses disk as extension of RAM", "It is a type of cache", "It is used for graphics"], answer: 2 },
  { question: "Which of the following is a file system?", options: ["NTFS", "HTTP", "SMTP", "FTP"], answer: 1 },
  { question: "Which OS is used in mobile devices?", options: ["Windows", "Linux", "Android", "DOS"], answer: 3 },
  { question: "Which of the following is not a layer in OS architecture?", options: ["Hardware", "Application", "User", "Compiler"], answer: 4 },
  { question: "Which of the following is used to handle interrupts?", options: ["Scheduler", "Interrupt handler", "Compiler", "Loader"], answer: 2 },
  { question: "Which of the following is a real-time OS?", options: ["Windows XP", "Linux", "RTOS", "MS-DOS"], answer: 3 },
  { question: "Which of the following is responsible for booting the system?", options: ["BIOS", "Kernel", "Shell", "Scheduler"], answer: 1 }

],
cn:[
  { question: "Which device is used to connect different networks?", options: ["Switch", "Router", "Hub", "Repeater"], answer: 2 },
  { question: "What does IP stand for?", options: ["Internet Protocol", "Internal Process", "Input Packet", "Instant Ping"], answer: 1 },
  { question: "Which layer of the OSI model is responsible for routing?", options: ["Transport", "Network", "Data Link", "Session"], answer: 2 },
  { question: "Which protocol is used to send emails?", options: ["HTTP", "SMTP", "FTP", "SNMP"], answer: 2 },
  { question: "Which protocol is used to transfer files?", options: ["FTP", "TCP", "SMTP", "IP"], answer: 1 },
  { question: "What is the default port number for HTTP?", options: ["21", "25", "80", "110"], answer: 3 },
  { question: "Which of the following is a connection-oriented protocol?", options: ["UDP", "IP", "TCP", "HTTP"], answer: 3 },
  { question: "Which topology connects each device to a central hub?", options: ["Bus", "Ring", "Star", "Mesh"], answer: 3 },
  { question: "Which IP address class is used for large networks?", options: ["Class A", "Class B", "Class C", "Class D"], answer: 1 },
  { question: "Which layer of the OSI model ensures reliable transmission?", options: ["Network", "Transport", "Data Link", "Application"], answer: 2 },
  { question: "Which protocol is used for secure web communication?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], answer: 2 },
  { question: "Which device operates at the data link layer?", options: ["Router", "Switch", "Hub", "Modem"], answer: 2 },
  { question: "What is the full form of DNS?", options: ["Data Network Service", "Domain Name System", "Digital Node Server", "Distributed Network Setup"], answer: 2 },
  { question: "Which protocol is used to assign IP addresses dynamically?", options: ["DNS", "DHCP", "ARP", "ICMP"], answer: 2 },
  { question: "Which of the following is not a valid IP address?", options: ["192.168.1.1", "256.100.50.25", "10.0.0.1", "172.16.0.5"], answer: 2 },
  { question: "Which protocol is used to ping a device?", options: ["TCP", "UDP", "ICMP", "ARP"], answer: 3 },
  { question: "Which layer of the OSI model deals with encryption?", options: ["Presentation", "Session", "Transport", "Application"], answer: 1 },
  { question: "Which protocol is used for remote login?", options: ["FTP", "Telnet", "SMTP", "SNMP"], answer: 2 },
  { question: "Which of the following is a MAC address?", options: ["192.168.0.1", "00:1A:2B:3C:4D:5E", "255.255.255.0", "10.0.0.1"], answer: 2 },
  { question: "Which protocol is used to resolve IP to MAC address?", options: ["ARP", "RARP", "DHCP", "ICMP"], answer: 1 }

],
cs:[
  { question: "Which of the following is the brain of the computer?", options: ["RAM", "Hard Disk", "CPU", "Monitor"], answer: 3 },
  { question: "Which component stores data permanently?", options: ["RAM", "Cache", "Hard Disk", "Register"], answer: 3 },
  { question: "Which of the following is an input device?", options: ["Printer", "Monitor", "Keyboard", "Speaker"], answer: 3 },
  { question: "Which of the following is an output device?", options: ["Mouse", "Scanner", "Monitor", "Touchpad"], answer: 3 },
  { question: "Which memory is volatile?", options: ["ROM", "Hard Disk", "RAM", "SSD"], answer: 3 },
  { question: "Which of the following is not a type of computer?", options: ["Supercomputer", "Mainframe", "Microcontroller", "Compiler"], answer: 4 },
  { question: "Which unit performs arithmetic and logical operations?", options: ["Control Unit", "ALU", "Memory Unit", "I/O Unit"], answer: 2 },
  { question: "Which of the following is used to boot the computer?", options: ["BIOS", "RAM", "CPU", "Cache"], answer: 1 },
  { question: "Which of the following is a system software?", options: ["MS Word", "Windows OS", "Photoshop", "Chrome"], answer: 2 },
  { question: "Which of the following is not a programming language?", options: ["Python", "Java", "Linux", "C++"], answer: 3 },
  { question: "Which device is used to connect computers in a network?", options: ["CPU", "Router", "Monitor", "RAM"], answer: 2 },
  { question: "Which of the following is a non-volatile memory?", options: ["RAM", "Cache", "ROM", "Register"], answer: 3 },
  { question: "Which of the following is used for temporary storage?", options: ["Hard Disk", "RAM", "SSD", "CD-ROM"], answer: 2 },
  { question: "Which of the following is not a hardware component?", options: ["Mouse", "Operating System", "Keyboard", "Monitor"], answer: 2 },
  { question: "Which of the following is used to store BIOS?", options: ["RAM", "ROM", "Hard Disk", "SSD"], answer: 2 },
  { question: "Which of the following is a high-speed memory?", options: ["RAM", "Cache", "Hard Disk", "SSD"], answer: 2 },
  { question: "Which of the following is used to display output?", options: ["Keyboard", "Mouse", "Monitor", "Scanner"], answer: 3 },
  { question: "Which of the following is responsible for executing instructions?", options: ["RAM", "CPU", "ROM", "Hard Disk"], answer: 2 },
  { question: "Which of the following is a graphical user interface OS?", options: ["DOS", "Linux (CLI)", "Windows", "Unix"], answer: 3 },
  { question: "Which of the following is used to store large amounts of data?", options: ["RAM", "Cache", "Hard Disk", "Register"], answer: 3 }

],
ml:[
  { question: "What is Machine Learning?", options: ["Manual programming", "Learning from data", "Learning from humans", "Learning from hardware"], answer: 2 },
  { question: "Which of the following is a type of Machine Learning?", options: ["Supervised", "Unsupervised", "Reinforcement", "All of the above"], answer: 4 },
  { question: "Which algorithm is used for classification?", options: ["Linear Regression", "K-Means", "Decision Tree", "PCA"], answer: 3 },
  { question: "Which algorithm is used for clustering?", options: ["Logistic Regression", "K-Means", "SVM", "Naive Bayes"], answer: 2 },
  { question: "Which of the following is a supervised learning algorithm?", options: ["K-Means", "DBSCAN", "Linear Regression", "Apriori"], answer: 3 },
  { question: "Which metric is used to evaluate classification models?", options: ["MSE", "Accuracy", "RMSE", "MAE"], answer: 2 },
  { question: "Which of the following is used to reduce dimensionality?", options: ["SVM", "PCA", "KNN", "CNN"], answer: 2 },
  { question: "Which library is commonly used for ML in Python?", options: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"], answer: 3 },
  { question: "Which of the following is a deep learning framework?", options: ["TensorFlow", "Scikit-learn", "NumPy", "Matplotlib"], answer: 1 },
  { question: "Which activation function is commonly used in neural networks?", options: ["Sigmoid", "ReLU", "Tanh", "All of the above"], answer: 4 },
  { question: "Which of the following is a loss function for regression?", options: ["Cross-Entropy", "Hinge Loss", "Mean Squared Error", "Log Loss"], answer: 3 },
  { question: "Which technique prevents overfitting?", options: ["Dropout", "Batch Normalization", "Early Stopping", "All of the above"], answer: 4 },
  { question: "Which algorithm is used for recommendation systems?", options: ["KNN", "Collaborative Filtering", "SVM", "PCA"], answer: 2 },
  { question: "Which of the following is a feature scaling technique?", options: ["Normalization", "Encoding", "Sampling", "Clustering"], answer: 1 },
  { question: "Which of the following is true about overfitting?", options: ["Model performs well on training data", "Model performs well on test data", "Model generalizes well", "Model has low bias"], answer: 1 },
  { question: "Which of the following is used for text classification?", options: ["CNN", "RNN", "Naive Bayes", "K-Means"], answer: 3 },
  { question: "Which of the following is a reinforcement learning concept?", options: ["Agent", "Environment", "Reward", "All of the above"], answer: 4 },
  { question: "Which of the following is used for image classification?", options: ["SVM", "CNN", "RNN", "KNN"], answer: 2 },
  { question: "Which of the following is a label encoding technique?", options: ["One-Hot Encoding", "Min-Max Scaling", "Standardization", "PCA"], answer: 1 },
  { question: "Which of the following is a hyperparameter tuning method?", options: ["Grid Search", "Random Search", "Bayesian Optimization", "All of the above"], answer: 4 }

],
ai:[
  { question: "What is Artificial Intelligence?", options: ["Human intelligence", "Machine performing tasks intelligently", "Natural language", "Computer graphics"], answer: 2 },
  { question: "Which of the following is a branch of AI?", options: ["Cybersecurity", "Machine Learning", "Web Development", "Database Management"], answer: 2 },
  { question: "Which language is commonly used for AI programming?", options: ["HTML", "Python", "CSS", "SQL"], answer: 2 },
  { question: "Which of the following is an AI application?", options: ["Face recognition", "Spreadsheet", "Word processor", "Compiler"], answer: 1 },
  { question: "Which algorithm is used for decision-making in AI?", options: ["Decision Tree", "Bubble Sort", "Binary Search", "Merge Sort"], answer: 1 },
  { question: "Which of the following is a type of learning in AI?", options: ["Supervised", "Unsupervised", "Reinforcement", "All of the above"], answer: 4 },
  { question: "Which of the following is used for natural language processing?", options: ["CNN", "RNN", "SVM", "KNN"], answer: 2 },
  { question: "Which of the following is a goal of AI?", options: ["Data storage", "Human-like reasoning", "Web design", "Hardware optimization"], answer: 2 },
  { question: "Which of the following is a search algorithm in AI?", options: ["Depth First Search", "Quick Sort", "Linear Regression", "Naive Bayes"], answer: 1 },
  { question: "Which of the following is used for image recognition?", options: ["RNN", "CNN", "SVM", "PCA"], answer: 2 },
  { question: "Which of the following is a rule-based AI system?", options: ["Expert System", "Neural Network", "Genetic Algorithm", "Clustering"], answer: 1 },
  { question: "Which of the following is a component of an expert system?", options: ["Knowledge base", "Compiler", "Cache", "Router"], answer: 1 },
  { question: "Which of the following is used for speech recognition?", options: ["OCR", "NLP", "Speech-to-text", "Text-to-speech"], answer: 3 },
  { question: "Which of the following is a challenge in AI?", options: ["Data cleaning", "Model accuracy", "Bias in data", "All of the above"], answer: 4 },
  { question: "Which of the following is true about AI?", options: ["AI can only work online", "AI cannot learn", "AI can mimic human behavior", "AI is only used in gaming"], answer: 3 },
  { question: "Which of the following is a classification algorithm?", options: ["Linear Regression", "Naive Bayes", "K-Means", "PCA"], answer: 2 },
  { question: "Which of the following is used for feature extraction?", options: ["PCA", "CNN", "SVM", "RNN"], answer: 1 },
  { question: "Which of the following is a reinforcement learning concept?", options: ["Agent", "Environment", "Reward", "All of the above"], answer: 4 },
  { question: "Which of the following is used for game playing in AI?", options: ["Minimax", "Bubble Sort", "DFS", "KNN"], answer: 1 },
  { question: "Which of the following is a benefit of AI?", options: ["Automation", "Error reduction", "24/7 availability", "All of the above"], answer: 4 }

],
sql:[
  { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Sequential Query Logic", "Standard Query Language"], answer: 1 },
  { question: "Which SQL statement is used to retrieve data?", options: ["GET", "SELECT", "FETCH", "RETRIEVE"], answer: 2 },
  { question: "Which clause is used to filter records in SQL?", options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"], answer: 3 },
  { question: "Which keyword is used to sort results?", options: ["SORT", "ORDER BY", "GROUP BY", "ARRANGE"], answer: 2 },
  { question: "Which function returns the number of rows?", options: ["SUM()", "COUNT()", "MAX()", "AVG()"], answer: 2 },
  { question: "Which SQL statement is used to insert new data?", options: ["ADD", "INSERT INTO", "UPDATE", "CREATE"], answer: 2 },
  { question: "Which command is used to remove a table?", options: ["DELETE", "DROP", "REMOVE", "ERASE"], answer: 2 },
  { question: "Which clause is used to group rows with same values?", options: ["GROUP BY", "ORDER BY", "WHERE", "JOIN"], answer: 1 },
  { question: "Which SQL statement is used to modify existing data?", options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"], answer: 3 },
  { question: "Which operator is used to check for NULL values?", options: ["= NULL", "IS NULL", "== NULL", "NULL"], answer: 2 },
  { question: "Which SQL command is used to create a new table?", options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "ADD TABLE"], answer: 2 },
  { question: "Which function returns the highest value?", options: ["MAX()", "HIGH()", "TOP()", "LARGEST()"], answer: 1 },
  { question: "Which function returns the lowest value?", options: ["MIN()", "LOW()", "BOTTOM()", "SMALLEST()"], answer: 1 },
  { question: "Which SQL keyword is used to combine rows from two tables?", options: ["MERGE", "UNION", "JOIN", "COMBINE"], answer: 3 },
  { question: "Which JOIN returns only matching rows from both tables?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], answer: 3 },
  { question: "Which JOIN returns all rows from both tables?", options: ["INNER JOIN", "FULL JOIN", "LEFT JOIN", "RIGHT JOIN"], answer: 2 },
  { question: "Which SQL statement is used to delete data?", options: ["REMOVE", "DELETE", "DROP", "ERASE"], answer: 2 },
  { question: "Which constraint ensures uniqueness of values?", options: ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "NOT NULL"], answer: 3 },
  { question: "Which constraint prevents NULL values?", options: ["UNIQUE", "NOT NULL", "DEFAULT", "CHECK"], answer: 2 },
  { question: "Which clause is used to filter grouped data?", options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"], answer: 2 }

]};
let x=0;
options.innerHTML="";
question.innerText=`${x+1}.${quiz[quizType][x].question}`;

for(let j=0;j<4;j++){
   let c=document.createElement("li");
   options.append(c);
   c.innerHTML=`<label><input name="option"  type="radio"  value="${j+1}"/>${quiz[quizType][x].options[j]}</label>`  
}
z.addEventListener("click",()=>{
   options.innerHTML="";
   question.innerText=`${x+2}.${quiz[quizType][x+1].question}`;
   for(let j=0;j<4;j++){
      let c=document.createElement("li");
      options.append(c);
      let label=document.createElement("label")
      c.appendChild(label);
      let input=document.createElement("input");
      label.appendChild(input);
      input.setAttribute("name","option");
      input.setAttribute("type","radio");
      input.setAttribute("value",`${j+1}`);
      label.appendChild(document.createTextNode(quiz[quizType][x+1].options[j]));
   }
   x=x+1;
   if(x==19){
      z.innerText="submit";
      z.addEventListener("click",()=>{
         question.innerText=`Submitted Successfully and your score is "${count}"`;
         z.remove();
         sr.remove();
         options.innerHTML=`<button onclick="window.location.href='index.html'" id="gt">Goto homepage</button>`;

      })
   }
   
})
let xy=0;
 let count=0;
 sr.addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    count=0;
    return;
  }
  const answer = parseInt(selected.value);
  if (answer == quiz[quizType][xy].answer) {
     count=count+1; 
  }
  xy++;
 });



 

