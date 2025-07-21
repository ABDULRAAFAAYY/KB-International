document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    navToggle.addEventListener('click', function() {
        // Toggle mobile menu
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !e.target.closest('.nav-toggle')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        }
    });
});


// import vehicleData from 'scripts.js';







// Sample data (replace with API calls)
const vehicles = [
  {
    id: 1,
    country: 'Japan',
    make: 'Toyota',
    model: 'Land Cruiser',
    year: 2020,
    price: 28500,
    mileage: '45,000 km',
    transmission: 'Automatic',
    image: 'images/Japan/Toyota/Landcruiser/landcruiser.jpg',
    thumbnails: [
      'images/Japan/Toyota/Landcruiser/landcruiser.jpg',
      'images/Japan/Toyota/Landcruiser/landcruiser-1.jpg',
      'images/Japan/Toyota/Landcruiser/landcruiser-2.jpg',
      'images/Japan/Toyota/Landcruiser/landcruiser-3.jpg'
    ],
    related: [2, 3, 4,5] // Nissan Skyline, Toyota Prius, Honda CR-V
  },
  {
    id: 2,
    country: 'Japan',
    make: 'Nissan',
    model: 'Skyline',
    year: 2018,
    price: 24900,
    mileage: '32,000 km',
    transmission: 'Automatic',
    image: 'images/Japan/Nissan/Skyline/Skyline-1.jpg',
    thumbnails: [
      'images/Japan/Nissan/Skyline/Skyline-1.jpg',
      'images/Japan/Nissan/Skyline/Skyline-2.jpg',
      'images/Japan/Nissan/Skyline/Skyline-3.jpg',
      'images/Japan/Nissan/Skyline/Skyline-4.jpg'
    ],
    related: [1,3, 4, 5] // Toyota Land Cruiser, Honda CR-V, Mazda CX-5
  },
  {
  id: 3,
  country: 'Germany',
  make: 'Mercedes-Benz',
  model: 'C-Class',
  year: 2021,
  price: 42000,
  mileage: '18,000 km',
  transmission: 'Automatic',
  image: 'images/Germany/Mercedez-Benz/C-Class/C-Class-1.jpg',
  thumbnails: [
    'images/Germany/Mercedez-Benz/C-Class/C-Class-1.jpg',
    'images/Germany/Mercedez-Benz/C-Class/C-Class-2.jpg',
    'images/Germany/Mercedez-Benz/C-Class/C-Class-3.jpg',
    'images/Germany/Mercedez-Benz/C-Class/C-Class-4.jpg'
  ],
    related: [1,3, 2, 7]
},
{
  id: 4,
  country: 'UK',
  make: 'Rolls-Royce',
  model: 'Phantom',
  year: 2020,
  price: 450000,
  mileage: '9,000 km',
  transmission: 'Automatic',
  image: 'images/England/Rolls-Royce/Phantom/Phantom-1.jpg',
  thumbnails: [
    'images/England/Rolls-Royce/Phantom/Phantom-1.jpg',
    'images/England/Rolls-Royce/Phantom/Phantom-2.jpg',
    'images/England/Rolls-Royce/Phantom/Phantom-3.jpg',
    'images/England/Rolls-Royce/Phantom/Phantom-4.jpg'
  ],
    related: [8,2, 4, 6]
},
{
  id: 5,
  country: 'France',
  make: 'Peugeot',
  model: '2008',
  year: 2022,
  price: 27000,
  mileage: '12,000 km',
  transmission: 'Automatic',
  image: 'images/France/Peugeot/2008/2008-1.jpg',
  thumbnails: [
    'images/France/Peugeot/2008/2008-1.jpg',
    'images/France/Peugeot/2008/2008-2.jpg',
    'images/France/Peugeot/2008/2008-3.jpg',
    'images/France/Peugeot/2008/2008-4.jpg'
  ],
    related: [6,3, 2, 7]
},
{
  id: 6,
  country: 'Italy',
  make: 'Ferrari',
  model: 'SF90',
  year: 2023,
  price: 510000,
  mileage: '3,000 km',
  transmission: 'Automatic',
  image: 'images/Italy/Ferrari/SF90/SF90-1.jpg',
  thumbnails: [
    'images/Italy/Ferrari/SF90/SF90-1.jpg',
    'images/Italy/Ferrari/SF90/SF90-2.jpg',
    'images/Italy/Ferrari/SF90/SF90-3.jpg',
    'images/Italy/Ferrari/SF90/SF90-4.jpg'
  ],
    related: [1,3, 4, 5]
},
{
  id: 7,
  country: 'Sweden',
  make: 'Volvo',
  model: 'S60',
  year: 2021,
  price: 35000,
  mileage: '14,500 km',
  transmission: 'Automatic',
  image: 'images/Sweden/Volvo/S60/S60-1.jpg',
  thumbnails: [
    'images/Sweden/Volvo/S60/S60-1.jpg',
    'images/Sweden/Volvo/S60/S60-2.jpg',
    'images/Sweden/Volvo/S60/S60-3.jpg',
    'images/Sweden/Volvo/S60/S60-4.jpg'
  ],
    related: [2,5, 8, 6]
},
{
  id: 8,
  country: 'USA',
  make: 'Ford',
  model: 'Focus',
  year: 2019,
  price: 21000,
  mileage: '28,000 km',
  transmission: 'Automatic',
  image: 'images/US/Ford/Focus/Focus-1.jpg',
  thumbnails: [
    'images/US/Ford/Focus/Focus-1.jpg',
    'images/US/Ford/Focus/Focus-2.jpg',
    'images/US/Ford/Focus/Focus-3.webp',
    'images/US/Ford/Focus/Focus-4.webp'
  ],
    related: [1,3, 4, 5]
}

];

