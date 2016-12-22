package casino.cards;

import org.springframework.stereotype.Service;
import java.util.ArrayList;

public class Cards {

    private final ArrayList content;

    public Cards(ArrayList content) {
        this.content = content;
    }

    public ArrayList getContent() {
        return content;
    }
}