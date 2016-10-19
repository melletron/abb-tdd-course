package casino.cards;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CardRepository extends MongoRepository<Card, String> {
    public Card findByFirstName(String firstName);

    public List<Card> findByLastName(String lastName);
}