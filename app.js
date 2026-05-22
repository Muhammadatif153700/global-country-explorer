// ===============================
// TERRAPULSE FULL APPLICATION
// ===============================

// ---------- LOCAL FALLBACK DATABASE ----------

// ---------- LOCAL FALLBACK DATABASE ----------

const LocalDB = {
    countries: [

        {
            name: { common: "Pakistan" },
            cca3: "PAK",
            capital: ["Islamabad"],
            region: "Asia",
            subregion: "Southern Asia",
            population: 241499431,
            area: 881913,
            flags: { png: "https://flagcdn.com/w320/pk.png" },
            latlng: [30, 70],
            languages: {
                urd: "Urdu",
                eng: "English"
            },
            currencies: {
                PKR: { name: "Pakistani Rupee" }
            },
            timezones: ["UTC+05:00"],
            borders: ["IND", "AFG", "IRN", "CHN"]
        },

        {
            name: { common: "United States" },
            cca3: "USA",
            capital: ["Washington D.C."],
            region: "Americas",
            subregion: "North America",
            population: 331000000,
            area: 9833520,
            flags: { png: "https://flagcdn.com/w320/us.png" },
            latlng: [38, -97],
            languages: {
                eng: "English"
            },
            currencies: {
                USD: { name: "US Dollar" }
            },
            timezones: ["UTC-05:00"],
            borders: ["CAN", "MEX"]
        },

        {
            name: { common: "India" },
            cca3: "IND",
            capital: ["New Delhi"],
            region: "Asia",
            subregion: "Southern Asia",
            population: 1428000000,
            area: 3287263,
            flags: { png: "https://flagcdn.com/w320/in.png" },
            latlng: [20, 77],
            languages: {
                hin: "Hindi",
                eng: "English"
            },
            currencies: {
                INR: { name: "Indian Rupee" }
            },
            timezones: ["UTC+05:30"],
            borders: ["PAK", "CHN", "NPL"]
        },

        {
            name: { common: "China" },
            cca3: "CHN",
            capital: ["Beijing"],
            region: "Asia",
            subregion: "Eastern Asia",
            population: 1412000000,
            area: 9596961,
            flags: { png: "https://flagcdn.com/w320/cn.png" },
            latlng: [35, 103],
            languages: {
                zho: "Chinese"
            },
            currencies: {
                CNY: { name: "Chinese Yuan" }
            },
            timezones: ["UTC+08:00"],
            borders: ["IND", "PAK", "RUS"]
        },

        {
            name: { common: "Germany" },
            cca3: "DEU",
            capital: ["Berlin"],
            region: "Europe",
            subregion: "Western Europe",
            population: 83000000,
            area: 357022,
            flags: { png: "https://flagcdn.com/w320/de.png" },
            latlng: [51, 9],
            languages: {
                deu: "German"
            },
            currencies: {
                EUR: { name: "Euro" }
            },
            timezones: ["UTC+01:00"],
            borders: ["FRA", "POL"]
        },

        {
            name: { common: "France" },
            cca3: "FRA",
            capital: ["Paris"],
            region: "Europe",
            subregion: "Western Europe",
            population: 68000000,
            area: 551695,
            flags: { png: "https://flagcdn.com/w320/fr.png" },
            latlng: [46, 2],
            languages: {
                fra: "French"
            },
            currencies: {
                EUR: { name: "Euro" }
            },
            timezones: ["UTC+01:00"],
            borders: ["DEU", "ESP"]
        },

        {
            name: { common: "Japan" },
            cca3: "JPN",
            capital: ["Tokyo"],
            region: "Asia",
            subregion: "Eastern Asia",
            population: 125000000,
            area: 377975,
            flags: { png: "https://flagcdn.com/w320/jp.png" },
            latlng: [36, 138],
            languages: {
                jpn: "Japanese"
            },
            currencies: {
                JPY: { name: "Japanese Yen" }
            },
            timezones: ["UTC+09:00"],
            borders: []
        },

        {
            name: { common: "Canada" },
            cca3: "CAN",
            capital: ["Ottawa"],
            region: "Americas",
            subregion: "North America",
            population: 39000000,
            area: 9984670,
            flags: { png: "https://flagcdn.com/w320/ca.png" },
            latlng: [56, -106],
            languages: {
                eng: "English",
                fra: "French"
            },
            currencies: {
                CAD: { name: "Canadian Dollar" }
            },
            timezones: ["UTC-04:00"],
            borders: ["USA"]
        },

        {
            name: { common: "Brazil" },
            cca3: "BRA",
            capital: ["Brasilia"],
            region: "Americas",
            subregion: "South America",
            population: 214000000,
            area: 8515767,
            flags: { png: "https://flagcdn.com/w320/br.png" },
            latlng: [-10, -55],
            languages: {
                por: "Portuguese"
            },
            currencies: {
                BRL: { name: "Brazilian Real" }
            },
            timezones: ["UTC-03:00"],
            borders: ["ARG", "PER"]
        },

        {
            name: { common: "Australia" },
            cca3: "AUS",
            capital: ["Canberra"],
            region: "Oceania",
            subregion: "Australia and New Zealand",
            population: 26000000,
            area: 7692024,
            flags: { png: "https://flagcdn.com/w320/au.png" },
            latlng: [-25, 133],
            languages: {
                eng: "English"
            },
            currencies: {
                AUD: { name: "Australian Dollar" }
            },
            timezones: ["UTC+10:00"],
            borders: []
        },

        {
            name: { common: "United Kingdom" },
            cca3: "GBR",
            capital: ["London"],
            region: "Europe",
            subregion: "Northern Europe",
            population: 67000000,
            area: 242495,
            flags: { png: "https://flagcdn.com/w320/gb.png" },
            latlng: [55, -3],
            languages: {
                eng: "English"
            },
            currencies: {
                GBP: { name: "British Pound" }
            },
            timezones: ["UTC+00:00"],
            borders: []
        }

    ]
};
// ---------- APPLICATION STATE ----------

