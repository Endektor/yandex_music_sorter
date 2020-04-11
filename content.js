if (document.location.href.slice(8,20) == "music.yandex") {

	function TEST () {
		console.log("----TEST----");
	}
	
	function Scan (names, songs) {
		songs = document.getElementsByClassName("d-track_in-lib");
		for (var i = 0; i < songs.length; i++) {
			song_id = songs[i].getElementsByClassName("d-track__id")[0].textContent;
			names[song_id] = songs[i].getElementsByClassName("d-track__title")[0].text;
		}
		songs[songs.length - 1].scrollIntoView();
		if (window.pageYOffset == 100) {clearInterval(timer1)}
		console.log(names.length);
	}
	
	
	window.scrollTo(0, 0);
	var songs = [];
	var names = [];
	let timer1 = setInterval(Scan, 2000, names, songs);
	var names_counter = [];
	var second_counter = [];

	
	for (i in names) {
		if (names_counter[names[i]] != undefined) {
			(names_counter[names[i]] ++)
		} else {
			(names_counter[names[i]] = 1)
		}
	}
	for (var i = 0; i < songs.length; i++) {
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