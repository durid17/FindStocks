var filterSideMenuHTML =
	`
<div class="filter-menu">

	<div class="filter-header-div">
		<h1>Filter</h1>
	</div>
	<div class="filter-block">
		<h2 class="filter-block-title">Type</h2>
		<label class="checkbox-container">All
			<input type="checkbox" checked="checked" name="side-type">
			<span class="checkbox-checkmark"></span>
		</label>
		<label class="checkbox-container">Technology
			<input type="checkbox" name="side-type">
			<span class="checkbox-checkmark"></span>
		</label>
		<label class="checkbox-container">Healthcare
			<input type="checkbox" name="side-type">
			<span class="checkbox-checkmark"></span>
		</label>
		<label class="checkbox-container">Real Estate
			<input type="checkbox" name="side-type">
			<span class="checkbox-checkmark"></span>
		</label>
		<label class="checkbox-container">Energy
			<input type="checkbox" name="side-type">
			<span class="checkbox-checkmark"></span>
		</label>
	</div>

	<div class="filter-block">
		<h2 class="filter-block-title">Prices</h2>
		<div class="filter-block-content">
			<div>
				<input type="number" id="side-from" class="from" placeholder="From">
				<input type="number" id="side-to" class="to" placeholder="To">
			</div>
		</div>
	</div>

	<div class="filter-block">
		<label class="radio-container">Low to High
			<input type="radio" checked="checked" name="side-sort-order">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">High to Low
			<input type="radio" name="side-sort-order">
			<span class="checkmark"></span>
		</label>

	</div>

	<div class="filter-block">
		<h3>Filter by current value</h3>
		<button id="side-filter-by-value" class="filter-by-value" >Filter by current value</button>
	</div>

	<div class="filter-block">
		<h2>Filter by increase</h2>
		<label class="radio-container">1D
			<input type="radio" checked="checked" name="side-time-frame">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">5D
			<input type="radio" name="side-time-frame">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">1M
			<input type="radio" name="side-time-frame">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">3M
			<input type="radio" name="side-time-frame">
			<span class="checkmark"></span>
		</label>
		<button id="side-filter-by-increase" class="filter-by-increase">Filter by increase</button>
	</div>
</div>
`

var filterResponsiveMenuHTML =
	`
<div class="filter-menu">

	<div class="filter-header-div">
		<h1>Filter</h1>
	</div>
	<div class="filter-block">
		<h2 class="filter-block-title">Type</h2>
		<label class="checkbox-container">All
			<input type="checkbox" checked="checked" name="resp-type">
			<span class="checkbox-checkmark"></span>
		</label>
		<label class="checkbox-container">Technology
			<input type="checkbox" name="resp-type">
			<span class="checkbox-checkmark"></span>
		</label>
		<label class="checkbox-container">Healthcare
			<input type="checkbox" name="resp-type">
			<span class="checkbox-checkmark"></span>
		</label>
		<label class="checkbox-container">Real Estate
			<input type="checkbox" name="resp-type">
			<span class="checkbox-checkmark"></span>
		</label>
		<label class="checkbox-container">Energy
			<input type="checkbox" name="resp-type">
			<span class="checkbox-checkmark"></span>
		</label>
	</div>

	<div class="filter-block">
		<h2 class="filter-block-title">Prices</h2>
		<div class="filter-block-content">
			<div>
				<input type="number" id="resp-from" class="from" placeholder="From">
				<input type="number" id="resp-to" class="to" placeholder="To">
			</div>
		</div>
	</div>

	<div class="filter-block">
		<label class="radio-container">Low to High
			<input type="radio" checked="checked" name="resp-sort-order">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">High to Low
			<input type="radio" name="resp-sort-order">
			<span class="checkmark"></span>
		</label>

	</div>

	<div class="filter-block">
		<h3>Filter by current value</h3>
		<button id="resp-filter-by-value" class="filter-by-value" >Filter by current value</button>
	</div>

	<div class="filter-block">
		<h2>Filter by increase</h2>
		<label class="radio-container">1D
			<input type="radio" checked="checked" name="resp-time-frame">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">5D
			<input type="radio" name="resp-time-frame">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">1M
			<input type="radio" name="resp-time-frame">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">3M
			<input type="radio" name="resp-time-frame">
			<span class="checkmark"></span>
		</label>
		<button id="resp-filter-by-increase" class="filter-by-increase">Filter by increase</button>
	</div>
</div>
`


var homeHTML =
	`
<div id="main">
<div id="filter-modal" class="filter-modal">
	<img id="filter-image" src="img/filter.png">
	<div id="filter-modal-text" class="filter-modal-text">
		<h2 id="filter-modal-text-header">Filter</h2>
	</div>
</div>


<div id="side-menu" class="side-menu"> `
	+ filterSideMenuHTML +
	`
</div>

<div id="main-content" class="main-content">
	
	

</div>
</div>
`

