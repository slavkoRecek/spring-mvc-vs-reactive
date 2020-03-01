package si.recek.cointrack.repository

import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.stereotype.Repository
import si.recek.cointrack.model.CoinValues

@Repository
class CoinValueRepository(val objectMapper: ObjectMapper) {

    val staticCoinValue: CoinValues = initializeCoinValues()

    private fun initializeCoinValues(): CoinValues {
        return objectMapper.readValue(CoinValueRepository::class.java.classLoader.getResource("staticResponse.json").readText(),
                CoinValues::class.java)
    }


    fun getAllByCoinSymbol(symbol: String): CoinValues {
        return staticCoinValue
    }

}