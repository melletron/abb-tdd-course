package casino.cards;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CardRepository extends MongoRepository<Card, String> {
    public Card findBySuitAndValue(String suit, String value);

//    public List<Card> findByLastName(String value);
}