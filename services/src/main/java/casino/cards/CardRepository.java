package casino.cards;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends MongoRepository<Card, String> {
    public Card findBySuitAndValue(String suit, String value);

//    public List<Card> findByLastName(String value);
}