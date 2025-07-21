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


document.addEventListener('DOMContentLoaded', function() {
    // Complete vehicle data structure with all countries and makes
    const vehicleData = {
        countries: {
           "Japan": {
    makes: ["Toyota", "Lexus", "Nissan", "Honda", "Mitsubishi", "Mazda", "Subaru", "Daihatsu", "Suzuki"],
    markedMakes: ["Nissan"],
    models: {
        "Toyota": ["Alphard", "Aqua", "Camry", "Corolla", "Crown", "Estima", "Harrier", "Hiace", "Hilux", "Land Cruiser", "Mark X", "Noah", "Passo", "Prius", "Probox", "Raize", "Rav4", "Roomy", "Sai", "Sienta", "Supra", "Toyota 86", "Vellfire", "Vitz", "Voxy", "Wish", "Yaris"],
        "Lexus": ["Ct", "Is", "Ls", "Nx", "Rx", "Ux"],
        "Nissan": ["Caravan", "Clipper", "Dayz", "Elgrand", "Fairlady Z", "Juke", "March", "Note", "Serena", "Skyline", "X-Trail"],
        "Honda": ["Accord", "Civic", "Cr-Z", "Fit", "Freed", "Insight", "Life", "N-Box", "N-One", "N-Wgn", "Odyssey", "Shuttle", "Stepwagon", "Vezel"],
        "Mitsubishi": ["Delica", "Ek Wagon", "Lancer", "Outlander", "Pajero"],
        "Mazda": ["Atenza", "Axela", "Biante", "Cx-", "Demio", "Flair Roadster", "Rx", "Scrum"],
        "Subaru": ["Brz", "Chiffon", "Forester", "Impreza", "Levorg", "Outback", "Wrx"],
        "Daihatsu": ["Atrai", "Cast", "Copen", "Hijet", "Mira", "Move", "Rocky", "Tanto", "Terios Kid", "Thor", "Wake"],
        "Suzuki": ["Alto", "Carry", "Every", "Hustler", "Jimny", "Solio", "Spacia", "Swift", "Wagon R", "Xbee"]
    }
              },
            },      
        vehicles: [
            {
                id: 1,
                country: 'Japan',
                make: 'Toyota',
                model: 'Land Cruiser',
                year: 2020,
                price: 28500,
                mileage: '45,000 km',
                transmission: 'Automatic',
                image: 'images/Japan/Toyota/Landcruiser/landcruiser.jpg'
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
                image: 'images/Japan/Nissan/Skyline/Skyline-1.jpg'
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
  image: 'images/Germany/Mercedez-Benz/C-Class/C-Class-1.jpg'
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
  image: 'images/England/Rolls-Royce/Phantom/Phantom-1.jpg'
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
  image: 'images/France/Peugeot/2008/2008-1.jpg'
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
  image: 'images/Italy/Ferrari/SF90/SF90-1.jpg'
            },
            {id: 7,
  country: 'Sweden',
  make: 'Volvo',
  model: 'S60',
  year: 2021,
  price: 35000,
  mileage: '14,500 km',
  transmission: 'Automatic',
  image: 'images/Sweden/Volvo/S60/S60-1.jpg'
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
  image: 'images/US/Ford/Focus/Focus-1.jpg'
 }
        ]
    }

    // DOM elements
    const grid = document.querySelector('.vehicle-grid');
    const makeFilter = document.getElementById('make-filter');
    const modelFilter = document.getElementById('model-filter');
    const priceFilter = document.getElementById('price-filter');
    const countryFilter = document.getElementById('country-filter');
    const searchBtn = document.getElementById('search-btn');

    // Initialize filters
    initializeFilters();

    // Display all vehicles initially
    displayVehicles(vehicleData.vehicles);

    // Event listeners
    countryFilter.addEventListener('change', function() {
        updateMakeFilter();
        updateModelFilter();
        filterVehicles();
    });
    
    makeFilter.addEventListener('change', function() {
        updateModelFilter();
        filterVehicles();
    });
    
    modelFilter.addEventListener('change', filterVehicles);
    priceFilter.addEventListener('change', filterVehicles);
    searchBtn.addEventListener('click', filterVehicles);

    // Initialize filter options
    function initializeFilters() {
        // Populate country filter
        countryFilter.innerHTML = '<option value="">All Countries</option>';
        Object.keys(vehicleData.countries).forEach(country => {
            countryFilter.innerHTML += `<option value="${country}">${country}</option>`;
        });
        
        // Initialize make and model filters
        updateMakeFilter();
        updateModelFilter();
    }

    // Update make filter based on selected country
    function updateMakeFilter() {
        const selectedCountry = countryFilter.value;
        let makes = [];
        
        if (selectedCountry) {
            makes = vehicleData.countries[selectedCountry].makes;
        } else {
            // If no country selected, show all makes from all countries
            makes = [...new Set(
                Object.values(vehicleData.countries)
                    .flatMap(country => country.makes)
            )];
        }
        
        // Update make filter options
        makeFilter.innerHTML = '<option value="">All Makes</option>';
        makes.forEach(make => {
            makeFilter.innerHTML += `<option value="${make}">${make}</option>`;
        });
        
        makeFilter.disabled = !selectedCountry;
    }

    // Update model filter based on selected make
    function updateModelFilter() {
        const selectedCountry = countryFilter.value;
        const selectedMake = makeFilter.value;
        let models = [];
        
        if (selectedMake && selectedCountry) {
            models = vehicleData.countries[selectedCountry].models[selectedMake] || [];
        }
        
        // Update model filter options
        modelFilter.innerHTML = '<option value="">All Models</option>';
        models.forEach(model => {
            modelFilter.innerHTML += `<option value="${model}">${model}</option>`;
        });
        
        modelFilter.disabled = !selectedMake;
    }

    // Display vehicles in grid
    function displayVehicles(vehiclesToDisplay) {
        grid.innerHTML = '';
        
        if (vehiclesToDisplay.length === 0) {
            grid.innerHTML = '<p class="no-results">No vehicles match your criteria.</p>';
            return;
        }
        
        vehiclesToDisplay.forEach(vehicle => {
            const card = document.createElement('div');
            card.className = 'vehicle-card';
            card.innerHTML = `
                <div class="vehicle-image" style="background-image: url('${vehicle.image}')"></div>
                <div class="vehicle-details">
                    <h3>${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
                    <p><strong>Country:</strong> ${vehicle.country}</p>
                    <p><strong>Mileage:</strong> ${vehicle.mileage}</p>
                    <p><strong>Transmission:</strong> ${vehicle.transmission}</p>
                    <div class="vehicle-price">$${vehicle.price.toLocaleString()}</div>
                    <a href="product.html?carId=${vehicle.id}" class="btn">View Details</a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Filter vehicles based on selected criteria
    function filterVehicles() {
        const selectedCountry = countryFilter.value;
        const selectedMake = makeFilter.value;
        const selectedModel = modelFilter.value;
        const selectedPrice = priceFilter.value ? parseInt(priceFilter.value) : null;
        
        const filtered = vehicleData.vehicles.filter(vehicle => {
            const countryMatch = !selectedCountry || vehicle.country === selectedCountry;
            const makeMatch = !selectedMake || vehicle.make === selectedMake;
            const modelMatch = !selectedModel || vehicle.model === selectedModel;
            const priceMatch = !selectedPrice || vehicle.price <= selectedPrice;
            
            return countryMatch && makeMatch && modelMatch && priceMatch;
        });
        
        displayVehicles(filtered);
    }
});
