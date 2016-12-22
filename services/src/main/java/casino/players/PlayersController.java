package casino.players;

import java.util.ArrayList;

import casino.exceptions.Http400Exception;
import casino.exceptions.Http404Exception;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PreDestroy;

@RestController
public class PlayersController {

    @Autowired
    private PlayerRepository repository;

    private ArrayList getPlayersList() {
        ArrayList playersList = new ArrayList();

        for (Player player : repository.findAll()) {
            System.out.println(player);
            playersList.add(player);
        }
        return playersList;
    }

    @RequestMapping(value = "/casino/players", method = RequestMethod.GET)
    public Players players() {
        return new Players(getPlayersList());
    }

    @RequestMapping(value = "/casino/players/{name}", method = RequestMethod.GET)
    public Player player(@PathVariable(value = "name") String name) {
        Player player = repository.findByFirstName(name);
        if (player == null) {
            throw new Http404Exception();
        }
        return player;
    }

    @RequestMapping(value = "/casino/players", method = RequestMethod.DELETE)
    public Players deleteAllPlayers() {
        repository.deleteAll();
        return new Players(getPlayersList());
    }

    @RequestMapping(value = "/casino/players", method = RequestMethod.POST, consumes = "application/json")
    public Players addPlayer(@RequestBody Player player) {
        if (player.isValid()) {
            repository.save(player);
        } else {
            throw new Http400Exception();
        }
        return new Players(getPlayersList());
    }

    @PreDestroy
    public void byeBye () {
        System.out.println("Bye bye");
    }
}