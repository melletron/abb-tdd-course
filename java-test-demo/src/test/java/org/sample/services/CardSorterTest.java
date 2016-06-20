package org.sample.services;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@RunWith(MockitoJUnitRunner.class)
public class CardSorterTest {

    private static final String sortedDeck = "♠A;♠K;♠Q;♠J;♠10;♠9;♠8;♠7;♠6;♠5;♠4;♠3;♠2;♥A;♥K;♥Q;♥J;♥10;♥9;♥8;♥7;♥6;♥5;♥4;♥3;♥2;♦A;♦K;♦Q;♦J;♦10;♦9;♦8;♦7;♦6;♦5;♦4;♦3;♦2;♣A;♣K;♣Q;♣J;♣10;♣9;♣8;♣7;♣6;♣5;♣4;♣3;♣2";
    private static final String[] shuffledCards =  {"♥4", "♠A", "♣6", "♥J", "♦6", "♦4", "♠K", "♣J", "♣2", "♣4", "♦3", "♥6", "♣9", "♦9", "♠8", "♥K", "♦8", "♦K", "♥5", "♠10", "♥7", "♠3", "♠2", "♣A", "♥3", "♥A", "♣8", "♦10", "♠7", "♦J", "♠9", "♣5", "♥8", "♣K", "♣Q", "♦5", "♥2", "♠6", "♦2", "♥10", "♣3", "♠5", "♥9", "♥Q", "♠Q", "♠J", "♦Q", "♦A", "♣7", "♦7", "♣10", "♠4"};

    private CardSorter cardSorter;

    @Before
    public void setup(){
        cardSorter = new CardSorter();
    }

    @Test
    public void itShouldSortCards() throws Exception {
        String[] sortedCards = cardSorter.sort(shuffledCards);

        assertThat(sortedCards, is(arrayWithSize(52)));
        assertThat(sortedCards, is(arrayContaining(sortedDeck.split(";"))));
    }
}