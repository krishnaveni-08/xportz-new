 const input = document.getElementById("searchBox");

    const placeholderTexts = [
        "Search for bats...",
        "Search for gloves...",
        "Search for helmets...",
        "Search for football shoes...",
        "Search for cricket kits..."
    ];

    let index = 0;

    function rotatePlaceholder() {
        input.placeholder = placeholderTexts[index];
        index = (index + 1) % placeholderTexts.length;
    }

    setInterval(rotatePlaceholder, 2000); 