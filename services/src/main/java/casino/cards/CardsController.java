package casino.cards;

import casino.exceptions.Http404Exception;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class CardsController {

    @Autowired
    private CardRepository repository;

    private ArrayList getPlayersList() {
        ArrayList playersList = new ArrayList();

        for (Card player : repository.findAll()) {
            System.out.println(player);
            playersList.add(player);
        }
        return playersList;
    }

    @RequestMapping(value = "/casino/cards", method = RequestMethod.GET)
    public Cards players() {
        return new Cards(new ArrayList());
    }

    @RequestMapping(value = "/casino.cards/{name}", method = RequestMethod.GET)
    public Card player(@PathVariable(value = "name") String name) {
        Card player = repository.findByFirstName(name);
        if (player == null) {
            throw new Http404Exception();
        }
        return player;
    }

    @RequestMapping(value = "/casino.cards", method = RequestMethod.DELETE)
    public Cards deleteAllPlayers() {
        repository.deleteAll();
        return new Cards(getPlayersList());
    }

    @RequestMapping(value = "/casino.cards", method = RequestMethod.POST, consumes = "application/json")
    public Cards addPlayer(@RequestBody Card player) {
        if (player.isValid()) {
            repository.save(player);
        }
        return new Cards(getPlayersList());
    }
}