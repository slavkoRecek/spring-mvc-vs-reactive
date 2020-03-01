package si.recek.cointrack.model


data class Coin(
        val symbol: String,
        val name: String,
        val description: String? = null
) {
}