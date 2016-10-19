package casino.players;

import org.springframework.data.annotation.Id;


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

    public boolean isValid() {
        if (firstName != null && lastName != null) {
            return true;
        }
        return false;
    }
}