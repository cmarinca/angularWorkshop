import { Observable, of, fromEvent } from 'rxjs';

console.log('rx-basic ready!');

let books = ['Caperucita Roja', 'Los cuentos de tia Panchita'];

let books$ = new Observable(subscriber =>{
    for(let book of books){
        subscriber.next(book);
    }

    setTimeout(()=> {
        subscriber.complete();
    }, 2000);
});

let booksObserver = {
    next: (book: any) => console.log(`BOOK: ${book}`),
    error: (err: any) => console.log(`ERROR: ${err}`),
    complete: () => console.log(`Listo!`)
};

books$.subscribe(booksObserver);
books$.subscribe((book)=>{console.log(`Observador #2: Libro ${book}`)}, null, () =>{ console.log('Done')} );

let timer$ = new Observable(subscriber =>{
    let i = 0;
    let intervalID = setInterval(()=>{
        subscriber.next(i++);
    }, 1000);

    return ()=>{
        console.log('Terminando');
        clearInterval(intervalID);
    };
});

//timer$.subscribe(value => console.log(`Timer: ${value}`));

const clicks = fromEvent(document, 'click');
clicks.subscribe( x => console.log(x));