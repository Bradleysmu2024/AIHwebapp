window.addEventListener('dfMessengerLoaded', function() {
    document.getElementById('cta-chatbot').addEventListener('click', function(event) {
        event.preventDefault();
        openChatbot();
    });
});
