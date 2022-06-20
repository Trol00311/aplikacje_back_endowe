package tszewczyk.ApplicationBook;

import java.time.LocalDate;

public class Book {

    private Long id;

    private String title;

    private String author;

    private LocalDate productDate;


    public Book() {
    }

    //do tworzenia obiektu z wypełnionymi polami
    public Book(Long id, String title, String author, LocalDate productDate) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.productDate = productDate;
    }

    //Getery i setery
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public LocalDate getProductDate() {
        return productDate;
    }

    public void setProductDate(LocalDate productDate) {
        this.productDate = productDate;
    }

}
