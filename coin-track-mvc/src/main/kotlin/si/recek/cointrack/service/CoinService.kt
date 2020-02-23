package si.recek.cointrack.service

import org.springframework.stereotype.Service
import si.recek.cointrack.model.CoinValue
import si.recek.cointrack.model.CoinValues
import si.recek.cointrack.repository.CoinValueRepository

@Service
class CoinService(private val coinValueRepository: CoinValueRepository) {
    fun getAllValuesForCoin(coinSymbol: String): CoinValues {
        return CoinValues(coinSymbol, coinValueRepository.getAllByCoinSymbol(coinSymbol).sortedBy {it.time})
    }

}