const AppState = {
    countries: [],
    filteredCountries: [],
    compareList: [],
    theme: 'dark',
    currentCountry: null
};

// ---------- DOM ----------

const DOM = {

    themeToggle:
        document.getElementById('theme-toggle'),

    searchInput:
        document.getElementById('search-input'),

    clearSearchBtn:
        document.getElementById('clear-search-btn'),

    regionFilter:
        document.getElementById('region-filter'),

    sortControl:
        document.getElementById('sort-control'),

    resetFiltersBtn:
        document.getElementById('reset-filters-btn'),

    statsBanner:
        document.getElementById('stats-banner'),

    statsText:
        document.getElementById('stats-text'),

    cardsSkeleton:
        document.getElementById('cards-skeleton'),

    countryGrid:
        document.getElementById('country-grid'),

    noResultsPanel:
        document.getElementById('no-results-panel'),

    errorPanel:
        document.getElementById('error-panel'),

    retryBtn:
        document.getElementById('retry-btn'),

    emergencyLocalBtn:
        document.getElementById('emergency-local-btn'),

    // Detail Modal

    detailModal:
        document.getElementById('detail-modal'),

    closeDetailModal:
        document.getElementById('close-detail-modal'),

    modalRealContent:
        document.getElementById('modal-real-content'),

    // Compare

    comparisonTray:
        document.getElementById('comparison-tray'),

    trayCountText:
        document.getElementById('tray-count-text'),

    traySelectedCountries:
        document.getElementById('tray-selected-countries'),

    trayCompareBtn:
        document.getElementById('tray-compare-btn'),

    trayClearBtn:
        document.getElementById('tray-clear-btn'),

    compareModal:
        document.getElementById('compare-modal'),

    closeCompareModal:
        document.getElementById('close-compare-modal')
};

// ---------- INIT ----------

document.addEventListener('DOMContentLoaded', () => {

    initializeTheme();

    setupListeners();

    fetchCountries();
});

// ---------- THEME ----------

function initializeTheme() {

    const saved =
        localStorage.getItem('theme') || 'dark';

    AppState.theme = saved;

    document.documentElement.setAttribute(
        'data-theme',
        saved
    );
}

// ---------- LISTENERS ----------

function setupListeners() {

    // Theme

    DOM.themeToggle?.addEventListener('click', () => {

        AppState.theme =
            AppState.theme === 'dark'
                ? 'light'
                : 'dark';

        document.documentElement.setAttribute(
            'data-theme',
            AppState.theme
        );

        localStorage.setItem(
            'theme',
            AppState.theme
        );
    });

    // Search

    DOM.searchInput?.addEventListener(
        'input',
        applyFilters
    );

    // Region

    DOM.regionFilter?.addEventListener(
        'change',
        applyFilters
    );

    // Sort

    DOM.sortControl?.addEventListener(
        'change',
        applyFilters
    );

    // Reset

    DOM.resetFiltersBtn?.addEventListener(
        'click',
        resetFilters
    );

    // Retry

    DOM.retryBtn?.addEventListener(
        'click',
        fetchCountries
    );

    // Offline

    DOM.emergencyLocalBtn?.addEventListener(
        'click',
        useOfflineData
    );

    // Close Detail Modal

    DOM.closeDetailModal?.addEventListener(
        'click',
        closeDetailModal
    );

    // Compare

    DOM.trayClearBtn?.addEventListener(
        'click',
        clearCompare
    );

    DOM.trayCompareBtn?.addEventListener(
        'click',
        openCompareModal
    );

    DOM.closeCompareModal?.addEventListener(
        'click',
        () => {
            DOM.compareModal.classList.add('hidden');
        }
    );
}

