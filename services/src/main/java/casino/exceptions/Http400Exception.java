package casino.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by melle on 19/10/16.
 */
@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Wrong payload")  // 404
public class Http400Exception extends RuntimeException {

}