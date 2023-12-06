const { createApp, ref } = Vue;

createApp({
    data() {
        return {
            ads: [
                "#B0E0E6",
                "#F0F8FF",
                "#FFFFE0",
                "#E0FFE0",
                "#FFA07A",
                "#E6E6FA",
                "#D3D3D3",
                "#FFFFFF",
                "#F5F5DC",
                "#FFE4C4",
            ]
        };
    },
    mounted(){
        console.log("hello")
        // document.getElementById('active-ads').click()
    }
}).mount('#app');