var contactHTML = `<h1>Contact</h1>`
var aboutHTML = `<h1>About</h1>`

var root = null;
var useHash = true;
var hash = '#';
var router = new Navigo(root, useHash, hash);
var stocks;

function toggleHamburgerMenu() {
	var navLinks = document.querySelector(".nav-links");
	var links = document.querySelectorAll(".nav-links li");
	navLinks.classList.toggle("open");
	links.forEach(link => {
		link.classList.toggle("fade");
	});
}

function handleHome() {
	document.getElementById('modal-content').innerHTML = filterResponsiveMenuHTML;
	document.getElementById('main-div').innerHTML = homeHTML;

	fetch('data/stocks.json')
		.then(response => response.json())
		.then((result) => {
			stocks = result;
			stockListHTML = ``
			result.forEach(function (item, index) {
				var color = 'grey';
				var needPlus = '';
				if (item['1D_change'] > 0) {
					color = 'green';
					needPlus = '+';
				} else if (item['1D_change'] < 0) {
					color = 'red';
				}
				stockListHTML +=
					`<a onclick="stockChoose(` + item['id'] + `)" id="stock_id_` + item['id'] + `" class="stock-block">
						<img class="stocklist-image" src="img/` + item['logo'] + `" width="100px" height="100px">
						<div class="stock-desc" width = "200px">
							<h1 class="stock-name">` + item['name'] + `</h1>
							<h3 class="stock-desc-par">
								<span style="font-weight: bold;">Industry: </span>
								<span>` + item['industry'] + `</span>
							</h3>
							<h3 class="stock-desc-par">
								<span style="font-weight: bold;">Price: </span>
								<span style="color:` + color + `;">` + item['price'] + `$  ` + needPlus + item['1D_change'] + `(` + item['1D_perc_change'] + `%)</span>
							</h3>
						</div>
					</a>`
			});
			document.getElementById('main-content').innerHTML = stockListHTML;

		});
}

function handleStock(id) {
	document.getElementById('main-div').innerHTML = '<h1>' + id + '</h1>';
}


function handleFilterByValue(checkedBoxes, priceFrom, priceTo, sortOrder) {
	fetch('data/stocks.json')
		.then(response => response.json())
		.then((result) => {
			stockListHTML = ``
			
			result = result.filter(function (a) {
				if (priceFrom != null && priceFrom > a['price']) return false;
				if (priceTo != null && priceTo < a['price']) return false;
				return checkedBoxes.includes(a['industry']);
			});

			result.sort(function (a, b) {
				if(sortOrder == 'Low to High'){
					return a['price'] > b['price'] ? 1 : -1;
				}
				return a['price'] < b['price'] ? 1 : -1;
			});

			result.forEach(function (item, index) {

				var color = 'grey';
				var needPlus = '';
				if (item['1D_change'] > 0) {
					color = 'green';
					needPlus = '+';
				} else if (item['1D_change'] < 0) {
					color = 'red';
				}
				stockListHTML +=
					`<a onclick="stockChoose(` + item['id'] + `)" id="stock_id_` + item['id'] + `" class="stock-block">
						<img class="stocklist-image" src="img/` + item['logo'] + `" width="100px" height="100px">
						<div class="stock-desc" width = "200px">
							<h1 class="stock-name">` + item['name'] + `</h1>
							<h3 class="stock-desc-par">
								<span style="font-weight: bold;">Industry: </span>
								<span>` + item['industry'] + `</span>
							</h3>
							<h3 class="stock-desc-par">
								<span style="font-weight: bold;">Price: </span>
								<span style="color:` + color + `;">` + item['price'] + `$  ` + needPlus + item['1D_change'] + `(` + item['1D_perc_change'] + `%)</span>
							</h3>
						</div>
					</a>`
				console.log(item, index);
			});
			document.getElementById('main-content').innerHTML = stockListHTML;

		});
}

function handleFilterByIncrease(checkedBoxes, priceFrom, priceTo, sortOrder, timeFrame) {
	fetch('data/stocks.json')
		.then(response => response.json())
		.then((result) => {
			stockListHTML = ``
			timeFrame = timeFrame + '_change';
			result = result.filter(function (a) {
				if (priceFrom != null && priceFrom > a['price']) return false;
				if (priceTo != null && priceTo < a['price']) return false;
				return checkedBoxes.includes(a['industry']);
			});
			result.sort(function (a, b) {
				if(sortOrder == 'Low to High'){
					return a[timeFrame] > b[timeFrame] ? 1 : -1;
				}
				return a[timeFrame] < b[timeFrame] ? 1 : -1;
			});
			result.forEach(function (item, index) {
				var color = 'grey';
				var needPlus = '';
				if (item['1D_change'] > 0) {
					color = 'green';
					needPlus = '+';
				} else if (item['1D_change'] < 0) {
					color = 'red';
				}
				stockListHTML +=
					`<a onclick="stockChoose(` + item['id'] + `)" id="stock_id_` + item['id'] + `" class="stock-block">
						<img class="stocklist-image" src="img/` + item['logo'] + `" width="100px" height="100px">
						<div class="stock-desc" width = "200px">
							<h1 class="stock-name">` + item['name'] + `</h1>
							<h3 class="stock-desc-par">
								<span style="font-weight: bold;">Industry: </span>
								<span>` + item['industry'] + `</span>
							</h3>
							<h3 class="stock-desc-par">
								<span style="font-weight: bold;">Price: </span>
								<span style="color:` + color + `;">` + item['price'] + `$  ` + needPlus + item['1D_change'] + `(` + item['1D_perc_change'] + `%)</span>
							</h3>
						</div>
					</a>`
				console.log(item, index);
			});
			document.getElementById('main-content').innerHTML = stockListHTML;

		});
}