// ---------- FETCH COUNTRIES ----------

// ---------- FETCH COUNTRIES ----------

async function fetchCountries() {

    showLoading(true);

    try {

        const response = await fetch(
            'https://restcountries.com/v3.1/all?fields=name,cca3,capital,region,subregion,population,area,flags,languages,currencies,timezones,borders,latlng'
        );

        if (!response.ok) {
            throw new Error('API Error');
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error('Invalid Data');
        }

        // SORT A-Z
        data.sort((a, b) =>
            a.name.common.localeCompare(
                b.name.common
            )
        );

        AppState.countries = data;

        AppState.filteredCountries = data;

        renderCountries();

        showLoading(false);

        console.log(
            'Countries Loaded:',
            data.length
        );

    } catch (err) {

        console.error(
            'Live API Failed:',
            err
        );

        alert(
            'Live API failed. Using offline data.'
        );

        useOfflineData();
    }
}
// ---------- OFFLINE ----------

function useOfflineData() {

    AppState.countries =
        LocalDB.countries;

    AppState.filteredCountries =
        LocalDB.countries;

    renderCountries();

    showLoading(false);
}

// ---------- LOADING ----------

function showLoading(state) {

    if (state) {

        DOM.cardsSkeleton?.classList.remove(
            'hidden'
        );

        DOM.countryGrid?.classList.add(
            'hidden'
        );

    } else {

        DOM.cardsSkeleton?.classList.add(
            'hidden'
        );

        DOM.countryGrid?.classList.remove(
            'hidden'
        );
    }
}

// ---------- FILTER ----------

function applyFilters() {

    let results = [...AppState.countries];

    // Search

    const query =
        DOM.searchInput.value
            .trim()
            .toLowerCase();

    if (query) {

        results = results.filter(c => {

            const name =
                c.name?.common
                    ?.toLowerCase() || '';

            const capital =
                c.capital?.[0]
                    ?.toLowerCase() || '';

            return (
                name.includes(query) ||
                capital.includes(query)
            );
        });
    }

    // Region

    const region =
        DOM.regionFilter.value
            .toLowerCase();

    if (region !== 'all') {

        results = results.filter(
            c =>
                c.region?.toLowerCase() ===
                region
        );
    }

    // Sort

    const sort =
        DOM.sortControl.value;

    switch (sort) {

        case 'name-asc':

            results.sort((a, b) =>
                a.name.common.localeCompare(
                    b.name.common
                )
            );

            break;

        case 'name-desc':

            results.sort((a, b) =>
                b.name.common.localeCompare(
                    a.name.common
                )
            );

            break;

        case 'pop-desc':

            results.sort(
                (a, b) =>
                    b.population -
                    a.population
            );

            break;

        case 'pop-asc':

            results.sort(
                (a, b) =>
                    a.population -
                    b.population
            );

            break;

        case 'area-desc':

            results.sort(
                (a, b) =>
                    b.area - a.area
            );

            break;

        case 'area-asc':

            results.sort(
                (a, b) =>
                    a.area - b.area
            );

            break;
    }

    AppState.filteredCountries = results;

    renderCountries();
}

// ---------- RESET ----------

function resetFilters() {

    DOM.searchInput.value = '';

    DOM.regionFilter.value = 'all';

    DOM.sortControl.value = 'default';

    applyFilters();
}

// ---------- RENDER COUNTRIES ----------

