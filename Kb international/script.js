document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (!navToggle || !navMenu) {
        console.warn('Missing nav-toggle or nav-menu in the DOM.');
        return;
    }

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');

        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        });
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





document.addEventListener('DOMContentLoaded', function() {  
    // Complete vehicle data structure with all countries and makes
    const vehicleData = {
        countries: {
          "Japan": {
            makes: ["Toyota", "Lexus", "Nissan", "Honda", "Mitsubishi", "Mazda", "Subaru", "Daihatsu", "Suzuki"],
            markedMakes: [],
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
        "Germany": {
            makes: ["Mercedes Benz", "Amg", "Mcc Smart", "Bmw", "Bmw Alpina", "Audi", "Volkswagen", "Opel", "Porsche", "Europe Ford", "Mercedes Maybach", "Mercedes Amg"],
            markedMakes: [],
            models: {
                "Mercedes Benz": ["A-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE", "GLS", "GLB", "CLA", "CLS", "G-Class"],
                "Bmw": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "7 Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4", "I8"],
                "Audi": ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "E-Tron", "TT", "R8"],
                "Volkswagen": ["Golf", "Polo", "Passat", "Tiguan", "Touareg", "Arteon", "ID.3", "ID.4", "ID.6", "Beetle", "Jetta", "T-Roc"],
                "Porsche": ["911", "Taycan", "Panamera", "Macan", "Cayenne", "Boxster", "Cayman"]
            }
        },
        "England": {
            makes: ["Rolls-Royce", "Bentley", "Jaguar", "Land Rover", "Mini"],
            markedMakes: [],
            models: {
                "Rolls-Royce": ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan"],
                "Bentley": ["Continental", "Flying Spur", "Bentayga", "Mulsanne"],
                "Jaguar": ["XE", "XF", "XJ", "F-Pace", "E-Pace", "I-Pace", "F-Type"],
                "Land Rover": ["Range Rover", "Range Rover Sport", "Range Rover Velar", "Range Rover Evoque", "Discovery", "Defender"]
            }
        },
        "Italia": {
            makes: ["Fiat", "Ferrari", "Lancia", "Alfa Romeo", "Maserati", "Lamborghini", "Autobianchi", "Abarth"],
            markedMakes: ["Ferrari", "Maserati", "Lamborghini", "Abarth"],
            models: {
                "Ferrari": ["488", "F8", "Roma", "Portofino", "SF90", "812", "LaFerrari"],
                "Lamborghini": ["Aventador", "Huracan", "Urus"],
                "Maserati": ["Ghibli", "Quattroporte", "Levante", "GranTurismo"],
                "Alfa Romeo": ["Giulia", "Stelvio", "4C", "Giulietta"]
            }
        },
        "France": {
            makes: ["Renault", "Peugeot", "Citroen", "Ds Automobiles"],
            markedMakes: [],
            models: {
                "Renault": ["Clio", "Megane", "Captur", "Kadjar", "Koleos", "Talisman", "Zoe"],
                "Peugeot": ["208", "308", "508", "2008", "3008", "5008", "Rifter"],
                "Citroen": ["C3", "C4", "C5", "Berlingo", "Cactus", "DS3", "DS4"]
            }
        },
        "Sweden": {
            makes: ["Volvo", "Saab"],
            markedMakes: [],
            models: {
                "Volvo": ["S60", "S90", "V60", "V90", "XC40", "XC60", "XC90"]
            }
        },
        "US": {
            makes: ["Cadillac", "Chevrolet", "Gmc", "Pontiac", "Buick", "Oldsmobile", "Hummer", "Lincoln", "Ford", "Mercury", "Chrysler", "Chrysler Jeep", "Dodge"],
            markedMakes: [],
            models: {
                "Ford": ["Fiesta", "Focus", "Mustang", "F-150", "Explorer", "Edge", "Escape"],
                "Chevrolet": ["Camaro", "Corvette", "Malibu", "Impala", "Tahoe", "Suburban", "Silverado"],
                "Dodge": ["Challenger", "Charger", "Durango", "Journey"]
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