router.on({
	'/contact': function () {
		document.getElementById('main-div').innerHTML = contactHTML;
		console.log('contact');
	},
	'/about': function () {
		document.getElementById('main-div').innerHTML = aboutHTML;
		console.log('about');
	},
	'*': function () {
		handleHome();
		console.log('home');
	},
	'/stock/:id/': function (params) {
		handleStock(params.id);
		console.log(params.id)
	}
}).resolve();


function stockChoose(id) {
	router.navigate('/stock/' + id);
}


function getCheckedBoxes(chkboxName) {
	var checkboxes = document.getElementsByName(chkboxName);
	var checkboxesChecked = [];
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			checkboxesChecked.push(checkboxes[i]);
			if (checkboxes[i].closest('.checkbox-container').textContent.trim() == 'All') {
				checkboxesChecked = checkboxes;
				break;
			}
		}
	}
	var res = []
	for (var i = 0; i < checkboxesChecked.length; i++) {
		res.push(checkboxesChecked[i].closest('.checkbox-container').textContent.trim());
	}

	return res;
}


function getCheckedRadio(radioName) {
	var radios = document.getElementsByName(radioName);
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			return radios[i].closest('.radio-container').textContent.trim();
		}
	}
	return null;
}



document.addEventListener('click', function (e) {
	var modal = document.getElementById("myModal");
	// var navHamburger = document.querySelector(".nav-hamburger");
	if (e.target.closest('.nav-hamburger')) {
		toggleHamburgerMenu();
	} else if (e.target.closest('#filter-modal')) {
		modal.style.display = "block";
	} else if (e.target == modal) {
		modal.style.display = "none";
	} else if (e.target.id == "side-filter-by-increase") {
		var checkedBoxes = getCheckedBoxes("side-type");
		var priceFrom = parseFloat(document.getElementById('side-from').value);
		var priceTo = parseFloat(document.getElementById('side-to').value);
		var sortOrder = getCheckedRadio('side-sort-order')
		var timeFrame = getCheckedRadio('side-time-frame')
		console.log(checkedBoxes, priceFrom, priceTo, sortOrder, timeFrame);
		handleFilterByIncrease(checkedBoxes, priceFrom, priceTo, sortOrder, timeFrame);

		console.log("side-filter-by-increase");
	} else if (e.target.id == "resp-filter-by-increase") {
		var checkedBoxes = getCheckedBoxes("resp-type");
		var priceFrom = parseFloat(document.getElementById('resp-from').value);
		var priceTo = parseFloat(document.getElementById('resp-to').value);
		var sortOrder = getCheckedRadio('resp-sort-order')
		var timeFrame = getCheckedRadio('resp-time-frame')
		console.log(checkedBoxes, priceFrom, priceTo, sortOrder, timeFrame);
		handleFilterByIncrease(checkedBoxes, priceFrom, priceTo, sortOrder, timeFrame);

		modal.style.display = "none";
	} else if (e.target.id == "side-filter-by-value") {
		var checkedBoxes = getCheckedBoxes("side-type");
		var priceFrom = parseFloat(document.getElementById('side-from').value);
		var priceTo = parseFloat(document.getElementById('side-to').value);
		var sortOrder = getCheckedRadio('side-sort-order')
		console.log(checkedBoxes, priceFrom, priceTo, sortOrder);
		console.log("side-filter-by-value");
		handleFilterByValue(checkedBoxes, priceFrom, priceTo, sortOrder);

	} else if (e.target.id == "resp-filter-by-value") {
		var checkedBoxes = getCheckedBoxes("resp-type");
		var priceFrom = parseFloat(document.getElementById('resp-from').value);
		var priceTo = parseFloat(document.getElementById('resp-to').value);
		var sortOrder = getCheckedRadio('resp-sort-order')
		console.log(checkedBoxes, priceFrom, priceTo, sortOrder);
		console.log("resp-filter-by-value");
		handleFilterByValue(checkedBoxes, priceFrom, priceTo, sortOrder);


		modal.style.display = "none";
	} else if (e.target.closest('#out')) {
		console.log(e.target.closest('#out').id);
		console.log('out');
	}

});