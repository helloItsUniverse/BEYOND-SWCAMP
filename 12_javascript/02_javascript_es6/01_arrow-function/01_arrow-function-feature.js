/* 01. arrow-function/feature(화살표 함수의 특징) */

let theater = {
    store: '강남점',
    titles: ['파묘', 'Dune2', '웡카', '가여운 것들', '포켓몬스터'],

    showMovieList() {
        console.log(this.store);

        this.titles.forEach(
            title => console.log(this.store + ": " + title)
        );

        // this.titles.forEach(
        //     function(title) {
        //         console.log(this.store + ": " + title);
        //     }
        // )
    }
}

theater.showMovieList();