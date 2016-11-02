package casino.cards;

import casino.exceptions.Http404Exception;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class CardsController {

    @Autowired
    private CardRepository repository;

    private ArrayList getCardsList() {
        ArrayList cardsList = new ArrayList();

        for (Card card : repository.findAll()) {
            cardsList.add(card);
        }
        return cardsList;
    }

    @RequestMapping(value = "/casino/cards", method = RequestMethod.GET)
    public Cards cards() {
        return new Cards(getCardsList());
    }

    @RequestMapping(value = "/casino/cards/{suit}/{value}", method = RequestMethod.GET)
    public Card card(@PathVariable(value = "suit") String suit, @PathVariable("value") String value) {
        Card card = repository.findBySuitAndValue(suit, value);
        if (card == null) {
            throw new Http404Exception();
        }
        return card;
    }

    @RequestMapping(value = "/casino/cards/random", method = RequestMethod.GET)
    public Card randomCard(@PathVariable(value = "suit") String suit, @PathVariable("value") String value) {

        Card card = repository.findBySuitAndValue(suit, value);
        if (card == null) {
            throw new Http404Exception();
        }
        return card;
    }

    @RequestMapping(value = "/casino/cards", method = RequestMethod.DELETE)
    public Cards deleteAllCards() {
        repository.deleteAll();
        return new Cards(getCardsList());
    }

    @RequestMapping(value = "/casino/cards", method = RequestMethod.POST, consumes = "application/json")
    public Cards addCard(@RequestBody Card card) {
        if (card.isValid()) {
            repository.save(card);
        }
        return new Cards(getCardsList());
    }
}