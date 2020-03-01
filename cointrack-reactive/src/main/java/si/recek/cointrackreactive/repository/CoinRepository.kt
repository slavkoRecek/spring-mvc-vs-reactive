package si.recek.cointrackreactive.repository

import si.recek.cointrackreactive.model.Coin
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import org.springframework.stereotype.Repository

@Repository
interface CoinRepository: ReactiveMongoRepository<Coin,String> {

}