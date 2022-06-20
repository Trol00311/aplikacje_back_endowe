package tszewczyk.ApplicationBook.menager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import tszewczyk.ApplicationBook.dao.BookRepo;
import tszewczyk.ApplicationBook.dao.entity.Book;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class BookMenager {

    private BookRepo bookRepo;

    @Autowired
    public BookMenager(BookRepo bookRepo) {
        this.bookRepo = bookRepo;
    }

    public Optional<Book> findById(Long id) {
        return bookRepo.findById(id);
    }

    public Iterable<Book> findAll() {
        return bookRepo.findAll();
    }

    public Book save(Book Book) {
        return bookRepo.save(Book);
    }

    public void remove(Long id) {
        bookRepo.deleteById(id);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDB(){
        save(new Book(1L,"Dziady cz.III","Adam Mickiewicz", LocalDate.of(1832,1,1)));
        save(new Book(2L,"Ostatnie życzenie","Andrzej Sapkowski", LocalDate.of(1993,5,12)));
        save(new Book(3L,"Potop","Henryk Sienkiewicz", LocalDate.of(1886,11,22)));

    }
}
