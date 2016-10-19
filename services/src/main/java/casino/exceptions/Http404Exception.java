package casino.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by melle on 19/10/16.
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "No such resource")  // 404
public class Http404Exception extends RuntimeException {

}