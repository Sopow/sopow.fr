	/* -----------------------------------
		1. Switch pages on click
	----------------------------------- */

	const [elements, clicks] = [
	  [document.querySelector(".about"), document.querySelector(".experience"), document.querySelector(".contact")],
	  [document.getElementById("about"), document.getElementById("experience"), document.getElementById("contact")]
	];

	function Name() {
	  elements.forEach(({
	    classList
	  }) => {
	    classList.add("invisible");
	    classList.remove("switch_page");
	    document.getElementsByClassName('content')[0].style.display = 'flex';
	  })
	}

	document.getElementById("home").addEventListener("click", Name)

	clicks.forEach((click, i) => {
	  (({
	    classList
	  }) => {
	    click.addEventListener("click", () => {
	      Name()
	      classList.remove("invisible");
	      classList.add("switch_page");
	      document.getElementsByClassName('content')[0].style.display = 'none';
	    });
	  })(elements[i])
	})


	/* -----------------------------------
		2. Change words home title
	----------------------------------- */

	let hidden = document.querySelector('.hidden');
	let visible = document.querySelector('.visible');

	let b = document.querySelectorAll('b');
	let i = 0;

	function change() {
	  b[i].classList.add('hidden');
	  b[i].classList.remove('visible');
	  i++;
	  if (i >= b.length) {
	    i = 0;
	  }
	  b[i].classList.add('visible');
	  b[i].classList.remove('hidden');
	}
	setInterval(change, 2000);


	/* -----------------------------------
		3. Loader
	----------------------------------- */

	let loader = document.querySelector('.loader');
	let body = document.querySelector('body');

	body.style.overflowY = 'hidden';
	window.addEventListener('load', (load) => {
	  if (load.timeStamp > 2000) {
	    loader.remove();
	    body.style.overflowY = 'auto';
	  } else {
	    setTimeout(() => {
	      loader.remove();
	      body.style.overflowY = 'auto';
	    }, 2000);
	  }
	})

	/* -----------------------------------
		4. Border effect about page
	----------------------------------- */

	let card = document.querySelectorAll('.card-skills');
	let border = document.querySelectorAll('.border');

	card.forEach((card, i) => {
	  card.addEventListener('mouseover', () => {
	    border[i].style.border = '1px solid #486ad9';
	  });
	  card.addEventListener('mouseout', () => {
	    border[i].style.border = '1px solid #fff';
	  });
	})

	/* -----------------------------------
        4. Draw percentage circle
    ----------------------------------- */

	const canvas = document.getElementsByTagName('canvas')[0];
	const radius = (canvas.height < canvas.width ? canvas.height : canvas.width) / 3

	function percentToRadians(percentage = 0) {
	  return (percentage * 360 / 100 + 270) / 180 * Math.PI;
	}

	/**
	 * 
	 * @param { number } percentage 
	 * @param { number } radius 
	 * @param { HTMLElement } canvas 
	 */
	function drawPercentageCircle(percentage, radius, canvas) {
	  const context = canvas.getContext('2d');
	  const x = canvas.width / 2;
	  const y = canvas.height / 2;
	  const startAngle = percentToRadians();
	  const endAngle = percentToRadians(percentage);

	  canvas.style.backgroundColor = 'transparent';

	  context.beginPath();
	  context.arc(x, y, radius, startAngle, endAngle, true);
	  context.lineWidth = 7;

	  context.strokeStyle = '#0e0f10';
	  context.stroke();


	  context.beginPath();
	  context.arc(x, y, radius, startAngle, endAngle, false);
	  context.lineWidth = 7;

	  context.strokeStyle = 'white';
	  context.stroke();
	}

	drawPercentageCircle(90, radius, document.getElementById('circle-first'));
	drawPercentageCircle(90, radius, document.getElementById('circle-second'));
	drawPercentageCircle(80, radius, document.getElementById('circle-third'));

	/* -----------------------------------
	    5. Appear name of framework hover
	----------------------------------- */

	let react = document.querySelector('.react-icon');
	let express = document.querySelector('.express-icon');
	let electron = document.querySelector('.electron-icon');

	let react_text = document.querySelector('.react-text');
	let express_text = document.querySelector('.express-text');
	let electron_text = document.querySelector('.electron-text');


	react_text.style.display = 'none';
	express_text.style.display = 'none';
	electron_text.style.display = 'none';

	react.addEventListener('mouseover', () => {
	  react_text.style.display = 'block';
	})
	react.addEventListener('mouseout', () => {
	  react_text.style.display = 'none';
	})

	express.addEventListener('mouseover', () => {
	  express_text.style.display = 'block';
	})
	express.addEventListener('mouseout', () => {
	  express_text.style.display = 'none';
	})

	electron.addEventListener('mouseover', () => {
	  electron_text.style.display = 'block';
	})
	electron.addEventListener('mouseout', () => {
	  electron_text.style.display = 'none';
	})

	let check = document.querySelector('.rightabsolute');
	let side = document.querySelector('.side-bar');
	let logo = document.querySelector('.image-logo');
	let side_icons = document.querySelectorAll('.fas')
	let pages = [
	  document.querySelector('.about'),
	  document.querySelector('.experience'),
	  document.querySelector('.contact')
	]

	check.addEventListener('click', () => {
	  side.style.display = 'block'
	  side.style.width = '100vw';
	  side.style.animation = 'side-bar-appear 1s ease-in-out';
	  side.style.animationFillMode = 'forwards';
	  side.style.backgroundColor = '#000';
	  side.style.zIndex = '10';

	  logo.style.height = '150px';

	  side_icons.forEach((icon) => {
	    icon.style.fontSize = '4rem';
	    icon.style.padding = '1.5rem';
	    document.querySelector('.side-bar_icons').style.height = '80%'
	  })

	  side_icons.forEach((icon) => {
	    icon.addEventListener('click', () => {
	      side.style.animation = 'side-bar-disappear 1s ease-in-out';
	      side.style.display = 'none';
	      side.style.animationFillMode = 'forwards';

	      pages.forEach((page) => {
	        page.style.animation = 'page0 1s ease-in-out';
	        page.style.animationFillMode = 'forwards';
	        page.style.width = '100%';
	        page.style.marginLeft = '0';
	      })
	    })
	  })
	})

	/* -----------------------------------
        6. Form contact
    ----------------------------------- */

	let form = document.getElementById('form-data');

	form.addEventListener('submit', async function (e) {
		e.preventDefault();
		let data = new FormData(form);
		let json = {
			embeds: [
				{
					title: `Destinataire: ${data.get('name')} (${data.get('email')})`,
					description: `Sujet : ${data.get('subject')}\n Message : ${data.get('message')}`,
					color: 0x00ff00
				}
			]    
		}
		const myInit = {
			method: 'POST',
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(json)
		}

		await fetch(form.action, myInit)
		.then(() => {
			let span = document.querySelector('.form-success');
			span.style.display = 'block';
			span.style.animation = 'fadein 1s ease-in-out';
			setTimeout(() => {
				window.location.reload()
			}, 2000)
		})
	})