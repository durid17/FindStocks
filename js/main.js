var filterMenuHTML =
	`
<div class="filter-menu">

	<div class="filter-header-div">
		<h1>Filter</h1>
	</div>

	<div class="filter-block">
		<h2 class="filter-block-title">Type</h2>
		<label class="checkbox-container">All
			<input type="checkbox" checked="checked" name="type">
			<span class="checkbox-checkmark"></span>
		</label>
		<label class="checkbox-container">Technology
			<input type="checkbox" name="type">
			<span class="checkbox-checkmark"></span>
		</label>
		<label class="checkbox-container">Farma
			<input type="checkbox" name="type">
			<span class="checkbox-checkmark"></span>
		</label>
		<label class="checkbox-container">Other
			<input type="checkbox" name="type">
			<span class="checkbox-checkmark"></span>
		</label>
	</div>

	<div class="filter-block">
		<h2 class="filter-block-title">Prices</h2>
		<div class="filter-block-content">
			<div>
			<input type="number" class="from" name="from" placeholder="From">
			<input type="number" class="to" name="to" placeholder="To">
			</div>
			

		</div>
	</div>

	<div class="filter-block">
		<label class="radio-container">Low to High
			<input type="radio" checked="checked" name="sort-order">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">High to Low
			<input type="radio" name="sort-order">
			<span class="checkmark"></span>
		</label>

	</div>

	<div class="filter-block">
		<h3>Filter by current value</h3>
		<button class="filter-by-value" >Filter by current value</button>
	</div>

	<div class="filter-block">
		<h2>Filter by increase</h2>
		<label class="radio-container">1D
			<input type="radio" checked="checked" name="time-frame">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">5D
			<input type="radio" name="time-frame">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">1M
			<input type="radio" name="time-frame">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">3M
			<input type="radio" name="time-frame">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">6M
			<input type="radio" name="time-frame">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">MAX
			<input type="radio" name="time-frame">
			<span class="checkmark"></span>
		</label>


		<button class="filter-by-increase">Filter by increase</button>
	</div>
</div>
`

var homeHTML =
	`

<div id="filter-modal" class="filter-modal">
	<img id="filter-image" src="img/filter.png">
	<div id="filter-modal-text" class="filter-modal-text">
		<h2 id="filter-modal-text-header">Filter</h2>
	</div>
</div>


<div id="side-menu" class="side-menu"> `
	+ filterMenuHTML +
	`
</div>

<div id="main-content" class="main-content">
	
	

</div>
`


{/* <a onclick="stockChoose(42)" id="stock_id_42" class="stock-block">
		<img class="stocklist-image" src="img/google-logo.png" width="100px" height="100px">
		<div class="stock-desc" width = "200px">
			<h1 class="stock-name">Google</h1>
			<h3 class="stock-desc-par">
				<span style="font-weight: bold;">Industry: </span>
				<span>Technology</span>
			</h3>
			<h3 class="stock-desc-par">
				<span style="font-weight: bold;">Price: </span>
				<span style="color:green;">3332.321$ + 15.04(0.5%)</span>
			</h3>
		</div>
	</a> */}

var contactHTML = `<h1>Contact<\h1>`
var aboutHTML = `
<h1>About<\h1>
`

var root = null;
var useHash = true;
var hash = '#';
var router = new Navigo(root, useHash, hash);

function toggleHamburgerMenu() {
	var navLinks = document.querySelector(".nav-links");
	var links = document.querySelectorAll(".nav-links li");
	navLinks.classList.toggle("open");
	links.forEach(link => {
		link.classList.toggle("fade");
	});
}

function handleHome(){
	document.getElementById('modal-content').innerHTML = filterMenuHTML;
	document.getElementById('main').innerHTML = homeHTML;

	fetch('data/stocks.json')
		.then(response => response.json())
		.then((result) => {
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
				console.log(item, index);
			});
			document.getElementById('main-content').innerHTML = stockListHTML;

		});
}

function handleStock(id){
	document.getElementById('main').innerHTML = '' + id;
}

router.on({
	'/contact': function () {
		document.getElementById('main').innerHTML = contactHTML;
		console.log('contact');
	},
	'/about': function () {
		document.getElementById('main').innerHTML = aboutHTML;
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


document.addEventListener('click', function (e) {
	var modal = document.getElementById("myModal");
	var navHamburger = document.querySelector(".nav-hamburger");

	if (e.target == navHamburger) {
		toggleHamburgerMenu();
	} else if (e.target.closest('#filter-modal')) {
		modal.style.display = "block";
	} else if (e.target == modal) {
		modal.style.display = "none";
	} else if (e.target.className == "filter-by-increase") {
		console.log("filter-by-increase");
	} else if (e.target.className == "filter-by-value") {
		console.log("filter-by-value");
	} else if (e.target.closest('#out')) {
		console.log(e.target.closest('#out').id);
		console.log('out');
	}
});