function renderCountries() {

    DOM.countryGrid.innerHTML = '';

    DOM.statsText.textContent =
        `Showing ${AppState.filteredCountries.length} countries`;

    if (
        AppState.filteredCountries.length === 0
    ) {

        DOM.noResultsPanel.classList.remove(
            'hidden'
        );

        return;
    }

    DOM.noResultsPanel.classList.add(
        'hidden'
    );

    AppState.filteredCountries.forEach(
        country => {

            const card =
                document.createElement('div');

            card.className = 'country-card';

            const selected =
                AppState.compareList.some(
                    c =>
                        c.cca3 ===
                        country.cca3
                );

            card.innerHTML = `
                <div class="card-media">
                    <img 
                        src="${country.flags?.png}"
                        class="card-flag"
                    />
                </div>

                <div class="card-body">

                    <h3 class="card-title">
                        ${country.name.common}
                    </h3>

                    <ul class="card-specs">

                        <li>
                            <strong>Capital:</strong>
                            ${
                                country.capital?.[0] ||
                                'N/A'
                            }
                        </li>

                        <li>
                            <strong>Region:</strong>
                            ${country.region}
                        </li>

                        <li>
                            <strong>Population:</strong>
                            ${country.population.toLocaleString()}
                        </li>

                    </ul>

                    <div 
                        style="
                            display:flex;
                            gap:10px;
                            margin-top:15px;
                        "
                    >

                        <button
                            class="btn btn-secondary explore-btn"
                            data-code="${country.cca3}"
                        >
                            Explore
                        </button>

                        <button
                            class="btn ${
                                selected
                                    ? 'btn-danger'
                                    : 'btn-primary'
                            } compare-btn"
                            data-code="${country.cca3}"
                        >
                            ${
                                selected
                                    ? 'Remove'
                                    : 'Compare'
                            }
                        </button>

                    </div>

                </div>
            `;

            DOM.countryGrid.appendChild(card);
        }
    );

    bindCardButtons();
}

// ---------- BIND BUTTONS ----------

function bindCardButtons() {

    document
        .querySelectorAll('.explore-btn')
        .forEach(btn => {

            btn.onclick = e => {

                const code =
                    e.target.getAttribute(
                        'data-code'
                    );

                openCountryDetails(code);
            };
        });

    document
        .querySelectorAll('.compare-btn')
        .forEach(btn => {

            btn.onclick = e => {

                const code =
                    e.target.getAttribute(
                        'data-code'
                    );

                toggleCompare(code);
            };
        });
}

// ---------- DETAIL MODAL ----------

async function openCountryDetails(code) {

    const country =
        AppState.countries.find(
            c => c.cca3 === code
        );

    if (!country) return;

    AppState.currentCountry = country;

    DOM.detailModal.classList.remove(
        'hidden'
    );

    DOM.modalRealContent.classList.remove(
        'hidden'
    );

    // Fill Data

    document.getElementById(
        'm-country-name'
    ).textContent =
        country.name.common;

    document.getElementById(
        'm-capital'
    ).textContent =
        country.capital?.[0] || 'N/A';

    document.getElementById(
        'm-population'
    ).textContent =
        country.population.toLocaleString();

    document.getElementById(
        'm-area'
    ).textContent =
        `${country.area.toLocaleString()} km²`;

    document.getElementById(
        'm-region-tag'
    ).textContent =
        country.region;

    document.getElementById(
        'm-subregion-tag'
    ).textContent =
        country.subregion || 'N/A';

    document.getElementById(
        'm-flag'
    ).src =
        country.flags?.png;

    document.getElementById(
        'm-languages'
    ).textContent =
        Object.values(
            country.languages || {}
        ).join(', ');

    document.getElementById(
        'm-currency'
    ).textContent =
        Object.values(
            country.currencies || {}
        )
            .map(c => c.name)
            .join(', ');

    document.getElementById(
        'm-timezones'
    ).textContent =
        country.timezones?.join(', ');

    document.getElementById(
        'm-borders'
    ).textContent =
        country.borders?.join(', ') ||
        'None';

    // WEATHER

    await loadWeather(country);

    // MAP

    loadMap(country);
}

// ---------- CLOSE DETAIL ----------

function closeDetailModal() {

    DOM.detailModal.classList.add(
        'hidden'
    );
}

// ---------- WEATHER ----------

