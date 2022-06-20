package tszewczyk.ApplicationBook;


import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class BookApi {

    private List<Book> bookList;

    public BookApi() {
        bookList= new ArrayList<>();
        bookList.add(new Book(1L,"Dziady cz.III","Adam Mickiewicz", LocalDate.of(1832,1,1)));
        bookList.add(new Book(2L,"Ostatnie życzenie","Andrzej Sapkowski", LocalDate.of(1993,5,12)));
        bookList.add(new Book(3L,"Potop","Henryk Sienkiewicz", LocalDate.of(1886,11,22)));
    }
///API!!!!

    //Wyciąganie wszystkich książek
    @GetMapping("/all")
    public List<Book> getAllBook() {
    return bookList;
    }

    //Wyciagniecie pojedynczej ksiazki
    @GetMapping
    public Book getById(@RequestParam Long index) {
         Optional<Book> first = bookList.stream().filter(x -> x.getId() == index).findFirst();
         return first.get();
    }
    //Dodawanie
    @PostMapping
    public boolean addBook(@RequestBody Book Book) {
        return bookList.add(Book);
    }

    //aktualizacja
    @PutMapping
    public boolean updateBook(@RequestBody Book Book) {
        return bookList.add(Book);
    }

    @DeleteMapping
    public boolean deleteBook(@RequestParam Long index) {
        return bookList.removeIf(x->x.getId() == index);
    }


}
