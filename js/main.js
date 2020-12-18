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
		<h3 style="margin-bottom: 5px">Filter by current value</h3>
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
		<h3 style="margin-bottom: 5px">Filter by current value</h3>
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


<div id="side-menu" class="side-menu"> 
 ${filterSideMenuHTML}
</div>

<div id="main-content" class="main-content"></div>
</div>
`

var contactHTML = `
<div class="contact-container">
  <div style="text-align:center">
    <h2>Contact Us</h2>
    <p>Email: FindStocks@gmail.com </p>
    <p>Mobile: +995 595 99 99 99</p>
  </div>
  <div class="contact-row">
    <div class="contact-column">
      <img src="img/background.jpg" style="width:100%">
    </div>
    <div class="contact-column">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
        <label for="country">Country</label>
        <select id="country" name="country">
		<option value="usa">Georgia</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="usa">England</option>
          <option value="usa">Spain</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
		<input id="submit_question" type="submit" value="Submit">
    </div>
  </div>
</div>


`

var aboutHTML = `
<div class="about-section">
  <h1>About Us</h1>
  <p>We can help you find best stock for you!</p>
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
	<div class="column">
		<div class="card">
			<img class="person-image" src="img/buffett.jpg" alt="John">
			<div class="container">
			<h2>Warren Buffett</h2>
			<p class="title">Master</p>
			<p>Stock market genius.</p>
			<p>buffett@example.com</p>
			<p><button class="button">Contact</button></p>
			</div>
		</div>
	</div>
	<div class="column">
		<div class="card">
			<img class="person-image" src="img/buffett.jpg" alt="John">
			<div class="container">
			<h2>Warren Buffett</h2>
			<p class="title">Master</p>
			<p>Stock market genius.</p>
			<p>buffett@example.com</p>
			<p><button class="button">Contact</button></p>
			</div>
		</div>
	</div>
	<div class="column">
		<div class="card">
			<img class="person-image" src="img/buffett.jpg" alt="John">
			<div class="container">
			<h2>Warren Buffett</h2>
			<p class="title">Master</p>
			<p>Stock market genius.</p>
			<p>buffett@example.com</p>
			<p><button class="button">Contact</button></p>
			</div>
		</div>
	</div>
	<div class="column">
		<div class="card">
			<img class="person-image" src="img/buffett.jpg" alt="John">
			<div class="container">
			<h2>Warren Buffett</h2>
			<p class="title">Master</p>
			<p>Stock market genius.</p>
			<p>buffett@example.com</p>
			<p><button class="button">Contact</button></p>
			</div>
		</div>
	</div>
