var filterMenuHTML =
    `
<div class="filter-menu">

	<div class="filter-header-div">
		<h2>Filter</h2>
	</div>

	<div class="filter-block">
		<h5 class="filter-block-title">Type</h5>
		<label class="radio-container">All
			<input type="checkbox" checked="checked" name="type">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">Tech
			<input type="checkbox" name="type">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">Farma
			<input type="checkbox" name="type">
			<span class="checkmark"></span>
		</label>
		<label class="radio-container">Other
			<input type="checkbox" name="type">
			<span class="checkmark"></span>
		</label>
	</div>

	<div class="filter-block">
		<h5 class="filter-block-title">Prices</h5>
		<div id="filter-price" class="filter-block-content">
			<label for="from">from:</label>
			<input type="number" id="from" name="from" placeholder="From">
			<label for="to">to:</label>
			<input type="number" id="to" name="to" placeholder="To">
			<label for="$">$</label>
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
		<h4>Filter by current value</h4>
		<button>Filter by current value</button>
	</div>


	<div class="filter-block">
	</div>

	<div class="filter-block">
		<h4>Filter by increase</h4>
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


		<button>Filter by increase</button>
	</div>
</div>
`

var homeHTML =
    `

<div id="filter-modal" class="filter-modal">
	<img id="filter-image" src="img/filter.png" width="50px" height="50px">
	<div id="filter-modal-text" class="filter-modal-text">
		<h2 id="filter-modal-text-header">Filter</h2>
	</div>
</div>


<div id="side-menu" class="side-menu"> `
    + filterMenuHTML +
    `
</div>

<div class="main-content">

	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>

</div>
`

var contactHTML = `<h1>Contact<\h1>`
var aboutHTML = `<h1>About<\h1>`

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


router.on({
    '/contact': function () {
        document.getElementById('main').innerHTML = contactHTML;
        console.log('contact');
    },
    '/about': function () {
        toggleHamburgerMenu();
        document.getElementById('main').innerHTML = aboutHTML;
        console.log('about');
    },
    '*': function () {
        document.getElementById('main').innerHTML = homeHTML;
        console.log('home');
    },
    '/stock/:id/': function (params) {
        console.log(params.id)
    }
}).resolve();



document.addEventListener('click', function (e) {
    var modal = document.getElementById("myModal");
    var navHamburger = document.querySelector(".nav-hamburger");
    
    if (e.target == navHamburger) {
        toggleHamburgerMenu();
    } else if (e.target.id == 'filter-modal' ||
        e.target.id == 'filter-image' ||
        e.target.id == 'filter-modal-text' ||
        e.target.id == 'filter-modal-text-header') {

        modal.style.display = "block";
    } else if (e.target == modal) {
        modal.style.display = "none";
    }
});