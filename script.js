// Product Data (পণ্য সম্পর্কিত তথ্য)
const productsData = {
    1: {
        title: "পণ্য ১: প্রফেশনাল ভার্সন",
        description: "এটি আমাদের সবচেয়ে জনপ্রিয় এবং উন্নত পণ্য। এতে রয়েছে দ্রুত প্রসেসিং এবং দীর্ঘস্থায়ী ব্যাটারি ব্যাকআপ।"
    },
    2: {
        title: "পণ্য ২: ইকোনমি ভার্সন",
        description: "সাশ্রয়ী মূল্যে সেরা পারফরম্যান্স। দৈনন্দিন কাজের জন্য আদর্শ।"
    }
    // আরও পণ্য যোগ করুন
};

// DOM Element Selection
const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");
const productCards = document.querySelectorAll(".product-card");

// Function to open the modal
function openModal(productId) {
    const product = productsData[productId];
    if (product) {
        modalTitle.textContent = product.title;
        modalDescription.textContent = product.description;
        modal.style.display = "block"; // Modal দৃশ্যমান করুন
    }
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none"; // Modal লুকান
}

// Event Listeners for Product Cards
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.getAttribute('data-product-id');
        openModal(productId);
    });
});

// Event Listeners for closing the modal
closeButton.addEventListener('click', closeModal);

// Modal-এর বাইরে ক্লিক করলে বন্ধ হবে
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