</div>
`

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

function getStockBlock(item, color, needPlus) {
	return `
	<a onclick="stockChoose(${item['id']})" id="stock_id_${item['id']}" class="stock-block">
		<img class="stocklist-image" src="img/${item['logo']}" width="100px" height="100px">
		<div class="stock-desc" width = "200px">
			<h1 class="stock-name">${item['name']}</h1>
			<h3 class="stock-desc-par">
				<span style="font-weight: bold;">Industry: </span>
				<span>${item['industry']}</span>
			</h3>
			<h3 class="stock-desc-par">
				<span style="font-weight: bold;">Price: </span>
				<span style="color:${color};">${item['price']}$  ${needPlus + item['1D_change']}(${item['1D_perc_change']}%)</span>
			</h3>
		</div>
	</a>
	`
}

function handleHome() {
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
				stockListHTML += getStockBlock(item, color, needPlus);
			});
			document.getElementById('main-content').innerHTML = stockListHTML;

		});
}


function getStock(item, colors,percChangeSign, timeFrame) {
	return `
	<div class="stock">
		<div class="stock-logo-container">	
			<img class="stock-logo" src="img/${item['logo']}" >
		</div>
		<div class="stock-desc">
			<h1>${item['name']}</h1>
			<h3 class="stock-desc-par">
				<span style="font-weight: bold;">Industry: </span>
				<span>${item['industry']}</span>
			</h3>
			<h3 class="stock-desc-par">
				<span style="font-weight: bold;">Price: </span>
				<span style="color:${colors[0]};">${item['price']}$  ${percChangeSign[0] + item['1D_change']}(${item['1D_perc_change']}%)</span>
			</h3>
			<div class="table-div">
				<table>
					<thead>
						<tr>
							<th>1 Day</th>
							<th>5 Day</th>
							<th>1 Month</th>
							<th>3 Months</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style="color:${colors[0]}">${percChangeSign[0] + item[timeFrame[0]+'_change']}$</td>
							<td style="color:${colors[1]}">${percChangeSign[1] + item[timeFrame[1]+'_change']}$</td>
							<td style="color:${colors[2]}">${percChangeSign[2] + item[timeFrame[2]+'_change']}$</td>
							<td style="color:${colors[3]}">${percChangeSign[3] + item[timeFrame[3]+'_change']}$</td>
						</tr>
						<tr>
							<td style="color:${colors[0]}">${percChangeSign[0] + item[timeFrame[0]+'_perc_change']}$</td>
							<td style="color:${colors[1]}">${percChangeSign[1] + item[timeFrame[1]+'_perc_change']}$</td>
							<td style="color:${colors[2]}">${percChangeSign[2] + item[timeFrame[2]+'_perc_change']}$</td>
							<td style="color:${colors[3]}">${percChangeSign[3] + item[timeFrame[3]+'_perc_change']}%</td>									
						</tr>
					</tbody>
				</table>
			</div>
		</div>

	</div>
	`;
}

function handleStock(id) {
	fetch('data/stocks.json')
		.then(response => response.json())
		.then((result) => {
			for(var i = 0; i < result.length; i++){
				var item = result[i];
				if(item['id'] != id) {continue;}
				var timeFrame = ['1D', '5D', '1M', '3M'];
				var colors = ['grey', 'grey', 'grey', 'grey'];
				var percChangeSign = ['', '', '', ''];
				for(var j = 0; j < timeFrame.length; j++){
					if (item[timeFrame[j] + '_change'] > 0) {
						colors[j] = 'green';
						percChangeSign[j] = '+';
					} else if (item[timeFrame[j] + '_change'] < 0) {
						colors[j] = 'red';
					} 
				}
				
				document.getElementById('main-div').innerHTML = 
				`
					<div class="stock-div">
						${getStock(item, colors, percChangeSign, timeFrame)}
						<div class="news-div">
							<div class="news-header">
								<h1> Find Important news regarding stock marker </h1>
							</div>
							<div class="news-list">
								<a class="news-container" href="https://edition.cnn.com/">
									<div class="news-img-container">
										<img src="img/cnn.png" height="150px" width="150px">
									</div>
									<div class="news-desc">
										<h2>Shocking news into Stock Busines!!!!</h2>
										<p>FBI can confirm that there was a fraud committed by...</p>
									</div>
								</a>

								<a class="news-container" href="https://www.foxnews.com/">
									<div class="news-img-container">
										<img src="img/foxnews.png" height="150px" width="150px">
									</div>
									<div class="news-desc">
										<h2>Is Warren Buffett in trouble?</h2>
										<p>Multiple sources have confirmed that Mr. Warren is under inversigation for...</p>
									</div>
								</a>

								<a class="news-container" href="https://edition.cnn.com/">
									<div class="news-img-container">
										<img src="img/cnn.png" height="150px" width="150px">
									</div>
									<div class="news-desc">
										<h2>Shocking news into Stock Busines!!!!</h2>
										<p>FBI can confirm that there was a fraud committed by...</p>
									</div>
								</a>

								<a class="news-container" href="https://www.foxnews.com/">
									<div class="news-img-container">
										<img src="img/foxnews.png" height="150px" width="150px">
									</div>
									<div class="news-desc">
										<h2>Is Warren Buffett in trouble?</h2>
										<p>Multiple sources have confirmed that Mr. Warren is under inversigation for...</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				`;
				return;
			}
		});
}


function getStockBlock(item, color, needPlus) {
	return `
	<a onclick="stockChoose(${item['id']})" id="stock_id_${item['id']}" class="stock-block">
		<img class="stocklist-image" src="img/${item['logo']}" width="100px" height="100px">
		<div class="stock-desc" width = "200px">
			<h1 class="stock-name">${item['name']}</h1>
			<h3 class="stock-desc-par">
				<span style="font-weight: bold;">Industry: </span>
				<span>${item['industry']}</span>
			</h3>
			<h3 class="stock-desc-par">
				<span style="font-weight: bold;">Price: </span>
				<span style="color:${color};">${item['price']}$  ${needPlus + item['1D_change']}(${item['1D_perc_change']}%)</span>
			</h3>
		</div>
	</a>
	`
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
				if (sortOrder == 'Low to High') {
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
				stockListHTML += getStockBlock(item, color, needPlus);

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
				if (sortOrder == 'Low to High') {
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
				stockListHTML += getStockBlock(item, color, needPlus);
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
	if (e.target.closest('.nav-hamburger')) {
		toggleHamburgerMenu();
	} else if (e.target.closest('#filter-modal')) {
		document.getElementById('modal-content').innerHTML = filterResponsiveMenuHTML;
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
	} else if (e.target.id == 'submit_question') {
		document.getElementById('modal-content').innerHTML = `
		<h1 style="height: 300px; text-align:center; margin-top:200px;" >
			Thank You.
			Your opinion is very important to us!
		</h1>`;
		modal.style.display = "block";
		router.navigate('');
	}

});