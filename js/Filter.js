document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            products.forEach(product => {
                if (filter === 'all') {
                    product.style.display = 'block';
                } else {
                    if (product.getAttribute('data-category') === filter) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                }
            });
        });
    });
});


console.log(3 + "3")




function reverseString(str) {
    return str.split('').reverse().join('');
}

const originalString = "Hello World";
const reversedString = reverseString(originalString);