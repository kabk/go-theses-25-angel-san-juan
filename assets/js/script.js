


// we make sure the JavaScript file loads after our HTML by using a function test if the HTML is loaded

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}   

docReady(function() {
    let button = document.getElementById("toggleButton");
    let grid = document.querySelector(".grid-container");

    button.addEventListener("click", function() {
        grid.classList.toggle("active");

        // Change button text based on state
        if (grid.classList.contains("active")) {
            button.textContent = "◀︎";
        } else {
            button.textContent = "▶︎";
        }
    });
});



// FOOTNOTES
document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    document.querySelectorAll(".footnote-ref").forEach(ref => {
        const noteId = "footnote-" + ref.getAttribute("data-footnote");
        const footnoteText = document.getElementById(noteId).textContent;
        const footnoteNumber = ref.getAttribute("data-footnote");

        if (isMobile) {
            // MOBILE: Click to show footnote
            ref.addEventListener("click", function (event) {
                event.preventDefault();
                
                let existingPopup = document.querySelector(".footnote-popup");
                if (existingPopup) existingPopup.remove();

                let popup = document.createElement("div");
                popup.className = "footnote-popup";

                // Create titlebar for footnote number
                let titlebar = document.createElement("div");
                titlebar.className = "titlebar";
                titlebar.textContent = `${footnoteNumber}`;

                // Create content section
                let content = document.createElement("div");
                content.textContent = footnoteText;

                popup.appendChild(titlebar);
                popup.appendChild(content);
                document.body.appendChild(popup);

                const rect = this.getBoundingClientRect();
                popup.style.top = `${window.scrollY + rect.top - 40}px`;
                popup.style.left = `${rect.left + 20}px`;
                popup.style.display = "block";

                document.addEventListener("click", function hidePopup(e) {
                    if (!popup.contains(e.target) && !ref.contains(e.target)) {
                        popup.remove();
                        document.removeEventListener("click", hidePopup);
                    }
                });
            });




        } else {
            // DESKTOP: Hover to show footnote
            let popup;

            ref.addEventListener("mouseenter", function () {
                popup = document.createElement("div");
                popup.className = "footnote-popup";

                let titlebar = document.createElement("div");
                titlebar.className = "titlebar";
                titlebar.textContent = `${footnoteNumber}`;

                let content = document.createElement("div");
                content.textContent = footnoteText;

                popup.appendChild(titlebar);
                popup.appendChild(content);
                document.body.appendChild(popup);

                const rect = this.getBoundingClientRect();
                popup.style.top = `${window.scrollY + rect.top - 40}px`;
                popup.style.left = `${rect.left + 20}px`;
                popup.style.display = "block";
            });

            ref.addEventListener("mouseleave", function () {
                if (popup) popup.remove();
            });
        }
    });
});

// ABOUT
function showBox() {
    document.querySelector(".slide-box").classList.add("active");
}

function hideBox() {
    document.querySelector(".slide-box").classList.remove("active");
}