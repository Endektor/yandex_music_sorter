if (document.location.href.slice(8,20) == "music.yandex") {

	function TEST () {
		console.log("----TEST----");
	}
	
	function Scan (names, songs) {
		songs = document.getElementsByClassName("d-track_in-lib");
		for (let i = 0; i < songs.length; i++) {
			song_id = songs[i].getElementsByClassName("d-track__id")[0].textContent;
			names[song_id] = songs[i].getElementsByClassName("d-track__title")[0].text;
		}
		songs[songs.length - 1].scrollIntoView();
		if (window.pageYOffset - document.body.scrollHeight + document.body.offsetHeight == 0) {clearInterval(timer1)} //останавливает проверку когда страница в самом низу
		//Может некорректно работать для большиф стриниц, которые подгружаются в зесколько заходов
		console.log(names);
	}
	
	
	window.scrollTo(0, 0);
	let songs = [];
	let names = [];
	let timer1 = setInterval(Scan, 2000, names, songs);
	let names_counter = [];
	let second_counter = [];

	
	for (i in names) {
		if (names_counter[names[i]] != undefined) {
			(names_counter[names[i]] ++)
		} else {
			(names_counter[names[i]] = 1)
		}
	}
	for (let i = 0; i < songs.length; i++) {
		if (names_counter[names[i]] > 1){
			if (second_counter[names[i]] != undefined) {
				songs[i].style.backgroundColor="red";
			} else {
				(second_counter[names[i]] = 1)
				songs[i].style.backgroundColor="green";
			}
		}
	}
}