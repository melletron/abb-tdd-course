package casino;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories
public class MongoConfiguration extends AbstractMongoConfiguration {

    @Value("${mongo.db_name}")
    private String mongoDbName;

    @Value("${mongo.db_host}")
    private String mongoDbHost;

    @Value("${mongo.db_port}")
    private Integer mongoDbPort;

    @Override
    protected String getDatabaseName() {
        return mongoDbName;
    }

    @Override
    public Mongo mongo() throws Exception {
        return new MongoClient(mongoDbHost, mongoDbPort);
    }

    @Override
    protected String getMappingBasePackage() {
        return "casino";
    }

}