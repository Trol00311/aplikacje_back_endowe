package tszewczyk.ApplicationBook.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import tszewczyk.ApplicationBook.dao.entity.Book;

@Repository
public interface BookRepo extends CrudRepository<Book, Long> {
}
