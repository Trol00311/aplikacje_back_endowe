package tszewczyk.ApplicationBook.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tszewczyk.ApplicationBook.dao.entity.Book;
import tszewczyk.ApplicationBook.menager.BookMenager;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class BookApi {

    private BookMenager bookList;

    @Autowired
    public BookApi(BookMenager bookMenager) {
        this.bookList = bookMenager;
    }




    ///API!!!!

    //Wyciąganie wszystkich książek
    @GetMapping("/all")
    public Iterable<Book> getAllBook() {
    return bookList.findAll();
    }

    //Wyciagniecie pojedynczej ksiazki
    @GetMapping
    public Optional<Book> getById(@RequestParam Long index) {
         return bookList.findById(index);
    }
    //Dodawanie
    @PostMapping
    public Book addBook(@RequestBody Book Book) {
        return bookList.save(Book);
    }

    //aktualizacja
    @PutMapping
    public Book updateBook(@RequestBody Book Book) {
        return bookList.save(Book);
    }

    @DeleteMapping
    public void deleteBook(@RequestParam Long index) {
        bookList.remove(index);
    }


}