// Load car details based on URL (?carId=1)
function loadCarDetails() {
  const params = new URLSearchParams(window.location.search);
  const carId = parseInt(params.get('carId'));

  const car = vehicles.find(vehicle => vehicle.id === carId);
  if (!car) {
    console.error("Car not found!");
    return;
  }

  // Update main product details
  document.getElementById('main-car-image').src = car.image;
  document.getElementById('car-make-model').textContent = `${car.make} ${car.model}`;
  document.getElementById('car-year').textContent = `Year: ${car.year}`;
  document.getElementById('car-country').textContent = `Country: ${car.country}`;
  document.getElementById('car-mileage').textContent = `Mileage: ${car.mileage}`;
  document.getElementById('car-transmission').textContent = `Transmission: ${car.transmission}`;
  document.getElementById('car-price').textContent = `Price: $${car.price.toLocaleString()}`;

  // Load thumbnails (4 images)
  loadThumbnails(car.thumbnails);

  // Load related cars (if available)
  if (car.related) {
    loadRelatedCars(car.related);
  }
}

// Load 4 thumbnails for the car
function loadThumbnails(thumbnails) {
  const container = document.getElementById('car-thumbnails');
  container.innerHTML = '';

  thumbnails.slice(0, 4).forEach(thumb => {
    const img = document.createElement('img');
    img.src = thumb;
    img.alt = "Thumbnail";
    img.addEventListener('click', () => {
      document.getElementById('main-car-image').src = thumb; // Update main image on click
    });
    container.appendChild(img);
  });
}

// Load 4 related cars
function loadRelatedCars(relatedIds) {
  const container = document.getElementById('related-cards');
  container.innerHTML = '';

  relatedIds.slice(0, 4).forEach(id => {
    const relatedCar = vehicles.find(car => car.id === id);
    if (relatedCar) {
      const card = document.createElement('div');
      card.className = 'car-card';
      card.innerHTML = `
        <div class="vehicle-image" style="background-image: url('${relatedCar.image}')"></div>
                <div class="vehicle-details">
                    <h3>${relatedCar.year} ${relatedCar.make} ${relatedCar.model}</h3>
                    <p><strong>Country:</strong> ${relatedCar.country}</p>
                    <p><strong>Mileage:</strong> ${relatedCar.mileage}</p>
                    <p><strong>Transmission:</strong> ${relatedCar.transmission}</p>
                    <div class="vehicle-price">$${relatedCar.price.toLocaleString()}</div>
                    <a href="product.html?carId=${relatedCar.id}" class="btn">View Details</a>
                </div>
      `;
      card.addEventListener('click', () => {
        window.location.href = `product.html?carId=${relatedCar.id}`;
      });
      container.appendChild(card);
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadCarDetails);
