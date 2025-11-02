class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(newValue) {
        if (newValue < 0) {
            this._state = 0;
        } else if (newValue > 100) {
            this._state = 100;
        } else {
            this._state = newValue;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if (!book) return null;
        this.books = this.books.filter(item => item.name !== bookName);
        return book;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (!this.marks.hasOwnProperty(subject)) {
                this.marks[subject] = []
            }
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if (this.marks.hasOwnProperty(subject)) {
            let sumMarksSubject = 0;
            for (let i = 0; i < this.marks[subject].length; i++) {
                sumMarksSubject += this.marks[subject][i];
            }
            return parseFloat((sumMarksSubject / this.marks[subject].length).toFixed(2));
        }
        return 0;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        }
        let totalMarks = 0;
        for (let i = 0; i < subjects.length; i++) {
            let averageBySubject = this.getAverageBySubject(subjects[i]);
            totalMarks += averageBySubject;
        }
        return parseFloat((totalMarks / subjects.length).toFixed(2));
    }
}


