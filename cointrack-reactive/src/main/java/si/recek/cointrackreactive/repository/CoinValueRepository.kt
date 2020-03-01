package si.recek.cointrackreactive.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import org.springframework.stereotype.Repository
import reactor.core.publisher.Flux
import si.recek.cointrackreactive.model.CoinValue

@Repository
interface CoinValueRepository: ReactiveMongoRepository<CoinValue,String> {

    fun getAllByCoinSymbol(symbol: String) : Flux<CoinValue>;
    //fun getAllByTimeBetween(from:LocalDateTime, until:LocalDateTime)
}