package casino.cards;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Card {

    @Id
    public String id;

    public String suit;
    public String value;

    public Card() {
    }

    public Card(String firstName, String lastName) {
        this.suit = firstName;
        this.value = lastName;
    }

    @Override
    public String toString() {
        return String.format(
                "Card[id=%s, suit='%s', value='%s']",
                id, suit, value);
    }

    public boolean isValid() {
        if (suit != null && value != null) {
            return true;
        }
        return false;
    }
}