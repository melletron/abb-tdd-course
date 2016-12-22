package casino.players;

import org.springframework.stereotype.Service;
import java.util.ArrayList;

public class Players {

    private final ArrayList content;

    public Players(ArrayList content) {
        this.content = content;
    }

    public ArrayList getContent() {
        return content;
    }
}