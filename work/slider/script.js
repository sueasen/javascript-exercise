/**
 * スライダー、サムネイルにイベントを設定します
 */
window.addEventListener('load', (e) => {

	let img = document.querySelector('.image_box img');
	let slideImages = new Array(document.querySelectorAll('.thumbnail img').length);
	document.querySelectorAll('.thumbnail img').forEach((dom, i) => {
		fetch("https://aws.random.cat/meow")
			.then(response => response.json())
			.then(json => {
				console.log(json);
				dom.src = json.file;
				dom.addEventListener('load', (e) => removeLoading());
				dom.height = 300;
				dom.onclick = () => img.src = dom.src;
				slideImages[i] = dom.src;

				if (slideImages.includes(undefined)) return;
				document.querySelector('#prev').onclick = () => slideMoveClick(img, slideImages, -1);
				document.querySelector('#next').onclick = () => slideMoveClick(img, slideImages, 1);
				img.src = slideImages[0];
				img.addEventListener('load', (e) => removeLoading());
			})
			.catch((error) => console.log(error));
	});
});

/**
 * slide の prev, next を押下時の処理します
 * @param {HTMLImageElement} img imgタグ
 * @param {Array} slideImages スライダー画像配列
 * @param {Number} shift シフト値
 */
function slideMoveClick(img, slideImages, shift) {
	img.src = slideImages[(slideImages.length + slideImages.indexOf(img.src) + shift) % slideImages.length];
	img.animate(
		{
			transform: ['translateX(' + (-30 * shift) + 'px)', 'translateX(0px)']
			, opacity: [0.2, 1]
		}
		, {
			duration: 500,
			iterations: 1
		}
	);
}

/**
 * slide 関連の img が完全に読み込まれた場合、loading を削除します
 */
function removeLoading() {
	let imageCompleteds = [...document.querySelectorAll('.thumbnail img')].map(d => d.complete);
	imageCompleteds.push(document.querySelector('.image_box img').complete);
	if (imageCompleteds.includes(false)) return;
	document.querySelector('.loading')?.remove();
}
