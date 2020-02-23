package si.recek.cointrack.repository

import si.recek.cointrack.model.Coin
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import si.recek.cointrack.model.CoinValue
import java.time.LocalDateTime

@Repository
interface CoinValueRepository: MongoRepository<CoinValue,String> {

    fun getAllByCoinSymbol(symbol: String) : List<CoinValue>;
    fun getAllByTimeBetween(from:LocalDateTime, until:LocalDateTime)
}