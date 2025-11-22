const hotels = [
	{ id: 1, name: "Grand Plaza Hotel", location: "New York, USA", price: 299, rating: 5, icon: "🏨" },
	{ id: 2, name: "Ocean View Resort", location: "Maldives", price: 450, rating: 5, icon: "🏝️" },
	{ id: 3, name: "Mountain Lodge", location: "Swiss Alps", price: 350, rating: 4, icon: "🏔️" },
	{ id: 4, name: "City Center Inn", location: "London, UK", price: 220, rating: 4, icon: "🏙️" },
	{ id: 5, name: "Beach Paradise", location: "Bali, Indonesia", price: 180, rating: 5, icon: "🏖️" },
	{ id: 6, name: "Desert Oasis", location: "Dubai, UAE", price: 400, rating: 5, icon: "🏜️" }
];

let selectedHotel = null;

function displayHotels() {
	const grid = document.getElementById('hotelsGrid');
	grid.innerHTML = hotels.map(hotel => `
		<div class="hotel-card" onclick="selectHotel(${hotel.id})">
			<div class="hotel-image">${hotel.icon}</div>
			<div class="hotel-info">
				<h3 class="hotel-name">${hotel.name}</h3>
				<p class="hotel-location">📍 ${hotel.location}</p>
				<div class="hotel-rating">${'⭐'.repeat(hotel.rating)}</div>
				<div class="hotel-price">$${hotel.price}/night</div>
				<button class="book-btn">Book Now</button>
			</div>
		</div>
	`).join('');
}

function selectHotel(id) {
	selectedHotel = hotels.find(h => h.id === id);
	openModal();
}

function openModal() {
	document.getElementById('bookingModal').style.display = 'flex';
	document.getElementById('successMessage').style.display = 'none';
}


function closeModal() {
	document.getElementById('bookingModal').style.display = 'none';
	document.getElementById('bookingForm').reset();
}

document.addEventListener('DOMContentLoaded', () => {
	const searchForm = document.getElementById('searchForm');
	if (searchForm) {
		searchForm.addEventListener('submit', (e) => {
			e.preventDefault();
			document.getElementById('hotels').scrollIntoView({ behavior: 'smooth' });
		});
	}

	const bookingForm = document.getElementById('bookingForm');
	if (bookingForm) {
		bookingForm.addEventListener('submit', (e) => {
			e.preventDefault();
			document.getElementById('successMessage').style.display = 'block';
			setTimeout(() => {
				closeModal();
			}, 3000);
		});
	}

	const today = new Date().toISOString().split('T')[0];
	const checkin = document.getElementById('checkin');
	const checkout = document.getElementById('checkout');
	if (checkin) checkin.setAttribute('min', today);
	if (checkout) checkout.setAttribute('min', today);

	if (checkin && checkout) {
		checkin.addEventListener('change', (e) => {
			checkout.setAttribute('min', e.target.value);
		});
	}

	displayHotels();
});