async function loadWeather(country) {

    try {

        const lat =
            country.latlng?.[0];

        const lon =
            country.latlng?.[1];

        const weatherAPI =
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max&timezone=auto`;

        const response =
            await fetch(weatherAPI);

        const data =
            await response.json();

        document.getElementById(
            'w-temp'
        ).textContent =
            `${data.current_weather.temperature}°C`;

        document.getElementById(
            'w-wind'
        ).textContent =
            `${data.current_weather.windspeed} km/h`;

        document.getElementById(
            'w-coords'
        ).textContent =
            `${lat}, ${lon}`;

        createChart(
            data.daily.temperature_2m_max
        );

    } catch (err) {

        console.error(err);
    }
}

// ---------- CHART ----------

let chartInstance = null;

function createChart(data) {

    const ctx =
        document.getElementById(
            'forecastChart'
        );

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {

        type: 'line',

        data: {

            labels: [
                'Day1',
                'Day2',
                'Day3',
                'Day4',
                'Day5',
                'Day6',
                'Day7'
            ],

            datasets: [
                {
                    label: 'Temperature °C',
                    data: data,
                    borderColor: '#4f8cff',
                    tension: 0.4
                }
            ]
        }
    });
}

// ---------- MAP ----------

let map = null;

function loadMap(country) {

    const lat =
        country.latlng?.[0];

    const lon =
        country.latlng?.[1];

    if (map) {
        map.remove();
    }

    map = L.map('map-container')
        .setView([lat, lon], 4);

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution:
                '&copy; OpenStreetMap'
        }
    ).addTo(map);

    L.marker([lat, lon])
        .addTo(map)
        .bindPopup(country.name.common);
}

// ---------- COMPARE ----------

function toggleCompare(code) {

    const country =
        AppState.countries.find(
            c => c.cca3 === code
        );

    if (!country) return;

    const exists =
        AppState.compareList.some(
            c => c.cca3 === code
        );

    if (exists) {

        AppState.compareList =
            AppState.compareList.filter(
                c => c.cca3 !== code
            );

    } else {

        if (
            AppState.compareList.length >= 3
        ) {

            alert(
                'Maximum 3 countries'
            );

            return;
        }

        AppState.compareList.push(country);
    }

    updateCompareTray();

    renderCountries();
}

// ---------- UPDATE TRAY ----------

function updateCompareTray() {

    const count =
        AppState.compareList.length;

    if (count === 0) {

        DOM.comparisonTray.classList.add(
            'hidden'
        );

        return;
    }

    DOM.comparisonTray.classList.remove(
        'hidden'
    );

    DOM.trayCountText.textContent =
        `${count} of 3 selected`;

    DOM.traySelectedCountries.innerHTML =
        '';

    AppState.compareList.forEach(c => {

        const chip =
            document.createElement('div');

        chip.className = 'compare-chip';

        chip.innerHTML = `
            <img src="${c.flags.png}" />
            <span>${c.name.common}</span>
        `;

        DOM.traySelectedCountries.appendChild(
            chip
        );
    });

    DOM.trayCompareBtn.disabled =
        count < 2;
}

// ---------- CLEAR COMPARE ----------

function clearCompare() {

    AppState.compareList = [];

    updateCompareTray();

    renderCountries();
}

// ---------- OPEN COMPARE MODAL ----------

function openCompareModal() {

    DOM.compareModal.classList.remove(
        'hidden'
    );

    renderCompareTable();
}

// ---------- COMPARE TABLE ----------

function renderCompareTable() {

    const rows = {

        flag:
            document.getElementById(
                'c-row-flag'
            ),

        name:
            document.getElementById(
                'c-row-name'
            ),

        capital:
            document.getElementById(
                'c-row-capital'
            ),

        population:
            document.getElementById(
                'c-row-population'
            ),

        area:
            document.getElementById(
                'c-row-area'
            ),

        region:
            document.getElementById(
                'c-row-region'
            ),

        languages:
            document.getElementById(
                'c-row-languages'
            ),

        currencies:
            document.getElementById(
                'c-row-currencies'
            )
    };

    // Clear old columns

    Object.values(rows).forEach(r => {

        while (r.children.length > 1) {
            r.removeChild(r.lastChild);
        }
    });

    // Add countries

    AppState.compareList.forEach(c => {

        addCell(
            rows.flag,
            `<img src="${c.flags.png}" width="80">`
        );

        addCell(
            rows.name,
            c.name.common
        );

        addCell(
            rows.capital,
            c.capital?.[0] || 'N/A'
        );

        addCell(
            rows.population,
            c.population.toLocaleString()
        );

        addCell(
            rows.area,
            `${c.area.toLocaleString()} km²`
        );

        addCell(
            rows.region,
            `${c.region} / ${c.subregion}`
        );

        addCell(
            rows.languages,
            Object.values(
                c.languages || {}
            ).join(', ')
        );

        addCell(
            rows.currencies,
            Object.values(
                c.currencies || {}
            )
                .map(x => x.name)
                .join(', ')
        );
    });
}

// ---------- ADD CELL ----------

function addCell(row, value) {

    const td =
        document.createElement('td');

    td.innerHTML = value;

    row.appendChild(td);
}
