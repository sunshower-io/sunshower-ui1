package io.hasli.model.core.auth;

import io.hasli.jpa.flyway.FlywayConfiguration;
import io.hasli.persist.core.ConfigurationSourceDataSourceConfiguration;
import io.hasli.persist.core.DatabaseConfiguration;
import io.hasli.persist.hibernate.HibernateConfiguration;
import io.hasli.test.common.PropertyConfigurationSourceConfiguration;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.hamcrest.core.IsNot.not;
import static org.junit.Assert.assertThat;

/**
 * Created by haswell on 10/17/16.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {
        FlywayConfiguration.class,
        DatabaseConfiguration.class,
        HibernateConfiguration.class,
        PropertyConfigurationSourceConfiguration.class,
        ConfigurationSourceDataSourceConfiguration.class
})
@Transactional
public class UserPersistenceTest {

    @PersistenceContext
    private EntityManager entityManager;

    @Test
    public void ensureEntityManagerIsInjected() {
        assertThat(entityManager, is(not(nullValue())));
    }

    @Test
    public void ensureSavingPersonWorks() {
        entityManager.persist(new User());
    }
}
