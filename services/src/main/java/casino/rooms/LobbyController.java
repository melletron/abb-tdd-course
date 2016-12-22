package casino.rooms;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class LobbyController {

    @RequestMapping("/rooms/lobby")
    public String greeting (@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "greetings";
    }

    @PreAuthorize("authenticated")
    @RequestMapping("/rooms/lobby/black-jack")
    public String blackJack (@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", "Black Jack");
        return "greetings";
    }
}
