$(".range").on("input", function() {
    const val = this.value;
    const root = document.documentElement;
    root.style.setProperty('--percent', val * 0.1 + "%");
});