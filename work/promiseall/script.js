/**
 * スライダー、サムネイルにイベントを設定します
 */
window.addEventListener('load', async (e) => {
	const results = [];
	for (const dom of document.querySelectorAll('.thumbnail img')) {
		results.push(fetch("https://aws.random.cat/meow")
			.then(response => response.json())
			.then(json => new Promise((resolve, reject) => resolve({ 'json': json, 'img': dom })))
			.catch((error) => console.log(error)));
	}

	let img = document.querySelector('.image_box img');
	let slideImages = [...(await Promise.all(results))].map(result => {
		console.log(result.json);
		result.img.src = result.json.file;
		result.img.onload = () => removeLoading();
		result.img.height = 300;
		result.img.onclick = () => img.src = result.img.src;
		return result.img.src;
	});
	document.querySelector('#prev').onclick = () => slideMoveClick(img, slideImages, -1);
	document.querySelector('#next').onclick = () => slideMoveClick(img, slideImages, 1);
	img.src = slideImages[0];
	img.onload = () => removeLoading();
});

function apiJson(url) {
	return fetch("https://aws.random.cat/meow")
		.then(response => response.json())
		.catch((error) => console.log(error));
}

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
	let imageCompleteds = [...document.querySelectorAll('.thumbnail img, .image_box img')].map(d => d.complete);
	if (imageCompleteds.includes(false)) return;
	document.querySelector('.loading')?.classList.toggle('is-loading');
	document.querySelectorAll('.thumbnail img, .image_box img').forEach(img => img.onload = '');
}
