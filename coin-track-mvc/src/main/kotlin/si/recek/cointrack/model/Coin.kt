package si.recek.cointrack.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Coin(
        @Id
        val symbol: String,
        val name: String,
        val description: String? = null
) {
}