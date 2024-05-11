
//first including the document.querySelector and document.getElementById method to select specific elements from the HTML document.
document.addEventListener("DOMContentLoaded", function() {
    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.getElementById("send-btn");
    const chatbox = document.querySelector(".chatbox");
    const chatbotToggler = document.querySelector(".chatbot-toggler");

    let userMessage;   //this variable  will store the message inputted by the user 

    const createChatLi = (message, className) => {   //function to create a new chat list item(li) with a given message  and class name 
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent = `<p>${message}</p>`;
        chatLi.innerHTML = chatContent;
        return chatLi;
    }

    const appendMessage = (sender, message) => {
        const chatLi = createChatLi(`${sender}: ${message}`, "incoming");
        chatbox.appendChild(chatLi);

        chatbox.scrollTop = chatbox.scrollHeight;    //To scroll to the bottom of the chatbox
    }

    const handleChat = () => {
      const userMessage = chatInput.value.trim();
        if (!userMessage) 
            return;

        const chatLi = createChatLi(userMessage, "outgoing");
        chatbox.appendChild(chatLi);
        chatInput.value = '';

        setTimeout(() => {
            let botMessage;
            if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
                botMessage = "Hello there! How can I assist you today?";
            } else if (userMessage.toLowerCase().includes("admission")) {
                botMessage = "Are you looking for admission? Please type 'yes' or 'no'.";
            } else if (userMessage.toLowerCase().includes("yes")) {
                botMessage = `
        <div class="options">
            <div class="option"><a href="#" onclick="selectOption('UG')">UG</a></div>
            <div class="option"><a href="#" onclick="selectOption('PG')">PG</a></div>
            <div class="option"><a href="#" onclick="selectOption('Diploma')">Diploma</a></div>
            <div class="option"><a href="#" onclick="selectOption('Phd')">Doctor of Philosophy(Ph.d.)</a></div>
            <div class="option"><a href="#" onclick="selectOption('DLit')">Doctor of Literature(D.Lit.)</a></div>
            <div class="option"><a href="#" onclick="selectOption('certificate')">Certificate</a></div>
        </div>
    </div>


                `;
            } else if (userMessage.toLowerCase().includes("no")) {
                botMessage = "Thank you for visiting us!";
            } else if (userMessage.toLowerCase().includes("ug")) {
                botMessage = `
                <div class="chat-message">
                    Great! Please select one of the following UG options: 
                    <ul>
                        <li><a href="#" onclick="selectOption('bsc')">B.Sc.(Maths Group/Bio Group)</a></li>
                        <li><a href="#" onclick="selectOption('btech')">B.Tech </a></li>
                        <li><a href="#" onclick="selectOption('pharma')">B.Pharma/ D.Pharma</a></li>
                    </ul>
                </div>
            `;

            }else if(userMessage.toLowerCase().includes("bsc")){
                botMessage = `<div class="chat-message">
                Great! Please select one of the following B.Sc. options: 
                <ul>
                    <li><a href="#" onclick="selectOption('bsc')">B.Sc.(Maths Group/Bio Group)</a></li>
                    <li><a href="#" onclick="selectOption('bsc computer science')">B.Sc Computer Science </a></li>
                    <li><a href="#" onclick="selectOption('bsc hons')">B.Sc.Hons.(Yogic Science)</a></li>
                    <li><a href="#" onclick="selectOption('ba')">B.A</a></li>
                    <li><a href="#" onclick="selectOption('bba')">B.B.A</a></li>
                    <li><a href="#" onclick="selectOption('bpes')">B.A.Hons.(Vedalankar/ Vidyalankar</a></li>



                    <li><a href="#" onclick="selectOption('pharma')">B.Pharma/ D.Pharma</a></li>
                </ul>
            </div>
        `;
            
            } else if (userMessage.toLowerCase().includes("engineering") || userMessage.toLowerCase().includes("btech")) {
                botMessage = "Engineering options: Computer Science, Mechanical, Electrical, Civil.";
                if (userMessage.toLowerCase().includes("specialization")) {
                    botMessage = "Please select your specialization: <a href='#' onclick='selectOption(\"Computer Science\")'>Computer Science</a>, <a href='#' onclick='selectOption(\"Mechanical\")'>Mechanical</a>, <a href='#' onclick='selectOption(\"Electrical\")'>Electrical</a>, <a href='#' onclick='selectOption(\"Civil\")'>Civil</a>.";
                }
            } else if (userMessage.toLowerCase().includes("bba")) {
                botMessage = "BBA options: Marketing, Finance, Human Resource.";
            } else if (userMessage.toLowerCase().includes("b sc.")) {
                botMessage = "B Sc. options: Mathematics, Physics, Chemistry, Biology.";
            } else if (userMessage.toLowerCase().includes("b. pharma")) {
                botMessage = "B. Pharma options: Pharmaceutical Chemistry, Pharmacology, Pharmaceutics.";
            } else if (userMessage.toLowerCase().includes("pg")) {
                botMessage = "Please select one of the following PG options: <a href='#' onclick='selectOption(\"MBA\")'>MBA</a>, <a href='#' onclick='selectOption(\"MSc.\")'>MSc.</a>, <a href='#' onclick='selectOption(\"MTech\")'>MTech</a>.";
            } else if (userMessage.toLowerCase().includes("diploma")) {
                botMessage = "Please select one of the following Diploma options: Computer Science, Mechanical, Electrical.";
            } else if (userMessage.toLowerCase().includes("courses")) {
                botMessage = "We offer various undergraduate and graduate programs. You can find more information about our courses on our college website.";
            } else {
                botMessage = "I'm sorry, I didn't understand that. Can you please rephrase or ask another question?";
            }
            appendMessage("ChatBot", botMessage);

        
        }, 1000);
    }
      //Event listener  to toggle button to the chatbot visibility 
    chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
    sendChatBtn.addEventListener("click", handleChat);

    chatInput.addEventListener("keypress", function(event) {
        if (event.key === 'Enter') {
            handleChat();
        }
    });

    // Function to handle user selection
    function selectOption(option) {
        // Pass the selected option to simulateUserInput function
        simulateUserInput(option);
    }

    // Function to simulate user input
    function simulateUserInput(userMessage) {
        // Append the selected option to the chatbox as if it's a user's message
        const chatLi = createChatLi(userMessage, "outgoing");
        chatbox.appendChild(chatLi);
          handleChat();
        
    }
});
