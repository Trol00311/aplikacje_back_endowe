package tszewczyk.login;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class LoginConfig extends WebSecurityConfigurerAdapter {

    //Dodanie użykowników
    @Bean
    public UserDetailsService userDetailsService()
    {
        UserDetails user = User.withDefaultPasswordEncoder()
                .username("admin")
                .password("admin1")
                .roles("ADMIN")
                .build();

       return new InMemoryUserDetailsManager(user);
    }

    //uprawnienia
    @Override
    protected void configure(HttpSecurity http) throws Exception {
            http.authorizeRequests()
                    .antMatchers("http://localhost:8080/all").permitAll()
                    .anyRequest().hasRole("ADMIN")
                    .and()
                    .formLogin().permitAll();
    }
}
