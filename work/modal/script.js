/**
 * モーダルの表示/非表示の操作を設定します
 */
document.querySelectorAll('.modal-proc').forEach(dom => {
	dom.addEventListener('click', () => {
		document.querySelector('.modalArea').classList.toggle('is-show');
	});
});
