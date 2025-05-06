// Debounce Function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Throttle Function
  function throttle(func, limit) {
    let inThrottle = false;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
  
  // Fetch cities from Teleport API
  async function fetchCities(query) {
    const resultsDiv = document.getElementById("results");
    if (!query) {
      resultsDiv.innerHTML = "";
      return;
    }
  
    try {
      const res = await fetch(`https://api.teleport.org/api/cities/?search=${query}`);
      const data = await res.json();
      const cityList = data._embedded["city:search-results"];
  
      if (cityList.length === 0) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
        return;
      }
  
      resultsDiv.innerHTML = cityList
        .map((city) => `<p>${city.matching_full_name}</p>`)
        .join("");
    } catch (error) {
      resultsDiv.innerHTML = "<p>Error fetching data.</p>";
    }
  }
  
  // Counter with throttling
  let count = 0;
  function incrementCounter() {
    count++;
    document.getElementById("counter").innerText = `Clicks: ${count}`;
  }
  
  // Event Listeners
  document.getElementById("searchInput").addEventListener(
    "input",
    debounce((e) => fetchCities(e.target.value), 300)
  );
  
  document.getElementById("clickBtn").addEventListener(
    "click",
    throttle(incrementCounter, 2000)
  );
  