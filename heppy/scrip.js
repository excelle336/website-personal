<script>
    document.addEventListener("DOMContentLoaded", function() {
        let giftBox = document.querySelector('.gift-container');

        giftBox.addEventListener('click', function() {
            this.classList.add('open'); // Tambahkan class "open" saat diklik
        });
    });
</script>