package io.hasli.core.security;

import io.hasli.model.core.auth.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Created by haswell on 10/15/16.
 */
@Path("security")
@Produces(MediaType.APPLICATION_XML)
public interface CredentialService extends UserDetailsService {

    @GET
    @Path("/authenticate")
    User authenticate();
}