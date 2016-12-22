package casino.players;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

public class Player {

    @Id
    public String id;

    public String firstName;
    public String lastName;

    public Player() {
    }

    public Player(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return String.format(
                "Player[id=%s, firstName='%s', lastName='%s']",
                id, firstName, lastName);
    }

    @JsonIgnore
    public boolean isValid() {
        System.out.println(firstName + "  " + lastName);
        if (firstName != null && lastName != null) {
            return true;
        }
        return false;
    }
}