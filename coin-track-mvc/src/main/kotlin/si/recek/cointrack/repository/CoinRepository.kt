package si.recek.cointrack.repository

import si.recek.cointrack.model.Coin
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface CoinRepository: MongoRepository<Coin,String> {

}