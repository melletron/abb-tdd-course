package casino.players;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PlayerRepository extends MongoRepository<Player, String> {
    public Player findByFirstName(String firstName);

    public List<Player> findByLastName(String lastName);
}